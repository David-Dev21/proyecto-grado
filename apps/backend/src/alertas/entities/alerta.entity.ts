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
import { EstadoAlerta, OrigenAlerta } from '../../common/enums/alerta.enum';

@Entity({ name: 'personas' })
export class Persona {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column() nombres: string;
  @Column() ci: string;
  @Column({ type: 'timestamp' }) fechaNac: Date;
  @Column() celular: string;
  @Column() correo: string;
  @Column() empresaTelefonica: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt?: Date;

  @OneToMany(() => ContactoRef, (contacto) => contacto.persona)
  contactosRef?: ContactoRef[];
  @OneToMany(() => Alerta, (alerta) => alerta.persona)
  alertas?: Alerta[];
}

@Entity({ name: 'contactos_ref' })
export class ContactoRef {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column({ name: 'id_persona' })
  idPersona: number;
  @Column() nombre: string;
  @Column() relacion: string;
  @Column() celular: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt?: Date;
  @ManyToOne(() => Persona, (persona) => persona.contactosRef)
  @JoinColumn({ name: 'id_persona' })
  persona: Persona;
}

@Entity({ name: 'alertas' })
export class Alerta {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column({ type: 'uuid' }) uuid: string;
  @Column({ name: 'id_persona' })
  idPersona: number;
  @Column({ nullable: true }) idMunicipio?: string;
  @Column({ type: 'timestamp' }) fechaHora: Date;
  @Column() codDenuncia: string;
  @Column({ type: 'enum', enum: EstadoAlerta }) estado: EstadoAlerta;
  @Column({ type: 'enum', enum: OrigenAlerta, nullable: true }) origen?: OrigenAlerta;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt?: Date;
  @ManyToOne(() => Persona, (persona) => persona.alertas)
  @JoinColumn({ name: 'id_persona' })
  persona: Persona;

  @OneToMany(() => ContactoRef, (contacto) => contacto.persona)
  contactosRef?: ContactoRef[];
}
