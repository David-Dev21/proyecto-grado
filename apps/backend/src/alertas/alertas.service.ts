import { Injectable, Logger, Inject } from '@nestjs/common';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { EstadoAlerta, OrigenAlerta } from '@prisma/client';
import { PersonaService } from './services/persona.service';
import { CudService } from './services/cud.service';
import { AlertaRepository } from './interfaces/alerta-repository.interface';
import { AlertaRepositoryToken } from './constants/injection-tokens';

@Injectable()
export class AlertasService {
  private readonly logger = new Logger(AlertasService.name);

  constructor(
    @Inject(AlertaRepositoryToken) private alertaRepository: AlertaRepository,
    private personaService: PersonaService,
    private cud: CudService,
  ) {}

  async create(createAlertaDto: CreateAlertaDto) {
    try {
      // Delegar la gestión de persona y contactos al PersonaService
      const persona = await this.personaService.createOrUpdatePersona(createAlertaDto);
      // Crear la alerta
      const alerta = await this.createAlerta(createAlertaDto, persona.id);
      // Procesar contactos adicionales
      if (createAlertaDto.contactos) {
        await this.personaService.processContactosAdicionales(persona.id, createAlertaDto.contactos);
      }
      return {
        message: 'Alerta creada exitosamente',
        uuid: alerta.uuid,
      };
    } catch (error) {
      throw error;
    }
  }

  private async createAlerta(createAlertaDto: CreateAlertaDto, personaId: bigint) {
    return this.alertaRepository.create({
      uuid: createAlertaDto.IdAlerta,
      id_persona: personaId,
      fecha_hora: new Date(createAlertaDto.fechaRegistro),
      nro_caso: this.cud.generate(),
      estado: EstadoAlerta.EN_PELIGRO,
      origen: OrigenAlerta.ATT, // Siempre ATT por defecto
    });
  }
  async findAll() {
    return this.alertaRepository.findAll();
  }

  async findOne(uuid: string) {
    const alerta = await this.alertaRepository.findByUuid(uuid);

    if (!alerta) {
      throw new Error('Alerta no encontrada');
    }

    return alerta;
  }
  async update(uuid: string, updateAlertaDto: UpdateAlertaDto) {
    try {
      // Verificar que la alerta existe y no está eliminada
      const alertaExistente = await this.alertaRepository.findByUuidNotDeleted(uuid);

      if (!alertaExistente) {
        throw new Error('Alerta no encontrada o eliminada');
      }

      // TODO: Refactorizar PersonaService para manejar updates
      // Por ahora solo actualizamos la alerta

      // Actualizar la alerta usando el repository
      const alertaResult = await this.alertaRepository.update(uuid, {
        fecha_hora: updateAlertaDto.fechaRegistro ? new Date(updateAlertaDto.fechaRegistro) : undefined,
        estado: updateAlertaDto.estado || undefined,
        updated_at: new Date(),
      });

      return alertaResult;
    } catch (error) {
      this.logger.error('Error al actualizar alerta:', error);
      throw error;
    }
  }

  async remove(uuid: string) {
    try {
      // Verificar que la alerta existe y no está eliminada
      const alertaExistente = await this.alertaRepository.findByUuidNotDeleted(uuid);

      if (!alertaExistente) {
        throw new Error('Alerta no encontrada o ya eliminada');
      }

      // Soft delete de la alerta usando el repository
      await this.alertaRepository.softDelete(uuid);

      // TODO: También manejar soft delete de contactos relacionados a través de PersonaService

      return {
        message: 'Alerta eliminada exitosamente',
        alertaUuid: uuid,
        fechaEliminacion: new Date(),
      };
    } catch (error) {
      this.logger.error('Error al eliminar alerta:', error);
      throw error;
    }
  }
}
