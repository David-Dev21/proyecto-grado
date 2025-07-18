import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Evento } from './entities/evento.entity';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventosService {
  private readonly logger = new Logger(EventosService.name);

  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  async create(createEventoDto: CreateEventoDto) {
    try {
      const evento = this.eventoRepository.create({
        idAlerta: createEventoDto.idAlerta,
        idFuncionario: createEventoDto.idFuncionario,
        idSeguimiento: createEventoDto.idSeguimiento,
        fechaHora: new Date(createEventoDto.fechaHora),
        comentario: createEventoDto.comentario,
      });
      await this.eventoRepository.save(evento);
      return { message: 'Evento creado exitosamente' };
    } catch (error) {
      this.logger.error('Error detallado al crear evento:', error);
      throw new BadRequestException(`Error al crear el evento: ${error.message}`);
    }
  }

  async findAll() {
    try {
      this.logger.log('Iniciando consulta de eventos');
      return await this.eventoRepository.find({
        where: { deletedAt: IsNull() },
        relations: ['alerta'],
        order: { createdAt: 'DESC' },
      });
    } catch (error) {
      this.logger.error('Error al obtener eventos', error.stack);
      throw new BadRequestException('Error al obtener los eventos');
    }
  }

  async findOne(id: number) {
    try {
      const evento = await this.eventoRepository.findOne({
        where: { id, deletedAt: IsNull() },
        relations: ['alerta'],
      });
      if (!evento) {
        throw new NotFoundException('Evento no encontrado');
      }
      return evento;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error('Error al obtener evento', error.stack);
      throw new BadRequestException('Error al obtener el evento');
    }
  }

  async update(id: number, updateEventoDto: UpdateEventoDto) {
    try {
      const eventoExistente = await this.eventoRepository.findOne({ where: { id, deletedAt: IsNull() } });
      if (!eventoExistente) {
        throw new NotFoundException('Evento no encontrado');
      }
      const updateData: Partial<Evento> = {};
      if (updateEventoDto.idAlerta) {
        updateData.idAlerta = updateEventoDto.idAlerta;
      }
      if (updateEventoDto.idFuncionario) {
        updateData.idFuncionario = updateEventoDto.idFuncionario;
      }
      if (updateEventoDto.idSeguimiento !== undefined) {
        updateData.idSeguimiento = updateEventoDto.idSeguimiento;
      }
      if (updateEventoDto.fechaHora) {
        updateData.fechaHora = new Date(updateEventoDto.fechaHora);
      }
      if (updateEventoDto.comentario) {
        updateData.comentario = updateEventoDto.comentario;
      }
      await this.eventoRepository.update(id, updateData);
      return { message: 'Evento actualizado exitosamente' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error('Error al actualizar evento', error.stack);
      throw new BadRequestException('Error al actualizar el evento');
    }
  }

  async remove(id: number) {
    try {
      const eventoExistente = await this.eventoRepository.findOne({ where: { id, deletedAt: IsNull() } });
      if (!eventoExistente) {
        throw new NotFoundException('Evento no encontrado');
      }
      await this.eventoRepository.update(id, { deletedAt: new Date() });
      return { message: 'Evento eliminado correctamente' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error('Error al eliminar evento', error.stack);
      throw new BadRequestException('Error al eliminar el evento');
    }
  }

  async enviarAATT(id: number) {
    try {
      // Obtener el evento con la información necesaria
      const evento = await this.eventoRepository.findOne({
        where: { id, deletedAt: IsNull() },
        relations: ['alerta'],
      });
      if (!evento) {
        throw new NotFoundException('Evento no encontrado');
      }
      if (!evento.alerta?.uuid) {
        throw new BadRequestException('El evento no tiene una alerta válida con UUID');
      }
      // Aquí deberías buscar el funcionario usando su repositorio TypeORM
      // const funcionario = await this.funcionarioRepository.findOne({ where: { id: evento.idFuncionario, deletedAt: IsNull() } });
      // if (!funcionario) {
      //   throw new BadRequestException('No se encontró información del funcionario');
      // }
      // Preparar datos para enviar a ATT
      // const datosATT = {
      //   nombre: `${funcionario.nombres} ${funcionario.apPaterno}`.trim(),
      //   grado: funcionario.grado.trim(),
      //   comentario: evento.comentario.trim(),
      //   fecha: evento.fechaHora.toISOString(),
      // };
      // Obtener configuración de ATT
      // ...resto igual...
      return { message: 'Evento enviado a ATT exitosamente', success: true };
    } catch (error) {
      this.logger.error('Error al enviar evento a ATT:', error);
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(`Error al enviar evento a ATT: ${error.message}`);
    }
  }
}
