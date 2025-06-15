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
      // Convertir la ubicación a formato POINT de PostgreSQL
      const ubicacionPoint = `POINT(${createEventoDto.ubicacion.longitud} ${createEventoDto.ubicacion.latitud})`;
      
      // Crear el evento usando executeRaw para manejar la geometría
      const result = await this.prisma.$executeRaw`
        INSERT INTO eventos (id_alerta, id_funcionario, id_seguimiento, fecha_hora, ubicacion, comentario)
        VALUES (${createEventoDto.id_alerta}, ${createEventoDto.id_funcionario}, ${createEventoDto.id_seguimiento || null}, ${new Date(createEventoDto.fecha_hora)}, ST_GeomFromText(${ubicacionPoint}, 4326), ${createEventoDto.comentario})
      `;

      if (result === 0) {
        throw new BadRequestException('No se pudo crear el evento');
      }

      // Obtener el evento recién creado
      const eventoCreado = await this.prisma.$queryRaw<any[]>`
        SELECT 
          e.id,
          e.id_alerta,
          e.id_funcionario,
          e.id_seguimiento,
          e.fecha_hora,
          ST_X(e.ubicacion) as longitud,
          ST_Y(e.ubicacion) as latitud,
          e.comentario,
          e.created_at,
          e.updated_at,
          e.deleted_at,
          json_build_object(
            'id', a.id,
            'id_persona', a.id_persona,
            'tipo_alerta', a.tipo_alerta,
            'descripcion', a.descripcion,
            'estado', a.estado
          ) as alerta
        FROM eventos e
        LEFT JOIN alertas a ON e.id_alerta = a.id
        WHERE e.id_alerta = ${createEventoDto.id_alerta} 
        AND e.id_funcionario = ${createEventoDto.id_funcionario}
        AND e.deleted_at IS NULL
        ORDER BY e.created_at DESC
        LIMIT 1
      `;

      if (eventoCreado.length === 0) {
        throw new BadRequestException('No se pudo obtener el evento creado');
      }

      const evento = eventoCreado[0];
      const eventoFormateado = {
        ...evento,
        id: evento.id.toString(),
        ubicacion: {
          latitud: parseFloat(evento.latitud),
          longitud: parseFloat(evento.longitud),
        },
        latitud: undefined,
        longitud: undefined,
      };      return eventoFormateado;
    } catch (error) {
      this.logger.error('Error al crear evento', error.stack);
      if (error.code === 'P2003') {
        throw new BadRequestException('La alerta especificada no existe');
      }
      throw new BadRequestException('Error al crear el evento');
    }
  }

  async findAll() {
    try {
      const eventos = await this.prisma.$queryRaw<any[]>`
        SELECT 
          e.id,
          e.id_alerta,
          e.id_funcionario,
          e.id_seguimiento,
          e.fecha_hora,
          ST_X(e.ubicacion) as longitud,
          ST_Y(e.ubicacion) as latitud,
          e.comentario,
          e.created_at,
          e.updated_at,
          e.deleted_at,
          json_build_object(
            'id', a.id,
            'id_persona', a.id_persona,
            'tipo_alerta', a.tipo_alerta,
            'descripcion', a.descripcion,
            'estado', a.estado
          ) as alerta
        FROM eventos e
        LEFT JOIN alertas a ON e.id_alerta = a.id
        WHERE e.deleted_at IS NULL
        ORDER BY e.created_at DESC
      `;

      // Formatear la respuesta
      const eventosFormateados = eventos.map((evento: any) => ({
        ...evento,
        id: evento.id.toString(),
        ubicacion: {
          latitud: parseFloat(evento.latitud),
          longitud: parseFloat(evento.longitud),
        },
        latitud: undefined,
        longitud: undefined,
      }));      return eventosFormateados;
    } catch (error) {
      this.logger.error('Error al obtener eventos', error.stack);
      throw new BadRequestException('Error al obtener los eventos');
    }
  }

  async findOne(id: number) {
    try {
      const eventos = await this.prisma.$queryRaw<any[]>`
        SELECT 
          e.id,
          e.id_alerta,
          e.id_funcionario,
          e.id_seguimiento,
          e.fecha_hora,
          ST_X(e.ubicacion) as longitud,
          ST_Y(e.ubicacion) as latitud,
          e.comentario,
          e.created_at,
          e.updated_at,
          e.deleted_at,
          json_build_object(
            'id', a.id,
            'id_persona', a.id_persona,
            'tipo_alerta', a.tipo_alerta,
            'descripcion', a.descripcion,
            'estado', a.estado
          ) as alerta
        FROM eventos e
        LEFT JOIN alertas a ON e.id_alerta = a.id
        WHERE e.id = ${BigInt(id)} AND e.deleted_at IS NULL
      `;

      if (!eventos || eventos.length === 0) {
        throw new NotFoundException('Evento no encontrado');
      }

      const eventoData = eventos[0];
      const eventoFormateado = {
        ...eventoData,
        id: eventoData.id.toString(),
        ubicacion: {
          latitud: parseFloat(eventoData.latitud),
          longitud: parseFloat(eventoData.longitud),
        },
        latitud: undefined,
        longitud: undefined,
      };      return eventoFormateado;
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

      // Construir la consulta de actualización dinámicamente
      let updateQuery = 'UPDATE eventos SET updated_at = NOW()';
      const values: any[] = [];
      
      if (updateEventoDto.id_alerta) {
        updateQuery += ', id_alerta = $' + (values.length + 1);
        values.push(updateEventoDto.id_alerta);
      }
      if (updateEventoDto.id_funcionario) {
        updateQuery += ', id_funcionario = $' + (values.length + 1);
        values.push(updateEventoDto.id_funcionario);
      }
      if (updateEventoDto.id_seguimiento !== undefined) {
        updateQuery += ', id_seguimiento = $' + (values.length + 1);
        values.push(updateEventoDto.id_seguimiento);
      }
      if (updateEventoDto.fecha_hora) {
        updateQuery += ', fecha_hora = $' + (values.length + 1);
        values.push(new Date(updateEventoDto.fecha_hora));
      }
      if (updateEventoDto.comentario) {
        updateQuery += ', comentario = $' + (values.length + 1);
        values.push(updateEventoDto.comentario);
      }
      if (updateEventoDto.ubicacion) {
        const ubicacionPoint = `POINT(${updateEventoDto.ubicacion.longitud} ${updateEventoDto.ubicacion.latitud})`;
        updateQuery += ', ubicacion = ST_GeomFromText($' + (values.length + 1) + ', 4326)';
        values.push(ubicacionPoint);
      }

      updateQuery += ' WHERE id = $' + (values.length + 1);
      values.push(BigInt(id));      await this.prisma.$executeRawUnsafe(updateQuery, ...values);

      // Obtener el evento actualizado
      return await this.findOne(id);
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
      }      // Soft delete
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
}
