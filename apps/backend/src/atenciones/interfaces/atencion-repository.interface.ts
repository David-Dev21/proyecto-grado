import { Atencion } from '../entities/atencion.entity';

export interface AtencionesRepositoryInterface {
  findAll(): Promise<Atencion[]>;
  findOne(id: number): Promise<Atencion>;
  create(data: any): Promise<Atencion>;
  update(id: number, data: Partial<Atencion>): Promise<Atencion>;
  delete(id: number): Promise<void>;
  findByAlertaId(idAlerta: number): Promise<Atencion[]>;
  findByUsuarioDespachador(usuarioDespachador: string): Promise<Atencion[]>;
}
