export interface ServicioNotificacionAlerta {
  notificarAlertaCreada(datosAlerta: any): void;
  notificarUbicacionActualizada(uuidAlerta: string, datosUbicacion: any): void;
}
