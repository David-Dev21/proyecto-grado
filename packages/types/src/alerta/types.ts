import type { Persona } from '../persona/types';

export type EstadoAlerta = 'ACTIVA' | 'ATENDIDA' | 'CERRADA';
export type OrigenAlerta = 'PERSONA' | 'SISTEMA';

export interface Alerta {
  id: number;
  uuid: string;
  idPersona: number;
  idMunicipio?: string;
  fechaHora: Date;
  nroCaso: string;
  estado: EstadoAlerta;
  origen: OrigenAlerta;
  persona?: Persona;
}

export interface AlertaRepository {
  findAll(): Promise<Alerta[]>;
  findOne(id: string): Promise<Alerta | null>;
  findByPersonaId(idPersona: number): Promise<Alerta[]>;
  findByEstado(estado: EstadoAlerta): Promise<Alerta[]>;
  create(data: Partial<Alerta>): Promise<Alerta>;
  update(id: string, data: Partial<Alerta>): Promise<Alerta>;
  delete(id: string): Promise<void>;
}
