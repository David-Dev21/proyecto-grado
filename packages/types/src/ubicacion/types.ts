import type { Point } from 'geojson';

export interface UbicacionAlerta {
  id: number;
  idAlerta: number;
  fechaHora: Date;
  ubicacion: Point;
}

export interface UbicacionFuncionario {
  id: number;
  idAtencion: number;
  fechaHora: Date;
  ubicacion: Point;
}

export interface UbicacionAlertaRepository {
  findAll(): Promise<UbicacionAlerta[]>;
  findOne(id: string): Promise<UbicacionAlerta | null>;
  findByAlertaId(idAlerta: number): Promise<UbicacionAlerta[]>;
  create(data: Partial<UbicacionAlerta>): Promise<UbicacionAlerta>;
  update(id: string, data: Partial<UbicacionAlerta>): Promise<UbicacionAlerta>;
  delete(id: string): Promise<void>;
}

export interface UbicacionFuncionarioRepository {
  findAll(): Promise<UbicacionFuncionario[]>;
  findOne(id: string): Promise<UbicacionFuncionario | null>;
  findByAtencionId(idAtencion: number): Promise<UbicacionFuncionario[]>;
  create(data: Partial<UbicacionFuncionario>): Promise<UbicacionFuncionario>;
  update(id: string, data: Partial<UbicacionFuncionario>): Promise<UbicacionFuncionario>;
  delete(id: string): Promise<void>;
}
