import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCierreAlertaDto } from './dto/create-cierre_alerta.dto';
import { UpdateCierreAlertaDto } from './dto/update-cierre_alerta.dto';

@Injectable()
export class CierreAlertasService {
  private readonly logger = new Logger(CierreAlertasService.name);

  constructor(private prisma: PrismaService) {}

  async create(createCierreAlertaDto: CreateCierreAlertaDto) {
    try {
      const cierreAlerta = await this.prisma.cierreAlerta.create({
        data: {
          id_alerta: BigInt(createCierreAlertaDto.id_alerta),
          id_funcionario: createCierreAlertaDto.id_funcionario,
          fecha_hora: new Date(createCierreAlertaDto.fecha_hora),
          comentario: createCierreAlertaDto.comentario,
          tipo_alerta: createCierreAlertaDto.tipo_alerta,
          estado_victima: createCierreAlertaDto.estado_victima,
          nombre_agresor: createCierreAlertaDto.nombre_agresor,
          ci_agresor: createCierreAlertaDto.ci_agresor,
        }
      });

      // Solo retornar mensaje de estado sin datos del objeto
      return {
        message: 'Cierre de alerta creado exitosamente'
      };
    } catch (error) {
      this.logger.error('Error al crear cierre de alerta:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const cierresAlerta = await this.prisma.cierreAlerta.findMany({
        where: {
          deleted_at: null,
        },
        include: {
          alerta: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      });

      return cierresAlerta.map(cierre => ({
        ...cierre,
        id: cierre.id.toString(),
      }));
    } catch (error) {
      this.logger.error('Error al obtener cierres de alerta:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const cierreAlerta = await this.prisma.cierreAlerta.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
        include: {
          alerta: true,
        },
      });

      if (!cierreAlerta) {
        return null;
      }

      return {
        ...cierreAlerta,
        id: cierreAlerta.id.toString(),
      };
    } catch (error) {
      this.logger.error('Error al obtener cierre de alerta:', error);
      throw error;
    }
  }

  async update(id: number, updateCierreAlertaDto: UpdateCierreAlertaDto) {
    try {
      const cierreExistente = await this.prisma.cierreAlerta.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
      });

      if (!cierreExistente) {
        return null;
      }

      const updateData: any = {};
      
      if (updateCierreAlertaDto.id_funcionario) {
        updateData.id_funcionario = updateCierreAlertaDto.id_funcionario;
      }
      if (updateCierreAlertaDto.fecha_hora) {
        updateData.fecha_hora = new Date(updateCierreAlertaDto.fecha_hora);
      }
      if (updateCierreAlertaDto.comentario) {
        updateData.comentario = updateCierreAlertaDto.comentario;
      }
      if (updateCierreAlertaDto.tipo_alerta) {
        updateData.tipo_alerta = updateCierreAlertaDto.tipo_alerta;
      }
      if (updateCierreAlertaDto.estado_victima) {
        updateData.estado_victima = updateCierreAlertaDto.estado_victima;
      }
      if (updateCierreAlertaDto.nombre_agresor) {
        updateData.nombre_agresor = updateCierreAlertaDto.nombre_agresor;
      }
      if (updateCierreAlertaDto.ci_agresor) {
        updateData.ci_agresor = updateCierreAlertaDto.ci_agresor;
      }

      await this.prisma.cierreAlerta.update({
        where: { id: BigInt(id) },
        data: updateData
      });

      // Solo retornar mensaje de estado sin datos del objeto
      return {
        message: 'Cierre de alerta actualizado exitosamente'
      };
    } catch (error) {
      this.logger.error('Error al actualizar cierre de alerta:', error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const cierreExistente = await this.prisma.cierreAlerta.findFirst({
        where: {
          id: BigInt(id),
          deleted_at: null,
        },
      });

      if (!cierreExistente) {
        return null;
      }

      await this.prisma.cierreAlerta.update({
        where: { id: BigInt(id) },
        data: { deleted_at: new Date() },
      });

      return {
        success: true,
        message: 'Cierre de alerta eliminado correctamente',
      };
    } catch (error) {
      this.logger.error('Error al eliminar cierre de alerta:', error);
      throw error;
    }
  }
}
