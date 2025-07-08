import { Injectable, Logger, Inject } from '@nestjs/common';
import { ServicioSistemaExterno } from '../interfaces/att-ruta.interface';
import { UbicacionAlertasService } from '../../ubicacion_alertas/ubicacion_alertas.service';
import { AlertasService } from '../alertas.service';
import { CreateUbicacionAlertaDto } from '../../ubicacion_alertas/dto/create-ubicacion_alerta.dto';
import { ServicioSistemaExternoToken } from '../constants/injection-tokens';

@Injectable()
export class ServicioProcesadorUbicacion {
  private readonly logger = new Logger(ServicioProcesadorUbicacion.name);

  // Callbacks para notificaciones (serán inyectados por el EventsGateway)
  private notificacionUbicacionCallback: ((uuid: string, ubicacion: any) => void) | null = null;
  private notificacionAlertaCallback: ((alerta: any) => void) | null = null;

  constructor(
    @Inject(ServicioSistemaExternoToken) private readonly servicioSistemaExterno: ServicioSistemaExterno,
    private readonly ubicacionAlertasService: UbicacionAlertasService,
    private readonly alertasService: AlertasService,
  ) {}

  // Método para configurar el callback de notificación de ubicaciones
  configurarNotificacionCallback(callback: (uuid: string, ubicacion: any) => void) {
    this.notificacionUbicacionCallback = callback;
  }

  // Método para configurar el callback de notificación de nuevas alertas
  configurarNotificacionAlertaCallback(callback: (alerta: any) => void) {
    this.notificacionAlertaCallback = callback;
  }

  // Método para notificar nueva alerta creada
  async notificarNuevaAlerta(uuidAlerta: string): Promise<void> {
    if (this.notificacionAlertaCallback) {
      try {
        // Obtener la alerta completa con datos de la persona
        const alertaCompleta = await this.alertasService.findOne(uuidAlerta);
        if (alertaCompleta) {
          // Crear objeto simplificado para notificación
          const alertaSimplificada = this.createSimplifiedAlert(alertaCompleta);
          this.notificacionAlertaCallback(alertaSimplificada);
        }
      } catch (error) {
        this.logger.error(`Error al notificar nueva alerta ${uuidAlerta}:`, error);
      }
    }
  }

  private createSimplifiedAlert(alertaCompleta: any) {
    return {
      uuid: alertaCompleta.uuid,
      fecha_hora: alertaCompleta.fecha_hora,
      estado: alertaCompleta.estado,
      persona: {
        nombres: alertaCompleta.persona?.nombres || 'Sin nombre',
        ap_paterno: alertaCompleta.persona?.ap_paterno || '',
        ap_materno: alertaCompleta.persona?.ap_materno || '',
        ci: alertaCompleta.persona?.ci || '',
      },
      nro_caso: alertaCompleta.nro_caso || 'Sin número',
    };
  }

  async procesarUbicacionParaAlerta(uuidAlerta: string): Promise<void> {
    try {
      // Obtener rutas del sistema externo
      const datosRutas = await this.servicioSistemaExterno.obtenerRuta(uuidAlerta);

      if (!datosRutas || datosRutas.length === 0) {
        this.logger.warn(`No se pudo obtener ubicaciones válidas para alerta ${uuidAlerta}`);
        return;
      }

      // Buscar la alerta por UUID para obtener su ID numérico
      const alerta = await this.alertasService.findOne(uuidAlerta);
      if (!alerta) {
        this.logger.error(`No se encontró alerta con UUID ${uuidAlerta}`);
        return;
      }

      // Contadores para el reporte
      let ubicacionesGuardadas = 0;
      let ubicacionesDuplicadas = 0;
      let ubicacionesError = 0;

      // Procesar cada ubicación
      for (const datosRuta of datosRutas) {
        if (!datosRuta.latitud || !datosRuta.longitud) {
          continue;
        }

        const fechaHora = new Date(datosRuta.fecha || new Date());
        const latitud = parseFloat(datosRuta.latitud);
        const longitud = parseFloat(datosRuta.longitud);

        // Verificar si la ubicación ya existe
        const yaExiste = await this.ubicacionAlertasService.existeUbicacion(
          Number(alerta.id),
          fechaHora,
          latitud,
          longitud,
        );

        if (yaExiste) {
          ubicacionesDuplicadas++;
          this.logger.debug(
            `Ubicación duplicada ignorada para alerta ${uuidAlerta}: ${latitud}, ${longitud} en ${fechaHora}`,
          );
          continue;
        }

        const datosUbicacion: CreateUbicacionAlertaDto = {
          id_alerta: Number(alerta.id),
          fecha_hora: fechaHora.toISOString(),
          latitud: latitud,
          longitud: longitud,
        };

        try {
          const resultado = await this.ubicacionAlertasService.create(datosUbicacion);
          if (resultado.data) {
            ubicacionesGuardadas++;
          } else {
            ubicacionesDuplicadas++; // El servicio detectó duplicado
          }
        } catch (error) {
          ubicacionesError++;
          this.logger.error(`Error al guardar ubicación individual:`, error);
          // Continuar con las demás ubicaciones aunque una falle
        }
      }

      this.logger.log(
        `Procesamiento completado para alerta ${uuidAlerta}: ${ubicacionesGuardadas} nuevas, ${ubicacionesDuplicadas} duplicadas, ${ubicacionesError} errores`,
      );

      // Notificar actualización de ubicación solo si se guardaron nuevas ubicaciones
      if (ubicacionesGuardadas > 0 && datosRutas.length > 0 && this.notificacionUbicacionCallback) {
        const ubicacionMasReciente = datosRutas[0];
        this.notificacionUbicacionCallback(uuidAlerta, {
          latitud: ubicacionMasReciente.latitud,
          longitud: ubicacionMasReciente.longitud,
          fecha: ubicacionMasReciente.fecha,
        });
      }
    } catch (error) {
      this.logger.error(`Error al procesar ubicaciones para alerta ${uuidAlerta}:`, error);
      // No interrumpimos el flujo principal si falla la ubicación
    }
  }
}
