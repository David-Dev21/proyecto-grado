import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicioProcesadorUbicacion } from 'src/alertas/services/ubicacion.service';

@Injectable()
export class UbicacionPollingService {
  private readonly logger = new Logger(UbicacionPollingService.name);

  constructor(
    private readonly prismaService: PrismaService,
    private readonly procesadorUbicacion: ServicioProcesadorUbicacion,
  ) {}

  /**
   * Método manual para consultar ubicaciones de alertas activas
   * Este método ya no se ejecuta automáticamente, sino que es llamado por el EventsGateway
   * cuando hay clientes conectados que necesitan actualizaciones de ubicación
   */
  async consultarUbicacionesAlertasActivas() {
    this.logger.log('Iniciando consulta de ubicaciones para alertas activas...');

    try {
      // Obtener todas las alertas en estado EN_PELIGRO o EN_CAMINO (activas)
      const alertasActivas = await this.prismaService.alerta.findMany({
        where: {
          estado: {
            in: ['EN_PELIGRO', 'EN_CAMINO'],
          },
          deleted_at: null, // No incluir alertas eliminadas
        },
        select: {
          uuid: true,
          id: true,
          estado: true,
        },
      });

      this.logger.log(`Se encontraron ${alertasActivas.length} alertas activas para consultar ubicaciones`);

      // Para cada alerta activa, procesar ubicaciones
      for (const alerta of alertasActivas) {
        try {
          await this.procesadorUbicacion.procesarUbicacionParaAlerta(alerta.uuid);
          this.logger.debug(`Ubicaciones procesadas para alerta ${alerta.uuid}`);
        } catch (error) {
          this.logger.error(`Error al procesar ubicaciones para alerta ${alerta.uuid}:`, error);
          // Continuar con la siguiente alerta aunque una falle
        }
      }

      this.logger.log('Consulta de ubicaciones para alertas activas completada');
    } catch (error) {
      this.logger.error('Error al consultar ubicaciones para alertas activas:', error);
    }
  }
}
