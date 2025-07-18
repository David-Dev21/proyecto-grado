import { Injectable, Logger, Inject } from '@nestjs/common';
import { CreateAtencionDto } from './dto/create-atencion.dto';
import { UpdateAtencionDto } from './dto/update-atencion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atencion, AtencionFuncionario } from './entities/atencion.entity';
import { AlertaRepositoryToken } from 'src/constants/injection-tokens';
import { Alerta } from '../alertas/entities/alerta.entity';
import { EstadoAlerta } from '../common/enums/alerta.enum';

@Injectable()
export class AtencionesService {
  private readonly logger = new Logger(AtencionesService.name);

  constructor(
    @InjectRepository(Atencion)
    private readonly atencionRepository: Repository<Atencion>,
    @Inject(AlertaRepositoryToken)
    private readonly alertaRepository: any,
    @InjectRepository(AtencionFuncionario)
    private readonly atencionFuncionarioRepository: Repository<AtencionFuncionario>,
  ) {}

  async create(createAtencionDto: CreateAtencionDto) {
    try {
      const atencionExistente = await this.atencionRepository.findOne({
        where: { idAlerta: createAtencionDto.idAlerta },
      });
      if (atencionExistente) {
        throw new Error('Ya existe personal asignado para esta alerta');
      }
      const atencion = this.atencionRepository.create({
        idAlerta: createAtencionDto.idAlerta,
        usuarioDespachador: createAtencionDto.usuarioDespachador,
        codVehiculo: createAtencionDto.codVehiculo,
        siglaRadio: createAtencionDto.siglaRadio,
      });
      await this.atencionRepository.save(atencion);
      if (createAtencionDto.funcionarios && createAtencionDto.funcionarios.length > 0) {
        const funcionarios = createAtencionDto.funcionarios.map((funcionario) => {
          return this.atencionFuncionarioRepository.create({
            idAtencion: atencion.id,
            idFuncionario: funcionario.idFuncionario,
            encargado: funcionario.encargado,
          });
        });
        await this.atencionFuncionarioRepository.save(funcionarios);
      }
      await this.alertaRepository.update({ id: createAtencionDto.idAlerta }, { estado: EstadoAlerta.EN_CAMINO });
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
    return this.atencionRepository.find({
      where: { deletedAt: undefined },
      relations: ['funcionarios'],
    });
  }

  async findAllWithAlerts() {
    return this.atencionRepository.find({
      where: { deletedAt: undefined },
      relations: ['alerta', 'alerta.persona', 'funcionarios'],
    });
  }

  async findOne(id: number) {
    const atencion = await this.atencionRepository.findOne({
      where: { id, deletedAt: undefined },
      relations: ['funcionarios'],
    });
    if (!atencion) {
      throw new Error('Atención no encontrada');
    }
    return atencion;
  }

  async findByAlertaId(alertaId: number) {
    const atencion = await this.atencionRepository.findOne({
      where: { idAlerta: alertaId, deletedAt: undefined },
      relations: ['funcionarios'],
    });
    if (!atencion) {
      throw new Error('No hay atención asignada para esta alerta');
    }
    return atencion;
  }

  async findByAlertaUuid(alertaUuid: string) {
    const alerta = await this.alertaRepository.findOne({
      where: { uuid: alertaUuid, deletedAt: undefined },
    });
    if (!alerta) {
      throw new Error('Alerta no encontrada');
    }
    const atencion = await this.atencionRepository.findOne({
      where: { idAlerta: alerta.id, deletedAt: undefined },
      relations: ['funcionarios'],
    });
    if (!atencion) {
      throw new Error('No hay atención asignada para esta alerta');
    }
    return atencion;
  }

  async update(id: number, updateAtencionDto: UpdateAtencionDto) {
    try {
      const atencionExistente = await this.atencionRepository.findOne({
        where: { id, deletedAt: undefined },
      });
      if (!atencionExistente) {
        throw new Error('Atención no encontrada o eliminada');
      }
      await this.atencionRepository.update(id, {
        usuarioDespachador: updateAtencionDto.usuarioDespachador,
        codVehiculo: updateAtencionDto.codVehiculo,
        siglaRadio: updateAtencionDto.siglaRadio,
        updatedAt: new Date(),
      });
      if (updateAtencionDto.funcionarios) {
        await this.atencionFuncionarioRepository.update({ idAtencion: id, deletedAt: undefined }, { deletedAt: new Date(), updatedAt: new Date() });
        if (updateAtencionDto.funcionarios.length > 0) {
          const nuevosFuncionarios = updateAtencionDto.funcionarios.map((funcionario) => {
            return this.atencionFuncionarioRepository.create({
              idAtencion: id,
              idFuncionario: funcionario.idFuncionario,
              encargado: funcionario.encargado || false,
            });
          });
          await this.atencionFuncionarioRepository.save(nuevosFuncionarios);
        }
      }
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
      const atencionExistente = await this.atencionRepository.findOne({
        where: { id, deletedAt: undefined },
      });
      if (!atencionExistente) {
        throw new Error('Atención no encontrada o ya eliminada');
      }
      await this.atencionRepository.update(id, {
        deletedAt: new Date(),
        updatedAt: new Date(),
      });
      await this.atencionFuncionarioRepository.update({ idAtencion: id, deletedAt: undefined }, { deletedAt: new Date(), updatedAt: new Date() });
      return {
        message: 'Atención eliminada exitosamente',
        atencionId: id,
        fechaEliminacion: new Date(),
      };
    } catch (error) {
      this.logger.error('Error al eliminar atención:', error);
      throw error;
    }
  }
}
