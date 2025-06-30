import { Injectable } from '@nestjs/common';
import {
  ContactoRepository,
  CreateContactoData,
  UpdateContactoData,
} from '../interfaces/contacto-repository.interface';
import { PrismaService } from '../../prisma/prisma.service';
import { ContactoRef } from '@prisma/client';

@Injectable()
export class PrismaContactoRepository implements ContactoRepository {
  constructor(private prisma: PrismaService) {}

  async findByPersonaId(personaId: bigint): Promise<ContactoRef[]> {
    return this.prisma.contactoRef.findMany({
      where: {
        id_persona: personaId,
        deleted_at: null,
      },
    });
  }

  async create(data: CreateContactoData): Promise<ContactoRef> {
    return this.prisma.contactoRef.create({
      data,
    });
  }

  async update(id: bigint, data: UpdateContactoData): Promise<ContactoRef> {
    return this.prisma.contactoRef.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
  }

  async softDeleteByPersonaId(personaId: bigint): Promise<void> {
    await this.prisma.contactoRef.updateMany({
      where: {
        id_persona: personaId,
        deleted_at: null,
      },
      data: {
        deleted_at: new Date(),
        updated_at: new Date(),
      },
    });
  }
}
