import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Logger } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam, ApiCreatedResponse } from '@nestjs/swagger';
import { CierreAlertasService } from './cierre_alertas.service';
import { CreateCierreAlertaDto } from './dto/create-cierre_alerta.dto';
import { UpdateCierreAlertaDto } from './dto/update-cierre_alerta.dto';
import { CierreAlerta } from './entities/cierre-alerta.entity';

@ApiTags('cierre-alertas')
@Controller('cierre-alertas')
export class CierreAlertasController {
  private readonly logger = new Logger(CierreAlertasController.name);

  constructor(private readonly cierreAlertasService: CierreAlertasService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'El cierre de alerta ha sido creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  async create(@Body() createCierreAlertaDto: CreateCierreAlertaDto) {
    try {
      const result = await this.cierreAlertasService.create(createCierreAlertaDto);
      return result;
    } catch (error) {
      this.logger.error('Error al crear cierre de alerta:', error);
      throw new HttpException(`Error interno del servidor: ${error.message}`, 500);
    }
  }
  @Get()
  @ApiCreatedResponse({ type: CierreAlerta, isArray: true })
  @ApiResponse({ status: 200, description: 'Lista de cierres de alerta obtenida exitosamente.' })
  async findAll() {
    try {
      this.logger.log('Solicitando todos los cierres de alerta');
      const result = await this.cierreAlertasService.findAll();
      this.logger.log(`Devolviendo ${result.length} cierres de alerta`);
      return result;
    } catch (error) {
      this.logger.error('Error en controlador al obtener cierres de alerta:', error);
      this.logger.error('Error message:', error.message);
      this.logger.error('Error stack:', error.stack);
      throw new HttpException(`Error interno del servidor: ${error.message}`, 500);
    }
  }
  @Get(':id')
  @ApiCreatedResponse({ type: CierreAlerta })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'Cierre de alerta encontrado exitosamente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Cierre de alerta no encontrado.',
  })
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.cierreAlertasService.findOne(+id);
      if (!result) {
        throw new HttpException('Cierre de alerta no encontrado', 404);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al obtener cierre de alerta:', error);
      if (error.status === 404) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', 500);
    }
  }
  @Patch(':id')
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'Cierre de alerta actualizado exitosamente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Cierre de alerta no encontrado.',
  })
  @ApiResponse({
    status: 400,
    description: 'Datos de entrada inválidos.',
  })
  async update(@Param('id') id: string, @Body() updateCierreAlertaDto: UpdateCierreAlertaDto) {
    try {
      const result = await this.cierreAlertasService.update(+id, updateCierreAlertaDto);
      if (!result) {
        throw new HttpException('Cierre de alerta no encontrado', 404);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al actualizar cierre de alerta:', error);
      if (error.status === 404) {
        throw error;
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, 500);
    }
  }
  @Delete(':id')
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'Cierre de alerta eliminado exitosamente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Cierre de alerta no encontrado.',
  })
  async remove(@Param('id') id: string) {
    try {
      const result = await this.cierreAlertasService.remove(+id);
      if (!result) {
        throw new HttpException('Cierre de alerta no encontrado', 404);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al eliminar cierre de alerta:', error);
      if (error.status === 404) {
        throw error;
      }
      throw new HttpException(`Error interno del servidor: ${error.message}`, 500);
    }
  }

  // @Post(':id/enviar-att')
  // @ApiParam({ name: 'id', type: 'number' })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   description: 'Cierre enviado a ATT exitosamente',
  // })
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   description: 'Cierre de alerta no encontrado',
  // })
  // @ApiResponse({
  //   status: HttpStatus.INTERNAL_SERVER_ERROR,
  //   description: 'Error al enviar a ATT',
  // })
  // async enviarAATT(@Param('id') id: string) {
  //   try {
  //     const result = await this.cierreAlertasService.enviarAATT(+id);
  //     return result;
  //   } catch (error) {
  //     this.logger.error('Error al enviar cierre a ATT:', error);
  //     if (error.status === HttpStatus.NOT_FOUND) {
  //       throw error;
  //     }
  //     throw new HttpException('Error al enviar cierre a ATT', HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }
}
