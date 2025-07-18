export interface Persona {
  id: number;
  nombres: string;
  ci: string;
  fechaNac: Date;
  celular: string;
  correo: string;
  empresaTelefonica: string;
}

export interface PersonaRepositoryInterface {
  findByCi(ci: string): Promise<Persona | null>;
  create(data: CreatePersonaData): Promise<Persona>;
  update(id: number, data: UpdatePersonaData): Promise<Persona>;
}

export interface CreatePersonaData {
  nombres: string;
  ci: string;
  fechaNac: Date;
  celular: string;
  correo: string;
  empresaTelefonica: string;
}

export interface UpdatePersonaData {
  nombres?: string;
  fechaNac?: Date;
  celular?: string;
  correo?: string;
}
