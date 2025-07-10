import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { UbicacionAlerta } from '../entities/ubicacion-alerta.entity';
import { IUbicacionAlertasRepository } from '@alertas/types';
import { CreateUbicacionAlertaDto } from '../dto/create-ubicacion-alerta.dto';

@Injectable()
export class UbicacionAlertasRepository implements IUbicacionAlertasRepository {
  constructor(
    @InjectRepository(UbicacionAlerta)
    private readonly repository: Repository<UbicacionAlerta>
  ) {}

  async findAll(): Promise<UbicacionAlerta[]> {
    return this.repository.find({
      where: { deleted_at: IsNull() },
      relations: ['alerta']
    });
  }

  async findOne(id: string): Promise<UbicacionAlerta> {
    const ubicacion = await this.repository.findOne({
      where: { id: parseInt(id), deleted_at: IsNull() },
      relations: ['alerta']
    });
    if (!ubicacion) {
      throw new Error('Ubicación de alerta no encontrada');
    }
    return ubicacion;
  }

  async create(data: CreateUbicacionAlertaDto): Promise<UbicacionAlerta> {
    const newUbicacion = this.repository.create(data);
    const savedUbicacion = await this.repository.save(newUbicacion);
    return this.findOne(savedUbicacion.id.toString());
  }

  async update(id: string, data: Partial<UbicacionAlerta>): Promise<UbicacionAlerta> {
    await this.repository.update(
      { id: parseInt(id), deleted_at: IsNull() },
      data
    );
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.update(
      { id: parseInt(id), deleted_at: IsNull() },
      { deleted_at: new Date() }
    );
  }

  async findByAlertaId(idAlerta: number): Promise<UbicacionAlerta[]> {
    return this.repository.find({
      where: { id_alerta: idAlerta, deleted_at: IsNull() },
      relations: ['alerta'],
      order: { fecha_hora: 'DESC' }
    });
  }

  async getLastLocation(idAlerta: number): Promise<UbicacionAlerta | null> {
    return this.repository.findOne({
      where: { id_alerta: idAlerta, deleted_at: IsNull() },
      relations: ['alerta'],
      order: { fecha_hora: 'DESC' }
    });
  }
  }
}
