import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { UbicacionFuncionariosRepository } from './repositories/ubicacion-funcionarios.repository';
import { CreateUbicacionFuncionarioDto } from './dto/create-ubicacion_funcionario.dto';
import { UpdateUbicacionFuncionarioDto } from './dto/update-ubicacion_funcionario.dto';

@Injectable()
export class UbicacionFuncionariosService {
  private readonly logger = new Logger(UbicacionFuncionariosService.name);

  constructor(private readonly repository: UbicacionFuncionariosRepository) {}

  async create(createUbicacionFuncionarioDto: CreateUbicacionFuncionarioDto) {
    try {
      const ubicacion = await this.repository.create({
        idAtencion: createUbicacionFuncionarioDto.id_atencion,
        fechaHora: new Date(createUbicacionFuncionarioDto.fecha_hora),
        ubicacion: {
          type: 'Point',
          coordinates: [createUbicacionFuncionarioDto.longitud, createUbicacionFuncionarioDto.latitud],
        },
      });
      return {
        message: 'Ubicación de funcionario creada exitosamente',
        data: ubicacion,
      };
    } catch (error) {
      this.logger.error('Error al crear ubicación de funcionario:', error);
      throw new BadRequestException(`Error al crear la ubicación: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.repository.findAll();
    } catch (error) {
      this.logger.error('Error al obtener ubicaciones de funcionarios:', error);
      throw new BadRequestException('Error al obtener las ubicaciones');
    }
  }

  async findOne(id: number) {
    try {
      return await this.repository.findOne(id.toString());
    } catch (error) {
      this.logger.error(`Error al obtener ubicación ${id}:`, error);
      throw error;
    }
  }

  async findByAtencion(idAtencion: number) {
    try {
      return await this.repository.findByAtencionId(idAtencion);
    } catch (error) {
      this.logger.error(`Error al obtener ubicaciones de atención ${idAtencion}:`, error);
      throw new BadRequestException('Error al obtener las ubicaciones de la atención');
    }
  }

  async update(id: number, updateUbicacionFuncionarioDto: UpdateUbicacionFuncionarioDto) {
    try {
      // Convert fecha_hora to Date if present
      const updateData: any = { ...updateUbicacionFuncionarioDto };
      if (updateUbicacionFuncionarioDto.fecha_hora) {
        updateData.fechaHora = new Date(updateUbicacionFuncionarioDto.fecha_hora);
        delete updateData.fecha_hora;
      }
      return await this.repository.update(id.toString(), updateData);
    } catch (error) {
      this.logger.error(`Error al actualizar ubicación ${id}:`, error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      await this.repository.delete(id.toString());
    } catch (error) {
      this.logger.error(`Error al eliminar ubicación ${id}:`, error);
      throw new BadRequestException(`Error al eliminar la ubicación: ${error.message}`);
    }
  }
}
