import { Persona } from '@prisma/client';

export interface PersonaRepository {
  findByCi(ci: string): Promise<Persona | null>;
  create(data: CreatePersonaData): Promise<Persona>;
  update(id: bigint, data: UpdatePersonaData): Promise<Persona>;
}

export interface CreatePersonaData {
  nombres: string;
  ap_paterno: string;
  ap_materno: string;
  ci: string;
  fecha_nac: Date;
  celular: string;
  correo: string;
  empresa_telefonica: string;
}

export interface UpdatePersonaData {
  nombres?: string;
  fecha_nac?: Date;
  celular?: string;
  correo?: string;
}
