import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AlertasModule } from './alertas/alertas.module';
import { AtencionesModule } from './atenciones/atenciones.module';
import { EventosModule } from './eventos/eventos.module';
import { CierreAlertasModule } from './cierre_alertas/cierre_alertas.module';
import { UbicacionFuncionariosModule } from './ubicacion_funcionarios/ubicacion_funcionarios.module';
import { UbicacionAlertasModule } from './ubicacion_alertas/ubicacion_alertas.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';

import { EventsModule } from './events/events.module';
import { GatewayAuthMiddleware } from './middlewares/gateway-auth.middleware';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    AlertasModule,
    AtencionesModule,
    EventosModule,
    CierreAlertasModule,
    UbicacionFuncionariosModule,
    UbicacionAlertasModule,
    FuncionariosModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(GatewayAuthMiddleware).forRoutes('*'); // Aplica a todas las rutas
  }
}
