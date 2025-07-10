import { Point } from 'geojson';
import { UbicacionAlerta, UbicacionFuncionario, Alerta, Atencion, Evento, CierreAlerta, Funcionario } from '../../../entities';

export interface BaseRepository<T> {
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T | null>;
  create(entity: Partial<T>): Promise<T>;
  update(id: string, entity: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

export interface IUbicacionAlertasRepository extends BaseRepository<UbicacionAlerta> {
  findByAlertaId(idAlerta: number): Promise<UbicacionAlerta[]>;
}

export interface IUbicacionFuncionariosRepository extends BaseRepository<UbicacionFuncionario> {
  findByAtencionId(idAtencion: number): Promise<UbicacionFuncionario[]>;
}

export interface IAlertasRepository extends BaseRepository<Alerta> {
  findByPersonaId(idPersona: number): Promise<Alerta[]>;
  findByEstado(estado: string): Promise<Alerta[]>;
}

export interface IAtencionesRepository extends BaseRepository<Atencion> {
  findByAlertaId(idAlerta: number): Promise<Atencion[]>;
  findByUsuarioDespachador(usuarioDespachador: string): Promise<Atencion[]>;
}

export interface IEventosRepository extends BaseRepository<Evento> {
  findByAlertaId(idAlerta: number): Promise<Evento[]>;
  findByFuncionarioId(idFuncionario: string): Promise<Evento[]>;
}

export interface ICierreAlertasRepository extends BaseRepository<CierreAlerta> {
  findByAlertaId(idAlerta: number): Promise<CierreAlerta[]>;
  findByTipoAlerta(tipoAlerta: string): Promise<CierreAlerta[]>;
}

export interface IFuncionariosRepository extends BaseRepository<Funcionario> {
  findByGrado(grado: string): Promise<Funcionario[]>;
}
