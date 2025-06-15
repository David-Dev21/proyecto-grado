-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "EstadoAlerta" AS ENUM ('EN_PELIGRO', 'EN_CAMINO', 'ATENDIDO');

-- CreateEnum
CREATE TYPE "TipoAlerta" AS ENUM ('EMERGENCIA', 'INCIDENTE', 'MANTENIMIENTO', 'INFORMATIVO', 'ROBO', 'VIOLENCIA', 'ACCIDENTE', 'OTRO');

-- CreateTable
CREATE TABLE "personas" (
    "id" BIGSERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "ap_paterno" TEXT NOT NULL,
    "ap_materno" TEXT NOT NULL,
    "ci" TEXT NOT NULL,
    "fecha_nac" TIMESTAMP(3) NOT NULL,
    "celular" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "empresa_telefonica" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "personas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contactos_ref" (
    "id" BIGSERIAL NOT NULL,
    "id_persona" BIGINT NOT NULL,
    "nombre" TEXT NOT NULL,
    "relacion" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "contactos_ref_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" BIGSERIAL NOT NULL,
    "id_alerta" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "id_seguimiento" TEXT,
    "fecha_hora" TIMESTAMP(3) NOT NULL,
    "ubicacion" geography(POINT) NOT NULL,
    "comentario" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alertas" (
    "id" TEXT NOT NULL,
    "id_persona" BIGINT NOT NULL,
    "id_atencion" BIGINT,
    "id_municipio" TEXT,
    "id_cierre_alerta" BIGINT,
    "fecha_hora" TIMESTAMP(3) NOT NULL,
    "nro_caso" TEXT NOT NULL,
    "estado" "EstadoAlerta" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "alertas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atenciones" (
    "id" BIGSERIAL NOT NULL,
    "usuario_despachador" BIGINT NOT NULL,
    "id_vehiculo" TEXT NOT NULL,
    "sigla_radio" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "atenciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atencion_funcionario" (
    "id" BIGSERIAL NOT NULL,
    "id_atencion" BIGINT NOT NULL,
    "id_funcionario" TEXT,
    "encargado" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "atencion_funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ubicacion_alertas" (
    "id" BIGSERIAL NOT NULL,
    "id_alerta" TEXT NOT NULL,
    "fecha_hora" TIMESTAMP(3) NOT NULL,
    "ubicacion" geography(POINT) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "ubicacion_alertas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cierres_alerta" (
    "id" BIGSERIAL NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "fecha_hora" TIMESTAMP(3) NOT NULL,
    "comentario" TEXT NOT NULL,
    "tipo_alerta" "TipoAlerta" NOT NULL,
    "estado_victima" TEXT NOT NULL,
    "nombre_agresor" TEXT NOT NULL,
    "ci_agresor" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "cierres_alerta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ubicacion_funcionarios" (
    "id" BIGSERIAL NOT NULL,
    "id_atencion" BIGINT NOT NULL,
    "fecha_hora" TIMESTAMP(3) NOT NULL,
    "ubicacion" geography(POINT) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "ubicacion_funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alertas_id_atencion_key" ON "alertas"("id_atencion");

-- CreateIndex
CREATE UNIQUE INDEX "alertas_id_cierre_alerta_key" ON "alertas"("id_cierre_alerta");

-- AddForeignKey
ALTER TABLE "contactos_ref" ADD CONSTRAINT "contactos_ref_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_id_alerta_fkey" FOREIGN KEY ("id_alerta") REFERENCES "alertas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alertas" ADD CONSTRAINT "alertas_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alertas" ADD CONSTRAINT "alertas_id_atencion_fkey" FOREIGN KEY ("id_atencion") REFERENCES "atenciones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alertas" ADD CONSTRAINT "alertas_id_cierre_alerta_fkey" FOREIGN KEY ("id_cierre_alerta") REFERENCES "cierres_alerta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atencion_funcionario" ADD CONSTRAINT "atencion_funcionario_id_atencion_fkey" FOREIGN KEY ("id_atencion") REFERENCES "atenciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ubicacion_alertas" ADD CONSTRAINT "ubicacion_alertas_id_alerta_fkey" FOREIGN KEY ("id_alerta") REFERENCES "alertas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ubicacion_funcionarios" ADD CONSTRAINT "ubicacion_funcionarios_id_atencion_fkey" FOREIGN KEY ("id_atencion") REFERENCES "atenciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
