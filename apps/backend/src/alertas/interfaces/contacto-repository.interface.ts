import { ContactoRef } from '@prisma/client';

export interface ContactoRepository {
  findByPersonaId(personaId: bigint): Promise<ContactoRef[]>;
  create(data: CreateContactoData): Promise<ContactoRef>;
  update(id: bigint, data: UpdateContactoData): Promise<ContactoRef>;
  softDeleteByPersonaId(personaId: bigint): Promise<void>;
}

export interface CreateContactoData {
  id_persona: bigint;
  nombre: string;
  relacion: string;
  celular: string;
}

export interface UpdateContactoData {
  nombre?: string;
  relacion?: string;
}
