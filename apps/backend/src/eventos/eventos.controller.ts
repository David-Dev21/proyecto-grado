import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  HttpException,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiCreatedResponse } from '@nestjs/swagger';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';

@ApiTags('eventos')
@Controller('eventos')
export class EventosController {
  private readonly logger = new Logger(EventosController.name);

  constructor(private readonly eventosService: EventosService) { }  @Post()
  @ApiOperation({ summary: 'Crear un nuevo evento' })
  @ApiResponse({ 
    status: HttpStatus.CREATED, 
    description: 'Evento creado exitosamente' 
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST, 
    description: 'Datos inválidos' 
  })
  @ApiResponse({ 
    status: HttpStatus.INTERNAL_SERVER_ERROR, 
    description: 'Error interno del servidor' 
  })
  async create(@Body() createEventoDto: CreateEventoDto) {
    try {
      const result = await this.eventosService.create(createEventoDto);
      return result; // Ya contiene solo el mensaje
    } catch (error) {
      this.logger.error('Error al crear evento:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  @Get()
  @ApiCreatedResponse({ type: Evento, isArray: true })
  @ApiOperation({ summary: 'Obtener todos los eventos' })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Lista de eventos obtenida exitosamente' 
  })
  async findAll() {
    try {
      return await this.eventosService.findAll();
    } catch (error) {
      this.logger.error('Error al obtener eventos:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  @Get(':id')
  @ApiCreatedResponse({ type: Evento })
  @ApiOperation({ summary: 'Obtener un evento por ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del evento' })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Evento obtenido exitosamente' 
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND, 
    description: 'Evento no encontrado' 
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.eventosService.findOne(id);
      if (!result) {
        throw new HttpException('Evento no encontrado', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al obtener evento:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un evento' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Evento actualizado exitosamente' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Datos inválidos' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Evento no encontrado' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEventoDto: UpdateEventoDto,
  ) {
    try {
      const result = await this.eventosService.update(id, updateEventoDto);
      return result; // Ya contiene solo el mensaje
    } catch (error) {
      this.logger.error('Error al actualizar evento:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un evento (soft delete)' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Evento eliminado exitosamente' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Evento no encontrado' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.eventosService.remove(id);
      if (!result) {
        throw new HttpException('Evento no encontrado', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al eliminar evento:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
