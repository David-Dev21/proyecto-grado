import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { CierreAlerta } from './entities/cierre-alerta.entity';
import { CreateCierreAlertaDto } from './dto/create-cierre_alerta.dto';
import { UpdateCierreAlertaDto } from './dto/update-cierre_alerta.dto';

@Injectable()
export class CierreAlertasService {
  private readonly logger = new Logger(CierreAlertasService.name);

  constructor(
    @InjectRepository(CierreAlerta)
    private readonly cierreAlertaRepository: Repository<CierreAlerta>,
  ) {}

  async create(createCierreAlertaDto: CreateCierreAlertaDto) {
    try {
      const cierre = this.cierreAlertaRepository.create({
        idAlerta: createCierreAlertaDto.idAlerta,
        idFuncionario: createCierreAlertaDto.idFuncionario,
        fechaHora: new Date(createCierreAlertaDto.fechaHora),
        comentario: createCierreAlertaDto.comentario,
        tipoAlerta: createCierreAlertaDto.tipoAlerta,
        estadoVictima: createCierreAlertaDto.estadoVictima,
        nombreAgresor: createCierreAlertaDto.nombreAgresor,
        ciAgresor: createCierreAlertaDto.ciAgresor,
      });
      await this.cierreAlertaRepository.save(cierre);
      return { message: 'Cierre de alerta creado exitosamente' };
    } catch (error) {
      this.logger.error('Error al crear cierre de alerta:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      this.logger.log('Iniciando consulta de cierres de alerta');
      return await this.cierreAlertaRepository.find({
        where: { deletedAt: IsNull() },
        relations: ['alerta'],
        order: { createdAt: 'DESC' },
      });
    } catch (error) {
      this.logger.error('Error al obtener cierres de alerta:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const cierreAlerta = await this.cierreAlertaRepository.findOne({
        where: { id, deletedAt: IsNull() },
        relations: ['alerta'],
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
      const cierreExistente = await this.cierreAlertaRepository.findOne({ where: { id, deletedAt: IsNull() } });
      if (!cierreExistente) {
        return null;
      }
      const updateData: Partial<CierreAlerta> = {};
      if (updateCierreAlertaDto.idFuncionario) {
        updateData.idFuncionario = updateCierreAlertaDto.idFuncionario;
      }
      if (updateCierreAlertaDto.fechaHora) {
        updateData.fechaHora = new Date(updateCierreAlertaDto.fechaHora);
      }
      if (updateCierreAlertaDto.comentario) {
        updateData.comentario = updateCierreAlertaDto.comentario;
      }
      if (updateCierreAlertaDto.tipoAlerta) {
        updateData.tipoAlerta = updateCierreAlertaDto.tipoAlerta;
      }
      if (updateCierreAlertaDto.estadoVictima) {
        updateData.estadoVictima = updateCierreAlertaDto.estadoVictima;
      }
      if (updateCierreAlertaDto.nombreAgresor) {
        updateData.nombreAgresor = updateCierreAlertaDto.nombreAgresor;
      }
      if (updateCierreAlertaDto.ciAgresor) {
        updateData.ciAgresor = updateCierreAlertaDto.ciAgresor;
      }
      await this.cierreAlertaRepository.update(id, updateData);
      return { message: 'Cierre de alerta actualizado exitosamente' };
    } catch (error) {
      this.logger.error('Error al actualizar cierre de alerta:', error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const cierreExistente = await this.cierreAlertaRepository.findOne({ where: { id, deletedAt: IsNull() } });
      if (!cierreExistente) {
        return null;
      }
      await this.cierreAlertaRepository.update(id, { deletedAt: new Date() });
      return { success: true, message: 'Cierre de alerta eliminado correctamente' };
    } catch (error) {
      this.logger.error('Error al eliminar cierre de alerta:', error);
      throw error;
    }
  }

  // El método enviarAATT requiere migración adicional para TypeORM y depende de la entidad Funcionario y Alerta
  async enviarAATT(idAlerta: number, idFuncionario: number): Promise<void> {
    // Implementación pendiente
    this.logger.warn('Método enviarAATT no implementado');
  }
}
