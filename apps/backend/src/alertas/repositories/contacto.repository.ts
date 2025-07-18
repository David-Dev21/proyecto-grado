import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { CreateContactoData, UpdateContactoData, IContactoRef } from '../interfaces/contacto-repository.interface';
import { ContactoRef } from '../entities/alerta.entity';
import { ContactoRepositoryInterface } from '../interfaces/contacto-repository.interface';

@Injectable()
export class ContactoRepository implements ContactoRepositoryInterface {
  constructor(
    @InjectRepository(ContactoRef)
    private readonly repository: Repository<ContactoRef>,
  ) {}

  async findAll(): Promise<IContactoRef[]> {
    const contactos = await this.repository.find({
      where: { deletedAt: IsNull() },
      relations: ['persona'],
    });
    return contactos.map((c) => this.toInterface(c));
  }

  async findOne(id: string): Promise<IContactoRef | null> {
    const contacto = await this.repository.findOne({
      where: { id: parseInt(id), deletedAt: IsNull() },
      relations: ['persona'],
    });
    return contacto ? this.toInterface(contacto) : null;
  }

  async create(data: CreateContactoData): Promise<IContactoRef> {
    const newContacto = this.repository.create(data);
    const saved = await this.repository.save(newContacto);
    return this.toInterface(saved);
  }

  async update(id: number, data: UpdateContactoData): Promise<IContactoRef> {
    await this.repository.update({ id, deletedAt: IsNull() }, data);
    const updated = await this.findOne(id.toString());
    if (!updated) {
      throw new Error('Contacto no encontrado');
    }
    return updated;
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({ id: parseInt(id), deletedAt: IsNull() }, { deletedAt: new Date() });
  }

  async findByPersonaId(personaId: number): Promise<IContactoRef[]> {
    const contactos = await this.repository.find({
      where: { persona: { id: personaId }, deletedAt: IsNull() },
      relations: ['persona'],
    });
    return contactos.map((c) => this.toInterface(c));
  }

  private toInterface(contacto: ContactoRef): IContactoRef {
    return {
      id: contacto.id,
      idPersona: contacto.idPersona,
      nombre: contacto.nombre,
      relacion: contacto.relacion,
      celular: contacto.celular,
    };
  }

  async softDeleteByPersonaId(personaId: number): Promise<void> {
    await this.repository.update({ persona: { id: personaId }, deletedAt: IsNull() }, { deletedAt: new Date() });
  }
}
