import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Alerta } from '../../alertas/entities/alerta.entity';

@Entity('cierre_alertas')
export class CierreAlerta {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'bigint', name: 'id_alerta' })
  idAlerta: number;

  @Column({ type: 'uuid', name: 'id_funcionario' })
  idFuncionario: string;

  @Column({ type: 'timestamp', name: 'fecha_hora' })
  fechaHora: Date;

  @Column('text')
  comentario: string;

  @Column({
    type: 'enum',
    enum: ['EMERGENCIA', 'INCIDENTE', 'MANTENIMIENTO', 'INFORMATIVO', 'ROBO', 'VIOLENCIA', 'ACCIDENTE', 'OTRO'],
    name: 'tipo_alerta',
  })
  tipoAlerta: string;

  @Column('text', { name: 'estado_victima' })
  estadoVictima: string;

  @Column('varchar', { name: 'nombre_agresor' })
  nombreAgresor: string;

  @Column('varchar', { name: 'ci_agresor' })
  ciAgresor: string;

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
