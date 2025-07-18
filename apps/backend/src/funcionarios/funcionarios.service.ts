import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionariosService {
  private readonly logger = new Logger(FuncionariosService.name);

  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
  ) {}

  async create(createFuncionarioDto: CreateFuncionarioDto) {
    try {
      const funcionario = this.funcionarioRepository.create(createFuncionarioDto);
      await this.funcionarioRepository.save(funcionario);
      return {
        message: 'Funcionario creado exitosamente',
        data: funcionario,
      };
    } catch (error) {
      this.logger.error('Error al crear funcionario:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.funcionarioRepository.find({
        where: { deletedAt: IsNull() },
        order: { grado: 'ASC' },
      });
    } catch (error) {
      this.logger.error('Error al obtener funcionarios:', error);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const funcionario = await this.funcionarioRepository.findOne({ where: { id, deletedAt: IsNull() } });
      if (!funcionario) {
        throw new NotFoundException(`Funcionario con ID ${id} no encontrado`);
      }
      return funcionario;
    } catch (error) {
      this.logger.error(`Error al obtener funcionario ${id}:`, error);
      throw error;
    }
  }

  async update(id: string, updateFuncionarioDto: UpdateFuncionarioDto) {
    try {
      await this.funcionarioRepository.update(id, updateFuncionarioDto);
      const funcionario = await this.findOne(id);
      return {
        message: 'Funcionario actualizado exitosamente',
        data: funcionario,
      };
    } catch (error) {
      this.logger.error(`Error al actualizar funcionario ${id}:`, error);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.funcionarioRepository.update(id, { deletedAt: new Date() });
      return {
        message: 'Funcionario eliminado exitosamente',
      };
    } catch (error) {
      this.logger.error(`Error al eliminar funcionario ${id}:`, error);
      throw error;
    }
  }
}
