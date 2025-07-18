import { EstadoAlerta, OrigenAlerta } from '../../common/enums/alerta.enum';
import { Persona } from './persona-repository.interface';

export interface AlertasRepositoryInterface {
  findAll(): Promise<AlertaConPersona[]>;
  findByUuid(uuid: string): Promise<AlertaConPersona | null>;
  create(data: CreateAlertaData): Promise<Alerta>;
  update(uuid: string, data: UpdateAlertaData): Promise<AlertaConPersona | null>;
  softDelete(uuid: string): Promise<void>;
  findByUuidNotDeleted(uuid: string): Promise<Alerta | null>;
}

export interface CreateAlertaData {
  uuid: string;
  idPersona: number;
  fechaHora: Date;
  codDenuncia: string;
  estado: EstadoAlerta;
  origen?: OrigenAlerta;
}

export interface UpdateAlertaData {
  fechaHora?: Date;
  estado?: EstadoAlerta;
  updatedAt?: Date;
}

// Tipo para alertas con relaciones incluidas
export interface AlertaConPersona extends Alerta {
  persona: Persona;
}

export interface Alerta {
  id: number;
  uuid: string;
  idPersona: number;
  fechaHora: Date;
  codDenuncia: string;
  estado: EstadoAlerta;
  origen?: OrigenAlerta;
}
