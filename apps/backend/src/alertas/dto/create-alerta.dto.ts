import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID, IsDateString, IsNotEmpty, IsArray, ValidateNested, IsOptional, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';

class PersonaDto {
    @ApiProperty({ 
        example: 'Alicia Flores',
        required: true
    })
    @IsString({ message: 'persona.nombre debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'persona.nombre no debe estar vacío' })
    nombre: string;

    @ApiProperty({ 
        example: '12345678-13',
        required: true
    })
    @IsString({ message: 'persona.cedulaIdentidad debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'persona.cedulaIdentidad no debe estar vacío' })
    cedulaIdentidad: string;

    @ApiProperty({ 
        example: '2001-03-05',
        required: true
    })
    @IsDateString({}, { message: 'persona.fechaNacimiento debe ser una fecha válida' })
    @IsNotEmpty({ message: 'persona.fechaNacimiento no debe estar vacío' })
    fechaNacimiento: string;
}

class ContactoDto {
    @ApiProperty({ 
        example: '71234567',
        required: true
    })
    @IsString({ message: 'contacto.celular debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'contacto.celular no debe estar vacío' })
    celular: string;

    @ApiProperty({ 
        example: 'victima@correo.xyz',
        required: true
    })
    @IsString({ message: 'contacto.correo debe ser una cadena de texto' })
    @IsEmail({}, { message: 'contacto.correo debe ser un email válido' })
    @IsNotEmpty({ message: 'contacto.correo no debe estar vacío' })
    correo: string;
}

class ContactoAdicionalDto {
    @ApiProperty({ 
        example: 'Pedro Flores',
        required: true
    })
    @IsString({ message: 'contacto.nombre debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'contacto.nombre no debe estar vacío' })
    nombre: string;

    @ApiProperty({ 
        example: 'Papá',
        required: true
    })
    @IsString({ message: 'contacto.relacion debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'contacto.relacion no debe estar vacío' })
    relacion: string;

    @ApiProperty({ 
        example: '77654321',
        required: true
    })
    @IsString({ message: 'contacto.celular debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'contacto.celular no debe estar vacío' })
    celular: string;
}

export class CreateAlertaDto {
    @ApiProperty({ 
        example: '29a0c554-7456-4ee6-ae8f-65778d84a838',
        format: 'uuid',
        required: true
    })
    @IsUUID(4, { message: 'IdAlerta debe ser un UUID válido' })
    @IsNotEmpty({ message: 'IdAlerta no debe estar vacío' })
    IdAlerta: string;

    @ApiProperty({ 
        example: '2025-05-06T12:30:00Z',
        required: true
    })
    @IsDateString({}, { message: 'fechaRegistro debe ser una fecha válida' })
    @IsNotEmpty({ message: 'fechaRegistro no debe estar vacío' })
    fechaRegistro: string;

    @ApiProperty({ 
        type: PersonaDto,
        required: true
    })
    @ValidateNested({ message: 'persona debe ser un objeto válido' })
    @Type(() => PersonaDto)
    @IsNotEmpty({ message: 'persona no debe estar vacío' })
    persona: PersonaDto;

    @ApiProperty({ 
        type: ContactoDto,
        required: true
    })
    @ValidateNested({ message: 'contacto debe ser un objeto válido' })
    @Type(() => ContactoDto)
    @IsNotEmpty({ message: 'contacto no debe estar vacío' })
    contacto: ContactoDto;

    @ApiProperty({ 
        type: [ContactoAdicionalDto],
        required: false
    })
    @IsArray({ message: 'contactos debe ser un arreglo' })
    @ValidateNested({ each: true })
    @Type(() => ContactoAdicionalDto)
    @IsOptional()
    contactos?: ContactoAdicionalDto[];
}
