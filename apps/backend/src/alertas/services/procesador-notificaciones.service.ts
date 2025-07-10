import { Injectable, Logger } from '@nestjs/common';
import { ProcesadorUbicacionService } from './procesador-ubicacion.service';

/**
 * Servicio para procesar notificaciones y efectos secundarios de las alertas
 * Separado del controlador para mantener responsabilidades claras
 */
@Injectable()
export class ProcesadorNotificacionesService {
  private readonly logger = new Logger(ProcesadorNotificacionesService.name);

  constructor(private readonly procesadorUbicacion: ProcesadorUbicacionService) {}

  /**
   * Procesa todas las notificaciones después de crear una alerta
   * @param uuid UUID de la alerta creada
   */
  async procesarNotificacionesDespuesDeCrear(uuid: string): Promise<void> {
    try {
      this.logger.log(`Procesando notificaciones para alerta ${uuid}`);

      // Notificación síncrona - importante que se ejecute
      await this.procesadorUbicacion.notificarNuevaAlerta(uuid);

      // Procesamiento de ubicación asíncrono - no bloquea la respuesta
      this.procesarUbicacionAsincrono(uuid);
    } catch (error) {
      this.logger.error(`Error procesando notificaciones de alerta ${uuid}:`, error);
      // No propagamos el error para no afectar la respuesta de creación
    }
  }

  /**
   * Procesa la ubicación de forma asíncrona sin bloquear
   * @param uuid UUID de la alerta
   */
  private procesarUbicacionAsincrono(uuid: string): void {
    // Ejecutar sin await para no bloquear
    this.procesadorUbicacion.procesarUbicacionParaAlerta(uuid).catch((error) => {
      this.logger.error(`Error en procesamiento asíncrono de ubicación para ${uuid}:`, error);
    });
  }
}
