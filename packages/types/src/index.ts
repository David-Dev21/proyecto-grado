// Re-exportar tipos y constantes de Prisma generados específicamente para el frontend
export type { 
  EstadoAlerta as EstadoAlertaType, 
  TipoAlerta as TipoAlertaType,
  Persona,
  Alerta,
  ContactoRef,
  Atencion,
  UbicacionAlerta,
  CierreAlerta,
  Evento
} from '../prisma-generated';
export { EstadoAlerta, TipoAlerta } from '../prisma-generated';
import type { EstadoAlerta as EstadoAlertaType } from '../prisma-generated';
import type { Alerta } from '../prisma-generated';

// Eliminada la interfaz AlertaDetalle porque es igual a Alerta de Prisma

export interface AlertaEnProceso {
  uuid: string;
  message: string;
  timestamp: string;
}

export interface CreateAlertaDto {
  IdAlerta: string;
  persona: {
    nombre: string;
    cedulaIdentidad: string;
    fechaNacimiento: string;
  };
  contacto: {
    celular: string;
    correo: string;
  };
  fechaRegistro: string;
  contactos: Array<{
    nombre: string;
    relacion: string;
    celular: string;
  }>;
}

export interface ApiResponse<T = any> {
  status: boolean;
  message: string;
  data?: T;
  error?: string;
}
