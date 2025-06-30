import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionariosService {
  private readonly logger = new Logger(FuncionariosService.name);

  constructor(private prisma: PrismaService) {}

  async create(createFuncionarioDto: CreateFuncionarioDto) {
    try {
      const funcionario = await this.prisma.funcionarios.create({
        data: createFuncionarioDto,
      });

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
      return await this.prisma.funcionarios.findMany({
        where: {
          deleted_at: null,
        },
        orderBy: {
          created_at: 'desc',
        },
      });
    } catch (error) {
      this.logger.error('Error al obtener funcionarios:', error);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const funcionario = await this.prisma.funcionarios.findFirst({
        where: {
          id,
          deleted_at: null,
        },
      });

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
      const funcionario = await this.prisma.funcionarios.update({
        where: { id },
        data: updateFuncionarioDto,
      });

      return {
        message: 'Funcionario actualizado exitosamente',
        data: funcionario,
      };
    } catch (error) {
      this.logger.error(`Error al actualizar funcionario ${id}:`, error);
      if (error.code === 'P2025') {
        throw new NotFoundException(`Funcionario con ID ${id} no encontrado`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.funcionarios.update({
        where: { id },
        data: { deleted_at: new Date() },
      });

      return {
        message: 'Funcionario eliminado exitosamente',
      };
    } catch (error) {
      this.logger.error(`Error al eliminar funcionario ${id}:`, error);
      if (error.code === 'P2025') {
        throw new NotFoundException(`Funcionario con ID ${id} no encontrado`);
      }
      throw error;
    }
  }
}
