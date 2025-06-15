import { Controller, Get, Post, Body, Param, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiCreatedResponse } from '@nestjs/swagger';
import { UbicacionAlertasService } from './ubicacion_alertas.service';
import { CreateUbicacionAlertaDto } from './dto/create-ubicacion_alerta.dto';
import { UbicacionAlerta } from './entities/ubicacion_alerta.entity';

@ApiTags('ubicacion-alertas')
@Controller('ubicacion-alertas')
export class UbicacionAlertasController {
  private readonly logger = new Logger(UbicacionAlertasController.name);

  constructor(private readonly ubicacionAlertasService: UbicacionAlertasService) {}  @Post()
  @ApiOperation({ summary: 'Crear una nueva ubicación de alerta' })
  @ApiResponse({ 
    status: HttpStatus.CREATED,
    description: 'La ubicación de alerta ha sido creada exitosamente.'
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.'
  })
  @ApiResponse({ 
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error interno del servidor.'
  })
  async create(@Body() createUbicacionAlertaDto: CreateUbicacionAlertaDto) {
    try {
      const result = await this.ubicacionAlertasService.create(createUbicacionAlertaDto);
      if (!result) {
        throw new HttpException('No se pudo crear la ubicación de la alerta', HttpStatus.BAD_REQUEST);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al crear ubicación de alerta:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  @Get()
  @ApiCreatedResponse({ type: UbicacionAlerta, isArray: true })
  @ApiOperation({ summary: 'Obtener todas las ubicaciones de alertas' })
  @ApiResponse({ 
    status: HttpStatus.OK,
    description: 'Lista de ubicaciones de alertas obtenida exitosamente.'
  })
  async findAll() {
    try {
      return await this.ubicacionAlertasService.findAll();
    } catch (error) {
      this.logger.error('Error al obtener ubicaciones de alertas:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  @Get(':id')
  @ApiCreatedResponse({ type: UbicacionAlerta })
  @ApiOperation({ summary: 'Obtener una ubicación de alerta por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la ubicación de alerta' })
  @ApiResponse({ 
    status: HttpStatus.OK,
    description: 'Ubicación de alerta encontrada exitosamente.'
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND,
    description: 'Ubicación de alerta no encontrada.'
  })
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.ubicacionAlertasService.findOne(+id);
      if (!result) {
        throw new HttpException('Ubicación de alerta no encontrada', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al obtener ubicación de alerta:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
