import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AlertasModule } from './alertas/alertas.module';
import { AtencionesModule } from './atenciones/atenciones.module';
import { EventosModule } from './eventos/eventos.module';
import { CierreAlertasModule } from './cierre_alertas/cierre_alertas.module';
import { UbicacionFuncionariosModule } from './ubicacion_funcionarios/ubicacion_funcionarios.module';
import { UbicacionAlertasModule } from './ubicacion_alertas/ubicacion_alertas.module';

import { EventsGateway } from './events/events.gateway';
import { GatewayAuthMiddleware } from './middlewares/gateway-auth.middleware';

@Module({
  imports: [
    AlertasModule,
    AtencionesModule,
    EventosModule,
    CierreAlertasModule,
    UbicacionFuncionariosModule,
    UbicacionAlertasModule,
  ],
  controllers: [],
  providers: [EventsGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(GatewayAuthMiddleware).forRoutes('*'); // Aplica a todas las rutas
  }
}
