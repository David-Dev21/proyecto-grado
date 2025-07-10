export interface Persona {
  id: number;
  uuid?: string;
  nombres: string;
  ap_paterno: string;
  ap_materno: string;
  ci: string;
  fecha_nac: Date;
  celular: string;
  correo: string;
  empresa_telefonica: string;
  contactos_ref?: ContactoRef[];
}

export interface ContactoRef {
  id: number;
  id_persona: number;
  nombre: string;
  relacion: string;
  celular: string;
  persona?: Persona;
}

export interface PersonaRepository {
  findAll(): Promise<Persona[]>;
  findOne(id: string): Promise<Persona | null>;
  findByCi(ci: string): Promise<Persona | null>;
  create(data: Partial<Persona>): Promise<Persona>;
  update(id: string, data: Partial<Persona>): Promise<Persona>;
  delete(id: string): Promise<void>;
}

export interface ContactoRepository {
  findAll(): Promise<ContactoRef[]>;
  findOne(id: string): Promise<ContactoRef | null>;
  findByPersonaId(personaId: number): Promise<ContactoRef[]>;
  create(data: Partial<ContactoRef>): Promise<ContactoRef>;
  update(id: string, data: Partial<ContactoRef>): Promise<ContactoRef>;
  delete(id: string): Promise<void>;
  softDeleteByPersonaId(personaId: number): Promise<void>;
}
