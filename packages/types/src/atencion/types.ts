export interface Atencion {
  id: number;
  idAlerta: number;
  usuarioDespachador: string;
  fechaHora: Date;
  comentario?: string;
  alerta?: Alerta;
}

export interface AtencionRepository {
  findAll(): Promise<Atencion[]>;
  findOne(id: string): Promise<Atencion | null>;
  findByAlertaId(idAlerta: number): Promise<Atencion[]>;
  create(data: Partial<Atencion>): Promise<Atencion>;
  update(id: string, data: Partial<Atencion>): Promise<Atencion>;
  delete(id: string): Promise<void>;
}
