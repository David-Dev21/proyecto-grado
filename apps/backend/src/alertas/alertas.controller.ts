import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { AlertaEntity } from './entities/alerta.entity';
import { AlertasService } from './alertas.service';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { AtencionesService } from 'src/atenciones/atenciones.service';
import { CreateAlertaResponseDto } from './dto/create-alerta-response.dto';
import { ProcesadorNotificacionesService } from './services/procesador-notificaciones.service';
import { ManejoErroresService } from './services/manejo-errores.service';

@ApiTags('alertas')
@Controller('alertas')
export class AlertasController {
  private readonly logger = new Logger(AlertasController.name);

  constructor(
    private readonly alertasService: AlertasService,
    private readonly atencionesService: AtencionesService,
    private readonly procesadorNotificaciones: ProcesadorNotificacionesService,
    private readonly manejoErrores: ManejoErroresService,
  ) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Alerta creada exitosamente', type: CreateAlertaResponseDto })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  async create(@Body() datosAlerta: CreateAlertaDto): Promise<CreateAlertaResponseDto> {
    try {
      const uuid = await this.alertasService.create(datosAlerta);
      if (uuid) {
        this.logger.log(`Alerta creada con UUID ${uuid}. Procesando notificaciones...`);
        // Procesar notificaciones de forma asíncrona usando el servicio especializado
        this.procesadorNotificaciones.procesarNotificacionesDespuesDeCrear(uuid);
      }
      return {
        message: 'Alerta creada exitosamente',
        uuid,
      };
    } catch (error) {
      this.manejoErrores.manejarError(error, 'crear alerta');
    }
  }

  @Get()
  @ApiCreatedResponse({ type: AlertaEntity, isArray: true })
  @ApiResponse({ status: 200, description: 'Lista de alertas obtenida exitosamente.' })
  async findAll() {
    try {
      return await this.alertasService.findAll();
    } catch (error) {
      this.manejoErrores.manejarError(error, 'obtener todas las alertas');
    }
  }

  @Get(':uuid')
  @ApiCreatedResponse({ type: AlertaEntity })
  @ApiResponse({ status: 200, description: 'Alerta encontrada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Alerta no encontrada.' })
  async findOne(@Param('uuid') uuid: string) {
    try {
      return await this.alertasService.findOne(uuid);
    } catch (error) {
      this.manejoErrores.manejarError(error, 'obtener alerta por UUID');
    }
  }

  @Get(':id/atencion')
  @ApiResponse({ status: 200, description: 'Atención encontrada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Atención no encontrada para esta alerta.' })
  async findAtencionByAlerta(@Param('id') id: string) {
    try {
      return await this.atencionesService.findByAlertaId(parseInt(id));
    } catch (error) {
      this.manejoErrores.manejarError(error, 'obtener atención por alerta');
    }
  }
  @Patch(':uuid')
  @ApiBody({ type: UpdateAlertaDto, description: 'Datos para actualizar la alerta' })
  @ApiResponse({ status: 200, description: 'Alerta actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Alerta no encontrada.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  async update(@Param('uuid') uuid: string, @Body() datosActualizacion: UpdateAlertaDto) {
    try {
      return await this.alertasService.update(uuid, datosActualizacion);
    } catch (error) {
      this.manejoErrores.manejarError(error, 'actualizar alerta');
    }
  }

  @Delete(':uuid')
  @ApiResponse({ status: 200, description: 'Alerta eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Alerta no encontrada.' })
  async remove(@Param('uuid') uuid: string) {
    try {
      return await this.alertasService.remove(uuid);
    } catch (error) {
      this.manejoErrores.manejarError(error, 'eliminar alerta');
    }
  }
}
