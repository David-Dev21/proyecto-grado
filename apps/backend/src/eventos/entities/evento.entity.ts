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
import { Alerta } from '../../alertas/entities/alerta.entity';
import { Point } from 'geojson';

@Entity({ name: 'eventos' })
export class Evento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'bigint' })
  id_alerta: number;

  @Column({ nullable: true })
  id_funcionario: string;

  @Column({ type: 'timestamp' })
  fecha_hora: Date;

  @Column('geography', {
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  ubicacion?: Point;

  @Column('text')
  comentario: string;

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
