import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlertasService } from './alertas.service';
import { AlertasController } from './alertas.controller';
import { UbicacionAlertasModule } from 'src/ubicacion_alertas/ubicacion_alertas.module';
import { AtencionesModule } from 'src/atenciones/atenciones.module';
import { EventsModule } from '../events/events.module';
import { PersonaService } from './services/persona.service';
import { CudService } from './services/cud.service';
import { ServicioSistemaExternoAtt } from './services/att-ruta.service';
import { ProcesadorUbicacionService } from './services/procesador-ubicacion.service';
import { UbicacionPollingService } from './services/ubicacion-polling.service';
import { AlertasRepository } from './repositories/alertas.repository';
import { PersonaRepository } from './repositories/persona.repository';
import { ContactoRepository } from './repositories/contacto.repository';
import { ProcesadorNotificacionesService } from './services/procesador-notificaciones.service';
import { ManejoErroresService } from './services/manejo-errores.service';
import {
  PersonaRepositoryToken,
  ContactoRepositoryToken,
  AlertaRepositoryToken,
  ServicioSistemaExternoToken,
} from '../constants/injection-tokens';
import { Alerta, Persona, ContactoRef } from './entities/alerta.entity';

// Tokens para inyección de dependencias
// Movidos a constants/injection-tokens.ts

@Module({
  imports: [
    TypeOrmModule.forFeature([Alerta, Persona, ContactoRef]),
    UbicacionAlertasModule,
    AtencionesModule,
    forwardRef(() => EventsModule),
  ],
  controllers: [AlertasController],
  providers: [
    AlertasService,
    CudService,
    ProcesadorUbicacionService,
    UbicacionPollingService,
    ProcesadorNotificacionesService,
    ManejoErroresService,
    PersonaService,
    AlertasRepository,
    PersonaRepository,
    ContactoRepository,
    {
      provide: AlertaRepositoryToken,
      useClass: AlertasRepository,
    },
    {
      provide: PersonaRepositoryToken,
      useClass: PersonaRepository,
    },
    {
      provide: ContactoRepositoryToken,
      useClass: ContactoRepository,
    },
    {
      provide: ServicioSistemaExternoToken,
      useClass: ServicioSistemaExternoAtt,
    },
  ],
  exports: [ProcesadorUbicacionService],
})
export class AlertasModule {}

// Re-exportar los tokens para uso externo si es necesario
export {
  PersonaRepositoryToken,
  ContactoRepositoryToken,
  AlertaRepositoryToken,
  ServicioSistemaExternoToken,
} from '../constants/injection-tokens';
