import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUbicacionFuncionarioDto } from './dto/create-ubicacion_funcionario.dto';
import { UpdateUbicacionFuncionarioDto } from './dto/update-ubicacion_funcionario.dto';

@Injectable()
export class UbicacionFuncionariosService {
  private readonly logger = new Logger(UbicacionFuncionariosService.name);

  constructor(private prisma: PrismaService) {}

  async create(createUbicacionFuncionarioDto: CreateUbicacionFuncionarioDto) {
    try {
      const ubicacion = await this.prisma.ubicacionFuncionario.create({
        data: {
          id_atencion: BigInt(createUbicacionFuncionarioDto.id_atencion),
          fecha_hora: new Date(createUbicacionFuncionarioDto.fecha_hora),
          latitud: createUbicacionFuncionarioDto.latitud,
          longitud: createUbicacionFuncionarioDto.longitud,
        },
      });

      return {
        message: 'Ubicación de funcionario creada exitosamente',
        data: {
          ...ubicacion,
          id: ubicacion.id.toString(),
          id_atencion: ubicacion.id_atencion.toString(),
        },
      };
    } catch (error) {
      this.logger.error('Error al crear ubicación de funcionario:', error);
      if (error.code === 'P2003') {
        throw new BadRequestException('La atención especificada no existe');
      }
      throw new BadRequestException(`Error al crear la ubicación: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const ubicaciones = await this.prisma.ubicacionFuncionario.findMany({
        where: {
          deleted_at: null,
        },
        include: {
          atencion: {
            select: {
              id: true,
              id_alerta: true,
              usuario_despachador: true,
              id_vehiculo: true,
              sigla_radio: true,
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      });

      return ubicaciones.map((ubicacion) => ({
        ...ubicacion,
        id: ubicacion.id.toString(),
        id_atencion: ubicacion.id_atencion.toString(),
        atencion: ubicacion.atencion
          ? {
              ...ubicacion.atencion,
              id: ubicacion.atencion.id.toString(),
              id_alerta: ubicacion.atencion.id_alerta.toString(),
            }
          : null,
      }));
    } catch (error) {
      this.logger.error('Error al obtener ubicaciones de funcionarios:', error);
      throw new BadRequestException('Error al obtener las ubicaciones');
    }
  }

  async findOne(id: number) {
    try {
      const ubicacion = await this.prisma.ubicacionFuncionario.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
        include: {
          atencion: {
            select: {
              id: true,
              id_alerta: true,
              usuario_despachador: true,
              id_vehiculo: true,
              sigla_radio: true,
            },
          },
        },
      });

      if (!ubicacion) {
        throw new NotFoundException(`Ubicación con ID ${id} no encontrada`);
      }

      return {
        ...ubicacion,
        id: ubicacion.id.toString(),
        id_atencion: ubicacion.id_atencion.toString(),
        atencion: ubicacion.atencion
          ? {
              ...ubicacion.atencion,
              id: ubicacion.atencion.id.toString(),
              id_alerta: ubicacion.atencion.id_alerta.toString(),
            }
          : null,
      };
    } catch (error) {
      this.logger.error(`Error al obtener ubicación ${id}:`, error);
      throw error;
    }
  }

  async findByAtencion(id_atencion: number) {
    try {
      const ubicaciones = await this.prisma.ubicacionFuncionario.findMany({
        where: {
          id_atencion: BigInt(id_atencion),
          deleted_at: null,
        },
        orderBy: {
          fecha_hora: 'desc',
        },
      });

      return ubicaciones.map((ubicacion) => ({
        ...ubicacion,
        id: ubicacion.id.toString(),
        id_atencion: ubicacion.id_atencion.toString(),
      }));
    } catch (error) {
      this.logger.error(`Error al obtener ubicaciones de atención ${id_atencion}:`, error);
      throw new BadRequestException('Error al obtener las ubicaciones de la atención');
    }
  }

  async update(id: number, updateUbicacionFuncionarioDto: UpdateUbicacionFuncionarioDto) {
    try {
      const ubicacion = await this.prisma.ubicacionFuncionario.update({
        where: { id: BigInt(id) },
        data: {
          latitud: updateUbicacionFuncionarioDto.latitud,
          longitud: updateUbicacionFuncionarioDto.longitud,
          fecha_hora: updateUbicacionFuncionarioDto.fecha_hora
            ? new Date(updateUbicacionFuncionarioDto.fecha_hora)
            : undefined,
        },
      });

      return {
        message: 'Ubicación actualizada exitosamente',
        data: {
          ...ubicacion,
          id: ubicacion.id.toString(),
          id_atencion: ubicacion.id_atencion.toString(),
        },
      };
    } catch (error) {
      this.logger.error(`Error al actualizar ubicación ${id}:`, error);
      if (error.code === 'P2025') {
        throw new NotFoundException(`Ubicación con ID ${id} no encontrada`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.ubicacionFuncionario.update({
        where: { id: BigInt(id) },
        data: { deleted_at: new Date() },
      });

      return {
        message: 'Ubicación eliminada exitosamente',
      };
    } catch (error) {
      this.logger.error(`Error al eliminar ubicación ${id}:`, error);
      if (error.code === 'P2025') {
        throw new NotFoundException(`Ubicación con ID ${id} no encontrada`);
      }
      throw error;
    }
  }
}
