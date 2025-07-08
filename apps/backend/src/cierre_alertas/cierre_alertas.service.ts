import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCierreAlertaDto } from './dto/create-cierre_alerta.dto';
import { UpdateCierreAlertaDto } from './dto/update-cierre_alerta.dto';
import { EstadoAlerta } from '@prisma/client';

@Injectable()
export class CierreAlertasService {
  private readonly logger = new Logger(CierreAlertasService.name);

  constructor(private prisma: PrismaService) {}

  async create(createCierreAlertaDto: CreateCierreAlertaDto) {
    try {
      // Usar transacción para crear cierre de alerta y cambiar estado de alerta
      await this.prisma.$transaction(async (prisma) => {
        // Crear el cierre de alerta
        await prisma.cierreAlerta.create({
          data: {
            id_alerta: BigInt(createCierreAlertaDto.id_alerta),
            id_funcionario: createCierreAlertaDto.id_funcionario,
            fecha_hora: new Date(createCierreAlertaDto.fecha_hora),
            comentario: createCierreAlertaDto.comentario,
            tipo_alerta: createCierreAlertaDto.tipo_alerta,
            estado_victima: createCierreAlertaDto.estado_victima,
            nombre_agresor: createCierreAlertaDto.nombre_agresor,
            ci_agresor: createCierreAlertaDto.ci_agresor,
          },
        });

        // Cambiar el estado de la alerta a ATENDIDO
        await prisma.alerta.update({
          where: { id: BigInt(createCierreAlertaDto.id_alerta) },
          data: { estado: EstadoAlerta.ATENDIDO },
        });
      });

      // Solo retornar mensaje de estado sin datos del objeto
      return {
        message: 'Cierre de alerta creado exitosamente',
      };
    } catch (error) {
      this.logger.error('Error al crear cierre de alerta:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      this.logger.log('Iniciando consulta de cierres de alerta');

      return await this.prisma.cierreAlerta.findMany({
        where: {
          deleted_at: null,
        },
        include: {
          alerta: {
            include: {
              persona: {
                select: {
                  nombres: true,
                  ap_paterno: true,
                  ap_materno: true,
                  ci: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      });
    } catch (error) {
      this.logger.error('Error al obtener cierres de alerta:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const cierreAlerta = await this.prisma.cierreAlerta.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
        include: {
          alerta: {
            include: {
              persona: {
                select: {
                  nombres: true,
                  ap_paterno: true,
                  ap_materno: true,
                  ci: true,
                },
              },
            },
          },
        },
      });

      if (!cierreAlerta) {
        return null;
      }

      return cierreAlerta;
    } catch (error) {
      this.logger.error('Error al obtener cierre de alerta:', error);
      throw error;
    }
  }

  async update(id: number, updateCierreAlertaDto: UpdateCierreAlertaDto) {
    try {
      const cierreExistente = await this.prisma.cierreAlerta.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
      });

      if (!cierreExistente) {
        return null;
      }

      const updateData: any = {};

      if (updateCierreAlertaDto.id_funcionario) {
        updateData.id_funcionario = updateCierreAlertaDto.id_funcionario;
      }
      if (updateCierreAlertaDto.fecha_hora) {
        updateData.fecha_hora = new Date(updateCierreAlertaDto.fecha_hora);
      }
      if (updateCierreAlertaDto.comentario) {
        updateData.comentario = updateCierreAlertaDto.comentario;
      }
      if (updateCierreAlertaDto.tipo_alerta) {
        updateData.tipo_alerta = updateCierreAlertaDto.tipo_alerta;
      }
      if (updateCierreAlertaDto.estado_victima) {
        updateData.estado_victima = updateCierreAlertaDto.estado_victima;
      }
      if (updateCierreAlertaDto.nombre_agresor) {
        updateData.nombre_agresor = updateCierreAlertaDto.nombre_agresor;
      }
      if (updateCierreAlertaDto.ci_agresor) {
        updateData.ci_agresor = updateCierreAlertaDto.ci_agresor;
      }

      await this.prisma.cierreAlerta.update({
        where: { id: BigInt(id) },
        data: updateData,
      });

      // Solo retornar mensaje de estado sin datos del objeto
      return {
        message: 'Cierre de alerta actualizado exitosamente',
      };
    } catch (error) {
      this.logger.error('Error al actualizar cierre de alerta:', error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const cierreExistente = await this.prisma.cierreAlerta.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
      });

      if (!cierreExistente) {
        return null;
      }

      await this.prisma.cierreAlerta.update({
        where: { id: BigInt(id) },
        data: { deleted_at: new Date() },
      });

      return {
        success: true,
        message: 'Cierre de alerta eliminado correctamente',
      };
    } catch (error) {
      this.logger.error('Error al eliminar cierre de alerta:', error);
      throw error;
    }
  }

  async enviarAATT(id: number) {
    try {
      // Obtener el cierre de alerta con la información necesaria
      const cierre = await this.prisma.cierreAlerta.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
        include: {
          alerta: {
            select: {
              uuid: true,
            },
          },
        },
      });

      if (!cierre) {
        throw new Error('Cierre de alerta no encontrado');
      }

      if (!cierre.alerta?.uuid) {
        throw new Error('El cierre no tiene una alerta válida con UUID');
      }

      // Buscar información del funcionario
      const funcionario = await this.prisma.funcionarios.findFirst({
        where: {
          id: cierre.id_funcionario,
          deleted_at: null,
        },
      });

      if (!funcionario) {
        throw new Error('No se encontró información del funcionario');
      }

      // Preparar datos para enviar a ATT
      const datosCierre = {
        estado: 'FINALIZADO',
        fecha: cierre.fecha_hora.toISOString(),
        nombre: `${funcionario.nombres} ${funcionario.ap_paterno}`.trim(),
        grado: funcionario.grado.trim(),
        comentario: cierre.comentario.trim(),
      };

      // Obtener configuración de ATT
      const attBaseUrl = process.env.ATT_BASE_URL || 'https://test.att.gob.bo/acompaname/index.php';
      const attToken = process.env.ATT_AUTH_TOKEN || '';
      const fullUrl = `${attBaseUrl}/api/caso/${cierre.alerta.uuid}/cerrar`;

      // Asegurar que el token tenga el formato JWT correcto
      const authHeader = attToken.startsWith('JWT ') ? attToken : `JWT ${attToken}`;

      this.logger.log('Enviando cierre a ATT:', {
        url: fullUrl,
        datos: datosCierre,
        alertaUUID: cierre.alerta.uuid,
      });

      // Hacer petición a ATT
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
        },
        body: JSON.stringify(datosCierre),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }

      return {
        message: 'Cierre enviado a ATT exitosamente',
        success: true,
      };
    } catch (error) {
      this.logger.error('Error al enviar cierre a ATT:', error);
      throw error;
    }
  }
}
