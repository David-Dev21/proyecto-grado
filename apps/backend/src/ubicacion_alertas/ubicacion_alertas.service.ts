import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUbicacionAlertaDto } from './dto/create-ubicacion_alerta.dto';
import { UpdateUbicacionAlertaDto } from './dto/update-ubicacion_alerta.dto';
import { UbicacionAlertasRepository } from './repositories/ubicacion-alertas.repository';
import { Point } from 'geojson';

@Injectable()
export class UbicacionAlertasService {
  async existeUbicacion(idAlerta: number, fechaHora: Date, latitud: number, longitud: number): Promise<boolean> {
    // Busca si existe una ubicación con los mismos datos (sin considerar eliminados)
    const ubicaciones = await this.ubicacionAlertasRepository.findByAlertaId(idAlerta);
    return ubicaciones.some((u) => {
      const fechaMatch = u.fechaHora.getTime() === fechaHora.getTime();
      const latMatch = u.ubicacion.coordinates[1] === latitud;
      const lngMatch = u.ubicacion.coordinates[0] === longitud;
      return fechaMatch && latMatch && lngMatch;
    });
  }
  private readonly logger = new Logger(UbicacionAlertasService.name);

  constructor(private readonly ubicacionAlertasRepository: UbicacionAlertasRepository) {}

  async create(createUbicacionAlertaDto: CreateUbicacionAlertaDto) {
    try {
      const point: Point = {
        type: 'Point',
        coordinates: [createUbicacionAlertaDto.longitud, createUbicacionAlertaDto.latitud],
      };

      const ubicacion = await this.ubicacionAlertasRepository.create({
        idAlerta: createUbicacionAlertaDto.idAlerta,
        fechaHora: new Date(createUbicacionAlertaDto.fechaHora),
        ubicacion: point,
      });

      return {
        message: 'Ubicación de alerta creada exitosamente',
        data: {
          ...ubicacion,
          id: ubicacion.id.toString(),
          idAlerta: ubicacion.idAlerta.toString(),
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
      const ubicaciones = await this.ubicacionAlertasRepository.findAll();

      return ubicaciones.map((ubicacion) => ({
        ...ubicacion,
        id: ubicacion.id,
        idAlerta: ubicacion.idAlerta.toString(),
      }));
    } catch (error) {
      this.logger.error('Error al obtener ubicaciones de alertas:', error);
      throw new BadRequestException('Error al obtener las ubicaciones');
    }
  }

  async findOne(id: string) {
    try {
      const ubicacion = await this.ubicacionAlertasRepository.findOne(id);
      if (!ubicacion) {
        throw new NotFoundException(`Ubicación con ID ${id} no encontrada`);
      }

      return {
        ...ubicacion,
        id: ubicacion.id,
        idAlerta: ubicacion.idAlerta.toString(),
      };
    } catch (error) {
      this.logger.error(`Error al obtener ubicación ${id}:`, error);
      throw error;
    }
  }

  async findByAlerta(idAlerta: number) {
    try {
      const ubicaciones = await this.ubicacionAlertasRepository.findByAlertaId(idAlerta);
      return ubicaciones.map((ubicacion) => ({
        ...ubicacion,
        id: ubicacion.id,
        idAlerta: ubicacion.idAlerta.toString(),
      }));
    } catch (error) {
      this.logger.error(`Error al obtener ubicaciones de alerta ${idAlerta}:`, error);
      throw new BadRequestException('Error al obtener las ubicaciones de la alerta');
    }
  }

  // Métodos findAllForAlerta y existeUbicacion eliminados: migración completa a TypeORM

  async update(id: string, updateUbicacionAlertaDto: UpdateUbicacionAlertaDto) {
    try {
      let point: Point | undefined = undefined;
      if (typeof updateUbicacionAlertaDto.longitud === 'number' && typeof updateUbicacionAlertaDto.latitud === 'number') {
        point = {
          type: 'Point',
          coordinates: [updateUbicacionAlertaDto.longitud, updateUbicacionAlertaDto.latitud],
        };
      }

      const ubicacion = await this.ubicacionAlertasRepository.update(id, {
        ...(point ? { ubicacion: point } : {}),
        fechaHora: updateUbicacionAlertaDto.fechaHora ? new Date(updateUbicacionAlertaDto.fechaHora) : undefined,
      });

      return {
        message: 'Ubicación actualizada exitosamente',
        data: {
          ...ubicacion,
          id: ubicacion.id,
          idAlerta: ubicacion.idAlerta.toString(),
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

  async remove(id: string) {
    try {
      await this.ubicacionAlertasRepository.delete(id);
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
