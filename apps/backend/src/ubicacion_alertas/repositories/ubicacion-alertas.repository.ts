import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { UbicacionAlerta } from '../entities/ubicacion-alerta.entity';
import { UbicacionAlertasRepositoryInterface } from '../interfaces/ubicacion-alertas-repository.interface';
import { CreateUbicacionAlertaDto } from '../dto/create-ubicacion_alerta.dto';

@Injectable()
export class UbicacionAlertasRepository implements UbicacionAlertasRepositoryInterface {
  constructor(
    @InjectRepository(UbicacionAlerta)
    private readonly repository: Repository<UbicacionAlerta>,
  ) {}

  async findAll(): Promise<UbicacionAlerta[]> {
    return this.repository.find({
      where: { deletedAt: IsNull() },
      relations: ['alerta'],
    });
  }

  async findOne(id: string): Promise<UbicacionAlerta> {
    const ubicacion = await this.repository.findOne({
      where: { id: parseInt(id), deletedAt: IsNull() },
      relations: ['alerta'],
    });
    if (!ubicacion) {
      throw new Error('Ubicación de alerta no encontrada');
    }
    return ubicacion;
  }

  async create(data: Partial<UbicacionAlerta>): Promise<UbicacionAlerta> {
    const newUbicacion = this.repository.create(data);
    const savedUbicacion = await this.repository.save(newUbicacion);
    return this.findOne(savedUbicacion.id.toString());
  }

  async update(id: string, data: Partial<UbicacionAlerta>): Promise<UbicacionAlerta> {
    await this.repository.update({ id: parseInt(id), deletedAt: IsNull() }, data);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({ id: parseInt(id), deletedAt: IsNull() }, { deletedAt: new Date() });
  }

  async findByAlertaId(idAlerta: number): Promise<UbicacionAlerta[]> {
    return this.repository.find({
      where: { idAlerta: idAlerta, deletedAt: IsNull() },
      relations: ['alerta'],
      order: { fechaHora: 'DESC' },
    });
  }

  async getLastLocation(idAlerta: number): Promise<UbicacionAlerta | null> {
    return this.repository.findOne({
      where: { idAlerta: idAlerta, deletedAt: IsNull() },
      relations: ['alerta'],
      order: { fechaHora: 'DESC' },
    });
  }
}
