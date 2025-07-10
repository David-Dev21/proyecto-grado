import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Atencion } from '../entities/atencion.entity';
import { IAtencionesRepository } from '@alertas/types';
import { CreateAtencionDto } from '../dto/create-atencion.dto';

@Injectable()
export class AtencionesRepository implements IAtencionesRepository {
  constructor(
    @InjectRepository(Atencion)
    private readonly repository: Repository<Atencion>,
  ) {}

  async findAll(): Promise<Atencion[]> {
    return this.repository.find({
      where: { deleted_at: IsNull() },
      relations: ['alerta', 'funcionarios'],
    });
  }

  async findOne(id: string): Promise<Atencion> {
    const atencion = await this.repository.findOne({
      where: { id: parseInt(id), deleted_at: IsNull() },
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
    return this.findOne(savedAtencion.id.toString());
  }

  async update(id: string, data: Partial<Atencion>): Promise<Atencion> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, data);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, { deleted_at: new Date() });
  }

  async findByAlertaId(idAlerta: number): Promise<Atencion[]> {
    return this.repository.find({
      where: { id_alerta: idAlerta, deleted_at: IsNull() },
      relations: ['alerta', 'funcionarios'],
      order: { fecha_hora: 'DESC' },
    });
  }

  async findByUsuarioDespachador(usuarioDespachador: string): Promise<Atencion[]> {
    return this.repository.find({
      where: { usuario_despachador: usuarioDespachador, deleted_at: IsNull() },
      relations: ['alerta', 'funcionarios'],
    });
  }
}
