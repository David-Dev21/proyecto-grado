import { Injectable, Logger, Inject } from '@nestjs/common';
import { ServicioSistemaExterno } from '../interfaces/att-ruta.interface';
import { UbicacionAlertasService } from '../../ubicacion_alertas/ubicacion_alertas.service';
import { ServicioNotificacionAlerta } from '../interfaces/notificacion.interface';
import { AlertasService } from '../alertas.service';
import { CreateUbicacionAlertaDto } from '../../ubicacion_alertas/dto/create-ubicacion_alerta.dto';
import { SERVICIO_SISTEMA_EXTERNO, SERVICIO_NOTIFICACION } from '../constants/injection-tokens';

@Injectable()
export class ServicioProcesadorUbicacion {
  private readonly logger = new Logger(ServicioProcesadorUbicacion.name);

  constructor(
    @Inject(SERVICIO_SISTEMA_EXTERNO) private readonly servicioSistemaExterno: ServicioSistemaExterno,
    private readonly ubicacionAlertasService: UbicacionAlertasService,
    @Inject(SERVICIO_NOTIFICACION) private readonly servicioNotificacion: ServicioNotificacionAlerta,
    private readonly alertasService: AlertasService,
  ) {}

  async procesarUbicacionParaAlerta(uuidAlerta: string): Promise<void> {
    try {
      // Obtener ruta del sistema externo
      const datosRuta = await this.servicioSistemaExterno.obtenerRuta(uuidAlerta);

      if (!datosRuta || !datosRuta.latitud || !datosRuta.longitud) {
        this.logger.warn(`No se pudo obtener ubicación válida para alerta ${uuidAlerta}`);
        return;
      }

      // Buscar la alerta por UUID para obtener su ID numérico
      const alerta = await this.alertasService.findOne(uuidAlerta);
      if (!alerta) {
        this.logger.error(`No se encontró alerta con UUID ${uuidAlerta}`);
        return;
      }

      // Guardar la ubicación en la base de datos
      const datosUbicacion: CreateUbicacionAlertaDto = {
        id_alerta: Number(alerta.id),
        fecha_hora: new Date(datosRuta.fecha || new Date()).toISOString(),
        latitud: parseFloat(datosRuta.latitud),
        longitud: parseFloat(datosRuta.longitud),
      };

      const ubicacionGuardada = await this.ubicacionAlertasService.create(datosUbicacion);
      this.logger.log(`Ubicación guardada para alerta ${uuidAlerta}:`, ubicacionGuardada);

      // Notificar actualización de ubicación
      this.servicioNotificacion.notificarUbicacionActualizada(uuidAlerta, {
        latitud: datosRuta.latitud,
        longitud: datosRuta.longitud,
        fecha: datosRuta.fecha,
      });
    } catch (error) {
      this.logger.error(`Error al procesar ubicación para alerta ${uuidAlerta}:`, error);
      // No interrumpimos el flujo principal si falla la ubicación
    }
  }
}
