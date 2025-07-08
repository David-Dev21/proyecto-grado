import { Injectable } from '@nestjs/common';
import { EventsGateway } from '../../events/events.gateway';
import { ServicioNotificacionAlerta } from '../interfaces/notificacion.interface';

/**
 * Implementación de servicio de notificación usando WebSockets
 */
@Injectable()
export class WebSocketNotificacionService implements ServicioNotificacionAlerta {
  constructor(private readonly eventsGateway: EventsGateway) {}

  /**
   * Notifica la creación de una alerta a través de WebSocket
   */
  notificarAlertaCreada(datosAlerta: any): void {
    this.eventsGateway.emitirAlerta(datosAlerta);
  }

  /**
   * Notifica la actualización de la ubicación de una alerta a través de WebSocket
   */
  notificarUbicacionActualizada(uuidAlerta: string, datosUbicacion: any): void {
    this.eventsGateway.emitirUbicacionActualizada(uuidAlerta, datosUbicacion);
  }
}
