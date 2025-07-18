import { CierreAlerta } from '../entities/cierre-alerta.entity';
import { CreateCierreAlertaDto } from '../dto/create-cierre_alerta.dto';

export interface CierreAlertasRepositoryInterface {
  findAll(): Promise<CierreAlerta[]>;
  findByAlertaId(idAlerta: number): Promise<CierreAlerta[]>;
  findOne(id: string): Promise<CierreAlerta>;
  create(data: CreateCierreAlertaDto): Promise<CierreAlerta>;
  update(id: string, data: Partial<CierreAlerta>): Promise<CierreAlerta>;
  delete(id: string): Promise<void>;
  findByTipoAlerta(tipoAlerta: string): Promise<CierreAlerta[]>;
}
