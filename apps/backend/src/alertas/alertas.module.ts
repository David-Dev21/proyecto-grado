import { Module, forwardRef } from '@nestjs/common';
import { AlertasService } from './alertas.service';
import { AlertasController } from './alertas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UbicacionAlertasModule } from 'src/ubicacion_alertas/ubicacion_alertas.module';
import { AtencionesModule } from 'src/atenciones/atenciones.module';
import { EventsModule } from '../events/events.module';
import { PersonaService } from './services/persona.service';
import { CudService } from './services/cud.service';
import { PrismaPersonaRepository } from './repositories/prisma-persona.repository';
import { PrismaContactoRepository } from './repositories/prisma-contacto.repository';
import { ServicioSistemaExternoAtt } from './services/att-ruta.service';
import { ServicioProcesadorUbicacion } from './services/ubicacion.service';
import { UbicacionPollingService } from './services/ubicacion-polling.service';
import { PrismaAlertaRepository } from './repositories/prisma-alerta.repository';
import {
  PersonaRepositoryToken,
  ContactoRepositoryToken,
  AlertaRepositoryToken,
  ServicioSistemaExternoToken,
} from './constants/injection-tokens';

// Tokens para inyección de dependencias
// Movidos a constants/injection-tokens.ts

@Module({
  controllers: [AlertasController],
  providers: [
    AlertasService,
    CudService,
    ServicioProcesadorUbicacion,
    UbicacionPollingService,
    // Primero registro los repositorios como providers normales
    PrismaPersonaRepository,
    PrismaContactoRepository,
    PrismaAlertaRepository,
    // Luego registro el PersonaService
    PersonaService,
    // Finalmente registro los tokens con factory functions simples
    {
      provide: PersonaRepositoryToken,
      useExisting: PrismaPersonaRepository,
    },
    {
      provide: ContactoRepositoryToken,
      useExisting: PrismaContactoRepository,
    },
    {
      provide: AlertaRepositoryToken,
      useExisting: PrismaAlertaRepository,
    },
    {
      provide: ServicioSistemaExternoToken,
      useClass: ServicioSistemaExternoAtt,
    },
    // El SERVICIO_NOTIFICACION ahora será inyectado desde EventsModule
  ],
  imports: [PrismaModule, UbicacionAlertasModule, AtencionesModule, forwardRef(() => EventsModule)],
  exports: [ServicioProcesadorUbicacion],
})
export class AlertasModule {}

// Re-exportar los tokens para uso externo si es necesario
export {
  PersonaRepositoryToken,
  ContactoRepositoryToken,
  AlertaRepositoryToken,
  ServicioSistemaExternoToken,
} from './constants/injection-tokens';
