import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  AlertaRepository,
  CreateAlertaData,
  UpdateAlertaData,
  AlertaWithRelations,
} from '../interfaces/alerta-repository.interface';
import { Alerta } from '@prisma/client';

@Injectable()
export class PrismaAlertaRepository implements AlertaRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<AlertaWithRelations[]> {
    return this.prisma.alerta.findMany({
      where: {
        deleted_at: null,
      },
      include: {
        persona: {
          include: {
            contactos_ref: {
              where: {
                deleted_at: null,
              },
            },
          },
        },
      },
    }) as Promise<AlertaWithRelations[]>;
  }

  async findByUuid(uuid: string): Promise<AlertaWithRelations | null> {
    return this.prisma.alerta.findFirst({
      where: {
        uuid: uuid,
        deleted_at: null,
      },
      include: {
        persona: {
          include: {
            contactos_ref: {
              where: {
                deleted_at: null,
              },
            },
          },
        },
      },
    }) as Promise<AlertaWithRelations | null>;
  }

  async findByUuidNotDeleted(uuid: string): Promise<Alerta | null> {
    return this.prisma.alerta.findFirst({
      where: {
        uuid: uuid,
        deleted_at: null,
      },
    });
  }

  async create(data: CreateAlertaData): Promise<Alerta> {
    return this.prisma.alerta.create({
      data,
    });
  }

  async update(uuid: string, data: UpdateAlertaData): Promise<AlertaWithRelations | null> {
    await this.prisma.alerta.updateMany({
      where: {
        uuid: uuid,
        deleted_at: null,
      },
      data,
    });

    // Retornar la alerta actualizada con relaciones
    return this.findByUuid(uuid);
  }

  async softDelete(uuid: string): Promise<void> {
    await this.prisma.alerta.updateMany({
      where: {
        uuid: uuid,
        deleted_at: null,
      },
      data: {
        deleted_at: new Date(),
        updated_at: new Date(),
      },
    });
  }
}
