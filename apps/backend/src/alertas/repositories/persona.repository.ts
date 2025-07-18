import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Persona } from '../entities/alerta.entity';
import { PersonaRepositoryInterface } from '../interfaces/persona-repository.interface';

@Injectable()
export class PersonaRepository implements PersonaRepositoryInterface {
  constructor(
    @InjectRepository(Persona)
    private readonly repository: Repository<Persona>,
  ) {}

  async findAll(): Promise<Persona[]> {
    return this.repository.find({
      where: { deletedAt: IsNull() },
      relations: ['contactosRef', 'alertas'],
    });
  }

  async findOne(id: string): Promise<Persona | null> {
    return this.repository.findOne({
      where: { id: parseInt(id), deletedAt: IsNull() },
      relations: ['contactosRef', 'alertas'],
    });
  }

  async findByCi(ci: string): Promise<Persona | null> {
    return this.repository.findOne({
      where: { ci, deletedAt: IsNull() },
      relations: ['contactosRef', 'alertas'],
    });
  }

  async create(data: Partial<Persona>): Promise<Persona> {
    const newPersona = this.repository.create(data);
    return this.repository.save(newPersona);
  }

  async update(id: number, data: Partial<Persona>): Promise<Persona> {
    await this.repository.update({ id, deletedAt: IsNull() }, data);
    const updated = await this.findOne(id.toString());
    if (!updated) {
      throw new Error('Persona no encontrada');
    }
    return updated;
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({ id: parseInt(id), deletedAt: IsNull() }, { deletedAt: new Date() });
  }
}
