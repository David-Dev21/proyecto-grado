import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('funcionarios')
export class Funcionario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  grado: string;

  @Column('varchar')
  nombres: string;

  @Column('varchar')
  apPaterno: string;

  @Column('varchar')
  apMaterno: string;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
