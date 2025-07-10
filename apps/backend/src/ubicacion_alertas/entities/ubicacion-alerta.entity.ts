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
import { Alerta } from '../../alertas/entities/alerta.entity';

@Entity({ name: 'ubicacion_alertas' })
export class UbicacionAlerta {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'bigint' })
  id_alerta: number;

  @Column({ type: 'timestamp' })
  fecha_hora: Date;

  @Column('geography', {
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  ubicacion: Point;

  @Column('text', { nullable: true })
  direccion?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @ManyToOne(() => Alerta)
  @JoinColumn({ name: 'id_alerta' })
  alerta: Alerta;
}
