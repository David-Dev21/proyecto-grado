import { Injectable, Inject } from '@nestjs/common';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { EstadoAlerta, OrigenAlerta } from '@prisma/client';
import { PersonaService } from './services/persona.service';
import { CudService } from './services/cud.service';
import { AlertaRepository } from './interfaces/alerta-repository.interface';
import { AlertaRepositoryToken } from '../constants/injection-tokens';

@Injectable()
export class AlertasService {
  constructor(
    @Inject(AlertaRepositoryToken) private readonly alertaRepository: AlertaRepository,
    private readonly personaService: PersonaService,
    private readonly cud: CudService,
  ) {}

  async create(datosAlerta: CreateAlertaDto): Promise<string> {
    const persona = await this.personaService.createOrUpdatePersona(datosAlerta);
    const alerta = await this.crearAlerta(datosAlerta, persona.id);
    if (datosAlerta.contactos) {
      await this.personaService.processContactosAdicionales(persona.id, datosAlerta.contactos);
    }
    return alerta.uuid;
  }

  private async crearAlerta(datosAlerta: CreateAlertaDto, personaId: bigint) {
    return this.alertaRepository.create({
      uuid: datosAlerta.IdAlerta,
      id_persona: personaId,
      fecha_hora: new Date(datosAlerta.fechaRegistro),
      nro_caso: this.cud.generate(),
      estado: EstadoAlerta.EN_PELIGRO,
      origen: OrigenAlerta.ATT,
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
  async update(uuid: string, datosActualizacion: UpdateAlertaDto) {
    await this.verificarAlertaExiste(uuid);
    const datosParaActualizar = {
      fecha_hora: datosActualizacion.fechaRegistro ? new Date(datosActualizacion.fechaRegistro) : undefined,
      estado: datosActualizacion.estado || undefined,
      updated_at: new Date(),
    };

    return this.alertaRepository.update(uuid, datosParaActualizar);
  }

  async remove(uuid: string) {
    await this.verificarAlertaExiste(uuid);
    await this.alertaRepository.softDelete(uuid);
    return {
      message: 'Alerta eliminada exitosamente',
      alertaUuid: uuid,
      fechaEliminacion: new Date(),
    };
  }

  private async verificarAlertaExiste(uuid: string): Promise<void> {
    const alertaExistente = await this.alertaRepository.findByUuidNotDeleted(uuid);

    if (!alertaExistente) {
      throw new Error('Alerta no encontrada o eliminada');
    }
  }
}
