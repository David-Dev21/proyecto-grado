import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Alerta } from '../entities/alerta.entity';
import { ProcesadorUbicacionService } from 'src/alertas/services/procesador-ubicacion.service';
import { EstadoAlerta } from '../../common/enums/alerta.enum';

@Injectable()
export class UbicacionPollingService {
  private readonly logger = new Logger(UbicacionPollingService.name);

  constructor(
    @InjectRepository(Alerta)
    private readonly alertaRepository: Repository<Alerta>,
    private readonly procesadorUbicacion: ProcesadorUbicacionService,
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
      const alertasActivas = await this.alertaRepository.find({
        where: [
          { estado: EstadoAlerta.EN_PELIGRO, deletedAt: IsNull() },
          { estado: EstadoAlerta.EN_CAMINO, deletedAt: IsNull() },
        ],
        select: ['uuid', 'id', 'estado'],
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
