import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { UbicacionFuncionario } from '../entities/ubicacion-funcionario.entity';
import { IUbicacionFuncionariosRepository } from '@alertas/types';
import { CreateUbicacionFuncionarioDto } from '../dto/create-ubicacion-funcionario.dto';

@Injectable()
export class UbicacionFuncionariosRepository implements IUbicacionFuncionariosRepository {
  constructor(
    @InjectRepository(UbicacionFuncionario)
    private readonly repository: Repository<UbicacionFuncionario>,
  ) {}

  async findAll(): Promise<UbicacionFuncionario[]> {
    return this.repository.find({
      where: { deleted_at: IsNull() },
      relations: ['atencion'],
    });
  }

  async findOne(id: string): Promise<UbicacionFuncionario> {
    const ubicacion = await this.repository.findOne({
      where: { id: parseInt(id), deleted_at: IsNull() },
      relations: ['atencion'],
    });
    if (!ubicacion) {
      throw new Error('Ubicación de funcionario no encontrada');
    }
    return ubicacion;
  }

  async create(data: CreateUbicacionFuncionarioDto): Promise<UbicacionFuncionario> {
    const newUbicacion = this.repository.create(data);
    const savedUbicacion = await this.repository.save(newUbicacion);
    return this.findOne(savedUbicacion.id.toString());
  }

  async update(id: string, data: Partial<UbicacionFuncionario>): Promise<UbicacionFuncionario> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, data);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, { deleted_at: new Date() });
  }

  async findByAtencionId(idAtencion: number): Promise<UbicacionFuncionario[]> {
    return this.repository.find({
      where: { id_atencion: idAtencion, deleted_at: IsNull() },
      relations: ['atencion'],
      order: { fecha_hora: 'DESC' },
    });
  }

  async getLastLocation(idFuncionario: string): Promise<UbicacionFuncionario | null> {
    return this.repository.findOne({
      where: { id_funcionario: idFuncionario, deleted_at: IsNull() },
      relations: ['atencion'],
      order: { fecha_hora: 'DESC' },
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
