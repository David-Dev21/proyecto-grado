export enum EstadoAlerta {
  EN_PELIGRO = 'EN_PELIGRO',
  ACTIVA = 'ACTIVA',
  ATENDIDA = 'ATENDIDA',
  CERRADA = 'CERRADA',
}

export enum OrigenAlerta {
  ATT = 'ATT',
  APP = 'APP',
  SISTEMA = 'SISTEMA',
}

export enum TipoAlerta {
  EMERGENCIA = 'EMERGENCIA',
  FALSA_ALARMA = 'FALSA_ALARMA',
  PRUEBA = 'PRUEBA',
}
