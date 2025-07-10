import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { ContactoRef } from '../entities/alerta.entity';
import { IContactoRepository } from '@alertas/types';

@Injectable()
export class ContactoRepository implements IContactoRepository {
  constructor(
    @InjectRepository(ContactoRef)
    private readonly repository: Repository<ContactoRef>,
  ) {}

  async findAll(): Promise<ContactoRef[]> {
    return this.repository.find({
      where: { deleted_at: IsNull() },
      relations: ['persona'],
    });
  }

  async findOne(id: string): Promise<ContactoRef | null> {
    return this.repository.findOne({
      where: { id: parseInt(id), deleted_at: IsNull() },
      relations: ['persona'],
    });
  }

  async create(data: Partial<ContactoRef>): Promise<ContactoRef> {
    const newContacto = this.repository.create(data);
    return this.repository.save(newContacto);
  }

  async update(id: string, data: Partial<ContactoRef>): Promise<ContactoRef> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, data);
    const updated = await this.findOne(id);
    if (!updated) {
      throw new Error('Contacto no encontrado');
    }
    return updated;
  }

  async delete(id: string): Promise<void> {
    await this.repository.update({ id: parseInt(id), deleted_at: IsNull() }, { deleted_at: new Date() });
  }
}
