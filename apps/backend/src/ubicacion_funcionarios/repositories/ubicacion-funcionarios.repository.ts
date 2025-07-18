import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { UbicacionFuncionario } from '../entities/ubicacion-funcionario.entity';
import { CreateUbicacionFuncionarioDto } from '../dto/create-ubicacion_funcionario.dto';

@Injectable()
export class UbicacionFuncionariosRepository {
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

  async create(data: any): Promise<UbicacionFuncionario> {
    const newUbicacion = this.repository.create(data);
    const savedUbicacion = await this.repository.save(newUbicacion);
    // If save returns an array, get the first element
    const entity = Array.isArray(savedUbicacion) ? savedUbicacion[0] : savedUbicacion;
    return this.findOne(String(entity.id));
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

  // Remove getLastLocation or update to match entity if needed
}
