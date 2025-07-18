import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UbicacionAlertasService } from './ubicacion_alertas.service';
import { CreateUbicacionAlertaDto } from './dto/create-ubicacion_alerta.dto';
import { UpdateUbicacionAlertaDto } from './dto/update-ubicacion_alerta.dto';

@ApiTags('ubicacion-alertas')
@Controller('ubicacion-alertas')
export class UbicacionAlertasController {
  private readonly logger = new Logger(UbicacionAlertasController.name);

  constructor(private readonly ubicacionAlertasService: UbicacionAlertasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva ubicación de alerta' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'La ubicación de alerta ha sido creada exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.',
  })
  async create(@Body() createUbicacionAlertaDto: CreateUbicacionAlertaDto) {
    try {
      const result = await this.ubicacionAlertasService.create(createUbicacionAlertaDto);
      if (!result) {
        throw new HttpException('No se pudo crear la ubicación de alerta', HttpStatus.BAD_REQUEST);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al crear ubicación de alerta:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las ubicaciones de alertas' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de ubicaciones de alertas obtenida exitosamente.',
  })
  async findAll() {
    try {
      return await this.ubicacionAlertasService.findAll();
    } catch (error) {
      this.logger.error('Error al obtener ubicaciones de alertas:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una ubicación de alerta por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la ubicación de alerta' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Ubicación de alerta encontrada exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ubicación de alerta no encontrada.',
  })
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.ubicacionAlertasService.findOne(id);
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

  @Get('alerta/:id_alerta')
  @ApiOperation({ summary: 'Obtener ubicaciones por ID de alerta' })
  @ApiParam({ name: 'id_alerta', type: 'string', description: 'ID de la alerta' })
  @ApiResponse({ status: 200, description: 'Ubicaciones de la alerta' })
  async findByAlerta(@Param('id_alerta') id_alerta: string) {
    try {
      return await this.ubicacionAlertasService.findByAlerta(Number(id_alerta));
    } catch (error) {
      this.logger.error('Error al obtener ubicaciones por alerta:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una ubicación de alerta' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la ubicación de alerta' })
  @ApiResponse({ status: 200, description: 'Ubicación actualizada exitosamente' })
  @ApiResponse({ status: 404, description: 'Ubicación no encontrada' })
  async update(@Param('id') id: string, @Body() updateUbicacionAlertaDto: UpdateUbicacionAlertaDto) {
    try {
      const result = await this.ubicacionAlertasService.update(id, updateUbicacionAlertaDto);
      if (!result) {
        throw new HttpException('Ubicación de alerta no encontrada', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al actualizar ubicación de alerta:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una ubicación de alerta (soft delete)' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la ubicación de alerta' })
  @ApiResponse({ status: 200, description: 'Ubicación eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Ubicación no encontrada' })
  async remove(@Param('id') id: string) {
    try {
      const result = await this.ubicacionAlertasService.remove(id);
      if (!result) {
        throw new HttpException('Ubicación de alerta no encontrada', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al eliminar ubicación de alerta:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
