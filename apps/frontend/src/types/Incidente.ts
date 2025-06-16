export type EstadoAlerta = "EN_PELIGRO" | "EN_CAMINO" | "ATENDIDO" | "CERRADO";

export type TipoAlerta = "VIOLENCIA" | "ACOSO" | "EMERGENCIA" | "ROBO" | "OTRO";

export type Persona = {
  id: string;
  nombres: string;
  ap_paterno: string;
  ap_materno: string;
  ci: string;
  fecha_nac: Date;
  celular: string;
  correo: string;
  empresa_telefonica: string;
};

export type Incidente = {
  id: string;
  id_persona: string;
  id_atencion?: string;
  id_municipio?: string;
  id_cierre_alerta?: string;
  fecha_hora: Date;
  nro_caso: string;
  estado: EstadoAlerta;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  // Información de la persona relacionada
  persona: Persona;
  // Información adicional para la tabla
  ubicacion?: {
    latitud: number;
    longitud: number;
  };
  prioridad?: "ALTA" | "MEDIA" | "BAJA";
  tiempo_transcurrido?: string;
};

// Datos de ejemplo para desarrollo
export const incidentes: Incidente[] = [
  {
    id: "alerta-001",
    id_persona: "1",
    nro_caso: "CASO-2025-001",
    fecha_hora: new Date("2025-06-16T08:30:00Z"),
    estado: "EN_PELIGRO",
    created_at: new Date("2025-06-16T08:30:00Z"),
    updated_at: new Date("2025-06-16T08:30:00Z"),
    persona: {
      id: "1",
      nombres: "María Elena",
      ap_paterno: "González",
      ap_materno: "Vásquez",
      ci: "12345678",
      fecha_nac: new Date("1990-05-15"),
      celular: "71234567",
      correo: "maria.gonzalez@email.com",
      empresa_telefonica: "Entel",
    },
    ubicacion: {
      latitud: -16.5000,
      longitud: -68.1193,
    },
    prioridad: "ALTA",
    tiempo_transcurrido: "2h 30m",
  },
  {
    id: "alerta-002",
    id_persona: "2",
    nro_caso: "CASO-2025-002",
    fecha_hora: new Date("2025-06-16T09:15:00Z"),
    estado: "EN_CAMINO",
    created_at: new Date("2025-06-16T09:15:00Z"),
    updated_at: new Date("2025-06-16T09:45:00Z"),
    persona: {
      id: "2",
      nombres: "Ana Patricia",
      ap_paterno: "Mamani",
      ap_materno: "Condori",
      ci: "87654321",
      fecha_nac: new Date("1985-03-22"),
      celular: "78765432",
      correo: "ana.mamani@email.com",
      empresa_telefonica: "Tigo",
    },
    ubicacion: {
      latitud: -16.5100,
      longitud: -68.1293,
    },
    prioridad: "MEDIA",
    tiempo_transcurrido: "1h 45m",
  },
  {
    id: "alerta-003",
    id_persona: "3",
    nro_caso: "CASO-2025-003",
    fecha_hora: new Date("2025-06-16T10:00:00Z"),
    estado: "ATENDIDO",
    created_at: new Date("2025-06-16T10:00:00Z"),
    updated_at: new Date("2025-06-16T10:30:00Z"),
    persona: {
      id: "3",
      nombres: "Carla Beatriz",
      ap_paterno: "Quispe",
      ap_materno: "Flores",
      ci: "45678912",
      fecha_nac: new Date("1992-07-08"),
      celular: "69876543",
      correo: "carla.quispe@email.com",
      empresa_telefonica: "Viva",
    },
    ubicacion: {
      latitud: -16.4900,
      longitud: -68.1093,
    },
    prioridad: "BAJA",
    tiempo_transcurrido: "1h 00m",
  },
  {
    id: "alerta-004",
    id_persona: "4",
    nro_caso: "CASO-2025-004",
    fecha_hora: new Date("2025-06-16T07:45:00Z"),
    estado: "EN_PELIGRO",
    created_at: new Date("2025-06-16T07:45:00Z"),
    updated_at: new Date("2025-06-16T07:45:00Z"),
    persona: {
      id: "4",
      nombres: "Lucía Esperanza",
      ap_paterno: "Torrez",
      ap_materno: "Mendoza",
      ci: "78912345",
      fecha_nac: new Date("1988-11-30"),
      celular: "65432178",
      correo: "lucia.torrez@email.com",
      empresa_telefonica: "Entel",
    },
    ubicacion: {
      latitud: -16.5200,
      longitud: -68.1393,
    },
    prioridad: "ALTA",
    tiempo_transcurrido: "3h 15m",
  },
  {
    id: "alerta-005",
    id_persona: "5",
    nro_caso: "CASO-2025-005",
    fecha_hora: new Date("2025-06-16T11:20:00Z"),
    estado: "EN_CAMINO",
    created_at: new Date("2025-06-16T11:20:00Z"),
    updated_at: new Date("2025-06-16T11:35:00Z"),
    persona: {
      id: "5",
      nombres: "Rosa Elena",
      ap_paterno: "Vargas",
      ap_materno: "Siles",
      ci: "23456789",
      fecha_nac: new Date("1995-01-18"),
      celular: "77654321",
      correo: "rosa.vargas@email.com",
      empresa_telefonica: "Tigo",
    },
    ubicacion: {
      latitud: -16.4800,
      longitud: -68.0993,
    },
    prioridad: "MEDIA",
    tiempo_transcurrido: "40m",
  },
];
