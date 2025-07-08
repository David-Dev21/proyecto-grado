import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUbicacionAlertaDto } from './dto/create-ubicacion_alerta.dto';
import { UpdateUbicacionAlertaDto } from './dto/update-ubicacion_alerta.dto';

@Injectable()
export class UbicacionAlertasService {
  private readonly logger = new Logger(UbicacionAlertasService.name);

  constructor(private prisma: PrismaService) {}

  async create(createUbicacionAlertaDto: CreateUbicacionAlertaDto) {
    try {
      const ubicacion = await this.prisma.ubicacionAlerta.create({
        data: {
          id_alerta: BigInt(createUbicacionAlertaDto.id_alerta),
          fecha_hora: new Date(createUbicacionAlertaDto.fecha_hora),
          latitud: createUbicacionAlertaDto.latitud,
          longitud: createUbicacionAlertaDto.longitud,
        },
      });

      return {
        message: 'Ubicación de alerta creada exitosamente',
        data: {
          ...ubicacion,
          id: ubicacion.id.toString(),
          id_alerta: ubicacion.id_alerta.toString(),
        },
      };
    } catch (error) {
      this.logger.error('Error al crear ubicación de alerta:', error);
      if (error.code === 'P2003') {
        throw new BadRequestException('La alerta especificada no existe');
      }
      if (error.code === 'P2002' && error.meta?.target?.includes('unique_ubicacion_alerta')) {
        // Error de duplicado - devolver mensaje informativo en lugar de error
        this.logger.debug('Ubicación duplicada ignorada:', createUbicacionAlertaDto);
        return {
          message: 'Ubicación duplicada - no se creó',
          data: null,
        };
      }
      throw new BadRequestException(`Error al crear la ubicación: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const ubicaciones = await this.prisma.ubicacionAlerta.findMany({
        where: {
          deleted_at: null,
        },
        include: {
          alerta: {
            select: {
              id: true,
              uuid: true,
              nro_caso: true,
              estado: true,
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
        id_alerta: ubicacion.id_alerta.toString(),
        alerta: ubicacion.alerta
          ? {
              ...ubicacion.alerta,
              id: ubicacion.alerta.id.toString(),
            }
          : null,
      }));
    } catch (error) {
      this.logger.error('Error al obtener ubicaciones de alertas:', error);
      throw new BadRequestException('Error al obtener las ubicaciones');
    }
  }

  async findOne(id: number) {
    try {
      const ubicacion = await this.prisma.ubicacionAlerta.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
        include: {
          alerta: {
            select: {
              id: true,
              uuid: true,
              nro_caso: true,
              estado: true,
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
        id_alerta: ubicacion.id_alerta.toString(),
        alerta: ubicacion.alerta
          ? {
              ...ubicacion.alerta,
              id: ubicacion.alerta.id.toString(),
            }
          : null,
      };
    } catch (error) {
      this.logger.error(`Error al obtener ubicación ${id}:`, error);
      throw error;
    }
  }

  async findByAlerta(id_alerta: number) {
    try {
      const ubicaciones = await this.prisma.ubicacionAlerta.findMany({
        where: {
          id_alerta: BigInt(id_alerta),
          deleted_at: null,
        },
        orderBy: {
          fecha_hora: 'desc',
        },
      });

      return ubicaciones.map((ubicacion) => ({
        ...ubicacion,
        id: ubicacion.id.toString(),
        id_alerta: ubicacion.id_alerta.toString(),
      }));
    } catch (error) {
      this.logger.error(`Error al obtener ubicaciones de alerta ${id_alerta}:`, error);
      throw new BadRequestException('Error al obtener las ubicaciones de la alerta');
    }
  }

  async findAllForAlerta(idAlerta: number) {
    try {
      const ubicaciones = await this.prisma.ubicacionAlerta.findMany({
        where: {
          id_alerta: BigInt(idAlerta),
          deleted_at: null,
        },
        orderBy: {
          fecha_hora: 'desc',
        },
      });

      return ubicaciones.map((ubicacion) => ({
        ...ubicacion,
        id: ubicacion.id.toString(),
        id_alerta: ubicacion.id_alerta.toString(),
      }));
    } catch (error) {
      this.logger.error(`Error al obtener ubicaciones para la alerta ${idAlerta}:`, error);
      throw new BadRequestException(`Error al obtener las ubicaciones para la alerta ${idAlerta}`);
    }
  }

  async existeUbicacion(idAlerta: number, fechaHora: Date, latitud: number, longitud: number): Promise<boolean> {
    try {
      const ubicacionExistente = await this.prisma.ubicacionAlerta.findFirst({
        where: {
          id_alerta: BigInt(idAlerta),
          fecha_hora: fechaHora,
          latitud: latitud,
          longitud: longitud,
          deleted_at: null,
        },
      });

      return !!ubicacionExistente;
    } catch (error) {
      this.logger.error('Error al verificar ubicación existente:', error);
      return false; // En caso de error, permitir el intento de creación
    }
  }

  async update(id: number, updateUbicacionAlertaDto: UpdateUbicacionAlertaDto) {
    try {
      const ubicacion = await this.prisma.ubicacionAlerta.update({
        where: { id: BigInt(id) },
        data: {
          latitud: updateUbicacionAlertaDto.latitud,
          longitud: updateUbicacionAlertaDto.longitud,
          fecha_hora: updateUbicacionAlertaDto.fecha_hora ? new Date(updateUbicacionAlertaDto.fecha_hora) : undefined,
        },
      });

      return {
        message: 'Ubicación actualizada exitosamente',
        data: {
          ...ubicacion,
          id: ubicacion.id.toString(),
          id_alerta: ubicacion.id_alerta.toString(),
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
      await this.prisma.ubicacionAlerta.update({
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
