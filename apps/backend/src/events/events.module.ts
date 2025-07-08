import { Module, forwardRef } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { AlertasModule } from '../alertas/alertas.module';

@Module({
  imports: [forwardRef(() => AlertasModule)],
  providers: [EventsGateway],
  exports: [EventsGateway],
})
export class EventsModule {}
