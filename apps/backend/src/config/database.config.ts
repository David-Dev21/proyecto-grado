import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Alerta, Persona, ContactoRef } from '../alertas/entities/alerta.entity';
import { Atencion, AtencionFuncionario } from '../atenciones/entities/atencion.entity';
import { UbicacionAlerta } from '../ubicacion_alertas/entities/ubicacion-alerta.entity';
import { Funcionario } from '../funcionarios/entities/funcionario.entity';
import { Evento } from '../eventos/entities/evento.entity';
import { UbicacionFuncionario } from '../ubicacion_funcionarios/entities/ubicacion-funcionario.entity';
import { CierreAlerta } from '../cierre_alertas/entities/cierre-alerta.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'alertas',
  entities: [Alerta, Persona, ContactoRef, Atencion, AtencionFuncionario, UbicacionAlerta, Funcionario, Evento, UbicacionFuncionario, CierreAlerta],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  // logging: true,
};
