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
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'uuid', nullable: true })
  uuid?: string;

  @Column()
  nombres: string;

  @Column()
  ap_paterno: string;

  @Column()
  ap_materno: string;

  @Column()
  ci: string;

  @Column({ type: 'timestamp' })
  fecha_nac: Date;

  @Column()
  celular: string;

  @Column()
  correo: string;

  @Column()
  empresa_telefonica: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @OneToMany(() => ContactoRef, (contacto) => contacto.persona)
  contactos_ref?: ContactoRef[];

  @OneToMany(() => Alerta, (alerta) => alerta.persona)
  alertas?: Alerta[];
}

@Entity({ name: 'contactos_ref' })
export class ContactoRef {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  id_persona: number;

  @Column()
  nombre: string;

  @Column()
  relacion: string;

  @Column()
  celular: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @ManyToOne(() => Persona, (persona) => persona.contactos_ref)
  @JoinColumn({ name: 'id_persona' })
  persona: Persona;
}

@Entity({ name: 'alertas' })
export class Alerta {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'uuid' })
  uuid: string;

  @Column()
  id_persona: number;

  @Column({ nullable: true })
  id_municipio?: string;

  @Column({ type: 'timestamp' })
  fecha_hora: Date;

  @Column()
  nro_caso: string;

  @Column({ type: 'enum', enum: EstadoAlerta })
  estado: EstadoAlerta;

  @Column({ type: 'enum', enum: OrigenAlerta, nullable: true })
  origen?: OrigenAlerta;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @ManyToOne(() => Persona, (persona) => persona.alertas)
  @JoinColumn({ name: 'id_persona' })
  persona?: Persona;

  @OneToMany(() => ContactoRef, (contacto) => contacto.persona)
  contactos_ref?: ContactoRef[];
}
