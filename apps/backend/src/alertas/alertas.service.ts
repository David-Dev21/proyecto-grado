import { Injectable, Logger } from '@nestjs/common';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EstadoAlerta } from '@prisma/client';

@Injectable()
export class AlertasService {
  private readonly logger = new Logger(AlertasService.name);

  constructor(private prisma: PrismaService) {}
  
  async create(createAlertaDto: CreateAlertaDto) {
    try {
      // Primero buscar si la persona ya existe por CI
      let persona = await this.prisma.persona.findFirst({
        where: { ci: createAlertaDto.persona.cedulaIdentidad }
      });

      if (!persona) {
        // Crear nueva persona si no existe
        persona = await this.prisma.persona.create({
          data: {
            nombres: createAlertaDto.persona.nombre,
            ap_paterno: '', // Se puede extraer del nombre completo si es necesario
            ap_materno: '', // Se puede extraer del nombre completo si es necesario
            ci: createAlertaDto.persona.cedulaIdentidad,
            fecha_nac: new Date(createAlertaDto.persona.fechaNacimiento),
            celular: createAlertaDto.contacto.celular,
            correo: createAlertaDto.contacto.correo,
            empresa_telefonica: 'No especificada' // Valor por defecto
          }
        });
      } else {
        // Actualizar información de la persona existente
        persona = await this.prisma.persona.update({
          where: { id: persona.id },
          data: {
            nombres: createAlertaDto.persona.nombre,
            fecha_nac: new Date(createAlertaDto.persona.fechaNacimiento),
            celular: createAlertaDto.contacto.celular,
            correo: createAlertaDto.contacto.correo,
            updated_at: new Date()
          }
        });
      }

      // Crear la alerta - ahora el ID es autoincrement, no necesitamos pasarlo
      const alerta = await this.prisma.alerta.create({
        data: {
          uuid: createAlertaDto.IdAlerta, // El UUID va en el campo uuid
          id_persona: persona.id,
          fecha_hora: new Date(createAlertaDto.fechaRegistro),
          nro_caso: `CASO-${Date.now()}`, // Generar número de caso único
          estado: EstadoAlerta.EN_PELIGRO // Estado inicial
        }
      });

      // Crear contactos adicionales si existen
      if (createAlertaDto.contactos && createAlertaDto.contactos.length > 0) {
        await this.prisma.contactoRef.createMany({
          data: createAlertaDto.contactos.map(contacto => ({
            id_persona: persona.id,
            nombre: contacto.nombre,
            relacion: contacto.relacion,
            celular: contacto.celular
          }))
        });
      }

      // Solo retornar mensaje de estado sin datos del objeto
      return {
        status: true,
        message: 'Alerta creada exitosamente'
      };

    } catch (error) {
      throw error; // Re-lanzar el error para que el controlador lo maneje
    }
  }
  async findAll() {
    return this.prisma.alerta.findMany({
      where: {
        deleted_at: null // Solo alertas no eliminadas
      },
      include: {
        persona: {
          include: {
            contactos_ref: {
              where: {
                deleted_at: null // Solo contactos no eliminados
              }
            }
          }
        }
      }
    });
  }

  async findOne(id: string) {
    // Convertir string a BigInt
    const bigIntId = BigInt(id);
    
    const alerta = await this.prisma.alerta.findFirst({
      where: { 
        id: bigIntId,
        deleted_at: null // Solo si no está eliminada
      },
      include: {
        persona: {
          include: {
            contactos_ref: {
              where: {
                deleted_at: null // Solo contactos no eliminados
              }
            }
          }
        }
      }
    });

    if (!alerta) {
      throw new Error('Alerta no encontrada');
    }

    return alerta;
  }
  async update(id: string, updateAlertaDto: UpdateAlertaDto) {
    try {
      // Convertir string a BigInt
      const bigIntId = BigInt(id);
      
      // Verificar que la alerta existe y no está eliminada
      const alertaExistente = await this.prisma.alerta.findFirst({
        where: { 
          id: bigIntId,
          deleted_at: null 
        }
      });

      if (!alertaExistente) {
        throw new Error('Alerta no encontrada o eliminada');
      }

      // Si se proporciona información de persona, actualizar o crear persona
      let personaId = alertaExistente.id_persona;
      
      if (updateAlertaDto.persona) {
        let persona = await this.prisma.persona.findFirst({
          where: { id: alertaExistente.id_persona }
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
              updated_at: new Date()
            }
          });
        }
      }

      // Actualizar la alerta
      const alertaActualizada = await this.prisma.alerta.update({
        where: { id: bigIntId },
        data: {
          fecha_hora: updateAlertaDto.fechaRegistro 
            ? new Date(updateAlertaDto.fechaRegistro) 
            : undefined,
          estado: updateAlertaDto.estado || undefined,
          updated_at: new Date()
        }
      });

      // Si se proporcionan contactos adicionales, eliminar los existentes y crear nuevos
      if (updateAlertaDto.contactos) {
        // Soft delete de contactos existentes
        await this.prisma.contactoRef.updateMany({
          where: { 
            id_persona: personaId,
            deleted_at: null 
          },
          data: { 
            deleted_at: new Date(),
            updated_at: new Date()
          }
        });

        // Crear nuevos contactos
        if (updateAlertaDto.contactos.length > 0) {
          await this.prisma.contactoRef.createMany({
            data: updateAlertaDto.contactos.map(contacto => ({
              id_persona: personaId,
              nombre: contacto.nombre,
              relacion: contacto.relacion,
              celular: contacto.celular
            }))
          });
        }
      }

      // Solo retornar mensaje de estado sin datos del objeto
      return {
        status: true,
        message: 'Alerta actualizada exitosamente'
      };

    } catch (error) {
      this.logger.error('Error al actualizar alerta:', error);
      throw error;
    }
  }
  async remove(id: string) {
    try {
      // Convertir string a BigInt
      const bigIntId = BigInt(id);
      
      // Verificar que la alerta existe y no está eliminada
      const alertaExistente = await this.prisma.alerta.findFirst({
        where: { 
          id: bigIntId,
          deleted_at: null 
        }
      });

      if (!alertaExistente) {
        throw new Error('Alerta no encontrada o ya eliminada');
      }

      // Soft delete de la alerta
      const alertaEliminada = await this.prisma.alerta.update({
        where: { id: bigIntId },
        data: {
          deleted_at: new Date(),
          updated_at: new Date()
        }
      });

      // Opcional: También hacer soft delete de los contactos relacionados
      await this.prisma.contactoRef.updateMany({
        where: { 
          id_persona: alertaExistente.id_persona,
          deleted_at: null 
        },
        data: { 
          deleted_at: new Date(),
          updated_at: new Date()
        }
      });

      return {
        message: 'Alerta eliminada exitosamente',
        alertaId: id,
        fechaEliminacion: alertaEliminada.deleted_at
      };

    } catch (error) {
      this.logger.error('Error al eliminar alerta:', error);
      throw error;
    }
  }
}
