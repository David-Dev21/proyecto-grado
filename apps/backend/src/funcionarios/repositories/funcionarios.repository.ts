import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from '../entities/funcionario.entity';

@Injectable()
export class FuncionariosRepository {
  constructor(
    @InjectRepository(Funcionario)
    private readonly repository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Funcionario[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Funcionario> {
    const funcionario = await this.repository.findOneBy({ id });
    if (!funcionario) {
      throw new Error('Funcionario no encontrado');
    }
    return funcionario;
  }

  async create(funcionario: Partial<Funcionario>): Promise<Funcionario> {
    const newFuncionario = this.repository.create(funcionario);
    return this.repository.save(newFuncionario);
  }

  async update(id: string, funcionario: Partial<Funcionario>): Promise<Funcionario> {
    await this.repository.update(id, funcionario);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.update(id, { deletedAt: new Date() });
  }
}
