import { ApiProperty } from '@nestjs/swagger';

export class CreateAlertaResponseDto {
  @ApiProperty({ description: 'Mensaje de confirmación de la operación', example: 'Alerta creada exitosamente' })
  message: string;

  @ApiProperty({ description: 'UUID único de la alerta creada', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  uuid: string;
}
