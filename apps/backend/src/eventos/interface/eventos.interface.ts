import { Evento } from '../entities/evento.entity';
import { CreateEventoDto } from '../dto/create-evento.dto';

export interface IEventosRepository {
  findAll(): Promise<Evento[]>;
  findOne(id: string): Promise<Evento>;
  create(data: CreateEventoDto): Promise<Evento>;
  update(id: string, data: Partial<Evento>): Promise<Evento>;
  delete(id: string): Promise<void>;
  findByAlertaId(idAlerta: number): Promise<Evento[]>;
  findByFuncionarioId(idFuncionario: string): Promise<Evento[]>;
}
