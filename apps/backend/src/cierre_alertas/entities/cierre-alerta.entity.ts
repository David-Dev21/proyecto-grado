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

@Entity('cierre_alertas')
export class CierreAlerta {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'bigint' })
  id_alerta: number;

  @Column({ type: 'uuid' })
  id_funcionario: string;

  @Column({ type: 'timestamp' })
  fecha_hora: Date;

  @Column('text')
  comentario: string;

  @Column({
    type: 'enum',
    enum: ['EMERGENCIA', 'INCIDENTE', 'MANTENIMIENTO', 'INFORMATIVO', 'ROBO', 'VIOLENCIA', 'ACCIDENTE', 'OTRO'],
  })
  tipo_alerta: string;

  @Column('text')
  estado_victima: string;

  @Column('varchar')
  nombre_agresor: string;

  @Column('varchar')
  ci_agresor: string;

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
