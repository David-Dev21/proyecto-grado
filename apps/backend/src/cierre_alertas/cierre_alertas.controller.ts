import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiCreatedResponse } from '@nestjs/swagger';
import { CierreAlertasService } from './cierre_alertas.service';
import { CreateCierreAlertaDto } from './dto/create-cierre_alerta.dto';
import { UpdateCierreAlertaDto } from './dto/update-cierre_alerta.dto';
import { CierreAlerta } from './entities/cierre_alerta.entity';

@ApiTags('cierre-alertas')
@Controller('cierre-alertas')
export class CierreAlertasController {
  private readonly logger = new Logger(CierreAlertasController.name);

  constructor(private readonly cierreAlertasService: CierreAlertasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nuevo cierre de alerta' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'El cierre de alerta ha sido creado exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error interno del servidor.',
  })
  async create(@Body() createCierreAlertaDto: CreateCierreAlertaDto) {
    try {
      const result = await this.cierreAlertasService.create(createCierreAlertaDto);
      return result;
    } catch (error) {
      this.logger.error('Error al crear cierre de alerta:', error);
      throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get()
  @ApiCreatedResponse({ type: CierreAlerta, isArray: true })
  @ApiOperation({ summary: 'Obtener todos los cierres de alerta' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de cierres de alerta obtenida exitosamente.',
  })
  async findAll() {
    try {
      return await this.cierreAlertasService.findAll();
    } catch (error) {
      this.logger.error('Error al obtener cierres de alerta:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  @Get(':id')
  @ApiCreatedResponse({ type: CierreAlerta })
  @ApiOperation({ summary: 'Obtener un cierre de alerta por ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Cierre de alerta encontrado exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Cierre de alerta no encontrado.',
  })
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.cierreAlertasService.findOne(+id);
      if (!result) {
        throw new HttpException('Cierre de alerta no encontrado', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al obtener cierre de alerta:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un cierre de alerta' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Cierre de alerta actualizado exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Cierre de alerta no encontrado.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.',
  })
  async update(@Param('id') id: string, @Body() updateCierreAlertaDto: UpdateCierreAlertaDto) {
    try {
      const result = await this.cierreAlertasService.update(+id, updateCierreAlertaDto);
      if (!result) {
        throw new HttpException('Cierre de alerta no encontrado', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al actualizar cierre de alerta:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un cierre de alerta (soft delete)' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Cierre de alerta eliminado exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Cierre de alerta no encontrado.',
  })
  async remove(@Param('id') id: string) {
    try {
      const result = await this.cierreAlertasService.remove(+id);
      if (!result) {
        throw new HttpException('Cierre de alerta no encontrado', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al eliminar cierre de alerta:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
