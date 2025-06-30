import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UbicacionFuncionariosService } from './ubicacion_funcionarios.service';
import { CreateUbicacionFuncionarioDto } from './dto/create-ubicacion_funcionario.dto';
import { UpdateUbicacionFuncionarioDto } from './dto/update-ubicacion_funcionario.dto';

@ApiTags('ubicacion-funcionarios')
@Controller('ubicacion-funcionarios')
export class UbicacionFuncionariosController {
  private readonly logger = new Logger(UbicacionFuncionariosController.name);

  constructor(private readonly ubicacionFuncionariosService: UbicacionFuncionariosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva ubicación de funcionario' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'La ubicación de funcionario ha sido creada exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.',
  })
  async create(@Body() createUbicacionFuncionarioDto: CreateUbicacionFuncionarioDto) {
    try {
      const result = await this.ubicacionFuncionariosService.create(createUbicacionFuncionarioDto);
      if (!result) {
        throw new HttpException('No se pudo crear la ubicación del funcionario', HttpStatus.BAD_REQUEST);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al crear ubicación de funcionario:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las ubicaciones de funcionarios' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de ubicaciones de funcionarios obtenida exitosamente.',
  })
  async findAll() {
    try {
      return await this.ubicacionFuncionariosService.findAll();
    } catch (error) {
      this.logger.error('Error al obtener ubicaciones de funcionarios:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una ubicación de funcionario por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la ubicación de funcionario' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Ubicación de funcionario encontrada exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ubicación de funcionario no encontrada.',
  })
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.ubicacionFuncionariosService.findOne(+id);
      if (!result) {
        throw new HttpException('Ubicación de funcionario no encontrada', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al obtener ubicación de funcionario:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('atencion/:id_atencion')
  @ApiOperation({ summary: 'Obtener ubicaciones por ID de atención' })
  @ApiParam({ name: 'id_atencion', type: 'string', description: 'ID de la atención' })
  @ApiResponse({ status: 200, description: 'Ubicaciones de la atención' })
  async findByAtencion(@Param('id_atencion') id_atencion: string) {
    try {
      return await this.ubicacionFuncionariosService.findByAtencion(+id_atencion);
    } catch (error) {
      this.logger.error('Error al obtener ubicaciones por atención:', error);
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una ubicación de funcionario' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la ubicación de funcionario' })
  @ApiResponse({ status: 200, description: 'Ubicación actualizada exitosamente' })
  @ApiResponse({ status: 404, description: 'Ubicación no encontrada' })
  async update(@Param('id') id: string, @Body() updateUbicacionFuncionarioDto: UpdateUbicacionFuncionarioDto) {
    try {
      const result = await this.ubicacionFuncionariosService.update(+id, updateUbicacionFuncionarioDto);
      if (!result) {
        throw new HttpException('Ubicación de funcionario no encontrada', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al actualizar ubicación de funcionario:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una ubicación de funcionario (soft delete)' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la ubicación de funcionario' })
  @ApiResponse({ status: 200, description: 'Ubicación eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Ubicación no encontrada' })
  async remove(@Param('id') id: string) {
    try {
      const result = await this.ubicacionFuncionariosService.remove(+id);
      if (!result) {
        throw new HttpException('Ubicación de funcionario no encontrada', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      this.logger.error('Error al eliminar ubicación de funcionario:', error);
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
