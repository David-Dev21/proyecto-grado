import { Injectable } from '@nestjs/common';

@Injectable()
export class CudService {
  generate(): string {
    // Usar timestamp más un número aleatorio para evitar colisiones
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `CASO-${timestamp}-${random}`;
  }

  // Método alternativo con formato más legible
  generateWithDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const sequence = Math.floor(Math.random() * 10000);

    return `CASO-${year}${month}${day}-${sequence}`;
  }
}
