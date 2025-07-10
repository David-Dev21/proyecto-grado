import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Alerta } from '../entities/alerta.entity';
import { IAlertasRepository } from '@alertas/types';
import { EstadoAlerta } from '../../common/enums/alerta.enum';

@Injectable()
export class AlertasRepository implements IAlertasRepository {
  constructor(
    @InjectRepository(Alerta)
    private readonly repository: Repository<Alerta>,
  ) {}

  async findAll(): Promise<Alerta[]> {
    return this.repository.find({
      relations: ['persona', 'contactos_ref'],
      where: { deleted_at: IsNull() },
    });
  }

  async findOne(id: string): Promise<Alerta | null> {
    return this.repository.findOne({
      where: { id: parseInt(id), deleted_at: IsNull() },
      relations: ['persona', 'contactos_ref'],
    });
  }

  async findByUuid(uuid: string): Promise<Alerta | null> {
    return this.repository.findOne({
      where: { uuid, deleted_at: IsNull() },
      relations: ['persona', 'contactos_ref'],
    });
  }

  async create(data: Partial<Alerta>): Promise<Alerta> {
    const newAlerta = this.repository.create(data);
    return this.repository.save(newAlerta);
  }

  async update(uuid: string, data: Partial<Alerta>): Promise<Alerta> {
    await this.repository.update({ uuid, deleted_at: IsNull() }, data);
    const updated = await this.findByUuid(uuid);
    if (!updated) {
      throw new Error('Alerta no encontrada');
    }
    return updated;
  }

  async delete(uuid: string): Promise<void> {
    await this.repository.update({ uuid, deleted_at: IsNull() }, { deleted_at: new Date() });
  }

  async findByUuidNotDeleted(uuid: string): Promise<Alerta | null> {
    return this.repository.findOne({
      where: { uuid, deleted_at: IsNull() },
      relations: ['persona', 'contactos_ref'],
    });
  }

  async findByPersonaId(personaId: number): Promise<Alerta[]> {
    return this.repository.find({
      where: { id_persona: personaId, deleted_at: IsNull() },
      relations: ['persona', 'contactos_ref'],
    });
  }

  async findByEstado(estado: EstadoAlerta): Promise<Alerta[]> {
    return this.repository.find({
      where: { estado, deleted_at: IsNull() },
      relations: ['persona', 'contactos_ref'],
    });
  }
}
