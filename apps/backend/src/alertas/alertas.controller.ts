import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { AlertaEntity } from './entities/alerta.entity';
import { AlertasService } from './alertas.service';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';

@ApiTags('alertas')
@Controller('alertas')
export class AlertasController {
  private readonly logger = new Logger(AlertasController.name);

  constructor(private readonly alertasService: AlertasService) {}

  // Método para transformar BigInt a string para serialización JSON
  private transformBigIntToString(obj: any): any {
    return JSON.parse(JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ));
  }

  @Post()
  @ApiOperation({ summary: 'Crear nueva alerta' })
  @ApiResponse({ 
    status: HttpStatus.CREATED, 
    description: 'La alerta ha sido creada exitosamente.' 
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST, 
    description: 'Datos de entrada inválidos.' 
  })
  @ApiResponse({ 
    status: HttpStatus.INTERNAL_SERVER_ERROR, 
    description: 'Error interno del servidor.' 
  })
  async create(@Body() createAlertaDto: CreateAlertaDto) {
    try {
      const result = await this.alertasService.create(createAlertaDto);
      return result; // Ya no devuelve todos los datos, solo un mensaje de éxito
    } catch (error) {      
      // Manejar diferentes tipos de errores de Prisma
      if (error.code === 'P2002') {
        throw new HttpException('Ya existe una alerta con este ID', HttpStatus.CONFLICT);
      } else if (error.code === 'P2003') {
        throw new HttpException('Error de referencia en la base de datos', HttpStatus.BAD_REQUEST);
      } else if (error.code === 'P2025') {
        throw new HttpException('Registro no encontrado', HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }  @Get()
  @ApiCreatedResponse({type: AlertaEntity, isArray: true})
  @ApiOperation({ summary: 'Obtener todas las alertas' })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Lista de alertas obtenida exitosamente.' 
  })async findAll() {
    try {
      const result = await this.alertasService.findAll();
      return this.transformBigIntToString(result);
    } catch (error) {
      this.logger.error('Error al obtener alertas:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  @ApiCreatedResponse({type: AlertaEntity})
  @ApiOperation({ summary: 'Obtener una alerta por ID' })  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Alerta encontrada exitosamente.' 
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND, 
    description: 'Alerta no encontrada.' 
  })
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.alertasService.findOne(id);
      return this.transformBigIntToString(result);
    } catch (error) {
      this.logger.error('Error al obtener alerta:', error);
      throw new HttpException('Alerta no encontrada', HttpStatus.NOT_FOUND);
    }
  }  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una alerta' })
  @ApiBody({ 
    type: UpdateAlertaDto,
    description: 'Datos para actualizar la alerta'
  })  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Alerta actualizada exitosamente.' 
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND, 
    description: 'Alerta no encontrada.' 
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST, 
    description: 'Datos de entrada inválidos.' 
  })async update(@Param('id') id: string, @Body() updateAlertaDto: UpdateAlertaDto) {
    try {
      const result = await this.alertasService.update(id, updateAlertaDto);
      return this.transformBigIntToString(result);
    } catch (error) {
      this.logger.error('Error al actualizar alerta:', error);
      if (error.message.includes('no encontrada')) {
        throw new HttpException('Alerta no encontrada', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una alerta (soft delete)' })  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Alerta eliminada exitosamente.' 
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND, 
    description: 'Alerta no encontrada.' 
  })
  async remove(@Param('id') id: string) {
    try {
      const result = await this.alertasService.remove(id);
      return result;
    } catch (error) {
      this.logger.error('Error al eliminar alerta:', error);
      if (error.message.includes('no encontrada')) {
        throw new HttpException('Alerta no encontrada', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
