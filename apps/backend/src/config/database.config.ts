import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { join } from 'path';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'alertas',
  entities: [join(__dirname, '..', '**', '*.entity{.ts,.js}')],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
};
