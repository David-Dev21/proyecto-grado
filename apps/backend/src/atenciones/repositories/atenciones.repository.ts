import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Atencion } from '../entities/atencion.entity';
import { CreateAtencionDto } from '../dto/create-atencion.dto';
import { AtencionesRepositoryInterface } from '../interfaces/atencion-repository.interface';

@Injectable()
export class AtencionesRepository implements AtencionesRepositoryInterface {
  constructor(
    @InjectRepository(Atencion)
    private readonly repository: Repository<Atencion>,
  ) {}

  async findAll(): Promise<Atencion[]> {
    return this.repository.find({
      where: { deletedAt: IsNull() },
      relations: ['alerta', 'funcionarios'],
    });
  }

  async findOne(id: number): Promise<Atencion> {
    const atencion = await this.repository.findOne({
      where: { id, deletedAt: IsNull() },
      relations: ['alerta', 'funcionarios'],
    });
    if (!atencion) {
      throw new Error('Atención no encontrada');
    }
    return atencion;
  }

  async create(data: CreateAtencionDto): Promise<Atencion> {
    const newAtencion = this.repository.create(data);
    const savedAtencion = await this.repository.save(newAtencion);
    return this.findOne(savedAtencion.id);
  }

  async update(id: number, data: Partial<Atencion>): Promise<Atencion> {
    await this.repository.update({ id, deletedAt: IsNull() }, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.update({ id, deletedAt: IsNull() }, { deletedAt: new Date() });
  }

  async findByAlertaId(idAlerta: number): Promise<Atencion[]> {
    return this.repository.find({
      where: { idAlerta: idAlerta, deletedAt: IsNull() },
      relations: ['alerta', 'funcionarios'],
      order: { fechaHora: 'DESC' },
    });
  }

  async findByUsuarioDespachador(usuarioDespachador: string): Promise<Atencion[]> {
    return this.repository.find({
      where: { usuarioDespachador: usuarioDespachador, deletedAt: IsNull() },
      relations: ['alerta', 'funcionarios'],
    });
  }
}
