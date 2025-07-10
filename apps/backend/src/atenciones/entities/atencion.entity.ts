import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Alerta } from '../../alertas/entities/alerta.entity';

@Entity({ name: 'atenciones' })
export class Atencion {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'bigint' })
  id_alerta: number;

  @Column()
  usuario_despachador: string;

  @Column({ type: 'timestamp' })
  fecha_hora: Date;

  @Column('text', { nullable: true })
  comentario?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @ManyToOne(() => Alerta)
  @JoinColumn({ name: 'id_alerta' })
  alerta: Alerta;

  @OneToMany(() => AtencionFuncionario, af => af.atencion)
  funcionarios: AtencionFuncionario[];
}

@Entity({ name: 'atencion_funcionario' })
export class AtencionFuncionario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  id_atencion: number;

  @Column({ nullable: true })
  id_funcionario?: string;

  @Column()
  encargado: boolean;

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

  @ApiProperty({ description: 'Es encargado de la atención' })
  encargado: boolean;

  @ApiProperty({ description: 'Fecha de creación' })
  created_at: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updated_at: Date;

  @ApiProperty({ description: 'Fecha de eliminación', required: false })
  deleted_at?: Date;
}

export class AtencionEntity {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  usuario_despachador: bigint;

  @ApiProperty()
  id_vehiculo: string;

  @ApiProperty({ required: false })
  sigla_radio?: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty({ required: false })
  deleted_at?: Date;

  @ApiProperty({ 
    type: [AtencionFuncionarioEntity],
    required: false
  })
  atencion_funcionario?: AtencionFuncionarioEntity[];
}

export class AtencionAlertaEntity {
  @ApiProperty({ description: 'ID de la atención' })
  id: string;

  @ApiProperty({ description: 'UUID de la atención' })
  uuid: string;

  @ApiProperty({ description: 'ID de la alerta relacionada' })
  id_alerta: string;

  @ApiProperty({ description: 'ID del usuario despachador' })
  usuario_despachador: string;

  @ApiProperty({ description: 'ID del vehículo' })
  id_vehiculo: string;

  @ApiProperty({ description: 'Sigla del radio', required: false })
  sigla_radio?: string;

  @ApiProperty({ description: 'Fecha de creación' })
  created_at: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updated_at: Date;

  @ApiProperty({ description: 'Fecha de eliminación', required: false })
  deleted_at?: Date;

  @ApiProperty({ 
    description: 'Información básica de la alerta',
    type: AlertaCasoEntity
  })
  alerta: AlertaCasoEntity;

  @ApiProperty({ 
    description: 'Funcionarios asignados a la atención',
    type: [AtencionFuncionarioWithDetailsEntity]
  })
  atencion_funcionario: AtencionFuncionarioWithDetailsEntity[];
}
