import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect 
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io'; 

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  // Puedes configurar el puerto si no quieres usar el mismo puerto HTTP
  // port: 3002, // Si tu app HTTP es 3001, puedes poner el WS en 3002
  // Si no especificas puerto, usará el mismo puerto de la aplicación HTTP (3001 por defecto)
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server; // Esta propiedad 'server' te permitirá emitir eventos a los clientes

  // Constructor para inyectar servicios si los necesitas (ej. un servicio de alertas)
  constructor(/* private readonly alertsService: AlertsService */) {}


  // --- MÉTODOS DEL CICLO DE VIDA DEL GATEWAY ---
  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  // --- MANEJADORES DE MENSAJES DEL CLIENTE (si el frontend envía algo) ---
  @SubscribeMessage('messageFromClient') // Nombre del evento que el cliente enviará
  handleMessage(client: Socket, payload: any): WsResponse<string> {
    console.log(`Mensaje de ${client.id}:`, payload);
    // Puedes procesar el mensaje del cliente aquí
    return { event: 'messageFromServer', data: '¡Mensaje recibido por el servidor!' }; // Opcional: responder al cliente

  }  
  // --- MÉTODO PARA EMITIR ALERTAS EN TIEMPO REAL ---
  emitirAlerta(alertaCompleta: any) {
    this.server.emit('nuevaAlerta', alertaCompleta);
    console.log(`Alerta emitida para UUID: ${alertaCompleta.uuid}`, alertaCompleta.persona ? `- Persona: ${alertaCompleta.persona.nombres}` : '');
  }  

  // Método para emitir actualización de ubicación de alerta
  emitirUbicacionActualizada(uuid: string, ubicacionData: any) {
    const payload = {
      uuid,
      ubicacion: ubicacionData,
      timestamp: new Date().toISOString()
    };
    
    this.server.emit('alertaUbicacionActualizada', payload);
    console.log(`Ubicación actualizada emitida para alerta UUID: ${uuid}`, payload);
  }
}