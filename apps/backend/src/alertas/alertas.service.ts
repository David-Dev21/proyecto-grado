import { Injectable, Logger } from '@nestjs/common';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EstadoAlerta, OrigenAlerta } from '@prisma/client';
import { PersonaService } from './services/persona.service';
import { CudService } from './services/cud.service';

@Injectable()
export class AlertasService {
  private readonly logger = new Logger(AlertasService.name);

  constructor(
    private prisma: PrismaService,
    private personaService: PersonaService,
    private cud: CudService,
  ) {}

  async create(createAlertaDto: CreateAlertaDto) {
    try {
      // Delegar la gestión de persona y contactos al PersonaService
      const persona = await this.personaService.createOrUpdatePersona(createAlertaDto);

      // Crear la alerta
      const alerta = await this.createAlerta(createAlertaDto, persona.id);

      // Procesar contactos adicionales
      if (createAlertaDto.contactos) {
        await this.personaService.processContactosAdicionales(persona.id, createAlertaDto.contactos);
      }

      return {
        message: 'Alerta creada exitosamente',
        uuid: alerta.uuid,
      };
    } catch (error) {
      throw error;
    }
  }

  private async createAlerta(createAlertaDto: CreateAlertaDto, personaId: bigint) {
    return this.prisma.alerta.create({
      data: {
        uuid: createAlertaDto.IdAlerta,
        id_persona: personaId,
        fecha_hora: new Date(createAlertaDto.fechaRegistro),
        nro_caso: this.cud.generate(),
        estado: EstadoAlerta.EN_PELIGRO,
        origen: OrigenAlerta.ATT, // Siempre ATT por defecto
      },
    });
  }
  async findAll() {
    return this.prisma.alerta.findMany({
      where: {
        deleted_at: null, // Solo alertas no eliminadas
      },
      include: {
        persona: {
          include: {
            contactos_ref: {
              where: {
                deleted_at: null, // Solo contactos no eliminados
              },
            },
          },
        },
      },
    });
  }

  async findOne(uuid: string) {
    const alerta = await this.prisma.alerta.findFirst({
      where: {
        uuid: uuid, // Buscar por UUID en lugar de ID
        deleted_at: null, // Solo si no está eliminada
      },
      include: {
        persona: {
          include: {
            contactos_ref: {
              where: {
                deleted_at: null, // Solo contactos no eliminados
              },
            },
          },
        },
      },
    });

    if (!alerta) {
      throw new Error('Alerta no encontrada');
    }

    return alerta;
  }
  async update(uuid: string, updateAlertaDto: UpdateAlertaDto) {
    try {
      // Verificar que la alerta existe y no está eliminada
      const alertaExistente = await this.prisma.alerta.findFirst({
        where: {
          uuid: uuid, // Buscar por UUID
          deleted_at: null,
        },
      });

      if (!alertaExistente) {
        throw new Error('Alerta no encontrada o eliminada');
      }

      // Si se proporciona información de persona, actualizar o crear persona
      let personaId = alertaExistente.id_persona;

      if (updateAlertaDto.persona) {
        let persona = await this.prisma.persona.findFirst({
          where: { id: alertaExistente.id_persona },
        });

        if (persona) {
          // Actualizar persona existente
          persona = await this.prisma.persona.update({
            where: { id: persona.id },
            data: {
              nombres: updateAlertaDto.persona.nombre || persona.nombres,
              ci: updateAlertaDto.persona.cedulaIdentidad || persona.ci,
              fecha_nac: updateAlertaDto.persona.fechaNacimiento
                ? new Date(updateAlertaDto.persona.fechaNacimiento)
                : persona.fecha_nac,
              celular: updateAlertaDto.contacto?.celular || persona.celular,
              correo: updateAlertaDto.contacto?.correo || persona.correo,
              updated_at: new Date(),
            },
          });
        }
      }

      // Actualizar la alerta
      const alertaActualizada = await this.prisma.alerta.updateMany({
        where: {
          uuid: uuid,
          deleted_at: null,
        },
        data: {
          fecha_hora: updateAlertaDto.fechaRegistro ? new Date(updateAlertaDto.fechaRegistro) : undefined,
          estado: updateAlertaDto.estado || undefined,
          updated_at: new Date(),
        },
      });

      // Buscar la alerta actualizada para retornarla
      const alertaResult = await this.prisma.alerta.findFirst({
        where: { uuid: uuid },
        include: {
          persona: {
            include: {
              contactos_ref: {
                where: { deleted_at: null },
              },
            },
          },
        },
      });

      // Si se proporcionan contactos adicionales, eliminar los existentes y crear nuevos
      if (updateAlertaDto.contactos) {
        // Soft delete de contactos existentes
        await this.prisma.contactoRef.updateMany({
          where: {
            id_persona: personaId,
            deleted_at: null,
          },
          data: {
            deleted_at: new Date(),
            updated_at: new Date(),
          },
        });

        // Crear nuevos contactos
        if (updateAlertaDto.contactos.length > 0) {
          await this.prisma.contactoRef.createMany({
            data: updateAlertaDto.contactos.map((contacto) => ({
              id_persona: personaId,
              nombre: contacto.nombre,
              relacion: contacto.relacion,
              celular: contacto.celular,
            })),
          });
        }
      }

      // Retornar la alerta actualizada
      return alertaResult;
    } catch (error) {
      this.logger.error('Error al actualizar alerta:', error);
      throw error;
    }
  }

  async remove(uuid: string) {
    try {
      // Verificar que la alerta existe y no está eliminada
      const alertaExistente = await this.prisma.alerta.findFirst({
        where: {
          uuid: uuid,
          deleted_at: null,
        },
      });

      if (!alertaExistente) {
        throw new Error('Alerta no encontrada o ya eliminada');
      }

      // Soft delete de la alerta
      await this.prisma.alerta.updateMany({
        where: {
          uuid: uuid,
          deleted_at: null,
        },
        data: {
          deleted_at: new Date(),
          updated_at: new Date(),
        },
      });

      // Opcional: También hacer soft delete de los contactos relacionados
      await this.prisma.contactoRef.updateMany({
        where: {
          id_persona: alertaExistente.id_persona,
          deleted_at: null,
        },
        data: {
          deleted_at: new Date(),
          updated_at: new Date(),
        },
      });

      return {
        message: 'Alerta eliminada exitosamente',
        alertaUuid: uuid,
        fechaEliminacion: new Date(),
      };
    } catch (error) {
      this.logger.error('Error al eliminar alerta:', error);
      throw error;
    }
  }

  /**
   * Obtiene la geolocalización desde un sistema externo
   * @param uuidAlerta UUID de la alerta
   * @returns Datos de localización
   */
  async getGeolocationFromExternalSystem(uuidAlerta: string) {
    try {
      // TODO: Implementar llamada al sistema externo
      // Por ahora, simulamos una respuesta
      this.logger.log(`Obteniendo geolocalización para alerta ${uuidAlerta} desde sistema externo`);

      // Simular delay de API externa
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Datos simulados - reemplazar con llamada real al sistema externo
      return {
        latitud: -17.783327,
        longitud: -63.18214,
        direccion: 'Av. Cristo Redentor, Santa Cruz, Bolivia',
        precision: 50, // metros
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      this.logger.error(`Error al obtener geolocalización para alerta ${uuidAlerta}:`, error);
      throw new Error(`No se pudo obtener la geolocalización: ${error.message}`);
    }
  }

  /**
   * Obtiene detalles adicionales de la alerta desde la base de datos propia
   * @param uuidAlerta UUID de la alerta
   * @returns Detalles de la alerta
   */
  async getAlertDetailsFromOwnDb(uuidAlerta: string) {
    try {
      this.logger.log(`Obteniendo detalles de alerta ${uuidAlerta} desde base de datos propia`);

      // Buscar la alerta en nuestra base de datos
      const alerta = await this.prisma.alerta.findFirst({
        where: { uuid: uuidAlerta },
        include: {
          persona: true,
          ubicaciones: true,
          eventos: true,
          atencion: true,
        },
      });

      if (!alerta) {
        // Si no existe, crear un registro básico o devolver datos por defecto
        this.logger.warn(`Alerta ${uuidAlerta} no encontrada en base de datos propia`);
        return {
          estado: 'EN_PELIGRO',
          tipo: 'EMERGENCIA',
          descripcion: 'Alerta recibida desde sistema externo',
        };
      }

      return {
        estado: alerta.estado,
        nro_caso: alerta.nro_caso,
        fecha_hora: alerta.fecha_hora,
        descripcion: 'Alerta procesada desde sistema externo',
        fechaCreacion: alerta.created_at,
        persona: (alerta as any).persona
          ? {
              nombre: (alerta as any).persona.nombres,
              ci: (alerta as any).persona.ci,
              celular: (alerta as any).persona.celular,
            }
          : null,
      };
    } catch (error) {
      this.logger.error(`Error al obtener detalles de alerta ${uuidAlerta}:`, error);
      throw new Error(`No se pudieron obtener los detalles de la alerta: ${error.message}`);
    }
  }
}
