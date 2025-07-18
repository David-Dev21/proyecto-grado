import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Logger } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { AtencionesService } from './atenciones.service';
import { CreateAtencionDto } from './dto/create-atencion.dto';
import { UpdateAtencionDto } from './dto/update-atencion.dto';

@ApiTags('atenciones')
@Controller('atenciones')
export class AtencionesController {
  private readonly logger = new Logger(AtencionesController.name);

  constructor(private readonly atencionesService: AtencionesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'La atención ha sido creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  async create(@Body() createAtencionDto: CreateAtencionDto) {
    try {
      const result = await this.atencionesService.create(createAtencionDto);
      return result;
    } catch (error) {
      this.logger.error('Error al crear atención:', error);
      throw new HttpException(`Error interno del servidor: ${error.message}`, 500);
    }
  }
  @Get()
  @ApiCreatedResponse({ isArray: true })
  @ApiResponse({ status: 200, description: 'Lista de atenciones obtenida exitosamente.' })
  async findAll() {
    try {
      const result = await this.atencionesService.findAll();
      return result;
    } catch (error) {
      this.logger.error('Error al obtener atenciones:', error);
      throw new HttpException('Error interno del servidor', 500);
    }
  }
  @Get('con-alertas')
  @ApiCreatedResponse({ isArray: true })
  @ApiResponse({ status: 200, description: 'Lista de atenciones con número de caso de alerta asociada' })
  async findAllWithAlertas() {
    try {
      const result = await this.atencionesService.findAllWithAlerts();
      return result;
    } catch (error) {
      this.logger.error('Error al obtener atenciones con alertas:', error);
      throw new HttpException('Error interno del servidor', 500);
    }
  }
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Atención encontrada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Atención no encontrada.' })
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.atencionesService.findOne(+id);
      return result;
    } catch (error) {
      this.logger.error('Error al obtener atención:', error);
      throw new HttpException('Atención no encontrada', 404);
    }
  }
  @Patch(':id')
  @ApiBody({ type: UpdateAtencionDto, description: 'Datos para actualizar la atención' })
  @ApiResponse({ status: 200, description: 'Atención actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Atención no encontrada.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  async update(@Param('id') id: string, @Body() updateAtencionDto: UpdateAtencionDto) {
    try {
      const result = await this.atencionesService.update(+id, updateAtencionDto);
      return result; // Ya contiene solo el mensaje
    } catch (error) {
      this.logger.error('Error al actualizar atención:', error);
      if (error.message.includes('no encontrada')) {
        throw new HttpException('Atención no encontrada', 404);
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, 500);
    }
  }
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Atención eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Atención no encontrada.' })
  async remove(@Param('id') id: string) {
    try {
      const result = await this.atencionesService.remove(+id);
      return result;
    } catch (error) {
      this.logger.error('Error al eliminar atención:', error);
      if (error.message.includes('no encontrada')) {
        throw new HttpException('Atención no encontrada', 404);
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, 500);
    }
  }
}
