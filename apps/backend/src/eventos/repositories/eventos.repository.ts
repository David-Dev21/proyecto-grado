import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Evento } from '../entities/evento.entity';
import { IEventosRepository } from '@alertas/types';
import { CreateEventoDto } from '../dto/create-evento.dto';

@Injectable()
export class EventosRepository implements IEventosRepository {
  constructor(
    @InjectRepository(Evento)
    private readonly repository: Repository<Evento>,
  ) {}

  async findAll(): Promise<Evento[]> {
    return this.repository.find({
      where: { deleted_at: IsNull() },
      relations: ['alerta'],
    });
  }

  async findOne(id: string): Promise<Evento> {
    const evento = await this.repository.findOne({
      where: { id: parseInt(id), deleted_at: IsNull() },
      relations: ['alerta'],
    });
    if (!evento) {
      throw new Error('Evento no encontrado');
    }
    return evento;
  }

  async create(data: CreateEventoDto): Promise<Evento> {
    const newEvento = this.repository.create(data);
    const savedEvento = await this.repository.save(newEvento);
    return this.findOne(savedEvento.id.toString());
  }

  async update(id: string, data: Partial<Evento>): Promise<Evento> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, data);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, { deleted_at: new Date() });
  }

  async findByAlertaId(idAlerta: number): Promise<Evento[]> {
    return this.repository.find({
      where: { id_alerta: idAlerta, deleted_at: IsNull() },
      relations: ['alerta'],
      order: { fecha_hora: 'DESC' },
    });
  }

  async findByFuncionarioId(idFuncionario: string): Promise<Evento[]> {
    return this.repository.find({
      where: { id_funcionario: idFuncionario, deleted_at: IsNull() },
      relations: ['alerta'],
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
