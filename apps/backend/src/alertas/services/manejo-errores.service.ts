import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';

/**
 * Servicio centralizado para manejo de errores
 * Convierte errores técnicos en respuestas HTTP apropiadas
 */
@Injectable()
export class ManejoErroresService {
  private readonly logger = new Logger(ManejoErroresService.name);

  /**
   * Maneja cualquier tipo de error y lanza la HttpException apropiada
   * @param error El error original
   * @param contexto Contexto donde ocurrió el error
   */
  manejarError(error: any, contexto: string): never {
    this.logger.error(`Error en ${contexto}:`, error);

    // Si ya es una HttpException, la relanzamos
    if (error instanceof HttpException) {
      throw error;
    }

    // Errores de Prisma
    if (this.esPrismaError(error)) {
      throw this.convertirErrorPrisma(error);
    }

    // Errores de negocio
    if (this.esErrorNegocio(error)) {
      throw this.convertirErrorNegocio(error);
    }

    // Error genérico
    throw new HttpException(`Error interno del servidor: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  private esPrismaError(error: any): boolean {
    return error.code && error.code.startsWith('P');
  }

  private convertirErrorPrisma(error: any): HttpException {
    switch (error.code) {
      case 'P2002':
        return new HttpException('Ya existe un registro con estos datos únicos', HttpStatus.CONFLICT);
      case 'P2003':
        return new HttpException('Error de referencia en la base de datos', HttpStatus.BAD_REQUEST);
      case 'P2025':
        return new HttpException('Registro no encontrado', HttpStatus.NOT_FOUND);
      default:
        return new HttpException(`Error de base de datos: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private esErrorNegocio(error: any): boolean {
    return (
      error.message?.includes('no encontrada') ||
      error.message?.includes('not found') ||
      error.message?.includes('no válido')
    );
  }

  private convertirErrorNegocio(error: any): HttpException {
    if (error.message?.includes('no encontrada') || error.message?.includes('not found')) {
      return new HttpException('Recurso no encontrado', HttpStatus.NOT_FOUND);
    }

    return new HttpException(error.message || 'Error en la operación', HttpStatus.BAD_REQUEST);
  }
}
