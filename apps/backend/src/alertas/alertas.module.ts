import { Module } from '@nestjs/common';
import { AlertasService } from './alertas.service';
import { AlertasController } from './alertas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EventsGateway } from 'src/events/events.gateway';
import { UbicacionAlertasModule } from 'src/ubicacion_alertas/ubicacion_alertas.module';
import { AtencionesModule } from 'src/atenciones/atenciones.module';
import { PersonaService } from './services/persona.service';
import { CudService } from './services/cud.service';
import { PrismaPersonaRepository } from './repositories/prisma-persona.repository';
import { PrismaContactoRepository } from './repositories/prisma-contacto.repository';
import { ServicioSistemaExternoAtt } from './services/att-ruta.service';
import { ServicioNotificacionWebSocket } from './services/websocket-notificaciones.service';
import { ServicioProcesadorUbicacion } from './services/ubicacion.service';
import {
  PERSONA_REPOSITORY,
  CONTACTO_REPOSITORY,
  SERVICIO_SISTEMA_EXTERNO,
  SERVICIO_NOTIFICACION,
} from './constants/injection-tokens';

// Tokens para inyección de dependencias
// Movidos a constants/injection-tokens.ts

@Module({
  controllers: [AlertasController],
  providers: [
    AlertasService,
    EventsGateway,
    CudService,
    ServicioProcesadorUbicacion,
    // Primero registro los repositorios como providers normales
    PrismaPersonaRepository,
    PrismaContactoRepository,
    // Luego registro el PersonaService
    PersonaService,
    // Finalmente registro los tokens con factory functions simples
    {
      provide: PERSONA_REPOSITORY,
      useExisting: PrismaPersonaRepository,
    },
    {
      provide: CONTACTO_REPOSITORY,
      useExisting: PrismaContactoRepository,
    },
    {
      provide: SERVICIO_SISTEMA_EXTERNO,
      useClass: ServicioSistemaExternoAtt,
    },
    {
      provide: SERVICIO_NOTIFICACION,
      useClass: ServicioNotificacionWebSocket,
    },
  ],
  imports: [PrismaModule, UbicacionAlertasModule, AtencionesModule],
})
export class AlertasModule {}

// Re-exportar los tokens para uso externo si es necesario
export {
  PERSONA_REPOSITORY,
  CONTACTO_REPOSITORY,
  SERVICIO_SISTEMA_EXTERNO,
  SERVICIO_NOTIFICACION,
} from './constants/injection-tokens';
