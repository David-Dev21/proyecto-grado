import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Alerta } from '../../alertas/entities/alerta.entity';

@Entity({ name: 'atenciones' })
export class Atencion {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column({ type: 'bigint' }) idAlerta: number;
  @Column() usuarioDespachador: string;
  @Column({ type: 'timestamp' }) fechaHora: Date;
  @Column() codVehiculo: string;
  @Column() siglaRadio: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt?: Date;
  @ManyToOne(() => Alerta)
  @JoinColumn()
  alerta: Alerta;

  @OneToMany(() => AtencionFuncionario, (af) => af.atencion)
  funcionarios: AtencionFuncionario[];
}

@Entity({ name: 'atencion_funcionario' })
export class AtencionFuncionario {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column() idAtencion: number;
  @Column({ nullable: true }) idFuncionario?: string;
  @Column() encargado: boolean;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt?: Date;
  @ManyToOne(() => Atencion)
  @JoinColumn()
  atencion: Atencion;
}
