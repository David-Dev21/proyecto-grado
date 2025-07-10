// Tokens para inyección de dependencias usando clases (más type-safe y claro)
export class PersonaRepositoryToken {}
export class ContactoRepositoryToken {}
export class AlertaRepositoryToken {}
export class ServicioSistemaExternoToken {}
export class ServicioNotificacionToken {}

// Ventajas de usar clases como tokens:
// 1. Son únicos automáticamente (como los Symbols)
// 2. TypeScript puede inferir tipos mejor
// 3. No hay redundancia de nombres
// 4. Más fácil de refactorizar
// 5. Es la práctica más moderna en NestJS
// 6. Mejor autocompletado en el IDE
// 7. Más fácil de usar para principiantes

// IMPORTANTE: Los nombres son solo convención
// TypeScript NO puede verificar automáticamente que:
// ContactoRepositoryToken → debe ser usado con ContactoRepository
// Es responsabilidad del desarrollador mantener la consistencia
