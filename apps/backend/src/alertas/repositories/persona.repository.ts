import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Persona } from '../entities/alerta.entity';
import { IPersonaRepository } from '@alertas/types';

@Injectable()
export class PersonaRepository implements IPersonaRepository {
  constructor(
    @InjectRepository(Persona)
    private readonly repository: Repository<Persona>,
  ) {}

  async findAll(): Promise<Persona[]> {
    return this.repository.find({
      where: { deleted_at: IsNull() },
      relations: ['contactos_ref', 'alertas'],
    });
  }

  async findOne(id: string): Promise<Persona | null> {
    return this.repository.findOne({
      where: { id: parseInt(id), deleted_at: IsNull() },
      relations: ['contactos_ref', 'alertas'],
    });
  }

  async findByCi(ci: string): Promise<Persona | null> {
    return this.repository.findOne({
      where: { ci, deleted_at: IsNull() },
      relations: ['contactos_ref', 'alertas'],
    });
  }

  async create(data: Partial<Persona>): Promise<Persona> {
    const newPersona = this.repository.create(data);
    return this.repository.save(newPersona);
  }

  async update(id: string, data: Partial<Persona>): Promise<Persona> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, data);
    const updated = await this.findOne(id);
    if (!updated) {
      throw new Error('Persona no encontrada');
    }
    return updated;
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, { deleted_at: new Date() });
  }
}
