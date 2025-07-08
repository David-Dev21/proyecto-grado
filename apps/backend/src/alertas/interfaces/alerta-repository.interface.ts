import { Alerta, EstadoAlerta, OrigenAlerta } from '@prisma/client';

export interface AlertaRepository {
  findAll(): Promise<AlertaWithRelations[]>;
  findByUuid(uuid: string): Promise<AlertaWithRelations | null>;
  create(data: CreateAlertaData): Promise<Alerta>;
  update(uuid: string, data: UpdateAlertaData): Promise<AlertaWithRelations | null>;
  softDelete(uuid: string): Promise<void>;
  findByUuidNotDeleted(uuid: string): Promise<Alerta | null>;
}

export interface CreateAlertaData {
  uuid: string;
  id_persona: bigint;
  fecha_hora: Date;
  nro_caso: string;
  estado: EstadoAlerta;
  origen: OrigenAlerta;
}

export interface UpdateAlertaData {
  fecha_hora?: Date;
  estado?: EstadoAlerta;
  updated_at?: Date;
}

// Tipo para alertas con relaciones incluidas
export interface AlertaWithRelations extends Alerta {
  persona: {
    id: bigint;
    nombres: string;
    ci: string;
    fecha_nac: Date | null;
    celular: string | null;
    correo: string | null;
    contactos_ref: Array<{
      id: bigint;
      nombre: string;
      relacion: string;
      celular: string;
    }>;
  };
}
