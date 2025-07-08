import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventosService {
  private readonly logger = new Logger(EventosService.name);

  constructor(private prisma: PrismaService) {}

  async create(createEventoDto: CreateEventoDto) {
    try {
      // Crear el evento usando Prisma ORM directamente
      const evento = await this.prisma.evento.create({
        data: {
          id_alerta: BigInt(createEventoDto.id_alerta),
          id_funcionario: createEventoDto.id_funcionario,
          id_seguimiento: createEventoDto.id_seguimiento || null,
          fecha_hora: new Date(createEventoDto.fecha_hora),
          comentario: createEventoDto.comentario,
        },
        select: {
          id: true,
          id_alerta: true,
          id_funcionario: true,
          id_seguimiento: true,
          fecha_hora: true,
          comentario: true,
          created_at: true,
          updated_at: true,
        },
      });
      return {
        message: 'Evento creado exitosamente',
      };
    } catch (error) {
      this.logger.error('Error detallado al crear evento:', error);
      if (error.code === 'P2003') {
        throw new BadRequestException('La alerta especificada no existe');
      }
      throw new BadRequestException(`Error al crear el evento: ${error.message}`);
    }
  }

  async findAll() {
    try {
      this.logger.log('Iniciando consulta de eventos');

      return await this.prisma.evento.findMany({
        where: {
          deleted_at: null,
        },
        select: {
          id: true,
          id_alerta: true,
          id_funcionario: true,
          id_seguimiento: true,
          fecha_hora: true,
          comentario: true,
          created_at: true,
          updated_at: true,
          deleted_at: true,
          alerta: {
            select: {
              id: true,
              uuid: true,
              id_persona: true,
              nro_caso: true,
              estado: true,
              fecha_hora: true,
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
      this.logger.error('Error al obtener eventos', error.stack);
      throw new BadRequestException('Error al obtener los eventos');
    }
  }

  async findOne(id: number) {
    try {
      const evento = await this.prisma.evento.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
        select: {
          id: true,
          id_alerta: true,
          id_funcionario: true,
          id_seguimiento: true,
          fecha_hora: true,
          comentario: true,
          created_at: true,
          updated_at: true,
          deleted_at: true,
          alerta: {
            select: {
              id: true,
              uuid: true,
              id_persona: true,
              nro_caso: true,
              estado: true,
              fecha_hora: true,
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

      if (!evento) {
        throw new NotFoundException('Evento no encontrado');
      }

      return evento;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error('Error al obtener evento', error.stack);
      throw new BadRequestException('Error al obtener el evento');
    }
  }

  async update(id: number, updateEventoDto: UpdateEventoDto) {
    try {
      // Verificar que el evento existe y no está eliminado
      const eventoExistente = await this.prisma.$queryRaw<any[]>`
        SELECT id FROM eventos WHERE id = ${BigInt(id)} AND deleted_at IS NULL
      `;

      if (!eventoExistente || eventoExistente.length === 0) {
        throw new NotFoundException('Evento no encontrado');
      }

      // Construir los campos dinámicamente para la actualización
      const updateFields: string[] = [];
      const values: any[] = [];

      if (updateEventoDto.id_alerta) {
        updateFields.push('id_alerta = ?');
        values.push(BigInt(updateEventoDto.id_alerta));
      }
      if (updateEventoDto.id_funcionario) {
        updateFields.push('id_funcionario = ?');
        values.push(updateEventoDto.id_funcionario);
      }
      if (updateEventoDto.id_seguimiento !== undefined) {
        updateFields.push('id_seguimiento = ?');
        values.push(updateEventoDto.id_seguimiento);
      }
      if (updateEventoDto.fecha_hora) {
        updateFields.push('fecha_hora = ?');
        values.push(new Date(updateEventoDto.fecha_hora));
      }
      if (updateEventoDto.comentario) {
        updateFields.push('comentario = ?');
        values.push(updateEventoDto.comentario);
      }

      // Solo actualizar si hay campos para actualizar
      if (updateFields.length > 0) {
        updateFields.push('updated_at = NOW()');

        const query = `UPDATE eventos SET ${updateFields.join(', ')} WHERE id = ?`;
        values.push(BigInt(id));

        await this.prisma.$executeRawUnsafe(query, ...values);
      }

      return {
        message: 'Evento actualizado exitosamente',
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error('Error al actualizar evento', error.stack);
      if (error.code === 'P2003') {
        throw new BadRequestException('La alerta especificada no existe');
      }
      throw new BadRequestException('Error al actualizar el evento');
    }
  }

  async remove(id: number) {
    try {
      // Verificar que el evento existe y no está eliminado
      const eventoExistente = await this.prisma.$queryRaw<any[]>`
        SELECT id FROM eventos WHERE id = ${BigInt(id)} AND deleted_at IS NULL
      `;

      if (!eventoExistente || eventoExistente.length === 0) {
        throw new NotFoundException('Evento no encontrado');
      }

      // Soft delete
      await this.prisma.$executeRaw`
        UPDATE eventos SET deleted_at = NOW() WHERE id = ${BigInt(id)}
      `;

      return { message: 'Evento eliminado correctamente' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error('Error al eliminar evento', error.stack);
      throw new BadRequestException('Error al eliminar el evento');
    }
  }

  async enviarAATT(id: number) {
    try {
      // Obtener el evento con la información necesaria
      const evento = await this.prisma.evento.findFirst({
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

      if (!evento) {
        throw new NotFoundException('Evento no encontrado');
      }

      if (!evento.alerta?.uuid) {
        throw new BadRequestException('El evento no tiene una alerta válida con UUID');
      }

      // Buscar información del funcionario
      const funcionario = await this.prisma.funcionarios.findFirst({
        where: {
          id: evento.id_funcionario,
          deleted_at: null,
        },
      });

      if (!funcionario) {
        throw new BadRequestException('No se encontró información del funcionario');
      }

      // Preparar datos para enviar a ATT
      const datosATT = {
        nombre: `${funcionario.nombres} ${funcionario.ap_paterno}`.trim(),
        grado: funcionario.grado.trim(),
        comentario: evento.comentario.trim(),
        fecha: evento.fecha_hora.toISOString(),
      };

      // Obtener configuración de ATT
      const attBaseUrl = process.env.ATT_BASE_URL || 'https://test.att.gob.bo/acompaname/index.php';
      const attToken = process.env.ATT_AUTH_TOKEN || '';
      const fullUrl = `${attBaseUrl}/api/caso/${evento.alerta.uuid}/eventos`;

      // Asegurar que el token tenga el formato JWT correcto
      const authHeader = attToken.startsWith('JWT ') ? attToken : `JWT ${attToken}`;

      this.logger.log('Enviando evento a ATT:', {
        url: fullUrl,
        datos: datosATT,
        alertaUUID: evento.alerta.uuid,
      });

      // Hacer petición a ATT
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
        },
        body: JSON.stringify(datosATT),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }

      return {
        message: 'Evento enviado a ATT exitosamente',
        success: true,
      };
    } catch (error) {
      this.logger.error('Error al enviar evento a ATT:', error);
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(`Error al enviar evento a ATT: ${error.message}`);
    }
  }
}
