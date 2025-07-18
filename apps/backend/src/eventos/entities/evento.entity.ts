import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Alerta } from '../../alertas/entities/alerta.entity';
import { Point } from 'geojson';

@Entity({ name: 'eventos' })
export class Evento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'bigint' })
  idAlerta: number;

  @Column({ nullable: true })
  idFuncionario: string;

  @Column({ type: 'varchar', nullable: true })
  idSeguimiento?: string;

  @Column({ type: 'timestamp' })
  fechaHora: Date;

  @Column('geography', {
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  ubicacion?: Point;

  @Column('text')
  comentario: string;

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
