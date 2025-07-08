import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ServicioProcesadorUbicacion } from '../alertas/services/ubicacion.service';
import { ServicioNotificacionAlerta } from '../alertas/interfaces/notificacion.interface';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  // Puedes configurar el puerto si no quieres usar el mismo puerto HTTP
  // port: 3002, // Si tu app HTTP es 3001, puedes poner el WS en 3002
  // Si no especificas puerto, usará el mismo puerto de la aplicación HTTP (3001 por defecto)
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect, ServicioNotificacionAlerta {
  @WebSocketServer()
  server: Server; // Esta propiedad 'server' te permitirá emitir eventos a los clientes

  private readonly logger = new Logger(EventsGateway.name);

  // Mapa para trackear qué clientes están viendo qué alertas
  private readonly clientesAlerta = new Map<string, Set<string>>(); // alertaUuid -> Set<clientId>
  private readonly alertasCliente = new Map<string, Set<string>>(); // clientId -> Set<alertaUuid>

  // Intervalos activos para cada alerta
  private readonly intervalosAlerta = new Map<string, NodeJS.Timeout>(); // alertaUuid -> interval

  constructor(private readonly procesadorUbicacion: ServicioProcesadorUbicacion) {
    // Configurar los callbacks para recibir notificaciones
    this.procesadorUbicacion.configurarNotificacionCallback((uuid, ubicacion) => {
      this.emitirUbicacionActualizada(uuid, ubicacion);
    });

    this.procesadorUbicacion.configurarNotificacionAlertaCallback((alerta) => {
      this.emitirAlerta(alerta);
    });
  }

  // --- MÉTODOS DEL CICLO DE VIDA DEL GATEWAY ---
  handleConnection(client: Socket) {
    this.logger.log(`Cliente conectado: ${client.id}`);
    this.alertasCliente.set(client.id, new Set());
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Cliente desconectado: ${client.id}`);
    this.desconectarClienteDeTodasLasAlertas(client.id);
  }

  // --- MANEJADORES DE MENSAJES DEL CLIENTE ---

  /**
   * El cliente se suscribe a recibir actualizaciones de ubicación de una alerta específica
   */
  @SubscribeMessage('suscribirseAlerta')
  handleSuscribirseAlerta(client: Socket, { uuid }: { uuid: string }) {
    this.logger.log(`Cliente ${client.id} se suscribe a alerta ${uuid}`);

    // Agregar cliente a la alerta
    if (!this.clientesAlerta.has(uuid)) {
      this.clientesAlerta.set(uuid, new Set());
    }
    this.clientesAlerta.get(uuid)!.add(client.id);

    // Agregar alerta al cliente
    this.alertasCliente.get(client.id)?.add(uuid);

    // Si es el primer cliente para esta alerta, iniciar el polling
    if (this.clientesAlerta.get(uuid)!.size === 1) {
      this.iniciarPollingParaAlerta(uuid);
    }

    return { event: 'suscripcionConfirmada', data: { uuid } };
  }

  /**
   * El cliente se desuscribe de recibir actualizaciones de ubicación de una alerta específica
   */
  @SubscribeMessage('desuscribirseAlerta')
  handleDesuscribirseAlerta(client: Socket, { uuid }: { uuid: string }) {
    this.logger.log(`Cliente ${client.id} se desuscribe de alerta ${uuid}`);
    this.desconectarClienteDeAlerta(client.id, uuid);
    return { event: 'desuscripcionConfirmada', data: { uuid } };
  }
  // --- MÉTODO PARA EMITIR ALERTAS EN TIEMPO REAL ---
  emitirAlerta(alertaCompleta: any) {
    this.server.emit('nuevaAlerta', alertaCompleta);
    console.log(
      `Alerta emitida para UUID: ${alertaCompleta.uuid}`,
      alertaCompleta.persona ? `- Persona: ${alertaCompleta.persona.nombres}` : '',
    );
  }

  // Método para emitir actualización de ubicación de alerta
  emitirUbicacionActualizada(uuid: string, ubicacionData: any) {
    const payload = {
      uuid,
      ubicacion: ubicacionData,
      timestamp: new Date().toISOString(),
    };

    // Solo emitir a clientes que están suscritos a esta alerta específica
    const clientesSuscritos = this.clientesAlerta.get(uuid);
    if (clientesSuscritos && clientesSuscritos.size > 0) {
      for (const clientId of clientesSuscritos) {
        this.server.to(clientId).emit('alertaUbicacionActualizada', payload);
      }
      this.logger.debug(`Ubicación actualizada emitida para alerta UUID: ${uuid} a ${clientesSuscritos.size} clientes`);
    }
  }

  // --- MÉTODOS PRIVADOS PARA GESTIÓN DE SUSCRIPCIONES ---

  private iniciarPollingParaAlerta(uuid: string) {
    if (this.intervalosAlerta.has(uuid)) {
      return; // Ya está ejecutándose
    }

    this.logger.log(`Iniciando polling para alerta ${uuid}`);

    // Ejecutar inmediatamente una vez
    this.consultarUbicacionAlerta(uuid);

    // Configurar intervalo cada 30 segundos
    const intervalo = setInterval(() => {
      this.consultarUbicacionAlerta(uuid);
    }, 30000); // 30 segundos

    this.intervalosAlerta.set(uuid, intervalo);
  }

  private detenerPollingParaAlerta(uuid: string) {
    const intervalo = this.intervalosAlerta.get(uuid);
    if (intervalo) {
      this.logger.log(`Deteniendo polling para alerta ${uuid}`);
      clearInterval(intervalo);
      this.intervalosAlerta.delete(uuid);
    }
  }

  private async consultarUbicacionAlerta(uuid: string) {
    try {
      await this.procesadorUbicacion.procesarUbicacionParaAlerta(uuid);
      this.logger.debug(`Ubicaciones procesadas para alerta ${uuid}`);
    } catch (error) {
      this.logger.error(`Error al procesar ubicaciones para alerta ${uuid}:`, error);
    }
  }

  private desconectarClienteDeAlerta(clientId: string, uuid: string) {
    // Remover cliente de la alerta
    const clientesDeAlerta = this.clientesAlerta.get(uuid);
    if (clientesDeAlerta) {
      clientesDeAlerta.delete(clientId);

      // Si no quedan clientes para esta alerta, detener el polling
      if (clientesDeAlerta.size === 0) {
        this.detenerPollingParaAlerta(uuid);
        this.clientesAlerta.delete(uuid);
      }
    }

    // Remover alerta del cliente
    this.alertasCliente.get(clientId)?.delete(uuid);
  }

  private desconectarClienteDeTodasLasAlertas(clientId: string) {
    const alertasDelCliente = this.alertasCliente.get(clientId);
    if (alertasDelCliente) {
      // Desconectar de cada alerta
      for (const uuid of alertasDelCliente) {
        this.desconectarClienteDeAlerta(clientId, uuid);
      }
    }

    // Limpiar referencias del cliente
    this.alertasCliente.delete(clientId);
  }

  // --- MÉTODOS PARA EMITIR EVENTOS ---

  // --- IMPLEMENTACIÓN DE ServicioNotificacionAlerta ---

  /**
   * Notifica la creación de una alerta a través de WebSocket
   */
  notificarAlertaCreada(datosAlerta: any): void {
    this.emitirAlerta(datosAlerta);
  }

  /**
   * Notifica la actualización de la ubicación de una alerta a través de WebSocket
   */
  notificarUbicacionActualizada(uuidAlerta: string, datosUbicacion: any): void {
    this.emitirUbicacionActualizada(uuidAlerta, datosUbicacion);
  }
}
