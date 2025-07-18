export enum EstadoAlerta {
  EN_PELIGRO = 'EN_PELIGRO',
  EN_CAMINO = 'EN_CAMINO',
  CERRADA = 'CERRADA',
}

export enum OrigenAlerta {
  ATT = 'ATT',
  APP = 'APP',
}

export enum TipoAlerta {
  EMERGENCIA = 'EMERGENCIA',
  FALSA_ALARMA = 'FALSA_ALARMA',
}

export type EstadoAlertaType = keyof typeof EstadoAlerta;
export type OrigenAlertaType = keyof typeof OrigenAlerta;
export type TipoAlertaType = keyof typeof TipoAlerta;
