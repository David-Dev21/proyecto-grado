import { Injectable } from '@nestjs/common';
import { PersonaRepository, CreatePersonaData, UpdatePersonaData } from '../interfaces/persona-repository.interface';
import { PrismaService } from '../../prisma/prisma.service';
import { Persona } from '@prisma/client';

@Injectable()
export class PrismaPersonaRepository implements PersonaRepository {
  constructor(private prisma: PrismaService) {}

  async findByCi(ci: string): Promise<Persona | null> {
    return this.prisma.persona.findFirst({
      where: { ci },
    });
  }

  async create(data: CreatePersonaData): Promise<Persona> {
    return this.prisma.persona.create({
      data,
    });
  }

  async update(id: bigint, data: UpdatePersonaData): Promise<Persona> {
    return this.prisma.persona.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
  }
}
