import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Point } from 'geojson';
import { Atencion } from '../../atenciones/entities/atencion.entity';

@Entity('ubicacion_funcionarios')
export class UbicacionFuncionario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'bigint' })
  id_atencion: number;

  @Column({ type: 'timestamp' })
  fecha_hora: Date;

  @Column('geography', {
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  ubicacion: Point;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @ManyToOne(() => Atencion)
  @JoinColumn({ name: 'id_atencion' })
  atencion: Atencion;
}
