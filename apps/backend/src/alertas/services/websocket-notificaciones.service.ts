import { Injectable, Logger } from '@nestjs/common';
import { ServicioNotificacionAlerta } from '../interfaces/notificacion.interface';
import { EventsGateway } from '../../events/events.gateway';

@Injectable()
export class ServicioNotificacionWebSocket implements ServicioNotificacionAlerta {
  private readonly logger = new Logger(ServicioNotificacionWebSocket.name);

  constructor(private readonly eventGateway: EventsGateway) {}

  notificarAlertaCreada(datosAlerta: any): void {
    try {
      this.eventGateway.emitirAlerta(datosAlerta);
      this.logger.log(`Alerta ${datosAlerta.uuid} notificada exitosamente`);
    } catch (error) {
      this.logger.error(`Error al notificar alerta ${datosAlerta.uuid}:`, error);
    }
  }

  notificarUbicacionActualizada(uuidAlerta: string, datosUbicacion: any): void {
    try {
      this.eventGateway.emitirUbicacionActualizada(uuidAlerta, datosUbicacion);
      this.logger.log(`Ubicación de alerta ${uuidAlerta} enviada por WebSocket`);
    } catch (error) {
      this.logger.error(`Error al notificar ubicación de alerta ${uuidAlerta}:`, error);
    }
  }
}
