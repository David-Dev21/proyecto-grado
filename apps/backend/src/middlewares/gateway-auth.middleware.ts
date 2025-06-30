import { Injectable, NestMiddleware, UnauthorizedException, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class GatewayAuthMiddleware implements NestMiddleware {
  private readonly logger = new Logger(GatewayAuthMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    // 🔧 VERSIÓN ROBUSTA: Maneja diferentes formatos de headers
    const receivedKey =
      (req.headers['api_key_gateway'] as string) ||
      (req.headers['API_KEY_GATEWAY'] as string) ||
      (req.headers['api-key-gateway'] as string);

    const expectedKey = process.env.API_KEY_GATEWAY;

    // �️ Verificar que la variable de entorno esté configurada
    if (!expectedKey) {
      this.logger.error('❌ API_KEY_GATEWAY no está configurada en las variables de entorno');
      throw new UnauthorizedException(['Error de configuración del servidor']);
    }

    // �🔍 Log detallado para debugging (solo en desarrollo)
    if (process.env.NODE_ENV !== 'production') {
      this.logger.debug('=== HEADERS DEBUG ===');
      this.logger.debug(`apikey: ${req.headers['apikey']}`);
      this.logger.debug(`api_key_gateway: ${req.headers['api_key_gateway']}`);
      this.logger.debug(`API_KEY_GATEWAY: ${req.headers['API_KEY_GATEWAY']}`);
      this.logger.debug(`Via Kong: ${req.headers['via']}`);
      this.logger.debug(`receivedKey: ${receivedKey}`);
      this.logger.debug(`expectedKey: ${expectedKey}`);
      this.logger.debug('==================');
    }

    if (!receivedKey || receivedKey !== expectedKey) {
      this.logger.warn(`❌ Acceso denegado - Key recibida: ${receivedKey ? 'PRESENTE' : 'AUSENTE'}`);
      throw new UnauthorizedException(['Acceso solo mediante API Gateway']);
    }

    this.logger.log(`✅ Gateway autenticado correctamente`);
    next();
  }
}
