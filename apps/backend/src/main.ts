import { NestFactory } from '@nestjs/core';
import { ValidationPipe, CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppModule } from './app.module';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return this.transformBigInt(data);
      }),
    );
  }

  private transformBigInt(obj: any): any {
    if (obj === null || obj === undefined) return obj;

    if (typeof obj === 'bigint') {
      return obj.toString();
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => this.transformBigInt(item));
    }

    if (typeof obj === 'object' && obj.constructor === Object) {
      const transformed: any = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          transformed[key] = this.transformBigInt(obj[key]);
        }
      }
      return transformed;
    }

    return obj;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aplicar el interceptor global para manejar BigInt
  app.useGlobalInterceptors(new BigIntInterceptor());

  // Habilitar CORS para permitir requests desde el frontend
  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  });

  // Habilitar validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      disableErrorMessages: false,
      validationError: {
        target: false,
        value: false,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Sistema de Alertas API')
    .setDescription('API para el sistema de gestión de alertas')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Cambiar puerto a 3001 para no conflictar con Next.js
  await app.listen(process.env.PORT ?? 3001);
}
void bootstrap();
