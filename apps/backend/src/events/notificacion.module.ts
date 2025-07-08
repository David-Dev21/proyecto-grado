import { Module } from '@nestjs/common';
import { WebSocketNotificacionService } from '../alertas/services/websocket-notificacion.service';
import { ServicioNotificacionToken } from '../alertas/constants/injection-tokens';

@Module({
  providers: [
    WebSocketNotificacionService,
    {
      provide: ServicioNotificacionToken,
      useClass: WebSocketNotificacionService,
    },
  ],
  exports: [WebSocketNotificacionService, ServicioNotificacionToken],
})
export class NotificacionModule {}
