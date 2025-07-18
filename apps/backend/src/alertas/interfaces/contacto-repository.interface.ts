export interface IContactoRef {
  id: number;
  idPersona: number;
  nombre: string;
  relacion: string;
  celular: string;
}

export interface ContactoRepositoryInterface {
  findByPersonaId(personaId: number): Promise<IContactoRef[]>;
  create(data: CreateContactoData): Promise<IContactoRef>;
  update(id: number, data: UpdateContactoData): Promise<IContactoRef>;
  softDeleteByPersonaId(personaId: number): Promise<void>;
}

export interface CreateContactoData {
  idPersona: number;
  nombre: string;
  relacion: string;
  celular: string;
}

export interface UpdateContactoData {
  nombre?: string;
  relacion?: string;
  celular?: string;
}
