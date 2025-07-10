import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CierreAlertasService } from './cierre_alertas.service';
import { CierreAlertasController } from './cierre_alertas.controller';
import { CierreAlerta } from './entities/cierre-alerta.entity';
import { CierreAlertasRepository } from './repositories/cierre-alertas.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CierreAlerta])],
  controllers: [CierreAlertasController],
  providers: [
    CierreAlertasService,
    CierreAlertasRepository,
    {
      provide: 'ICierreAlertasRepository',
      useClass: CierreAlertasRepository,
    },
  ],
})
export class CierreAlertasModule {}
