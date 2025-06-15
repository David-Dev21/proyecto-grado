import { ApiProperty } from '@nestjs/swagger';
import { EstadoAlerta } from '@prisma/client';

export class PersonaEntity {
  @ApiProperty({ description: 'ID de la persona' })
  id: bigint;

  @ApiProperty({ description: 'Nombres de la persona' })
  nombres: string;

  @ApiProperty({ description: 'Apellido paterno' })
  ap_paterno: string;

  @ApiProperty({ description: 'Apellido materno' })
  ap_materno: string;

  @ApiProperty({ description: 'Cédula de identidad' })
  ci: string;

  @ApiProperty({ description: 'Fecha de nacimiento' })
  fecha_nac: Date;

  @ApiProperty({ description: 'Número de celular' })
  celular: string;

  @ApiProperty({ description: 'Correo electrónico' })
  correo: string;

  @ApiProperty({ description: 'Empresa telefónica' })
  empresa_telefonica: string;

  @ApiProperty({ description: 'Fecha de creación' })
  created_at: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updated_at: Date;

  @ApiProperty({ description: 'Fecha de eliminación', required: false })
  deleted_at?: Date;
}

export class ContactoRefEntity {
  @ApiProperty({ description: 'ID del contacto de referencia' })
  id: bigint;

  @ApiProperty({ description: 'ID de la persona' })
  id_persona: bigint;

  @ApiProperty({ description: 'Nombre del contacto' })
  nombre: string;

  @ApiProperty({ description: 'Relación con la persona' })
  relacion: string;

  @ApiProperty({ description: 'Número de celular del contacto' })
  celular: string;

  @ApiProperty({ description: 'Fecha de creación' })
  created_at: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updated_at: Date;

  @ApiProperty({ description: 'Fecha de eliminación', required: false })
  deleted_at?: Date;
}

export class AlertaEntity {
  @ApiProperty({ 
    description: 'ID único de la alerta',
    example: '29a0c554-7456-4ee6-ae8f-65778d84a838'
  })
  id: string;

  @ApiProperty({ description: 'ID de la persona relacionada' })
  id_persona: bigint;

  @ApiProperty({ description: 'ID de atención', required: false })
  id_atencion?: bigint;

  @ApiProperty({ description: 'ID del municipio', required: false })
  id_municipio?: string;

  @ApiProperty({ description: 'ID de cierre de alerta', required: false })
  id_cierre_alerta?: bigint;

  @ApiProperty({ description: 'Fecha y hora de la alerta' })
  fecha_hora: Date;

  @ApiProperty({ description: 'Número de caso' })
  nro_caso: string;

  @ApiProperty({ 
    description: 'Estado de la alerta',
    enum: EstadoAlerta,
    example: EstadoAlerta.EN_PELIGRO
  })
  estado: EstadoAlerta;

  @ApiProperty({ description: 'Fecha de creación' })
  created_at: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updated_at: Date;

  @ApiProperty({ description: 'Fecha de eliminación', required: false })
  deleted_at?: Date;

  // Relaciones
  @ApiProperty({ 
    description: 'Información de la persona relacionada',
    type: PersonaEntity,
    required: false
  })
  persona?: PersonaEntity;

  @ApiProperty({ 
    description: 'Contactos de referencia de la persona',
    type: [ContactoRefEntity],
    required: false
  })
  contactos_ref?: ContactoRefEntity[];
}
