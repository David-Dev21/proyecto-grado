import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@ApiTags('funcionarios')
@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo funcionario' })
  @ApiResponse({ status: 201, description: 'Funcionario creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Error en los datos enviados' })
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionariosService.create(createFuncionarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los funcionarios' })
  @ApiResponse({ status: 200, description: 'Lista de funcionarios' })
  findAll() {
    return this.funcionariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un funcionario por ID' })
  @ApiResponse({ status: 200, description: 'Funcionario encontrado' })
  @ApiResponse({ status: 404, description: 'Funcionario no encontrado' })
  findOne(@Param('id') id: string) {
    return this.funcionariosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un funcionario' })
  @ApiResponse({ status: 200, description: 'Funcionario actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Funcionario no encontrado' })
  update(@Param('id') id: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionariosService.update(id, updateFuncionarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un funcionario (soft delete)' })
  @ApiResponse({ status: 200, description: 'Funcionario eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Funcionario no encontrado' })
  remove(@Param('id') id: string) {
    return this.funcionariosService.remove(id);
  }
}
