import { Module } from '@nestjs/common';
import { AlertasModule } from './alertas/alertas.module';
import { AtencionesModule } from './atenciones/atenciones.module';
import { EventosModule } from './eventos/eventos.module';
import { CierreAlertasModule } from './cierre_alertas/cierre_alertas.module';
import { UbicacionFuncionariosModule } from './ubicacion_funcionarios/ubicacion_funcionarios.module';
import { UbicacionAlertasModule } from './ubicacion_alertas/ubicacion_alertas.module';

@Module({
    imports: [
        AlertasModule,
        AtencionesModule,
        EventosModule,
        CierreAlertasModule,
        UbicacionFuncionariosModule,
        UbicacionAlertasModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }