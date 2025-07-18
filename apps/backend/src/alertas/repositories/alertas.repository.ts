import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Alerta } from '../entities/alerta.entity';
import { AlertaConPersona, CreateAlertaData, UpdateAlertaData } from '../interfaces/alerta-repository.interface';
import { EstadoAlerta } from '../../common/enums/alerta.enum';
import { AlertasRepositoryInterface } from '../interfaces/alerta-repository.interface';

@Injectable()
export class AlertasRepository implements AlertasRepositoryInterface {
  constructor(
    @InjectRepository(Alerta)
    private readonly repository: Repository<Alerta>,
  ) {}

  async findAll(): Promise<AlertaConPersona[]> {
    const result = await this.repository.find({
      relations: ['persona', 'persona.contactosRef'],
      where: { deletedAt: IsNull() },
    });
    return result.map((alerta) => ({
      ...alerta,
      persona: alerta.persona as NonNullable<typeof alerta.persona>,
    }));
  }

  async findOne(id: string): Promise<AlertaConPersona | null> {
    const alerta = await this.repository.findOne({
      where: { id: parseInt(id), deletedAt: IsNull() },
      relations: ['persona', 'persona.contactosRef'],
    });
    if (!alerta || !alerta.persona) return null;
    return { ...alerta, persona: alerta.persona };
  }

  async findByUuid(uuid: string): Promise<AlertaConPersona | null> {
    const alerta = await this.repository.findOne({
      where: { uuid, deletedAt: IsNull() },
      relations: ['persona', 'persona.contactosRef'],
    });
    if (!alerta || !alerta.persona) return null;
    return { ...alerta, persona: alerta.persona };
  }

  async create(data: CreateAlertaData): Promise<Alerta> {
    const newAlerta = this.repository.create({
      uuid: data.uuid,
      idPersona: data.idPersona,
      fechaHora: data.fechaHora,
      codDenuncia: data.codDenuncia,
      estado: data.estado,
      origen: data.origen,
    });
    return this.repository.save(newAlerta);
  }

  async update(uuid: string, data: UpdateAlertaData): Promise<AlertaConPersona | null> {
    await this.repository.update(
      { uuid, deletedAt: IsNull() },
      {
        fechaHora: data.fechaHora,
        estado: data.estado,
        updatedAt: data.updatedAt,
      },
    );
    const updated = await this.findByUuid(uuid);
    if (!updated) {
      throw new Error('Alerta no encontrada');
    }
    return updated;
  }

  async softDelete(uuid: string): Promise<void> {
    await this.repository.update({ uuid, deletedAt: IsNull() }, { deletedAt: new Date() });
  }

  async findByUuidNotDeleted(uuid: string): Promise<Alerta | null> {
    return this.repository.findOne({
      where: { uuid, deletedAt: IsNull() },
      relations: ['persona', 'persona.contactosRef'],
    });
  }

  async findByPersonaId(idPersona: number): Promise<AlertaConPersona[]> {
    const result = await this.repository.find({
      where: { idPersona, deletedAt: IsNull() },
      relations: ['persona', 'persona.contactosRef'],
    });
    return result
      .filter((a) => a.persona)
      .map((alerta) => ({
        ...alerta,
        persona: alerta.persona as NonNullable<typeof alerta.persona>,
      }));
  }

  async findByEstado(estado: EstadoAlerta): Promise<AlertaConPersona[]> {
    const result = await this.repository.find({
      where: { estado, deletedAt: IsNull() },
      relations: ['persona', 'persona.contactosRef'],
    });
    return result
      .filter((a) => a.persona)
      .map((alerta) => ({
        ...alerta,
        persona: alerta.persona as NonNullable<typeof alerta.persona>,
      }));
  }
}
