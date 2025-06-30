import { Injectable, Logger } from '@nestjs/common';
import { CreateAtencionDto } from './dto/create-atencion.dto';
import { UpdateAtencionDto } from './dto/update-atencion.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AtencionesService {
  private readonly logger = new Logger(AtencionesService.name);

  constructor(private prisma: PrismaService) {}

  async create(createAtencionDto: CreateAtencionDto) {
    try {
      // Usar transacción para crear atención y cambiar estado de alerta
      await this.prisma.$transaction(async (prisma) => {
        // Verificar si ya existe una atención para esta alerta
        const atencionExistente = await prisma.atencion.findUnique({
          where: { id_alerta: BigInt(createAtencionDto.id_alerta) },
        });

        if (atencionExistente) {
          throw new Error('Ya existe personal asignado para esta alerta');
        }

        // Crear nueva atención
        const atencion = await prisma.atencion.create({
          data: {
            id_alerta: BigInt(createAtencionDto.id_alerta),
            usuario_despachador: createAtencionDto.usuario_despachador,
            id_vehiculo: createAtencionDto.id_vehiculo,
            sigla_radio: createAtencionDto.sigla_radio,
          },
        });

        // Crear los funcionarios asignados
        await prisma.atencionFuncionario.createMany({
          data: createAtencionDto.funcionarios.map((funcionario) => ({
            id_atencion: atencion.id,
            id_funcionario: funcionario.id_funcionario,
            encargado: funcionario.encargado,
          })),
        });
      });

      return {
        message: 'Personal policial asignado correctamente',
        success: true,
      };
    } catch (error) {
      this.logger.error('Error al asignar personal policial:', error);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.atencion.findMany({
      where: {
        deleted_at: null,
      },
      include: {
        atencion_funcionario: {
          where: {
            deleted_at: null,
          },
        },
      },
    });
  }

  async findAllWithAlerts() {
    return this.prisma.atencion.findMany({
      where: {
        deleted_at: null,
      },
      include: {
        alerta: {
          select: {
            nro_caso: true,
          },
        },
        atencion_funcionario: {
          where: {
            deleted_at: null,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const atencion = await this.prisma.atencion.findFirst({
      where: {
        id: BigInt(id),
        deleted_at: null,
      },
      include: {
        atencion_funcionario: {
          where: {
            deleted_at: null,
          },
        },
      },
    });

    if (!atencion) {
      throw new Error('Atención no encontrada');
    }

    return atencion;
  }

  async findByAlertaId(alertaId: number) {
    // Buscar la atención usando directamente el ID de la alerta
    const atencion = await this.prisma.atencion.findFirst({
      where: {
        id_alerta: BigInt(alertaId),
        deleted_at: null,
      },
      include: {
        atencion_funcionario: {
          where: {
            deleted_at: null,
          },
        },
      },
    });

    if (!atencion) {
      throw new Error('No hay atención asignada para esta alerta');
    }

    return atencion;
  }

  async findByAlertaUuid(alertaUuid: string) {
    // Primero obtener el ID de la alerta usando su UUID
    const alerta = await this.prisma.alerta.findFirst({
      where: {
        uuid: alertaUuid,
        deleted_at: null,
      },
    });

    if (!alerta) {
      throw new Error('Alerta no encontrada');
    }

    // Luego buscar la atención usando el ID de la alerta
    const atencion = await this.prisma.atencion.findFirst({
      where: {
        id_alerta: alerta.id,
        deleted_at: null,
      },
      include: {
        atencion_funcionario: {
          where: {
            deleted_at: null,
          },
        },
      },
    });

    if (!atencion) {
      throw new Error('No hay atención asignada para esta alerta');
    }

    return atencion;
  }

  async update(id: number, updateAtencionDto: UpdateAtencionDto) {
    try {
      // Verificar que la atención existe
      const atencionExistente = await this.prisma.atencion.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
      });

      if (!atencionExistente) {
        throw new Error('Atención no encontrada o eliminada');
      }

      // Actualizar los datos básicos de la atención
      const atencionActualizada = await this.prisma.atencion.update({
        where: { id: BigInt(id) },
        data: {
          usuario_despachador: updateAtencionDto.usuario_despachador,
          id_vehiculo: updateAtencionDto.id_vehiculo,
          sigla_radio: updateAtencionDto.sigla_radio,
          updated_at: new Date(),
        },
      });

      // Si se proporcionan funcionarios, actualizar la lista completa
      if (updateAtencionDto.funcionarios) {
        // Soft delete de funcionarios existentes
        await this.prisma.atencionFuncionario.updateMany({
          where: {
            id_atencion: BigInt(id),
            deleted_at: null,
          },
          data: {
            deleted_at: new Date(),
            updated_at: new Date(),
          },
        });

        // Crear nuevos funcionarios
        if (updateAtencionDto.funcionarios.length > 0) {
          await this.prisma.atencionFuncionario.createMany({
            data: updateAtencionDto.funcionarios.map((funcionario) => ({
              id_atencion: BigInt(id),
              id_funcionario: funcionario.id_funcionario,
              encargado: funcionario.encargado || false,
            })),
          });
        }
      }

      // Solo retornar mensaje de estado sin datos del objeto
      return {
        message: 'Atención actualizada exitosamente',
      };
    } catch (error) {
      this.logger.error('Error al actualizar atención:', error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      // Verificar que la atención exists
      const atencionExistente = await this.prisma.atencion.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
      });

      if (!atencionExistente) {
        throw new Error('Atención no encontrada o ya eliminada');
      }

      // Soft delete de la atención
      const atencionEliminada = await this.prisma.atencion.update({
        where: { id: BigInt(id) },
        data: {
          deleted_at: new Date(),
          updated_at: new Date(),
        },
      });

      // Soft delete de todos los funcionarios asociados
      await this.prisma.atencionFuncionario.updateMany({
        where: {
          id_atencion: BigInt(id),
          deleted_at: null,
        },
        data: {
          deleted_at: new Date(),
          updated_at: new Date(),
        },
      });

      return {
        message: 'Atención eliminada exitosamente',
        atencionId: id,
        fechaEliminacion: atencionEliminada.deleted_at,
      };
    } catch (error) {
      this.logger.error('Error al eliminar atención:', error);
      throw error;
    }
  }
}
