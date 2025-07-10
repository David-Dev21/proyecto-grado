import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosController } from './eventos.controller';
import { EventosService } from './eventos.service';
import { Evento } from './entities/evento.entity';
import { EventosRepository } from './repositories/eventos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  controllers: [EventosController],
  providers: [
    EventosService,
    EventosRepository,
    {
      provide: 'IEventosRepository',
      useClass: EventosRepository,
    },
  ],
  exports: [EventosService],
})
export class EventosModule {}
