import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Point } from 'geojson';
import { Alerta } from '../../alertas/entities/alerta.entity';

@Entity({ name: 'ubicacion_alertas' })
export class UbicacionAlerta {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'bigint', name: 'id_alerta' })
  idAlerta: number;

  @Column({ type: 'timestamp', name: 'fecha_hora' })
  fechaHora: Date;

  @Column('geography', {
    spatialFeatureType: 'Point',
    srid: 4326,
    name: 'ubicacion',
  })
  ubicacion: Point;

  @Column('text', { nullable: true })
  direccion?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @ManyToOne(() => Alerta)
  @JoinColumn({ name: 'id_alerta' })
  alerta: Alerta;
}
