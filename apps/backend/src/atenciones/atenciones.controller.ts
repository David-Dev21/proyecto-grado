import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { AtencionesService } from './atenciones.service';
import { CreateAtencionDto } from './dto/create-atencion.dto';
import { UpdateAtencionDto } from './dto/update-atencion.dto';
import { AtencionEntity, AtencionAlertaEntity } from './entities/atencion.entity';

@ApiTags('atenciones')
@Controller('atenciones')
export class AtencionesController {
  private readonly logger = new Logger(AtencionesController.name);

  constructor(private readonly atencionesService: AtencionesService) {}

  // Método para transformar BigInt a string para serialización JSON
  private transformBigIntToString(obj: any): any {
    return JSON.parse(JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ));
  }  
  @Post()
  @ApiOperation({ summary: 'Crear nueva atención' })
  @ApiResponse({ 
    status: HttpStatus.CREATED,
    description: 'La atención ha sido creada exitosamente.'
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.'
  })
  @ApiResponse({ 
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error interno del servidor.'
  })
  async create(@Body() createAtencionDto: CreateAtencionDto) {
    try {
      const result = await this.atencionesService.create(createAtencionDto);
      return result; // Ya contiene solo el mensaje
    } catch (error) {
      this.logger.error('Error al crear atención:', error);
      throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  
  @Get()
  @ApiCreatedResponse({ type: AtencionEntity, isArray: true })
  @ApiOperation({ summary: 'Obtener todas las atenciones' })
  @ApiResponse({ 
    status: HttpStatus.OK 
  })
  async findAll() {
    try {
      const result = await this.atencionesService.findAll();
      return this.transformBigIntToString(result);
    } catch (error) {
      this.logger.error('Error al obtener atenciones:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  
  @Get('con-alertas')
  @ApiCreatedResponse({ type: AtencionAlertaEntity, isArray: true })
  @ApiOperation({ summary: 'Obtener todas las atenciones con número de caso de alerta' })
  @ApiResponse({ 
    status: HttpStatus.OK,
    description: 'Lista de atenciones con número de caso de alerta asociada',
    type: [AtencionAlertaEntity]
  })
  async findAllWithAlertas() {
    try {
      const result = await this.atencionesService.findAllWithAlerts();
      return this.transformBigIntToString(result);
    } catch (error) {
      this.logger.error('Error al obtener atenciones con alertas:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  
  @Get(':id')
  @ApiCreatedResponse({ type: AtencionEntity })
  @ApiOperation({ summary: 'Obtener una atención por ID' })
  @ApiResponse({ 
    status: HttpStatus.OK 
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND 
  })
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.atencionesService.findOne(+id);
      return this.transformBigIntToString(result);
    } catch (error) {
      this.logger.error('Error al obtener atención:', error);
      throw new HttpException('Atención no encontrada', HttpStatus.NOT_FOUND);
    }
  }  
  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una atención' })
  @ApiBody({ 
    type: UpdateAtencionDto,
    description: 'Datos para actualizar la atención'
  })  @ApiResponse({ 
    status: HttpStatus.OK,
    description: 'Atención actualizada exitosamente.'
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND,
    description: 'Atención no encontrada.'
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.'
  })
  async update(@Param('id') id: string, @Body() updateAtencionDto: UpdateAtencionDto) {
    try {
      const result = await this.atencionesService.update(+id, updateAtencionDto);
      return result; // Ya contiene solo el mensaje
    } catch (error) {
      this.logger.error('Error al actualizar atención:', error);
      if (error.message.includes('no encontrada')) {
        throw new HttpException('Atención no encontrada', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una atención (soft delete)' })  @ApiResponse({ 
    status: HttpStatus.OK,
    description: 'Atención eliminada exitosamente.'
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND,
    description: 'Atención no encontrada.'
  })
  async remove(@Param('id') id: string) {
    try {
      const result = await this.atencionesService.remove(+id);
      return result;
    } catch (error) {
      this.logger.error('Error al eliminar atención:', error);
      if (error.message.includes('no encontrada')) {
        throw new HttpException('Atención no encontrada', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}