import { Controller, Get, Post, Body, Param, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiCreatedResponse } from '@nestjs/swagger';
import { UbicacionFuncionariosService } from './ubicacion_funcionarios.service';
import { CreateUbicacionFuncionarioDto } from './dto/create-ubicacion_funcionario.dto';
import { UbicacionFuncionario } from './entities/ubicacion_funcionario.entity';

@ApiTags('ubicacion-funcionarios')
@Controller('ubicacion-funcionarios')
export class UbicacionFuncionariosController {
  private readonly logger = new Logger(UbicacionFuncionariosController.name);

  constructor(private readonly ubicacionFuncionariosService: UbicacionFuncionariosService) {}
  @Post()
  @ApiOperation({ summary: 'Crear una nueva ubicación de funcionario' })
  @ApiResponse({ 
    status: HttpStatus.CREATED,
    description: 'La ubicación de funcionario ha sido creada exitosamente.'
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.'
  })
  @ApiResponse({ 
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error interno del servidor.'
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
  @ApiCreatedResponse({ type: UbicacionFuncionario, isArray: true })
  @ApiOperation({ summary: 'Obtener todas las ubicaciones de funcionarios' })
  @ApiResponse({ 
    status: HttpStatus.OK,
    description: 'Lista de ubicaciones de funcionarios obtenida exitosamente.'
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
  @ApiCreatedResponse({ type: UbicacionFuncionario })
  @ApiOperation({ summary: 'Obtener una ubicación de funcionario por ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID de la ubicación de funcionario' })
  @ApiResponse({ 
    status: HttpStatus.OK,
    description: 'Ubicación de funcionario encontrada exitosamente.'
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND,
    description: 'Ubicación de funcionario no encontrada.'
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
}
