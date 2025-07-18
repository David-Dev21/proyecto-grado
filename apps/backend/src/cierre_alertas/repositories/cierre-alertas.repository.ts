import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { CierreAlerta } from '../entities/cierre-alerta.entity';
import { CreateCierreAlertaDto } from '../dto/create-cierre_alerta.dto';
import { CierreAlertasRepositoryInterface } from '../interfaces/cierre-alerta.interface';

@Injectable()
export class CierreAlertasRepository implements CierreAlertasRepositoryInterface {
  constructor(
    @InjectRepository(CierreAlerta)
    private readonly repository: Repository<CierreAlerta>,
  ) {}

  async findAll(): Promise<CierreAlerta[]> {
    return this.repository.find({
      where: { deletedAt: IsNull() },
      relations: ['alerta'],
    });
  }

  async findByAlertaId(idAlerta: number): Promise<CierreAlerta[]> {
    return this.repository.find({
      where: { idAlerta: idAlerta, deletedAt: IsNull() },
      relations: ['alerta'],
      order: { fechaHora: 'DESC' },
    });
  }

  async findOne(id: string): Promise<CierreAlerta> {
    const cierre = await this.repository.findOne({
      where: { id: parseInt(id), deletedAt: IsNull() },
      relations: ['alerta'],
    });
    if (!cierre) {
      throw new Error('Cierre de alerta no encontrado');
    }
    return cierre;
  }

  async create(data: CreateCierreAlertaDto): Promise<CierreAlerta> {
    const newCierre = this.repository.create(data);
    const savedCierre = await this.repository.save(newCierre);
    return this.findOne(savedCierre.id.toString());
  }

  async update(id: string, data: Partial<CierreAlerta>): Promise<CierreAlerta> {
    await this.repository.update({ id: parseInt(id), deletedAt: IsNull() }, data);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({ id: parseInt(id), deletedAt: IsNull() }, { deletedAt: new Date() });
  }

  async findByTipoAlerta(tipoAlerta: string): Promise<CierreAlerta[]> {
    return this.repository.find({
      where: { tipoAlerta: tipoAlerta, deletedAt: IsNull() },
      relations: ['alerta'],
    });
  }
}
