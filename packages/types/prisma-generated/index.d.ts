
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Funcionarios
 * 
 */
export type Funcionarios = $Result.DefaultSelection<Prisma.$FuncionariosPayload>
/**
 * Model Persona
 * 
 */
export type Persona = $Result.DefaultSelection<Prisma.$PersonaPayload>
/**
 * Model ContactoRef
 * 
 */
export type ContactoRef = $Result.DefaultSelection<Prisma.$ContactoRefPayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Alerta
 * 
 */
export type Alerta = $Result.DefaultSelection<Prisma.$AlertaPayload>
/**
 * Model Atencion
 * 
 */
export type Atencion = $Result.DefaultSelection<Prisma.$AtencionPayload>
/**
 * Model AtencionFuncionario
 * 
 */
export type AtencionFuncionario = $Result.DefaultSelection<Prisma.$AtencionFuncionarioPayload>
/**
 * Model UbicacionAlerta
 * 
 */
export type UbicacionAlerta = $Result.DefaultSelection<Prisma.$UbicacionAlertaPayload>
/**
 * Model CierreAlerta
 * 
 */
export type CierreAlerta = $Result.DefaultSelection<Prisma.$CierreAlertaPayload>
/**
 * Model UbicacionFuncionario
 * 
 */
export type UbicacionFuncionario = $Result.DefaultSelection<Prisma.$UbicacionFuncionarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrigenAlerta: {
  ATT: 'ATT',
  FELCV: 'FELCV'
};

export type OrigenAlerta = (typeof OrigenAlerta)[keyof typeof OrigenAlerta]


export const EstadoAlerta: {
  EN_PELIGRO: 'EN_PELIGRO',
  EN_CAMINO: 'EN_CAMINO',
  ATENDIDO: 'ATENDIDO'
};

export type EstadoAlerta = (typeof EstadoAlerta)[keyof typeof EstadoAlerta]


export const TipoAlerta: {
  EMERGENCIA: 'EMERGENCIA',
  INCIDENTE: 'INCIDENTE',
  MANTENIMIENTO: 'MANTENIMIENTO',
  INFORMATIVO: 'INFORMATIVO',
  ROBO: 'ROBO',
  VIOLENCIA: 'VIOLENCIA',
  ACCIDENTE: 'ACCIDENTE',
  OTRO: 'OTRO'
};

export type TipoAlerta = (typeof TipoAlerta)[keyof typeof TipoAlerta]

}

export type OrigenAlerta = $Enums.OrigenAlerta

export const OrigenAlerta: typeof $Enums.OrigenAlerta

export type EstadoAlerta = $Enums.EstadoAlerta

export const EstadoAlerta: typeof $Enums.EstadoAlerta

export type TipoAlerta = $Enums.TipoAlerta

export const TipoAlerta: typeof $Enums.TipoAlerta

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Funcionarios
 * const funcionarios = await prisma.funcionarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Funcionarios
   * const funcionarios = await prisma.funcionarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.funcionarios`: Exposes CRUD operations for the **Funcionarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionarios.findMany()
    * ```
    */
  get funcionarios(): Prisma.FuncionariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.persona`: Exposes CRUD operations for the **Persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.PersonaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactoRef`: Exposes CRUD operations for the **ContactoRef** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactoRefs
    * const contactoRefs = await prisma.contactoRef.findMany()
    * ```
    */
  get contactoRef(): Prisma.ContactoRefDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alerta`: Exposes CRUD operations for the **Alerta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alertas
    * const alertas = await prisma.alerta.findMany()
    * ```
    */
  get alerta(): Prisma.AlertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atencion`: Exposes CRUD operations for the **Atencion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atencions
    * const atencions = await prisma.atencion.findMany()
    * ```
    */
  get atencion(): Prisma.AtencionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atencionFuncionario`: Exposes CRUD operations for the **AtencionFuncionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtencionFuncionarios
    * const atencionFuncionarios = await prisma.atencionFuncionario.findMany()
    * ```
    */
  get atencionFuncionario(): Prisma.AtencionFuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubicacionAlerta`: Exposes CRUD operations for the **UbicacionAlerta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UbicacionAlertas
    * const ubicacionAlertas = await prisma.ubicacionAlerta.findMany()
    * ```
    */
  get ubicacionAlerta(): Prisma.UbicacionAlertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cierreAlerta`: Exposes CRUD operations for the **CierreAlerta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CierreAlertas
    * const cierreAlertas = await prisma.cierreAlerta.findMany()
    * ```
    */
  get cierreAlerta(): Prisma.CierreAlertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubicacionFuncionario`: Exposes CRUD operations for the **UbicacionFuncionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UbicacionFuncionarios
    * const ubicacionFuncionarios = await prisma.ubicacionFuncionario.findMany()
    * ```
    */
  get ubicacionFuncionario(): Prisma.UbicacionFuncionarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Funcionarios: 'Funcionarios',
    Persona: 'Persona',
    ContactoRef: 'ContactoRef',
    Evento: 'Evento',
    Alerta: 'Alerta',
    Atencion: 'Atencion',
    AtencionFuncionario: 'AtencionFuncionario',
    UbicacionAlerta: 'UbicacionAlerta',
    CierreAlerta: 'CierreAlerta',
    UbicacionFuncionario: 'UbicacionFuncionario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "funcionarios" | "persona" | "contactoRef" | "evento" | "alerta" | "atencion" | "atencionFuncionario" | "ubicacionAlerta" | "cierreAlerta" | "ubicacionFuncionario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Funcionarios: {
        payload: Prisma.$FuncionariosPayload<ExtArgs>
        fields: Prisma.FuncionariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          findFirst: {
            args: Prisma.FuncionariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          findMany: {
            args: Prisma.FuncionariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>[]
          }
          create: {
            args: Prisma.FuncionariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          createMany: {
            args: Prisma.FuncionariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>[]
          }
          delete: {
            args: Prisma.FuncionariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          update: {
            args: Prisma.FuncionariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          deleteMany: {
            args: Prisma.FuncionariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>[]
          }
          upsert: {
            args: Prisma.FuncionariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          aggregate: {
            args: Prisma.FuncionariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionarios>
          }
          groupBy: {
            args: Prisma.FuncionariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionariosCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosCountAggregateOutputType> | number
          }
        }
      }
      Persona: {
        payload: Prisma.$PersonaPayload<ExtArgs>
        fields: Prisma.PersonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findFirst: {
            args: Prisma.PersonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findMany: {
            args: Prisma.PersonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          create: {
            args: Prisma.PersonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          createMany: {
            args: Prisma.PersonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          delete: {
            args: Prisma.PersonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          update: {
            args: Prisma.PersonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          deleteMany: {
            args: Prisma.PersonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          upsert: {
            args: Prisma.PersonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.PersonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
      ContactoRef: {
        payload: Prisma.$ContactoRefPayload<ExtArgs>
        fields: Prisma.ContactoRefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactoRefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactoRefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload>
          }
          findFirst: {
            args: Prisma.ContactoRefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactoRefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload>
          }
          findMany: {
            args: Prisma.ContactoRefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload>[]
          }
          create: {
            args: Prisma.ContactoRefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload>
          }
          createMany: {
            args: Prisma.ContactoRefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactoRefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload>[]
          }
          delete: {
            args: Prisma.ContactoRefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload>
          }
          update: {
            args: Prisma.ContactoRefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload>
          }
          deleteMany: {
            args: Prisma.ContactoRefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactoRefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactoRefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload>[]
          }
          upsert: {
            args: Prisma.ContactoRefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoRefPayload>
          }
          aggregate: {
            args: Prisma.ContactoRefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactoRef>
          }
          groupBy: {
            args: Prisma.ContactoRefGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactoRefGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactoRefCountArgs<ExtArgs>
            result: $Utils.Optional<ContactoRefCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Alerta: {
        payload: Prisma.$AlertaPayload<ExtArgs>
        fields: Prisma.AlertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          findFirst: {
            args: Prisma.AlertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          findMany: {
            args: Prisma.AlertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>[]
          }
          create: {
            args: Prisma.AlertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          createMany: {
            args: Prisma.AlertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>[]
          }
          delete: {
            args: Prisma.AlertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          update: {
            args: Prisma.AlertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          deleteMany: {
            args: Prisma.AlertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>[]
          }
          upsert: {
            args: Prisma.AlertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          aggregate: {
            args: Prisma.AlertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlerta>
          }
          groupBy: {
            args: Prisma.AlertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertaCountArgs<ExtArgs>
            result: $Utils.Optional<AlertaCountAggregateOutputType> | number
          }
        }
      }
      Atencion: {
        payload: Prisma.$AtencionPayload<ExtArgs>
        fields: Prisma.AtencionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtencionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtencionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload>
          }
          findFirst: {
            args: Prisma.AtencionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtencionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload>
          }
          findMany: {
            args: Prisma.AtencionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload>[]
          }
          create: {
            args: Prisma.AtencionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload>
          }
          createMany: {
            args: Prisma.AtencionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtencionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload>[]
          }
          delete: {
            args: Prisma.AtencionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload>
          }
          update: {
            args: Prisma.AtencionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload>
          }
          deleteMany: {
            args: Prisma.AtencionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtencionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtencionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload>[]
          }
          upsert: {
            args: Prisma.AtencionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionPayload>
          }
          aggregate: {
            args: Prisma.AtencionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtencion>
          }
          groupBy: {
            args: Prisma.AtencionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtencionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtencionCountArgs<ExtArgs>
            result: $Utils.Optional<AtencionCountAggregateOutputType> | number
          }
        }
      }
      AtencionFuncionario: {
        payload: Prisma.$AtencionFuncionarioPayload<ExtArgs>
        fields: Prisma.AtencionFuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtencionFuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtencionFuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload>
          }
          findFirst: {
            args: Prisma.AtencionFuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtencionFuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload>
          }
          findMany: {
            args: Prisma.AtencionFuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload>[]
          }
          create: {
            args: Prisma.AtencionFuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload>
          }
          createMany: {
            args: Prisma.AtencionFuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtencionFuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload>[]
          }
          delete: {
            args: Prisma.AtencionFuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload>
          }
          update: {
            args: Prisma.AtencionFuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.AtencionFuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtencionFuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtencionFuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.AtencionFuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtencionFuncionarioPayload>
          }
          aggregate: {
            args: Prisma.AtencionFuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtencionFuncionario>
          }
          groupBy: {
            args: Prisma.AtencionFuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtencionFuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtencionFuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<AtencionFuncionarioCountAggregateOutputType> | number
          }
        }
      }
      UbicacionAlerta: {
        payload: Prisma.$UbicacionAlertaPayload<ExtArgs>
        fields: Prisma.UbicacionAlertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UbicacionAlertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UbicacionAlertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload>
          }
          findFirst: {
            args: Prisma.UbicacionAlertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UbicacionAlertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload>
          }
          findMany: {
            args: Prisma.UbicacionAlertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload>[]
          }
          create: {
            args: Prisma.UbicacionAlertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload>
          }
          createMany: {
            args: Prisma.UbicacionAlertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UbicacionAlertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload>[]
          }
          delete: {
            args: Prisma.UbicacionAlertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload>
          }
          update: {
            args: Prisma.UbicacionAlertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload>
          }
          deleteMany: {
            args: Prisma.UbicacionAlertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UbicacionAlertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UbicacionAlertaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload>[]
          }
          upsert: {
            args: Prisma.UbicacionAlertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionAlertaPayload>
          }
          aggregate: {
            args: Prisma.UbicacionAlertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbicacionAlerta>
          }
          groupBy: {
            args: Prisma.UbicacionAlertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbicacionAlertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UbicacionAlertaCountArgs<ExtArgs>
            result: $Utils.Optional<UbicacionAlertaCountAggregateOutputType> | number
          }
        }
      }
      CierreAlerta: {
        payload: Prisma.$CierreAlertaPayload<ExtArgs>
        fields: Prisma.CierreAlertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CierreAlertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CierreAlertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload>
          }
          findFirst: {
            args: Prisma.CierreAlertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CierreAlertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload>
          }
          findMany: {
            args: Prisma.CierreAlertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload>[]
          }
          create: {
            args: Prisma.CierreAlertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload>
          }
          createMany: {
            args: Prisma.CierreAlertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CierreAlertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload>[]
          }
          delete: {
            args: Prisma.CierreAlertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload>
          }
          update: {
            args: Prisma.CierreAlertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload>
          }
          deleteMany: {
            args: Prisma.CierreAlertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CierreAlertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CierreAlertaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload>[]
          }
          upsert: {
            args: Prisma.CierreAlertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CierreAlertaPayload>
          }
          aggregate: {
            args: Prisma.CierreAlertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCierreAlerta>
          }
          groupBy: {
            args: Prisma.CierreAlertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CierreAlertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CierreAlertaCountArgs<ExtArgs>
            result: $Utils.Optional<CierreAlertaCountAggregateOutputType> | number
          }
        }
      }
      UbicacionFuncionario: {
        payload: Prisma.$UbicacionFuncionarioPayload<ExtArgs>
        fields: Prisma.UbicacionFuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UbicacionFuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UbicacionFuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload>
          }
          findFirst: {
            args: Prisma.UbicacionFuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UbicacionFuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload>
          }
          findMany: {
            args: Prisma.UbicacionFuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload>[]
          }
          create: {
            args: Prisma.UbicacionFuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload>
          }
          createMany: {
            args: Prisma.UbicacionFuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UbicacionFuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload>[]
          }
          delete: {
            args: Prisma.UbicacionFuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload>
          }
          update: {
            args: Prisma.UbicacionFuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.UbicacionFuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UbicacionFuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UbicacionFuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.UbicacionFuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionFuncionarioPayload>
          }
          aggregate: {
            args: Prisma.UbicacionFuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbicacionFuncionario>
          }
          groupBy: {
            args: Prisma.UbicacionFuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbicacionFuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UbicacionFuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<UbicacionFuncionarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    funcionarios?: FuncionariosOmit
    persona?: PersonaOmit
    contactoRef?: ContactoRefOmit
    evento?: EventoOmit
    alerta?: AlertaOmit
    atencion?: AtencionOmit
    atencionFuncionario?: AtencionFuncionarioOmit
    ubicacionAlerta?: UbicacionAlertaOmit
    cierreAlerta?: CierreAlertaOmit
    ubicacionFuncionario?: UbicacionFuncionarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FuncionariosCountOutputType
   */

  export type FuncionariosCountOutputType = {
    atencion_funcionario: number
  }

  export type FuncionariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atencion_funcionario?: boolean | FuncionariosCountOutputTypeCountAtencion_funcionarioArgs
  }

  // Custom InputTypes
  /**
   * FuncionariosCountOutputType without action
   */
  export type FuncionariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionariosCountOutputType
     */
    select?: FuncionariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionariosCountOutputType without action
   */
  export type FuncionariosCountOutputTypeCountAtencion_funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtencionFuncionarioWhereInput
  }


  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    contactos_ref: number
    alertas: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactos_ref?: boolean | PersonaCountOutputTypeCountContactos_refArgs
    alertas?: boolean | PersonaCountOutputTypeCountAlertasArgs
  }

  // Custom InputTypes
  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountContactos_refArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactoRefWhereInput
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountAlertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
  }


  /**
   * Count Type AlertaCountOutputType
   */

  export type AlertaCountOutputType = {
    ubicaciones: number
    eventos: number
  }

  export type AlertaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicaciones?: boolean | AlertaCountOutputTypeCountUbicacionesArgs
    eventos?: boolean | AlertaCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * AlertaCountOutputType without action
   */
  export type AlertaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaCountOutputType
     */
    select?: AlertaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlertaCountOutputType without action
   */
  export type AlertaCountOutputTypeCountUbicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbicacionAlertaWhereInput
  }

  /**
   * AlertaCountOutputType without action
   */
  export type AlertaCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }


  /**
   * Count Type AtencionCountOutputType
   */

  export type AtencionCountOutputType = {
    atencion_funcionario: number
    ubicaciones_funcionario: number
  }

  export type AtencionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atencion_funcionario?: boolean | AtencionCountOutputTypeCountAtencion_funcionarioArgs
    ubicaciones_funcionario?: boolean | AtencionCountOutputTypeCountUbicaciones_funcionarioArgs
  }

  // Custom InputTypes
  /**
   * AtencionCountOutputType without action
   */
  export type AtencionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionCountOutputType
     */
    select?: AtencionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtencionCountOutputType without action
   */
  export type AtencionCountOutputTypeCountAtencion_funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtencionFuncionarioWhereInput
  }

  /**
   * AtencionCountOutputType without action
   */
  export type AtencionCountOutputTypeCountUbicaciones_funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbicacionFuncionarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Funcionarios
   */

  export type AggregateFuncionarios = {
    _count: FuncionariosCountAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  export type FuncionariosMinAggregateOutputType = {
    id: string | null
    grado: string | null
    nombres: string | null
    ap_paterno: string | null
    ap_materno: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type FuncionariosMaxAggregateOutputType = {
    id: string | null
    grado: string | null
    nombres: string | null
    ap_paterno: string | null
    ap_materno: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type FuncionariosCountAggregateOutputType = {
    id: number
    grado: number
    nombres: number
    ap_paterno: number
    ap_materno: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type FuncionariosMinAggregateInputType = {
    id?: true
    grado?: true
    nombres?: true
    ap_paterno?: true
    ap_materno?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type FuncionariosMaxAggregateInputType = {
    id?: true
    grado?: true
    nombres?: true
    ap_paterno?: true
    ap_materno?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type FuncionariosCountAggregateInputType = {
    id?: true
    grado?: true
    nombres?: true
    ap_paterno?: true
    ap_materno?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type FuncionariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to aggregate.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionariosMaxAggregateInputType
  }

  export type GetFuncionariosAggregateType<T extends FuncionariosAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionarios[P]>
      : GetScalarType<T[P], AggregateFuncionarios[P]>
  }




  export type FuncionariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionariosWhereInput
    orderBy?: FuncionariosOrderByWithAggregationInput | FuncionariosOrderByWithAggregationInput[]
    by: FuncionariosScalarFieldEnum[] | FuncionariosScalarFieldEnum
    having?: FuncionariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionariosCountAggregateInputType | true
    _min?: FuncionariosMinAggregateInputType
    _max?: FuncionariosMaxAggregateInputType
  }

  export type FuncionariosGroupByOutputType = {
    id: string
    grado: string
    nombres: string
    ap_paterno: string
    ap_materno: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: FuncionariosCountAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  type GetFuncionariosGroupByPayload<T extends FuncionariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
        }
      >
    >


  export type FuncionariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grado?: boolean
    nombres?: boolean
    ap_paterno?: boolean
    ap_materno?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    atencion_funcionario?: boolean | Funcionarios$atencion_funcionarioArgs<ExtArgs>
    _count?: boolean | FuncionariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionarios"]>

  export type FuncionariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grado?: boolean
    nombres?: boolean
    ap_paterno?: boolean
    ap_materno?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["funcionarios"]>

  export type FuncionariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grado?: boolean
    nombres?: boolean
    ap_paterno?: boolean
    ap_materno?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["funcionarios"]>

  export type FuncionariosSelectScalar = {
    id?: boolean
    grado?: boolean
    nombres?: boolean
    ap_paterno?: boolean
    ap_materno?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type FuncionariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "grado" | "nombres" | "ap_paterno" | "ap_materno" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["funcionarios"]>
  export type FuncionariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atencion_funcionario?: boolean | Funcionarios$atencion_funcionarioArgs<ExtArgs>
    _count?: boolean | FuncionariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FuncionariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FuncionariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FuncionariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionarios"
    objects: {
      atencion_funcionario: Prisma.$AtencionFuncionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      grado: string
      nombres: string
      ap_paterno: string
      ap_materno: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["funcionarios"]>
    composites: {}
  }

  type FuncionariosGetPayload<S extends boolean | null | undefined | FuncionariosDefaultArgs> = $Result.GetResult<Prisma.$FuncionariosPayload, S>

  type FuncionariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionariosCountAggregateInputType | true
    }

  export interface FuncionariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionarios'], meta: { name: 'Funcionarios' } }
    /**
     * Find zero or one Funcionarios that matches the filter.
     * @param {FuncionariosFindUniqueArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionariosFindUniqueArgs>(args: SelectSubset<T, FuncionariosFindUniqueArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionariosFindUniqueOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionariosFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosFindFirstArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionariosFindFirstArgs>(args?: SelectSubset<T, FuncionariosFindFirstArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosFindFirstOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionariosFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionariosFindManyArgs>(args?: SelectSubset<T, FuncionariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionarios.
     * @param {FuncionariosCreateArgs} args - Arguments to create a Funcionarios.
     * @example
     * // Create one Funcionarios
     * const Funcionarios = await prisma.funcionarios.create({
     *   data: {
     *     // ... data to create a Funcionarios
     *   }
     * })
     * 
     */
    create<T extends FuncionariosCreateArgs>(args: SelectSubset<T, FuncionariosCreateArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionariosCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionarios = await prisma.funcionarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionariosCreateManyArgs>(args?: SelectSubset<T, FuncionariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionariosCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionarios = await prisma.funcionarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionariosCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionarios.
     * @param {FuncionariosDeleteArgs} args - Arguments to delete one Funcionarios.
     * @example
     * // Delete one Funcionarios
     * const Funcionarios = await prisma.funcionarios.delete({
     *   where: {
     *     // ... filter to delete one Funcionarios
     *   }
     * })
     * 
     */
    delete<T extends FuncionariosDeleteArgs>(args: SelectSubset<T, FuncionariosDeleteArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionarios.
     * @param {FuncionariosUpdateArgs} args - Arguments to update one Funcionarios.
     * @example
     * // Update one Funcionarios
     * const funcionarios = await prisma.funcionarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionariosUpdateArgs>(args: SelectSubset<T, FuncionariosUpdateArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionariosDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionariosDeleteManyArgs>(args?: SelectSubset<T, FuncionariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionarios = await prisma.funcionarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionariosUpdateManyArgs>(args: SelectSubset<T, FuncionariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionariosUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionarios = await prisma.funcionarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FuncionariosUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionarios.
     * @param {FuncionariosUpsertArgs} args - Arguments to update or create a Funcionarios.
     * @example
     * // Update or create a Funcionarios
     * const funcionarios = await prisma.funcionarios.upsert({
     *   create: {
     *     // ... data to create a Funcionarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionarios we want to update
     *   }
     * })
     */
    upsert<T extends FuncionariosUpsertArgs>(args: SelectSubset<T, FuncionariosUpsertArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionarios.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionariosCountArgs>(
      args?: Subset<T, FuncionariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuncionariosAggregateArgs>(args: Subset<T, FuncionariosAggregateArgs>): Prisma.PrismaPromise<GetFuncionariosAggregateType<T>>

    /**
     * Group by Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuncionariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionariosGroupByArgs['orderBy'] }
        : { orderBy?: FuncionariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuncionariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionarios model
   */
  readonly fields: FuncionariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atencion_funcionario<T extends Funcionarios$atencion_funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, Funcionarios$atencion_funcionarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Funcionarios model
   */
  interface FuncionariosFieldRefs {
    readonly id: FieldRef<"Funcionarios", 'String'>
    readonly grado: FieldRef<"Funcionarios", 'String'>
    readonly nombres: FieldRef<"Funcionarios", 'String'>
    readonly ap_paterno: FieldRef<"Funcionarios", 'String'>
    readonly ap_materno: FieldRef<"Funcionarios", 'String'>
    readonly created_at: FieldRef<"Funcionarios", 'DateTime'>
    readonly updated_at: FieldRef<"Funcionarios", 'DateTime'>
    readonly deleted_at: FieldRef<"Funcionarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Funcionarios findUnique
   */
  export type FuncionariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios findUniqueOrThrow
   */
  export type FuncionariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios findFirst
   */
  export type FuncionariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * Funcionarios findFirstOrThrow
   */
  export type FuncionariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * Funcionarios findMany
   */
  export type FuncionariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * Funcionarios create
   */
  export type FuncionariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionarios.
     */
    data: XOR<FuncionariosCreateInput, FuncionariosUncheckedCreateInput>
  }

  /**
   * Funcionarios createMany
   */
  export type FuncionariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionariosCreateManyInput | FuncionariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionarios createManyAndReturn
   */
  export type FuncionariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionariosCreateManyInput | FuncionariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionarios update
   */
  export type FuncionariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionarios.
     */
    data: XOR<FuncionariosUpdateInput, FuncionariosUncheckedUpdateInput>
    /**
     * Choose, which Funcionarios to update.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios updateMany
   */
  export type FuncionariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionariosUpdateManyMutationInput, FuncionariosUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionariosWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionarios updateManyAndReturn
   */
  export type FuncionariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionariosUpdateManyMutationInput, FuncionariosUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionariosWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionarios upsert
   */
  export type FuncionariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionarios to update in case it exists.
     */
    where: FuncionariosWhereUniqueInput
    /**
     * In case the Funcionarios found by the `where` argument doesn't exist, create a new Funcionarios with this data.
     */
    create: XOR<FuncionariosCreateInput, FuncionariosUncheckedCreateInput>
    /**
     * In case the Funcionarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionariosUpdateInput, FuncionariosUncheckedUpdateInput>
  }

  /**
   * Funcionarios delete
   */
  export type FuncionariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter which Funcionarios to delete.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios deleteMany
   */
  export type FuncionariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionariosWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionarios.atencion_funcionario
   */
  export type Funcionarios$atencion_funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    where?: AtencionFuncionarioWhereInput
    orderBy?: AtencionFuncionarioOrderByWithRelationInput | AtencionFuncionarioOrderByWithRelationInput[]
    cursor?: AtencionFuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtencionFuncionarioScalarFieldEnum | AtencionFuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionarios without action
   */
  export type FuncionariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
  }


  /**
   * Model Persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonaSumAggregateOutputType = {
    id: bigint | null
  }

  export type PersonaMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    nombres: string | null
    ap_paterno: string | null
    ap_materno: string | null
    ci: string | null
    fecha_nac: Date | null
    celular: string | null
    correo: string | null
    empresa_telefonica: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PersonaMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    nombres: string | null
    ap_paterno: string | null
    ap_materno: string | null
    ci: string | null
    fecha_nac: Date | null
    celular: string | null
    correo: string | null
    empresa_telefonica: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PersonaCountAggregateOutputType = {
    id: number
    uuid: number
    nombres: number
    ap_paterno: number
    ap_materno: number
    ci: number
    fecha_nac: number
    celular: number
    correo: number
    empresa_telefonica: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type PersonaAvgAggregateInputType = {
    id?: true
  }

  export type PersonaSumAggregateInputType = {
    id?: true
  }

  export type PersonaMinAggregateInputType = {
    id?: true
    uuid?: true
    nombres?: true
    ap_paterno?: true
    ap_materno?: true
    ci?: true
    fecha_nac?: true
    celular?: true
    correo?: true
    empresa_telefonica?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PersonaMaxAggregateInputType = {
    id?: true
    uuid?: true
    nombres?: true
    ap_paterno?: true
    ap_materno?: true
    ci?: true
    fecha_nac?: true
    celular?: true
    correo?: true
    empresa_telefonica?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PersonaCountAggregateInputType = {
    id?: true
    uuid?: true
    nombres?: true
    ap_paterno?: true
    ap_materno?: true
    ci?: true
    fecha_nac?: true
    celular?: true
    correo?: true
    empresa_telefonica?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Persona to aggregate.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type PersonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaWhereInput
    orderBy?: PersonaOrderByWithAggregationInput | PersonaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: PersonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _avg?: PersonaAvgAggregateInputType
    _sum?: PersonaSumAggregateInputType
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    id: bigint
    uuid: string | null
    nombres: string
    ap_paterno: string
    ap_materno: string
    ci: string
    fecha_nac: Date
    celular: string
    correo: string
    empresa_telefonica: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends PersonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type PersonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nombres?: boolean
    ap_paterno?: boolean
    ap_materno?: boolean
    ci?: boolean
    fecha_nac?: boolean
    celular?: boolean
    correo?: boolean
    empresa_telefonica?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    contactos_ref?: boolean | Persona$contactos_refArgs<ExtArgs>
    alertas?: boolean | Persona$alertasArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nombres?: boolean
    ap_paterno?: boolean
    ap_materno?: boolean
    ci?: boolean
    fecha_nac?: boolean
    celular?: boolean
    correo?: boolean
    empresa_telefonica?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nombres?: boolean
    ap_paterno?: boolean
    ap_materno?: boolean
    ci?: boolean
    fecha_nac?: boolean
    celular?: boolean
    correo?: boolean
    empresa_telefonica?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectScalar = {
    id?: boolean
    uuid?: boolean
    nombres?: boolean
    ap_paterno?: boolean
    ap_materno?: boolean
    ci?: boolean
    fecha_nac?: boolean
    celular?: boolean
    correo?: boolean
    empresa_telefonica?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type PersonaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "nombres" | "ap_paterno" | "ap_materno" | "ci" | "fecha_nac" | "celular" | "correo" | "empresa_telefonica" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["persona"]>
  export type PersonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactos_ref?: boolean | Persona$contactos_refArgs<ExtArgs>
    alertas?: boolean | Persona$alertasArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Persona"
    objects: {
      contactos_ref: Prisma.$ContactoRefPayload<ExtArgs>[]
      alertas: Prisma.$AlertaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string | null
      nombres: string
      ap_paterno: string
      ap_materno: string
      ci: string
      fecha_nac: Date
      celular: string
      correo: string
      empresa_telefonica: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }

  type PersonaGetPayload<S extends boolean | null | undefined | PersonaDefaultArgs> = $Result.GetResult<Prisma.$PersonaPayload, S>

  type PersonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface PersonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Persona'], meta: { name: 'Persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {PersonaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonaFindUniqueArgs>(args: SelectSubset<T, PersonaFindUniqueArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonaFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonaFindFirstArgs>(args?: SelectSubset<T, PersonaFindFirstArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonaFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personaWithIdOnly = await prisma.persona.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonaFindManyArgs>(args?: SelectSubset<T, PersonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Persona.
     * @param {PersonaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
     */
    create<T extends PersonaCreateArgs>(args: SelectSubset<T, PersonaCreateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personas.
     * @param {PersonaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonaCreateManyArgs>(args?: SelectSubset<T, PersonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personas and returns the data saved in the database.
     * @param {PersonaCreateManyAndReturnArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personas and only return the `id`
     * const personaWithIdOnly = await prisma.persona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonaCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Persona.
     * @param {PersonaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
     */
    delete<T extends PersonaDeleteArgs>(args: SelectSubset<T, PersonaDeleteArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Persona.
     * @param {PersonaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonaUpdateArgs>(args: SelectSubset<T, PersonaUpdateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personas.
     * @param {PersonaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonaDeleteManyArgs>(args?: SelectSubset<T, PersonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonaUpdateManyArgs>(args: SelectSubset<T, PersonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas and returns the data updated in the database.
     * @param {PersonaUpdateManyAndReturnArgs} args - Arguments to update many Personas.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personas and only return the `id`
     * const personaWithIdOnly = await prisma.persona.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonaUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Persona.
     * @param {PersonaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends PersonaUpsertArgs>(args: SelectSubset<T, PersonaUpsertArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends PersonaCountArgs>(
      args?: Subset<T, PersonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonaGroupByArgs['orderBy'] }
        : { orderBy?: PersonaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Persona model
   */
  readonly fields: PersonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactos_ref<T extends Persona$contactos_refArgs<ExtArgs> = {}>(args?: Subset<T, Persona$contactos_refArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alertas<T extends Persona$alertasArgs<ExtArgs> = {}>(args?: Subset<T, Persona$alertasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Persona model
   */
  interface PersonaFieldRefs {
    readonly id: FieldRef<"Persona", 'BigInt'>
    readonly uuid: FieldRef<"Persona", 'String'>
    readonly nombres: FieldRef<"Persona", 'String'>
    readonly ap_paterno: FieldRef<"Persona", 'String'>
    readonly ap_materno: FieldRef<"Persona", 'String'>
    readonly ci: FieldRef<"Persona", 'String'>
    readonly fecha_nac: FieldRef<"Persona", 'DateTime'>
    readonly celular: FieldRef<"Persona", 'String'>
    readonly correo: FieldRef<"Persona", 'String'>
    readonly empresa_telefonica: FieldRef<"Persona", 'String'>
    readonly created_at: FieldRef<"Persona", 'DateTime'>
    readonly updated_at: FieldRef<"Persona", 'DateTime'>
    readonly deleted_at: FieldRef<"Persona", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Persona findUnique
   */
  export type PersonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findUniqueOrThrow
   */
  export type PersonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findFirst
   */
  export type PersonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findFirstOrThrow
   */
  export type PersonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findMany
   */
  export type PersonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Personas to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona create
   */
  export type PersonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to create a Persona.
     */
    data: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
  }

  /**
   * Persona createMany
   */
  export type PersonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Persona createManyAndReturn
   */
  export type PersonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Persona update
   */
  export type PersonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to update a Persona.
     */
    data: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
    /**
     * Choose, which Persona to update.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona updateMany
   */
  export type PersonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to update.
     */
    limit?: number
  }

  /**
   * Persona updateManyAndReturn
   */
  export type PersonaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to update.
     */
    limit?: number
  }

  /**
   * Persona upsert
   */
  export type PersonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The filter to search for the Persona to update in case it exists.
     */
    where: PersonaWhereUniqueInput
    /**
     * In case the Persona found by the `where` argument doesn't exist, create a new Persona with this data.
     */
    create: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
    /**
     * In case the Persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
  }

  /**
   * Persona delete
   */
  export type PersonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter which Persona to delete.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona deleteMany
   */
  export type PersonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personas to delete
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to delete.
     */
    limit?: number
  }

  /**
   * Persona.contactos_ref
   */
  export type Persona$contactos_refArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    where?: ContactoRefWhereInput
    orderBy?: ContactoRefOrderByWithRelationInput | ContactoRefOrderByWithRelationInput[]
    cursor?: ContactoRefWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactoRefScalarFieldEnum | ContactoRefScalarFieldEnum[]
  }

  /**
   * Persona.alertas
   */
  export type Persona$alertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    cursor?: AlertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Persona without action
   */
  export type PersonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
  }


  /**
   * Model ContactoRef
   */

  export type AggregateContactoRef = {
    _count: ContactoRefCountAggregateOutputType | null
    _avg: ContactoRefAvgAggregateOutputType | null
    _sum: ContactoRefSumAggregateOutputType | null
    _min: ContactoRefMinAggregateOutputType | null
    _max: ContactoRefMaxAggregateOutputType | null
  }

  export type ContactoRefAvgAggregateOutputType = {
    id: number | null
    id_persona: number | null
  }

  export type ContactoRefSumAggregateOutputType = {
    id: bigint | null
    id_persona: bigint | null
  }

  export type ContactoRefMinAggregateOutputType = {
    id: bigint | null
    id_persona: bigint | null
    nombre: string | null
    relacion: string | null
    celular: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ContactoRefMaxAggregateOutputType = {
    id: bigint | null
    id_persona: bigint | null
    nombre: string | null
    relacion: string | null
    celular: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ContactoRefCountAggregateOutputType = {
    id: number
    id_persona: number
    nombre: number
    relacion: number
    celular: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ContactoRefAvgAggregateInputType = {
    id?: true
    id_persona?: true
  }

  export type ContactoRefSumAggregateInputType = {
    id?: true
    id_persona?: true
  }

  export type ContactoRefMinAggregateInputType = {
    id?: true
    id_persona?: true
    nombre?: true
    relacion?: true
    celular?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ContactoRefMaxAggregateInputType = {
    id?: true
    id_persona?: true
    nombre?: true
    relacion?: true
    celular?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ContactoRefCountAggregateInputType = {
    id?: true
    id_persona?: true
    nombre?: true
    relacion?: true
    celular?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ContactoRefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactoRef to aggregate.
     */
    where?: ContactoRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoRefs to fetch.
     */
    orderBy?: ContactoRefOrderByWithRelationInput | ContactoRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactoRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactoRefs
    **/
    _count?: true | ContactoRefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactoRefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactoRefSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactoRefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactoRefMaxAggregateInputType
  }

  export type GetContactoRefAggregateType<T extends ContactoRefAggregateArgs> = {
        [P in keyof T & keyof AggregateContactoRef]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactoRef[P]>
      : GetScalarType<T[P], AggregateContactoRef[P]>
  }




  export type ContactoRefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactoRefWhereInput
    orderBy?: ContactoRefOrderByWithAggregationInput | ContactoRefOrderByWithAggregationInput[]
    by: ContactoRefScalarFieldEnum[] | ContactoRefScalarFieldEnum
    having?: ContactoRefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactoRefCountAggregateInputType | true
    _avg?: ContactoRefAvgAggregateInputType
    _sum?: ContactoRefSumAggregateInputType
    _min?: ContactoRefMinAggregateInputType
    _max?: ContactoRefMaxAggregateInputType
  }

  export type ContactoRefGroupByOutputType = {
    id: bigint
    id_persona: bigint
    nombre: string
    relacion: string
    celular: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ContactoRefCountAggregateOutputType | null
    _avg: ContactoRefAvgAggregateOutputType | null
    _sum: ContactoRefSumAggregateOutputType | null
    _min: ContactoRefMinAggregateOutputType | null
    _max: ContactoRefMaxAggregateOutputType | null
  }

  type GetContactoRefGroupByPayload<T extends ContactoRefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactoRefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactoRefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactoRefGroupByOutputType[P]>
            : GetScalarType<T[P], ContactoRefGroupByOutputType[P]>
        }
      >
    >


  export type ContactoRefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona?: boolean
    nombre?: boolean
    relacion?: boolean
    celular?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactoRef"]>

  export type ContactoRefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona?: boolean
    nombre?: boolean
    relacion?: boolean
    celular?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactoRef"]>

  export type ContactoRefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona?: boolean
    nombre?: boolean
    relacion?: boolean
    celular?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactoRef"]>

  export type ContactoRefSelectScalar = {
    id?: boolean
    id_persona?: boolean
    nombre?: boolean
    relacion?: boolean
    celular?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ContactoRefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_persona" | "nombre" | "relacion" | "celular" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["contactoRef"]>
  export type ContactoRefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }
  export type ContactoRefIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }
  export type ContactoRefIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }

  export type $ContactoRefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactoRef"
    objects: {
      persona: Prisma.$PersonaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_persona: bigint
      nombre: string
      relacion: string
      celular: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["contactoRef"]>
    composites: {}
  }

  type ContactoRefGetPayload<S extends boolean | null | undefined | ContactoRefDefaultArgs> = $Result.GetResult<Prisma.$ContactoRefPayload, S>

  type ContactoRefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactoRefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactoRefCountAggregateInputType | true
    }

  export interface ContactoRefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactoRef'], meta: { name: 'ContactoRef' } }
    /**
     * Find zero or one ContactoRef that matches the filter.
     * @param {ContactoRefFindUniqueArgs} args - Arguments to find a ContactoRef
     * @example
     * // Get one ContactoRef
     * const contactoRef = await prisma.contactoRef.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactoRefFindUniqueArgs>(args: SelectSubset<T, ContactoRefFindUniqueArgs<ExtArgs>>): Prisma__ContactoRefClient<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactoRef that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactoRefFindUniqueOrThrowArgs} args - Arguments to find a ContactoRef
     * @example
     * // Get one ContactoRef
     * const contactoRef = await prisma.contactoRef.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactoRefFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactoRefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactoRefClient<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactoRef that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoRefFindFirstArgs} args - Arguments to find a ContactoRef
     * @example
     * // Get one ContactoRef
     * const contactoRef = await prisma.contactoRef.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactoRefFindFirstArgs>(args?: SelectSubset<T, ContactoRefFindFirstArgs<ExtArgs>>): Prisma__ContactoRefClient<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactoRef that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoRefFindFirstOrThrowArgs} args - Arguments to find a ContactoRef
     * @example
     * // Get one ContactoRef
     * const contactoRef = await prisma.contactoRef.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactoRefFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactoRefFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactoRefClient<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactoRefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoRefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactoRefs
     * const contactoRefs = await prisma.contactoRef.findMany()
     * 
     * // Get first 10 ContactoRefs
     * const contactoRefs = await prisma.contactoRef.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactoRefWithIdOnly = await prisma.contactoRef.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactoRefFindManyArgs>(args?: SelectSubset<T, ContactoRefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactoRef.
     * @param {ContactoRefCreateArgs} args - Arguments to create a ContactoRef.
     * @example
     * // Create one ContactoRef
     * const ContactoRef = await prisma.contactoRef.create({
     *   data: {
     *     // ... data to create a ContactoRef
     *   }
     * })
     * 
     */
    create<T extends ContactoRefCreateArgs>(args: SelectSubset<T, ContactoRefCreateArgs<ExtArgs>>): Prisma__ContactoRefClient<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactoRefs.
     * @param {ContactoRefCreateManyArgs} args - Arguments to create many ContactoRefs.
     * @example
     * // Create many ContactoRefs
     * const contactoRef = await prisma.contactoRef.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactoRefCreateManyArgs>(args?: SelectSubset<T, ContactoRefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactoRefs and returns the data saved in the database.
     * @param {ContactoRefCreateManyAndReturnArgs} args - Arguments to create many ContactoRefs.
     * @example
     * // Create many ContactoRefs
     * const contactoRef = await prisma.contactoRef.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactoRefs and only return the `id`
     * const contactoRefWithIdOnly = await prisma.contactoRef.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactoRefCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactoRefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactoRef.
     * @param {ContactoRefDeleteArgs} args - Arguments to delete one ContactoRef.
     * @example
     * // Delete one ContactoRef
     * const ContactoRef = await prisma.contactoRef.delete({
     *   where: {
     *     // ... filter to delete one ContactoRef
     *   }
     * })
     * 
     */
    delete<T extends ContactoRefDeleteArgs>(args: SelectSubset<T, ContactoRefDeleteArgs<ExtArgs>>): Prisma__ContactoRefClient<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactoRef.
     * @param {ContactoRefUpdateArgs} args - Arguments to update one ContactoRef.
     * @example
     * // Update one ContactoRef
     * const contactoRef = await prisma.contactoRef.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactoRefUpdateArgs>(args: SelectSubset<T, ContactoRefUpdateArgs<ExtArgs>>): Prisma__ContactoRefClient<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactoRefs.
     * @param {ContactoRefDeleteManyArgs} args - Arguments to filter ContactoRefs to delete.
     * @example
     * // Delete a few ContactoRefs
     * const { count } = await prisma.contactoRef.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactoRefDeleteManyArgs>(args?: SelectSubset<T, ContactoRefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactoRefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoRefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactoRefs
     * const contactoRef = await prisma.contactoRef.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactoRefUpdateManyArgs>(args: SelectSubset<T, ContactoRefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactoRefs and returns the data updated in the database.
     * @param {ContactoRefUpdateManyAndReturnArgs} args - Arguments to update many ContactoRefs.
     * @example
     * // Update many ContactoRefs
     * const contactoRef = await prisma.contactoRef.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactoRefs and only return the `id`
     * const contactoRefWithIdOnly = await prisma.contactoRef.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactoRefUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactoRefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactoRef.
     * @param {ContactoRefUpsertArgs} args - Arguments to update or create a ContactoRef.
     * @example
     * // Update or create a ContactoRef
     * const contactoRef = await prisma.contactoRef.upsert({
     *   create: {
     *     // ... data to create a ContactoRef
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactoRef we want to update
     *   }
     * })
     */
    upsert<T extends ContactoRefUpsertArgs>(args: SelectSubset<T, ContactoRefUpsertArgs<ExtArgs>>): Prisma__ContactoRefClient<$Result.GetResult<Prisma.$ContactoRefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactoRefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoRefCountArgs} args - Arguments to filter ContactoRefs to count.
     * @example
     * // Count the number of ContactoRefs
     * const count = await prisma.contactoRef.count({
     *   where: {
     *     // ... the filter for the ContactoRefs we want to count
     *   }
     * })
    **/
    count<T extends ContactoRefCountArgs>(
      args?: Subset<T, ContactoRefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactoRefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactoRef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoRefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactoRefAggregateArgs>(args: Subset<T, ContactoRefAggregateArgs>): Prisma.PrismaPromise<GetContactoRefAggregateType<T>>

    /**
     * Group by ContactoRef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoRefGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactoRefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactoRefGroupByArgs['orderBy'] }
        : { orderBy?: ContactoRefGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactoRefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactoRefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactoRef model
   */
  readonly fields: ContactoRefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactoRef.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactoRefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends PersonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaDefaultArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactoRef model
   */
  interface ContactoRefFieldRefs {
    readonly id: FieldRef<"ContactoRef", 'BigInt'>
    readonly id_persona: FieldRef<"ContactoRef", 'BigInt'>
    readonly nombre: FieldRef<"ContactoRef", 'String'>
    readonly relacion: FieldRef<"ContactoRef", 'String'>
    readonly celular: FieldRef<"ContactoRef", 'String'>
    readonly created_at: FieldRef<"ContactoRef", 'DateTime'>
    readonly updated_at: FieldRef<"ContactoRef", 'DateTime'>
    readonly deleted_at: FieldRef<"ContactoRef", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactoRef findUnique
   */
  export type ContactoRefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    /**
     * Filter, which ContactoRef to fetch.
     */
    where: ContactoRefWhereUniqueInput
  }

  /**
   * ContactoRef findUniqueOrThrow
   */
  export type ContactoRefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    /**
     * Filter, which ContactoRef to fetch.
     */
    where: ContactoRefWhereUniqueInput
  }

  /**
   * ContactoRef findFirst
   */
  export type ContactoRefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    /**
     * Filter, which ContactoRef to fetch.
     */
    where?: ContactoRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoRefs to fetch.
     */
    orderBy?: ContactoRefOrderByWithRelationInput | ContactoRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactoRefs.
     */
    cursor?: ContactoRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactoRefs.
     */
    distinct?: ContactoRefScalarFieldEnum | ContactoRefScalarFieldEnum[]
  }

  /**
   * ContactoRef findFirstOrThrow
   */
  export type ContactoRefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    /**
     * Filter, which ContactoRef to fetch.
     */
    where?: ContactoRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoRefs to fetch.
     */
    orderBy?: ContactoRefOrderByWithRelationInput | ContactoRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactoRefs.
     */
    cursor?: ContactoRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactoRefs.
     */
    distinct?: ContactoRefScalarFieldEnum | ContactoRefScalarFieldEnum[]
  }

  /**
   * ContactoRef findMany
   */
  export type ContactoRefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    /**
     * Filter, which ContactoRefs to fetch.
     */
    where?: ContactoRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactoRefs to fetch.
     */
    orderBy?: ContactoRefOrderByWithRelationInput | ContactoRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactoRefs.
     */
    cursor?: ContactoRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactoRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactoRefs.
     */
    skip?: number
    distinct?: ContactoRefScalarFieldEnum | ContactoRefScalarFieldEnum[]
  }

  /**
   * ContactoRef create
   */
  export type ContactoRefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactoRef.
     */
    data: XOR<ContactoRefCreateInput, ContactoRefUncheckedCreateInput>
  }

  /**
   * ContactoRef createMany
   */
  export type ContactoRefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactoRefs.
     */
    data: ContactoRefCreateManyInput | ContactoRefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactoRef createManyAndReturn
   */
  export type ContactoRefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * The data used to create many ContactoRefs.
     */
    data: ContactoRefCreateManyInput | ContactoRefCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactoRef update
   */
  export type ContactoRefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactoRef.
     */
    data: XOR<ContactoRefUpdateInput, ContactoRefUncheckedUpdateInput>
    /**
     * Choose, which ContactoRef to update.
     */
    where: ContactoRefWhereUniqueInput
  }

  /**
   * ContactoRef updateMany
   */
  export type ContactoRefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactoRefs.
     */
    data: XOR<ContactoRefUpdateManyMutationInput, ContactoRefUncheckedUpdateManyInput>
    /**
     * Filter which ContactoRefs to update
     */
    where?: ContactoRefWhereInput
    /**
     * Limit how many ContactoRefs to update.
     */
    limit?: number
  }

  /**
   * ContactoRef updateManyAndReturn
   */
  export type ContactoRefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * The data used to update ContactoRefs.
     */
    data: XOR<ContactoRefUpdateManyMutationInput, ContactoRefUncheckedUpdateManyInput>
    /**
     * Filter which ContactoRefs to update
     */
    where?: ContactoRefWhereInput
    /**
     * Limit how many ContactoRefs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactoRef upsert
   */
  export type ContactoRefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactoRef to update in case it exists.
     */
    where: ContactoRefWhereUniqueInput
    /**
     * In case the ContactoRef found by the `where` argument doesn't exist, create a new ContactoRef with this data.
     */
    create: XOR<ContactoRefCreateInput, ContactoRefUncheckedCreateInput>
    /**
     * In case the ContactoRef was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactoRefUpdateInput, ContactoRefUncheckedUpdateInput>
  }

  /**
   * ContactoRef delete
   */
  export type ContactoRefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
    /**
     * Filter which ContactoRef to delete.
     */
    where: ContactoRefWhereUniqueInput
  }

  /**
   * ContactoRef deleteMany
   */
  export type ContactoRefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactoRefs to delete
     */
    where?: ContactoRefWhereInput
    /**
     * Limit how many ContactoRefs to delete.
     */
    limit?: number
  }

  /**
   * ContactoRef without action
   */
  export type ContactoRefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactoRef
     */
    select?: ContactoRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactoRef
     */
    omit?: ContactoRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactoRefInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id: number | null
    id_alerta: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
  }

  export type EventoMinAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
    id_funcionario: string | null
    id_seguimiento: string | null
    fecha_hora: Date | null
    comentario: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type EventoMaxAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
    id_funcionario: string | null
    id_seguimiento: string | null
    fecha_hora: Date | null
    comentario: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    id_alerta: number
    id_funcionario: number
    id_seguimiento: number
    fecha_hora: number
    comentario: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id?: true
    id_alerta?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
    id_alerta?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    id_alerta?: true
    id_funcionario?: true
    id_seguimiento?: true
    fecha_hora?: true
    comentario?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    id_alerta?: true
    id_funcionario?: true
    id_seguimiento?: true
    fecha_hora?: true
    comentario?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    id_alerta?: true
    id_funcionario?: true
    id_seguimiento?: true
    fecha_hora?: true
    comentario?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: bigint
    id_alerta: bigint
    id_funcionario: string
    id_seguimiento: string | null
    fecha_hora: Date
    comentario: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    id_funcionario?: boolean
    id_seguimiento?: boolean
    fecha_hora?: boolean
    comentario?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    id_funcionario?: boolean
    id_seguimiento?: boolean
    fecha_hora?: boolean
    comentario?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    id_funcionario?: boolean
    id_seguimiento?: boolean
    fecha_hora?: boolean
    comentario?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
    id_alerta?: boolean
    id_funcionario?: boolean
    id_seguimiento?: boolean
    fecha_hora?: boolean
    comentario?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_alerta" | "id_funcionario" | "id_seguimiento" | "fecha_hora" | "comentario" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      alerta: Prisma.$AlertaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_alerta: bigint
      id_funcionario: string
      id_seguimiento: string | null
      fecha_hora: Date
      comentario: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alerta<T extends AlertaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlertaDefaultArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'BigInt'>
    readonly id_alerta: FieldRef<"Evento", 'BigInt'>
    readonly id_funcionario: FieldRef<"Evento", 'String'>
    readonly id_seguimiento: FieldRef<"Evento", 'String'>
    readonly fecha_hora: FieldRef<"Evento", 'DateTime'>
    readonly comentario: FieldRef<"Evento", 'String'>
    readonly created_at: FieldRef<"Evento", 'DateTime'>
    readonly updated_at: FieldRef<"Evento", 'DateTime'>
    readonly deleted_at: FieldRef<"Evento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Alerta
   */

  export type AggregateAlerta = {
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  export type AlertaAvgAggregateOutputType = {
    id: number | null
    id_persona: number | null
  }

  export type AlertaSumAggregateOutputType = {
    id: bigint | null
    id_persona: bigint | null
  }

  export type AlertaMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    id_persona: bigint | null
    id_municipio: string | null
    fecha_hora: Date | null
    nro_caso: string | null
    estado: $Enums.EstadoAlerta | null
    origen: $Enums.OrigenAlerta | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AlertaMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    id_persona: bigint | null
    id_municipio: string | null
    fecha_hora: Date | null
    nro_caso: string | null
    estado: $Enums.EstadoAlerta | null
    origen: $Enums.OrigenAlerta | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AlertaCountAggregateOutputType = {
    id: number
    uuid: number
    id_persona: number
    id_municipio: number
    fecha_hora: number
    nro_caso: number
    estado: number
    origen: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AlertaAvgAggregateInputType = {
    id?: true
    id_persona?: true
  }

  export type AlertaSumAggregateInputType = {
    id?: true
    id_persona?: true
  }

  export type AlertaMinAggregateInputType = {
    id?: true
    uuid?: true
    id_persona?: true
    id_municipio?: true
    fecha_hora?: true
    nro_caso?: true
    estado?: true
    origen?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AlertaMaxAggregateInputType = {
    id?: true
    uuid?: true
    id_persona?: true
    id_municipio?: true
    fecha_hora?: true
    nro_caso?: true
    estado?: true
    origen?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AlertaCountAggregateInputType = {
    id?: true
    uuid?: true
    id_persona?: true
    id_municipio?: true
    fecha_hora?: true
    nro_caso?: true
    estado?: true
    origen?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AlertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerta to aggregate.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alertas
    **/
    _count?: true | AlertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertaMaxAggregateInputType
  }

  export type GetAlertaAggregateType<T extends AlertaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlerta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlerta[P]>
      : GetScalarType<T[P], AggregateAlerta[P]>
  }




  export type AlertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithAggregationInput | AlertaOrderByWithAggregationInput[]
    by: AlertaScalarFieldEnum[] | AlertaScalarFieldEnum
    having?: AlertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertaCountAggregateInputType | true
    _avg?: AlertaAvgAggregateInputType
    _sum?: AlertaSumAggregateInputType
    _min?: AlertaMinAggregateInputType
    _max?: AlertaMaxAggregateInputType
  }

  export type AlertaGroupByOutputType = {
    id: bigint
    uuid: string
    id_persona: bigint
    id_municipio: string | null
    fecha_hora: Date
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen: $Enums.OrigenAlerta | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  type GetAlertaGroupByPayload<T extends AlertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertaGroupByOutputType[P]>
            : GetScalarType<T[P], AlertaGroupByOutputType[P]>
        }
      >
    >


  export type AlertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    id_persona?: boolean
    id_municipio?: boolean
    fecha_hora?: boolean
    nro_caso?: boolean
    estado?: boolean
    origen?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    atencion?: boolean | Alerta$atencionArgs<ExtArgs>
    cierre?: boolean | Alerta$cierreArgs<ExtArgs>
    ubicaciones?: boolean | Alerta$ubicacionesArgs<ExtArgs>
    eventos?: boolean | Alerta$eventosArgs<ExtArgs>
    _count?: boolean | AlertaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type AlertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    id_persona?: boolean
    id_municipio?: boolean
    fecha_hora?: boolean
    nro_caso?: boolean
    estado?: boolean
    origen?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type AlertaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    id_persona?: boolean
    id_municipio?: boolean
    fecha_hora?: boolean
    nro_caso?: boolean
    estado?: boolean
    origen?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type AlertaSelectScalar = {
    id?: boolean
    uuid?: boolean
    id_persona?: boolean
    id_municipio?: boolean
    fecha_hora?: boolean
    nro_caso?: boolean
    estado?: boolean
    origen?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type AlertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "id_persona" | "id_municipio" | "fecha_hora" | "nro_caso" | "estado" | "origen" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["alerta"]>
  export type AlertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
    atencion?: boolean | Alerta$atencionArgs<ExtArgs>
    cierre?: boolean | Alerta$cierreArgs<ExtArgs>
    ubicaciones?: boolean | Alerta$ubicacionesArgs<ExtArgs>
    eventos?: boolean | Alerta$eventosArgs<ExtArgs>
    _count?: boolean | AlertaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlertaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }
  export type AlertaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | PersonaDefaultArgs<ExtArgs>
  }

  export type $AlertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alerta"
    objects: {
      persona: Prisma.$PersonaPayload<ExtArgs>
      atencion: Prisma.$AtencionPayload<ExtArgs> | null
      cierre: Prisma.$CierreAlertaPayload<ExtArgs> | null
      ubicaciones: Prisma.$UbicacionAlertaPayload<ExtArgs>[]
      eventos: Prisma.$EventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      id_persona: bigint
      id_municipio: string | null
      fecha_hora: Date
      nro_caso: string
      estado: $Enums.EstadoAlerta
      origen: $Enums.OrigenAlerta | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["alerta"]>
    composites: {}
  }

  type AlertaGetPayload<S extends boolean | null | undefined | AlertaDefaultArgs> = $Result.GetResult<Prisma.$AlertaPayload, S>

  type AlertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertaCountAggregateInputType | true
    }

  export interface AlertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alerta'], meta: { name: 'Alerta' } }
    /**
     * Find zero or one Alerta that matches the filter.
     * @param {AlertaFindUniqueArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertaFindUniqueArgs>(args: SelectSubset<T, AlertaFindUniqueArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alerta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertaFindUniqueOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertaFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindFirstArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertaFindFirstArgs>(args?: SelectSubset<T, AlertaFindFirstArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindFirstOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertaFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alertas
     * const alertas = await prisma.alerta.findMany()
     * 
     * // Get first 10 Alertas
     * const alertas = await prisma.alerta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertaWithIdOnly = await prisma.alerta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertaFindManyArgs>(args?: SelectSubset<T, AlertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alerta.
     * @param {AlertaCreateArgs} args - Arguments to create a Alerta.
     * @example
     * // Create one Alerta
     * const Alerta = await prisma.alerta.create({
     *   data: {
     *     // ... data to create a Alerta
     *   }
     * })
     * 
     */
    create<T extends AlertaCreateArgs>(args: SelectSubset<T, AlertaCreateArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alertas.
     * @param {AlertaCreateManyArgs} args - Arguments to create many Alertas.
     * @example
     * // Create many Alertas
     * const alerta = await prisma.alerta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertaCreateManyArgs>(args?: SelectSubset<T, AlertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alertas and returns the data saved in the database.
     * @param {AlertaCreateManyAndReturnArgs} args - Arguments to create many Alertas.
     * @example
     * // Create many Alertas
     * const alerta = await prisma.alerta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alertas and only return the `id`
     * const alertaWithIdOnly = await prisma.alerta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertaCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alerta.
     * @param {AlertaDeleteArgs} args - Arguments to delete one Alerta.
     * @example
     * // Delete one Alerta
     * const Alerta = await prisma.alerta.delete({
     *   where: {
     *     // ... filter to delete one Alerta
     *   }
     * })
     * 
     */
    delete<T extends AlertaDeleteArgs>(args: SelectSubset<T, AlertaDeleteArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alerta.
     * @param {AlertaUpdateArgs} args - Arguments to update one Alerta.
     * @example
     * // Update one Alerta
     * const alerta = await prisma.alerta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertaUpdateArgs>(args: SelectSubset<T, AlertaUpdateArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alertas.
     * @param {AlertaDeleteManyArgs} args - Arguments to filter Alertas to delete.
     * @example
     * // Delete a few Alertas
     * const { count } = await prisma.alerta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertaDeleteManyArgs>(args?: SelectSubset<T, AlertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alertas
     * const alerta = await prisma.alerta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertaUpdateManyArgs>(args: SelectSubset<T, AlertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alertas and returns the data updated in the database.
     * @param {AlertaUpdateManyAndReturnArgs} args - Arguments to update many Alertas.
     * @example
     * // Update many Alertas
     * const alerta = await prisma.alerta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alertas and only return the `id`
     * const alertaWithIdOnly = await prisma.alerta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertaUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alerta.
     * @param {AlertaUpsertArgs} args - Arguments to update or create a Alerta.
     * @example
     * // Update or create a Alerta
     * const alerta = await prisma.alerta.upsert({
     *   create: {
     *     // ... data to create a Alerta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alerta we want to update
     *   }
     * })
     */
    upsert<T extends AlertaUpsertArgs>(args: SelectSubset<T, AlertaUpsertArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaCountArgs} args - Arguments to filter Alertas to count.
     * @example
     * // Count the number of Alertas
     * const count = await prisma.alerta.count({
     *   where: {
     *     // ... the filter for the Alertas we want to count
     *   }
     * })
    **/
    count<T extends AlertaCountArgs>(
      args?: Subset<T, AlertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertaAggregateArgs>(args: Subset<T, AlertaAggregateArgs>): Prisma.PrismaPromise<GetAlertaAggregateType<T>>

    /**
     * Group by Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertaGroupByArgs['orderBy'] }
        : { orderBy?: AlertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alerta model
   */
  readonly fields: AlertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alerta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends PersonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonaDefaultArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    atencion<T extends Alerta$atencionArgs<ExtArgs> = {}>(args?: Subset<T, Alerta$atencionArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cierre<T extends Alerta$cierreArgs<ExtArgs> = {}>(args?: Subset<T, Alerta$cierreArgs<ExtArgs>>): Prisma__CierreAlertaClient<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ubicaciones<T extends Alerta$ubicacionesArgs<ExtArgs> = {}>(args?: Subset<T, Alerta$ubicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventos<T extends Alerta$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Alerta$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alerta model
   */
  interface AlertaFieldRefs {
    readonly id: FieldRef<"Alerta", 'BigInt'>
    readonly uuid: FieldRef<"Alerta", 'String'>
    readonly id_persona: FieldRef<"Alerta", 'BigInt'>
    readonly id_municipio: FieldRef<"Alerta", 'String'>
    readonly fecha_hora: FieldRef<"Alerta", 'DateTime'>
    readonly nro_caso: FieldRef<"Alerta", 'String'>
    readonly estado: FieldRef<"Alerta", 'EstadoAlerta'>
    readonly origen: FieldRef<"Alerta", 'OrigenAlerta'>
    readonly created_at: FieldRef<"Alerta", 'DateTime'>
    readonly updated_at: FieldRef<"Alerta", 'DateTime'>
    readonly deleted_at: FieldRef<"Alerta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alerta findUnique
   */
  export type AlertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta findUniqueOrThrow
   */
  export type AlertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta findFirst
   */
  export type AlertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta findFirstOrThrow
   */
  export type AlertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta findMany
   */
  export type AlertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alertas to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta create
   */
  export type AlertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The data needed to create a Alerta.
     */
    data: XOR<AlertaCreateInput, AlertaUncheckedCreateInput>
  }

  /**
   * Alerta createMany
   */
  export type AlertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alertas.
     */
    data: AlertaCreateManyInput | AlertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alerta createManyAndReturn
   */
  export type AlertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * The data used to create many Alertas.
     */
    data: AlertaCreateManyInput | AlertaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alerta update
   */
  export type AlertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The data needed to update a Alerta.
     */
    data: XOR<AlertaUpdateInput, AlertaUncheckedUpdateInput>
    /**
     * Choose, which Alerta to update.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta updateMany
   */
  export type AlertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alertas.
     */
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyInput>
    /**
     * Filter which Alertas to update
     */
    where?: AlertaWhereInput
    /**
     * Limit how many Alertas to update.
     */
    limit?: number
  }

  /**
   * Alerta updateManyAndReturn
   */
  export type AlertaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * The data used to update Alertas.
     */
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyInput>
    /**
     * Filter which Alertas to update
     */
    where?: AlertaWhereInput
    /**
     * Limit how many Alertas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alerta upsert
   */
  export type AlertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The filter to search for the Alerta to update in case it exists.
     */
    where: AlertaWhereUniqueInput
    /**
     * In case the Alerta found by the `where` argument doesn't exist, create a new Alerta with this data.
     */
    create: XOR<AlertaCreateInput, AlertaUncheckedCreateInput>
    /**
     * In case the Alerta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertaUpdateInput, AlertaUncheckedUpdateInput>
  }

  /**
   * Alerta delete
   */
  export type AlertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter which Alerta to delete.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta deleteMany
   */
  export type AlertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alertas to delete
     */
    where?: AlertaWhereInput
    /**
     * Limit how many Alertas to delete.
     */
    limit?: number
  }

  /**
   * Alerta.atencion
   */
  export type Alerta$atencionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    where?: AtencionWhereInput
  }

  /**
   * Alerta.cierre
   */
  export type Alerta$cierreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    where?: CierreAlertaWhereInput
  }

  /**
   * Alerta.ubicaciones
   */
  export type Alerta$ubicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    where?: UbicacionAlertaWhereInput
    orderBy?: UbicacionAlertaOrderByWithRelationInput | UbicacionAlertaOrderByWithRelationInput[]
    cursor?: UbicacionAlertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UbicacionAlertaScalarFieldEnum | UbicacionAlertaScalarFieldEnum[]
  }

  /**
   * Alerta.eventos
   */
  export type Alerta$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Alerta without action
   */
  export type AlertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
  }


  /**
   * Model Atencion
   */

  export type AggregateAtencion = {
    _count: AtencionCountAggregateOutputType | null
    _avg: AtencionAvgAggregateOutputType | null
    _sum: AtencionSumAggregateOutputType | null
    _min: AtencionMinAggregateOutputType | null
    _max: AtencionMaxAggregateOutputType | null
  }

  export type AtencionAvgAggregateOutputType = {
    id: number | null
    id_alerta: number | null
  }

  export type AtencionSumAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
  }

  export type AtencionMinAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
    usuario_despachador: string | null
    id_vehiculo: string | null
    sigla_radio: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AtencionMaxAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
    usuario_despachador: string | null
    id_vehiculo: string | null
    sigla_radio: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AtencionCountAggregateOutputType = {
    id: number
    id_alerta: number
    usuario_despachador: number
    id_vehiculo: number
    sigla_radio: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AtencionAvgAggregateInputType = {
    id?: true
    id_alerta?: true
  }

  export type AtencionSumAggregateInputType = {
    id?: true
    id_alerta?: true
  }

  export type AtencionMinAggregateInputType = {
    id?: true
    id_alerta?: true
    usuario_despachador?: true
    id_vehiculo?: true
    sigla_radio?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AtencionMaxAggregateInputType = {
    id?: true
    id_alerta?: true
    usuario_despachador?: true
    id_vehiculo?: true
    sigla_radio?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AtencionCountAggregateInputType = {
    id?: true
    id_alerta?: true
    usuario_despachador?: true
    id_vehiculo?: true
    sigla_radio?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AtencionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atencion to aggregate.
     */
    where?: AtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atencions to fetch.
     */
    orderBy?: AtencionOrderByWithRelationInput | AtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atencions
    **/
    _count?: true | AtencionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtencionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtencionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtencionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtencionMaxAggregateInputType
  }

  export type GetAtencionAggregateType<T extends AtencionAggregateArgs> = {
        [P in keyof T & keyof AggregateAtencion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtencion[P]>
      : GetScalarType<T[P], AggregateAtencion[P]>
  }




  export type AtencionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtencionWhereInput
    orderBy?: AtencionOrderByWithAggregationInput | AtencionOrderByWithAggregationInput[]
    by: AtencionScalarFieldEnum[] | AtencionScalarFieldEnum
    having?: AtencionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtencionCountAggregateInputType | true
    _avg?: AtencionAvgAggregateInputType
    _sum?: AtencionSumAggregateInputType
    _min?: AtencionMinAggregateInputType
    _max?: AtencionMaxAggregateInputType
  }

  export type AtencionGroupByOutputType = {
    id: bigint
    id_alerta: bigint
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: AtencionCountAggregateOutputType | null
    _avg: AtencionAvgAggregateOutputType | null
    _sum: AtencionSumAggregateOutputType | null
    _min: AtencionMinAggregateOutputType | null
    _max: AtencionMaxAggregateOutputType | null
  }

  type GetAtencionGroupByPayload<T extends AtencionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtencionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtencionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtencionGroupByOutputType[P]>
            : GetScalarType<T[P], AtencionGroupByOutputType[P]>
        }
      >
    >


  export type AtencionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    usuario_despachador?: boolean
    id_vehiculo?: boolean
    sigla_radio?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
    atencion_funcionario?: boolean | Atencion$atencion_funcionarioArgs<ExtArgs>
    ubicaciones_funcionario?: boolean | Atencion$ubicaciones_funcionarioArgs<ExtArgs>
    _count?: boolean | AtencionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atencion"]>

  export type AtencionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    usuario_despachador?: boolean
    id_vehiculo?: boolean
    sigla_radio?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atencion"]>

  export type AtencionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    usuario_despachador?: boolean
    id_vehiculo?: boolean
    sigla_radio?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atencion"]>

  export type AtencionSelectScalar = {
    id?: boolean
    id_alerta?: boolean
    usuario_despachador?: boolean
    id_vehiculo?: boolean
    sigla_radio?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type AtencionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_alerta" | "usuario_despachador" | "id_vehiculo" | "sigla_radio" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["atencion"]>
  export type AtencionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
    atencion_funcionario?: boolean | Atencion$atencion_funcionarioArgs<ExtArgs>
    ubicaciones_funcionario?: boolean | Atencion$ubicaciones_funcionarioArgs<ExtArgs>
    _count?: boolean | AtencionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AtencionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }
  export type AtencionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }

  export type $AtencionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atencion"
    objects: {
      alerta: Prisma.$AlertaPayload<ExtArgs>
      atencion_funcionario: Prisma.$AtencionFuncionarioPayload<ExtArgs>[]
      ubicaciones_funcionario: Prisma.$UbicacionFuncionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_alerta: bigint
      usuario_despachador: string
      id_vehiculo: string
      sigla_radio: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["atencion"]>
    composites: {}
  }

  type AtencionGetPayload<S extends boolean | null | undefined | AtencionDefaultArgs> = $Result.GetResult<Prisma.$AtencionPayload, S>

  type AtencionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtencionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtencionCountAggregateInputType | true
    }

  export interface AtencionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atencion'], meta: { name: 'Atencion' } }
    /**
     * Find zero or one Atencion that matches the filter.
     * @param {AtencionFindUniqueArgs} args - Arguments to find a Atencion
     * @example
     * // Get one Atencion
     * const atencion = await prisma.atencion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtencionFindUniqueArgs>(args: SelectSubset<T, AtencionFindUniqueArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atencion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtencionFindUniqueOrThrowArgs} args - Arguments to find a Atencion
     * @example
     * // Get one Atencion
     * const atencion = await prisma.atencion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtencionFindUniqueOrThrowArgs>(args: SelectSubset<T, AtencionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atencion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFindFirstArgs} args - Arguments to find a Atencion
     * @example
     * // Get one Atencion
     * const atencion = await prisma.atencion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtencionFindFirstArgs>(args?: SelectSubset<T, AtencionFindFirstArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atencion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFindFirstOrThrowArgs} args - Arguments to find a Atencion
     * @example
     * // Get one Atencion
     * const atencion = await prisma.atencion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtencionFindFirstOrThrowArgs>(args?: SelectSubset<T, AtencionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atencions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atencions
     * const atencions = await prisma.atencion.findMany()
     * 
     * // Get first 10 Atencions
     * const atencions = await prisma.atencion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atencionWithIdOnly = await prisma.atencion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtencionFindManyArgs>(args?: SelectSubset<T, AtencionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atencion.
     * @param {AtencionCreateArgs} args - Arguments to create a Atencion.
     * @example
     * // Create one Atencion
     * const Atencion = await prisma.atencion.create({
     *   data: {
     *     // ... data to create a Atencion
     *   }
     * })
     * 
     */
    create<T extends AtencionCreateArgs>(args: SelectSubset<T, AtencionCreateArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atencions.
     * @param {AtencionCreateManyArgs} args - Arguments to create many Atencions.
     * @example
     * // Create many Atencions
     * const atencion = await prisma.atencion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtencionCreateManyArgs>(args?: SelectSubset<T, AtencionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atencions and returns the data saved in the database.
     * @param {AtencionCreateManyAndReturnArgs} args - Arguments to create many Atencions.
     * @example
     * // Create many Atencions
     * const atencion = await prisma.atencion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atencions and only return the `id`
     * const atencionWithIdOnly = await prisma.atencion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtencionCreateManyAndReturnArgs>(args?: SelectSubset<T, AtencionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atencion.
     * @param {AtencionDeleteArgs} args - Arguments to delete one Atencion.
     * @example
     * // Delete one Atencion
     * const Atencion = await prisma.atencion.delete({
     *   where: {
     *     // ... filter to delete one Atencion
     *   }
     * })
     * 
     */
    delete<T extends AtencionDeleteArgs>(args: SelectSubset<T, AtencionDeleteArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atencion.
     * @param {AtencionUpdateArgs} args - Arguments to update one Atencion.
     * @example
     * // Update one Atencion
     * const atencion = await prisma.atencion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtencionUpdateArgs>(args: SelectSubset<T, AtencionUpdateArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atencions.
     * @param {AtencionDeleteManyArgs} args - Arguments to filter Atencions to delete.
     * @example
     * // Delete a few Atencions
     * const { count } = await prisma.atencion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtencionDeleteManyArgs>(args?: SelectSubset<T, AtencionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atencions
     * const atencion = await prisma.atencion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtencionUpdateManyArgs>(args: SelectSubset<T, AtencionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atencions and returns the data updated in the database.
     * @param {AtencionUpdateManyAndReturnArgs} args - Arguments to update many Atencions.
     * @example
     * // Update many Atencions
     * const atencion = await prisma.atencion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atencions and only return the `id`
     * const atencionWithIdOnly = await prisma.atencion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtencionUpdateManyAndReturnArgs>(args: SelectSubset<T, AtencionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atencion.
     * @param {AtencionUpsertArgs} args - Arguments to update or create a Atencion.
     * @example
     * // Update or create a Atencion
     * const atencion = await prisma.atencion.upsert({
     *   create: {
     *     // ... data to create a Atencion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atencion we want to update
     *   }
     * })
     */
    upsert<T extends AtencionUpsertArgs>(args: SelectSubset<T, AtencionUpsertArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionCountArgs} args - Arguments to filter Atencions to count.
     * @example
     * // Count the number of Atencions
     * const count = await prisma.atencion.count({
     *   where: {
     *     // ... the filter for the Atencions we want to count
     *   }
     * })
    **/
    count<T extends AtencionCountArgs>(
      args?: Subset<T, AtencionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtencionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtencionAggregateArgs>(args: Subset<T, AtencionAggregateArgs>): Prisma.PrismaPromise<GetAtencionAggregateType<T>>

    /**
     * Group by Atencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtencionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtencionGroupByArgs['orderBy'] }
        : { orderBy?: AtencionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtencionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtencionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atencion model
   */
  readonly fields: AtencionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atencion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtencionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alerta<T extends AlertaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlertaDefaultArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    atencion_funcionario<T extends Atencion$atencion_funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, Atencion$atencion_funcionarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ubicaciones_funcionario<T extends Atencion$ubicaciones_funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, Atencion$ubicaciones_funcionarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Atencion model
   */
  interface AtencionFieldRefs {
    readonly id: FieldRef<"Atencion", 'BigInt'>
    readonly id_alerta: FieldRef<"Atencion", 'BigInt'>
    readonly usuario_despachador: FieldRef<"Atencion", 'String'>
    readonly id_vehiculo: FieldRef<"Atencion", 'String'>
    readonly sigla_radio: FieldRef<"Atencion", 'String'>
    readonly created_at: FieldRef<"Atencion", 'DateTime'>
    readonly updated_at: FieldRef<"Atencion", 'DateTime'>
    readonly deleted_at: FieldRef<"Atencion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Atencion findUnique
   */
  export type AtencionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    /**
     * Filter, which Atencion to fetch.
     */
    where: AtencionWhereUniqueInput
  }

  /**
   * Atencion findUniqueOrThrow
   */
  export type AtencionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    /**
     * Filter, which Atencion to fetch.
     */
    where: AtencionWhereUniqueInput
  }

  /**
   * Atencion findFirst
   */
  export type AtencionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    /**
     * Filter, which Atencion to fetch.
     */
    where?: AtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atencions to fetch.
     */
    orderBy?: AtencionOrderByWithRelationInput | AtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atencions.
     */
    cursor?: AtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atencions.
     */
    distinct?: AtencionScalarFieldEnum | AtencionScalarFieldEnum[]
  }

  /**
   * Atencion findFirstOrThrow
   */
  export type AtencionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    /**
     * Filter, which Atencion to fetch.
     */
    where?: AtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atencions to fetch.
     */
    orderBy?: AtencionOrderByWithRelationInput | AtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atencions.
     */
    cursor?: AtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atencions.
     */
    distinct?: AtencionScalarFieldEnum | AtencionScalarFieldEnum[]
  }

  /**
   * Atencion findMany
   */
  export type AtencionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    /**
     * Filter, which Atencions to fetch.
     */
    where?: AtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atencions to fetch.
     */
    orderBy?: AtencionOrderByWithRelationInput | AtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atencions.
     */
    cursor?: AtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atencions.
     */
    skip?: number
    distinct?: AtencionScalarFieldEnum | AtencionScalarFieldEnum[]
  }

  /**
   * Atencion create
   */
  export type AtencionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    /**
     * The data needed to create a Atencion.
     */
    data: XOR<AtencionCreateInput, AtencionUncheckedCreateInput>
  }

  /**
   * Atencion createMany
   */
  export type AtencionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atencions.
     */
    data: AtencionCreateManyInput | AtencionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atencion createManyAndReturn
   */
  export type AtencionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * The data used to create many Atencions.
     */
    data: AtencionCreateManyInput | AtencionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atencion update
   */
  export type AtencionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    /**
     * The data needed to update a Atencion.
     */
    data: XOR<AtencionUpdateInput, AtencionUncheckedUpdateInput>
    /**
     * Choose, which Atencion to update.
     */
    where: AtencionWhereUniqueInput
  }

  /**
   * Atencion updateMany
   */
  export type AtencionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atencions.
     */
    data: XOR<AtencionUpdateManyMutationInput, AtencionUncheckedUpdateManyInput>
    /**
     * Filter which Atencions to update
     */
    where?: AtencionWhereInput
    /**
     * Limit how many Atencions to update.
     */
    limit?: number
  }

  /**
   * Atencion updateManyAndReturn
   */
  export type AtencionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * The data used to update Atencions.
     */
    data: XOR<AtencionUpdateManyMutationInput, AtencionUncheckedUpdateManyInput>
    /**
     * Filter which Atencions to update
     */
    where?: AtencionWhereInput
    /**
     * Limit how many Atencions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atencion upsert
   */
  export type AtencionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    /**
     * The filter to search for the Atencion to update in case it exists.
     */
    where: AtencionWhereUniqueInput
    /**
     * In case the Atencion found by the `where` argument doesn't exist, create a new Atencion with this data.
     */
    create: XOR<AtencionCreateInput, AtencionUncheckedCreateInput>
    /**
     * In case the Atencion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtencionUpdateInput, AtencionUncheckedUpdateInput>
  }

  /**
   * Atencion delete
   */
  export type AtencionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
    /**
     * Filter which Atencion to delete.
     */
    where: AtencionWhereUniqueInput
  }

  /**
   * Atencion deleteMany
   */
  export type AtencionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atencions to delete
     */
    where?: AtencionWhereInput
    /**
     * Limit how many Atencions to delete.
     */
    limit?: number
  }

  /**
   * Atencion.atencion_funcionario
   */
  export type Atencion$atencion_funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    where?: AtencionFuncionarioWhereInput
    orderBy?: AtencionFuncionarioOrderByWithRelationInput | AtencionFuncionarioOrderByWithRelationInput[]
    cursor?: AtencionFuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtencionFuncionarioScalarFieldEnum | AtencionFuncionarioScalarFieldEnum[]
  }

  /**
   * Atencion.ubicaciones_funcionario
   */
  export type Atencion$ubicaciones_funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    where?: UbicacionFuncionarioWhereInput
    orderBy?: UbicacionFuncionarioOrderByWithRelationInput | UbicacionFuncionarioOrderByWithRelationInput[]
    cursor?: UbicacionFuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UbicacionFuncionarioScalarFieldEnum | UbicacionFuncionarioScalarFieldEnum[]
  }

  /**
   * Atencion without action
   */
  export type AtencionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atencion
     */
    select?: AtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atencion
     */
    omit?: AtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionInclude<ExtArgs> | null
  }


  /**
   * Model AtencionFuncionario
   */

  export type AggregateAtencionFuncionario = {
    _count: AtencionFuncionarioCountAggregateOutputType | null
    _avg: AtencionFuncionarioAvgAggregateOutputType | null
    _sum: AtencionFuncionarioSumAggregateOutputType | null
    _min: AtencionFuncionarioMinAggregateOutputType | null
    _max: AtencionFuncionarioMaxAggregateOutputType | null
  }

  export type AtencionFuncionarioAvgAggregateOutputType = {
    id: number | null
    id_atencion: number | null
  }

  export type AtencionFuncionarioSumAggregateOutputType = {
    id: bigint | null
    id_atencion: bigint | null
  }

  export type AtencionFuncionarioMinAggregateOutputType = {
    id: bigint | null
    id_atencion: bigint | null
    id_funcionario: string | null
    encargado: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AtencionFuncionarioMaxAggregateOutputType = {
    id: bigint | null
    id_atencion: bigint | null
    id_funcionario: string | null
    encargado: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AtencionFuncionarioCountAggregateOutputType = {
    id: number
    id_atencion: number
    id_funcionario: number
    encargado: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AtencionFuncionarioAvgAggregateInputType = {
    id?: true
    id_atencion?: true
  }

  export type AtencionFuncionarioSumAggregateInputType = {
    id?: true
    id_atencion?: true
  }

  export type AtencionFuncionarioMinAggregateInputType = {
    id?: true
    id_atencion?: true
    id_funcionario?: true
    encargado?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AtencionFuncionarioMaxAggregateInputType = {
    id?: true
    id_atencion?: true
    id_funcionario?: true
    encargado?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AtencionFuncionarioCountAggregateInputType = {
    id?: true
    id_atencion?: true
    id_funcionario?: true
    encargado?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AtencionFuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtencionFuncionario to aggregate.
     */
    where?: AtencionFuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtencionFuncionarios to fetch.
     */
    orderBy?: AtencionFuncionarioOrderByWithRelationInput | AtencionFuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtencionFuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtencionFuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtencionFuncionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtencionFuncionarios
    **/
    _count?: true | AtencionFuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtencionFuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtencionFuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtencionFuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtencionFuncionarioMaxAggregateInputType
  }

  export type GetAtencionFuncionarioAggregateType<T extends AtencionFuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateAtencionFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtencionFuncionario[P]>
      : GetScalarType<T[P], AggregateAtencionFuncionario[P]>
  }




  export type AtencionFuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtencionFuncionarioWhereInput
    orderBy?: AtencionFuncionarioOrderByWithAggregationInput | AtencionFuncionarioOrderByWithAggregationInput[]
    by: AtencionFuncionarioScalarFieldEnum[] | AtencionFuncionarioScalarFieldEnum
    having?: AtencionFuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtencionFuncionarioCountAggregateInputType | true
    _avg?: AtencionFuncionarioAvgAggregateInputType
    _sum?: AtencionFuncionarioSumAggregateInputType
    _min?: AtencionFuncionarioMinAggregateInputType
    _max?: AtencionFuncionarioMaxAggregateInputType
  }

  export type AtencionFuncionarioGroupByOutputType = {
    id: bigint
    id_atencion: bigint
    id_funcionario: string | null
    encargado: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: AtencionFuncionarioCountAggregateOutputType | null
    _avg: AtencionFuncionarioAvgAggregateOutputType | null
    _sum: AtencionFuncionarioSumAggregateOutputType | null
    _min: AtencionFuncionarioMinAggregateOutputType | null
    _max: AtencionFuncionarioMaxAggregateOutputType | null
  }

  type GetAtencionFuncionarioGroupByPayload<T extends AtencionFuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtencionFuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtencionFuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtencionFuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], AtencionFuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type AtencionFuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_atencion?: boolean
    id_funcionario?: boolean
    encargado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
    funcionario?: boolean | AtencionFuncionario$funcionarioArgs<ExtArgs>
  }, ExtArgs["result"]["atencionFuncionario"]>

  export type AtencionFuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_atencion?: boolean
    id_funcionario?: boolean
    encargado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
    funcionario?: boolean | AtencionFuncionario$funcionarioArgs<ExtArgs>
  }, ExtArgs["result"]["atencionFuncionario"]>

  export type AtencionFuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_atencion?: boolean
    id_funcionario?: boolean
    encargado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
    funcionario?: boolean | AtencionFuncionario$funcionarioArgs<ExtArgs>
  }, ExtArgs["result"]["atencionFuncionario"]>

  export type AtencionFuncionarioSelectScalar = {
    id?: boolean
    id_atencion?: boolean
    id_funcionario?: boolean
    encargado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type AtencionFuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_atencion" | "id_funcionario" | "encargado" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["atencionFuncionario"]>
  export type AtencionFuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
    funcionario?: boolean | AtencionFuncionario$funcionarioArgs<ExtArgs>
  }
  export type AtencionFuncionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
    funcionario?: boolean | AtencionFuncionario$funcionarioArgs<ExtArgs>
  }
  export type AtencionFuncionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
    funcionario?: boolean | AtencionFuncionario$funcionarioArgs<ExtArgs>
  }

  export type $AtencionFuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtencionFuncionario"
    objects: {
      atencion: Prisma.$AtencionPayload<ExtArgs>
      funcionario: Prisma.$FuncionariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_atencion: bigint
      id_funcionario: string | null
      encargado: boolean
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["atencionFuncionario"]>
    composites: {}
  }

  type AtencionFuncionarioGetPayload<S extends boolean | null | undefined | AtencionFuncionarioDefaultArgs> = $Result.GetResult<Prisma.$AtencionFuncionarioPayload, S>

  type AtencionFuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtencionFuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtencionFuncionarioCountAggregateInputType | true
    }

  export interface AtencionFuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtencionFuncionario'], meta: { name: 'AtencionFuncionario' } }
    /**
     * Find zero or one AtencionFuncionario that matches the filter.
     * @param {AtencionFuncionarioFindUniqueArgs} args - Arguments to find a AtencionFuncionario
     * @example
     * // Get one AtencionFuncionario
     * const atencionFuncionario = await prisma.atencionFuncionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtencionFuncionarioFindUniqueArgs>(args: SelectSubset<T, AtencionFuncionarioFindUniqueArgs<ExtArgs>>): Prisma__AtencionFuncionarioClient<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AtencionFuncionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtencionFuncionarioFindUniqueOrThrowArgs} args - Arguments to find a AtencionFuncionario
     * @example
     * // Get one AtencionFuncionario
     * const atencionFuncionario = await prisma.atencionFuncionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtencionFuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, AtencionFuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtencionFuncionarioClient<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtencionFuncionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFuncionarioFindFirstArgs} args - Arguments to find a AtencionFuncionario
     * @example
     * // Get one AtencionFuncionario
     * const atencionFuncionario = await prisma.atencionFuncionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtencionFuncionarioFindFirstArgs>(args?: SelectSubset<T, AtencionFuncionarioFindFirstArgs<ExtArgs>>): Prisma__AtencionFuncionarioClient<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtencionFuncionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFuncionarioFindFirstOrThrowArgs} args - Arguments to find a AtencionFuncionario
     * @example
     * // Get one AtencionFuncionario
     * const atencionFuncionario = await prisma.atencionFuncionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtencionFuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, AtencionFuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtencionFuncionarioClient<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AtencionFuncionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtencionFuncionarios
     * const atencionFuncionarios = await prisma.atencionFuncionario.findMany()
     * 
     * // Get first 10 AtencionFuncionarios
     * const atencionFuncionarios = await prisma.atencionFuncionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atencionFuncionarioWithIdOnly = await prisma.atencionFuncionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtencionFuncionarioFindManyArgs>(args?: SelectSubset<T, AtencionFuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AtencionFuncionario.
     * @param {AtencionFuncionarioCreateArgs} args - Arguments to create a AtencionFuncionario.
     * @example
     * // Create one AtencionFuncionario
     * const AtencionFuncionario = await prisma.atencionFuncionario.create({
     *   data: {
     *     // ... data to create a AtencionFuncionario
     *   }
     * })
     * 
     */
    create<T extends AtencionFuncionarioCreateArgs>(args: SelectSubset<T, AtencionFuncionarioCreateArgs<ExtArgs>>): Prisma__AtencionFuncionarioClient<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AtencionFuncionarios.
     * @param {AtencionFuncionarioCreateManyArgs} args - Arguments to create many AtencionFuncionarios.
     * @example
     * // Create many AtencionFuncionarios
     * const atencionFuncionario = await prisma.atencionFuncionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtencionFuncionarioCreateManyArgs>(args?: SelectSubset<T, AtencionFuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AtencionFuncionarios and returns the data saved in the database.
     * @param {AtencionFuncionarioCreateManyAndReturnArgs} args - Arguments to create many AtencionFuncionarios.
     * @example
     * // Create many AtencionFuncionarios
     * const atencionFuncionario = await prisma.atencionFuncionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AtencionFuncionarios and only return the `id`
     * const atencionFuncionarioWithIdOnly = await prisma.atencionFuncionario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtencionFuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, AtencionFuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AtencionFuncionario.
     * @param {AtencionFuncionarioDeleteArgs} args - Arguments to delete one AtencionFuncionario.
     * @example
     * // Delete one AtencionFuncionario
     * const AtencionFuncionario = await prisma.atencionFuncionario.delete({
     *   where: {
     *     // ... filter to delete one AtencionFuncionario
     *   }
     * })
     * 
     */
    delete<T extends AtencionFuncionarioDeleteArgs>(args: SelectSubset<T, AtencionFuncionarioDeleteArgs<ExtArgs>>): Prisma__AtencionFuncionarioClient<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AtencionFuncionario.
     * @param {AtencionFuncionarioUpdateArgs} args - Arguments to update one AtencionFuncionario.
     * @example
     * // Update one AtencionFuncionario
     * const atencionFuncionario = await prisma.atencionFuncionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtencionFuncionarioUpdateArgs>(args: SelectSubset<T, AtencionFuncionarioUpdateArgs<ExtArgs>>): Prisma__AtencionFuncionarioClient<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AtencionFuncionarios.
     * @param {AtencionFuncionarioDeleteManyArgs} args - Arguments to filter AtencionFuncionarios to delete.
     * @example
     * // Delete a few AtencionFuncionarios
     * const { count } = await prisma.atencionFuncionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtencionFuncionarioDeleteManyArgs>(args?: SelectSubset<T, AtencionFuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtencionFuncionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtencionFuncionarios
     * const atencionFuncionario = await prisma.atencionFuncionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtencionFuncionarioUpdateManyArgs>(args: SelectSubset<T, AtencionFuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtencionFuncionarios and returns the data updated in the database.
     * @param {AtencionFuncionarioUpdateManyAndReturnArgs} args - Arguments to update many AtencionFuncionarios.
     * @example
     * // Update many AtencionFuncionarios
     * const atencionFuncionario = await prisma.atencionFuncionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AtencionFuncionarios and only return the `id`
     * const atencionFuncionarioWithIdOnly = await prisma.atencionFuncionario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtencionFuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, AtencionFuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AtencionFuncionario.
     * @param {AtencionFuncionarioUpsertArgs} args - Arguments to update or create a AtencionFuncionario.
     * @example
     * // Update or create a AtencionFuncionario
     * const atencionFuncionario = await prisma.atencionFuncionario.upsert({
     *   create: {
     *     // ... data to create a AtencionFuncionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtencionFuncionario we want to update
     *   }
     * })
     */
    upsert<T extends AtencionFuncionarioUpsertArgs>(args: SelectSubset<T, AtencionFuncionarioUpsertArgs<ExtArgs>>): Prisma__AtencionFuncionarioClient<$Result.GetResult<Prisma.$AtencionFuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AtencionFuncionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFuncionarioCountArgs} args - Arguments to filter AtencionFuncionarios to count.
     * @example
     * // Count the number of AtencionFuncionarios
     * const count = await prisma.atencionFuncionario.count({
     *   where: {
     *     // ... the filter for the AtencionFuncionarios we want to count
     *   }
     * })
    **/
    count<T extends AtencionFuncionarioCountArgs>(
      args?: Subset<T, AtencionFuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtencionFuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtencionFuncionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtencionFuncionarioAggregateArgs>(args: Subset<T, AtencionFuncionarioAggregateArgs>): Prisma.PrismaPromise<GetAtencionFuncionarioAggregateType<T>>

    /**
     * Group by AtencionFuncionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtencionFuncionarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtencionFuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtencionFuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: AtencionFuncionarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtencionFuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtencionFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtencionFuncionario model
   */
  readonly fields: AtencionFuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtencionFuncionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtencionFuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atencion<T extends AtencionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtencionDefaultArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    funcionario<T extends AtencionFuncionario$funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, AtencionFuncionario$funcionarioArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AtencionFuncionario model
   */
  interface AtencionFuncionarioFieldRefs {
    readonly id: FieldRef<"AtencionFuncionario", 'BigInt'>
    readonly id_atencion: FieldRef<"AtencionFuncionario", 'BigInt'>
    readonly id_funcionario: FieldRef<"AtencionFuncionario", 'String'>
    readonly encargado: FieldRef<"AtencionFuncionario", 'Boolean'>
    readonly created_at: FieldRef<"AtencionFuncionario", 'DateTime'>
    readonly updated_at: FieldRef<"AtencionFuncionario", 'DateTime'>
    readonly deleted_at: FieldRef<"AtencionFuncionario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AtencionFuncionario findUnique
   */
  export type AtencionFuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which AtencionFuncionario to fetch.
     */
    where: AtencionFuncionarioWhereUniqueInput
  }

  /**
   * AtencionFuncionario findUniqueOrThrow
   */
  export type AtencionFuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which AtencionFuncionario to fetch.
     */
    where: AtencionFuncionarioWhereUniqueInput
  }

  /**
   * AtencionFuncionario findFirst
   */
  export type AtencionFuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which AtencionFuncionario to fetch.
     */
    where?: AtencionFuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtencionFuncionarios to fetch.
     */
    orderBy?: AtencionFuncionarioOrderByWithRelationInput | AtencionFuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtencionFuncionarios.
     */
    cursor?: AtencionFuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtencionFuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtencionFuncionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtencionFuncionarios.
     */
    distinct?: AtencionFuncionarioScalarFieldEnum | AtencionFuncionarioScalarFieldEnum[]
  }

  /**
   * AtencionFuncionario findFirstOrThrow
   */
  export type AtencionFuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which AtencionFuncionario to fetch.
     */
    where?: AtencionFuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtencionFuncionarios to fetch.
     */
    orderBy?: AtencionFuncionarioOrderByWithRelationInput | AtencionFuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtencionFuncionarios.
     */
    cursor?: AtencionFuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtencionFuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtencionFuncionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtencionFuncionarios.
     */
    distinct?: AtencionFuncionarioScalarFieldEnum | AtencionFuncionarioScalarFieldEnum[]
  }

  /**
   * AtencionFuncionario findMany
   */
  export type AtencionFuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which AtencionFuncionarios to fetch.
     */
    where?: AtencionFuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtencionFuncionarios to fetch.
     */
    orderBy?: AtencionFuncionarioOrderByWithRelationInput | AtencionFuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtencionFuncionarios.
     */
    cursor?: AtencionFuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtencionFuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtencionFuncionarios.
     */
    skip?: number
    distinct?: AtencionFuncionarioScalarFieldEnum | AtencionFuncionarioScalarFieldEnum[]
  }

  /**
   * AtencionFuncionario create
   */
  export type AtencionFuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a AtencionFuncionario.
     */
    data: XOR<AtencionFuncionarioCreateInput, AtencionFuncionarioUncheckedCreateInput>
  }

  /**
   * AtencionFuncionario createMany
   */
  export type AtencionFuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtencionFuncionarios.
     */
    data: AtencionFuncionarioCreateManyInput | AtencionFuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtencionFuncionario createManyAndReturn
   */
  export type AtencionFuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many AtencionFuncionarios.
     */
    data: AtencionFuncionarioCreateManyInput | AtencionFuncionarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AtencionFuncionario update
   */
  export type AtencionFuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a AtencionFuncionario.
     */
    data: XOR<AtencionFuncionarioUpdateInput, AtencionFuncionarioUncheckedUpdateInput>
    /**
     * Choose, which AtencionFuncionario to update.
     */
    where: AtencionFuncionarioWhereUniqueInput
  }

  /**
   * AtencionFuncionario updateMany
   */
  export type AtencionFuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtencionFuncionarios.
     */
    data: XOR<AtencionFuncionarioUpdateManyMutationInput, AtencionFuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which AtencionFuncionarios to update
     */
    where?: AtencionFuncionarioWhereInput
    /**
     * Limit how many AtencionFuncionarios to update.
     */
    limit?: number
  }

  /**
   * AtencionFuncionario updateManyAndReturn
   */
  export type AtencionFuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update AtencionFuncionarios.
     */
    data: XOR<AtencionFuncionarioUpdateManyMutationInput, AtencionFuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which AtencionFuncionarios to update
     */
    where?: AtencionFuncionarioWhereInput
    /**
     * Limit how many AtencionFuncionarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AtencionFuncionario upsert
   */
  export type AtencionFuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the AtencionFuncionario to update in case it exists.
     */
    where: AtencionFuncionarioWhereUniqueInput
    /**
     * In case the AtencionFuncionario found by the `where` argument doesn't exist, create a new AtencionFuncionario with this data.
     */
    create: XOR<AtencionFuncionarioCreateInput, AtencionFuncionarioUncheckedCreateInput>
    /**
     * In case the AtencionFuncionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtencionFuncionarioUpdateInput, AtencionFuncionarioUncheckedUpdateInput>
  }

  /**
   * AtencionFuncionario delete
   */
  export type AtencionFuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter which AtencionFuncionario to delete.
     */
    where: AtencionFuncionarioWhereUniqueInput
  }

  /**
   * AtencionFuncionario deleteMany
   */
  export type AtencionFuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtencionFuncionarios to delete
     */
    where?: AtencionFuncionarioWhereInput
    /**
     * Limit how many AtencionFuncionarios to delete.
     */
    limit?: number
  }

  /**
   * AtencionFuncionario.funcionario
   */
  export type AtencionFuncionario$funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    where?: FuncionariosWhereInput
  }

  /**
   * AtencionFuncionario without action
   */
  export type AtencionFuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtencionFuncionario
     */
    select?: AtencionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtencionFuncionario
     */
    omit?: AtencionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtencionFuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model UbicacionAlerta
   */

  export type AggregateUbicacionAlerta = {
    _count: UbicacionAlertaCountAggregateOutputType | null
    _avg: UbicacionAlertaAvgAggregateOutputType | null
    _sum: UbicacionAlertaSumAggregateOutputType | null
    _min: UbicacionAlertaMinAggregateOutputType | null
    _max: UbicacionAlertaMaxAggregateOutputType | null
  }

  export type UbicacionAlertaAvgAggregateOutputType = {
    id: number | null
    id_alerta: number | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type UbicacionAlertaSumAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type UbicacionAlertaMinAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
    fecha_hora: Date | null
    latitud: Decimal | null
    longitud: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UbicacionAlertaMaxAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
    fecha_hora: Date | null
    latitud: Decimal | null
    longitud: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UbicacionAlertaCountAggregateOutputType = {
    id: number
    id_alerta: number
    fecha_hora: number
    latitud: number
    longitud: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UbicacionAlertaAvgAggregateInputType = {
    id?: true
    id_alerta?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionAlertaSumAggregateInputType = {
    id?: true
    id_alerta?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionAlertaMinAggregateInputType = {
    id?: true
    id_alerta?: true
    fecha_hora?: true
    latitud?: true
    longitud?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UbicacionAlertaMaxAggregateInputType = {
    id?: true
    id_alerta?: true
    fecha_hora?: true
    latitud?: true
    longitud?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UbicacionAlertaCountAggregateInputType = {
    id?: true
    id_alerta?: true
    fecha_hora?: true
    latitud?: true
    longitud?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UbicacionAlertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UbicacionAlerta to aggregate.
     */
    where?: UbicacionAlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionAlertas to fetch.
     */
    orderBy?: UbicacionAlertaOrderByWithRelationInput | UbicacionAlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UbicacionAlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionAlertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionAlertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UbicacionAlertas
    **/
    _count?: true | UbicacionAlertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UbicacionAlertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UbicacionAlertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbicacionAlertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbicacionAlertaMaxAggregateInputType
  }

  export type GetUbicacionAlertaAggregateType<T extends UbicacionAlertaAggregateArgs> = {
        [P in keyof T & keyof AggregateUbicacionAlerta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbicacionAlerta[P]>
      : GetScalarType<T[P], AggregateUbicacionAlerta[P]>
  }




  export type UbicacionAlertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbicacionAlertaWhereInput
    orderBy?: UbicacionAlertaOrderByWithAggregationInput | UbicacionAlertaOrderByWithAggregationInput[]
    by: UbicacionAlertaScalarFieldEnum[] | UbicacionAlertaScalarFieldEnum
    having?: UbicacionAlertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbicacionAlertaCountAggregateInputType | true
    _avg?: UbicacionAlertaAvgAggregateInputType
    _sum?: UbicacionAlertaSumAggregateInputType
    _min?: UbicacionAlertaMinAggregateInputType
    _max?: UbicacionAlertaMaxAggregateInputType
  }

  export type UbicacionAlertaGroupByOutputType = {
    id: bigint
    id_alerta: bigint
    fecha_hora: Date
    latitud: Decimal
    longitud: Decimal
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: UbicacionAlertaCountAggregateOutputType | null
    _avg: UbicacionAlertaAvgAggregateOutputType | null
    _sum: UbicacionAlertaSumAggregateOutputType | null
    _min: UbicacionAlertaMinAggregateOutputType | null
    _max: UbicacionAlertaMaxAggregateOutputType | null
  }

  type GetUbicacionAlertaGroupByPayload<T extends UbicacionAlertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbicacionAlertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbicacionAlertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbicacionAlertaGroupByOutputType[P]>
            : GetScalarType<T[P], UbicacionAlertaGroupByOutputType[P]>
        }
      >
    >


  export type UbicacionAlertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    fecha_hora?: boolean
    latitud?: boolean
    longitud?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacionAlerta"]>

  export type UbicacionAlertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    fecha_hora?: boolean
    latitud?: boolean
    longitud?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacionAlerta"]>

  export type UbicacionAlertaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    fecha_hora?: boolean
    latitud?: boolean
    longitud?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacionAlerta"]>

  export type UbicacionAlertaSelectScalar = {
    id?: boolean
    id_alerta?: boolean
    fecha_hora?: boolean
    latitud?: boolean
    longitud?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type UbicacionAlertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_alerta" | "fecha_hora" | "latitud" | "longitud" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["ubicacionAlerta"]>
  export type UbicacionAlertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }
  export type UbicacionAlertaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }
  export type UbicacionAlertaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }

  export type $UbicacionAlertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UbicacionAlerta"
    objects: {
      alerta: Prisma.$AlertaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_alerta: bigint
      fecha_hora: Date
      latitud: Prisma.Decimal
      longitud: Prisma.Decimal
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["ubicacionAlerta"]>
    composites: {}
  }

  type UbicacionAlertaGetPayload<S extends boolean | null | undefined | UbicacionAlertaDefaultArgs> = $Result.GetResult<Prisma.$UbicacionAlertaPayload, S>

  type UbicacionAlertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UbicacionAlertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbicacionAlertaCountAggregateInputType | true
    }

  export interface UbicacionAlertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UbicacionAlerta'], meta: { name: 'UbicacionAlerta' } }
    /**
     * Find zero or one UbicacionAlerta that matches the filter.
     * @param {UbicacionAlertaFindUniqueArgs} args - Arguments to find a UbicacionAlerta
     * @example
     * // Get one UbicacionAlerta
     * const ubicacionAlerta = await prisma.ubicacionAlerta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UbicacionAlertaFindUniqueArgs>(args: SelectSubset<T, UbicacionAlertaFindUniqueArgs<ExtArgs>>): Prisma__UbicacionAlertaClient<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UbicacionAlerta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UbicacionAlertaFindUniqueOrThrowArgs} args - Arguments to find a UbicacionAlerta
     * @example
     * // Get one UbicacionAlerta
     * const ubicacionAlerta = await prisma.ubicacionAlerta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UbicacionAlertaFindUniqueOrThrowArgs>(args: SelectSubset<T, UbicacionAlertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UbicacionAlertaClient<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UbicacionAlerta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAlertaFindFirstArgs} args - Arguments to find a UbicacionAlerta
     * @example
     * // Get one UbicacionAlerta
     * const ubicacionAlerta = await prisma.ubicacionAlerta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UbicacionAlertaFindFirstArgs>(args?: SelectSubset<T, UbicacionAlertaFindFirstArgs<ExtArgs>>): Prisma__UbicacionAlertaClient<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UbicacionAlerta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAlertaFindFirstOrThrowArgs} args - Arguments to find a UbicacionAlerta
     * @example
     * // Get one UbicacionAlerta
     * const ubicacionAlerta = await prisma.ubicacionAlerta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UbicacionAlertaFindFirstOrThrowArgs>(args?: SelectSubset<T, UbicacionAlertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UbicacionAlertaClient<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UbicacionAlertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAlertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UbicacionAlertas
     * const ubicacionAlertas = await prisma.ubicacionAlerta.findMany()
     * 
     * // Get first 10 UbicacionAlertas
     * const ubicacionAlertas = await prisma.ubicacionAlerta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ubicacionAlertaWithIdOnly = await prisma.ubicacionAlerta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UbicacionAlertaFindManyArgs>(args?: SelectSubset<T, UbicacionAlertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UbicacionAlerta.
     * @param {UbicacionAlertaCreateArgs} args - Arguments to create a UbicacionAlerta.
     * @example
     * // Create one UbicacionAlerta
     * const UbicacionAlerta = await prisma.ubicacionAlerta.create({
     *   data: {
     *     // ... data to create a UbicacionAlerta
     *   }
     * })
     * 
     */
    create<T extends UbicacionAlertaCreateArgs>(args: SelectSubset<T, UbicacionAlertaCreateArgs<ExtArgs>>): Prisma__UbicacionAlertaClient<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UbicacionAlertas.
     * @param {UbicacionAlertaCreateManyArgs} args - Arguments to create many UbicacionAlertas.
     * @example
     * // Create many UbicacionAlertas
     * const ubicacionAlerta = await prisma.ubicacionAlerta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UbicacionAlertaCreateManyArgs>(args?: SelectSubset<T, UbicacionAlertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UbicacionAlertas and returns the data saved in the database.
     * @param {UbicacionAlertaCreateManyAndReturnArgs} args - Arguments to create many UbicacionAlertas.
     * @example
     * // Create many UbicacionAlertas
     * const ubicacionAlerta = await prisma.ubicacionAlerta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UbicacionAlertas and only return the `id`
     * const ubicacionAlertaWithIdOnly = await prisma.ubicacionAlerta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UbicacionAlertaCreateManyAndReturnArgs>(args?: SelectSubset<T, UbicacionAlertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UbicacionAlerta.
     * @param {UbicacionAlertaDeleteArgs} args - Arguments to delete one UbicacionAlerta.
     * @example
     * // Delete one UbicacionAlerta
     * const UbicacionAlerta = await prisma.ubicacionAlerta.delete({
     *   where: {
     *     // ... filter to delete one UbicacionAlerta
     *   }
     * })
     * 
     */
    delete<T extends UbicacionAlertaDeleteArgs>(args: SelectSubset<T, UbicacionAlertaDeleteArgs<ExtArgs>>): Prisma__UbicacionAlertaClient<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UbicacionAlerta.
     * @param {UbicacionAlertaUpdateArgs} args - Arguments to update one UbicacionAlerta.
     * @example
     * // Update one UbicacionAlerta
     * const ubicacionAlerta = await prisma.ubicacionAlerta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UbicacionAlertaUpdateArgs>(args: SelectSubset<T, UbicacionAlertaUpdateArgs<ExtArgs>>): Prisma__UbicacionAlertaClient<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UbicacionAlertas.
     * @param {UbicacionAlertaDeleteManyArgs} args - Arguments to filter UbicacionAlertas to delete.
     * @example
     * // Delete a few UbicacionAlertas
     * const { count } = await prisma.ubicacionAlerta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UbicacionAlertaDeleteManyArgs>(args?: SelectSubset<T, UbicacionAlertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UbicacionAlertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAlertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UbicacionAlertas
     * const ubicacionAlerta = await prisma.ubicacionAlerta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UbicacionAlertaUpdateManyArgs>(args: SelectSubset<T, UbicacionAlertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UbicacionAlertas and returns the data updated in the database.
     * @param {UbicacionAlertaUpdateManyAndReturnArgs} args - Arguments to update many UbicacionAlertas.
     * @example
     * // Update many UbicacionAlertas
     * const ubicacionAlerta = await prisma.ubicacionAlerta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UbicacionAlertas and only return the `id`
     * const ubicacionAlertaWithIdOnly = await prisma.ubicacionAlerta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UbicacionAlertaUpdateManyAndReturnArgs>(args: SelectSubset<T, UbicacionAlertaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UbicacionAlerta.
     * @param {UbicacionAlertaUpsertArgs} args - Arguments to update or create a UbicacionAlerta.
     * @example
     * // Update or create a UbicacionAlerta
     * const ubicacionAlerta = await prisma.ubicacionAlerta.upsert({
     *   create: {
     *     // ... data to create a UbicacionAlerta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UbicacionAlerta we want to update
     *   }
     * })
     */
    upsert<T extends UbicacionAlertaUpsertArgs>(args: SelectSubset<T, UbicacionAlertaUpsertArgs<ExtArgs>>): Prisma__UbicacionAlertaClient<$Result.GetResult<Prisma.$UbicacionAlertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UbicacionAlertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAlertaCountArgs} args - Arguments to filter UbicacionAlertas to count.
     * @example
     * // Count the number of UbicacionAlertas
     * const count = await prisma.ubicacionAlerta.count({
     *   where: {
     *     // ... the filter for the UbicacionAlertas we want to count
     *   }
     * })
    **/
    count<T extends UbicacionAlertaCountArgs>(
      args?: Subset<T, UbicacionAlertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbicacionAlertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UbicacionAlerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAlertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UbicacionAlertaAggregateArgs>(args: Subset<T, UbicacionAlertaAggregateArgs>): Prisma.PrismaPromise<GetUbicacionAlertaAggregateType<T>>

    /**
     * Group by UbicacionAlerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAlertaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UbicacionAlertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UbicacionAlertaGroupByArgs['orderBy'] }
        : { orderBy?: UbicacionAlertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UbicacionAlertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbicacionAlertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UbicacionAlerta model
   */
  readonly fields: UbicacionAlertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UbicacionAlerta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UbicacionAlertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alerta<T extends AlertaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlertaDefaultArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UbicacionAlerta model
   */
  interface UbicacionAlertaFieldRefs {
    readonly id: FieldRef<"UbicacionAlerta", 'BigInt'>
    readonly id_alerta: FieldRef<"UbicacionAlerta", 'BigInt'>
    readonly fecha_hora: FieldRef<"UbicacionAlerta", 'DateTime'>
    readonly latitud: FieldRef<"UbicacionAlerta", 'Decimal'>
    readonly longitud: FieldRef<"UbicacionAlerta", 'Decimal'>
    readonly created_at: FieldRef<"UbicacionAlerta", 'DateTime'>
    readonly updated_at: FieldRef<"UbicacionAlerta", 'DateTime'>
    readonly deleted_at: FieldRef<"UbicacionAlerta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UbicacionAlerta findUnique
   */
  export type UbicacionAlertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionAlerta to fetch.
     */
    where: UbicacionAlertaWhereUniqueInput
  }

  /**
   * UbicacionAlerta findUniqueOrThrow
   */
  export type UbicacionAlertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionAlerta to fetch.
     */
    where: UbicacionAlertaWhereUniqueInput
  }

  /**
   * UbicacionAlerta findFirst
   */
  export type UbicacionAlertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionAlerta to fetch.
     */
    where?: UbicacionAlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionAlertas to fetch.
     */
    orderBy?: UbicacionAlertaOrderByWithRelationInput | UbicacionAlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UbicacionAlertas.
     */
    cursor?: UbicacionAlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionAlertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionAlertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UbicacionAlertas.
     */
    distinct?: UbicacionAlertaScalarFieldEnum | UbicacionAlertaScalarFieldEnum[]
  }

  /**
   * UbicacionAlerta findFirstOrThrow
   */
  export type UbicacionAlertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionAlerta to fetch.
     */
    where?: UbicacionAlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionAlertas to fetch.
     */
    orderBy?: UbicacionAlertaOrderByWithRelationInput | UbicacionAlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UbicacionAlertas.
     */
    cursor?: UbicacionAlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionAlertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionAlertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UbicacionAlertas.
     */
    distinct?: UbicacionAlertaScalarFieldEnum | UbicacionAlertaScalarFieldEnum[]
  }

  /**
   * UbicacionAlerta findMany
   */
  export type UbicacionAlertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionAlertas to fetch.
     */
    where?: UbicacionAlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionAlertas to fetch.
     */
    orderBy?: UbicacionAlertaOrderByWithRelationInput | UbicacionAlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UbicacionAlertas.
     */
    cursor?: UbicacionAlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionAlertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionAlertas.
     */
    skip?: number
    distinct?: UbicacionAlertaScalarFieldEnum | UbicacionAlertaScalarFieldEnum[]
  }

  /**
   * UbicacionAlerta create
   */
  export type UbicacionAlertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    /**
     * The data needed to create a UbicacionAlerta.
     */
    data: XOR<UbicacionAlertaCreateInput, UbicacionAlertaUncheckedCreateInput>
  }

  /**
   * UbicacionAlerta createMany
   */
  export type UbicacionAlertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UbicacionAlertas.
     */
    data: UbicacionAlertaCreateManyInput | UbicacionAlertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UbicacionAlerta createManyAndReturn
   */
  export type UbicacionAlertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * The data used to create many UbicacionAlertas.
     */
    data: UbicacionAlertaCreateManyInput | UbicacionAlertaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UbicacionAlerta update
   */
  export type UbicacionAlertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    /**
     * The data needed to update a UbicacionAlerta.
     */
    data: XOR<UbicacionAlertaUpdateInput, UbicacionAlertaUncheckedUpdateInput>
    /**
     * Choose, which UbicacionAlerta to update.
     */
    where: UbicacionAlertaWhereUniqueInput
  }

  /**
   * UbicacionAlerta updateMany
   */
  export type UbicacionAlertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UbicacionAlertas.
     */
    data: XOR<UbicacionAlertaUpdateManyMutationInput, UbicacionAlertaUncheckedUpdateManyInput>
    /**
     * Filter which UbicacionAlertas to update
     */
    where?: UbicacionAlertaWhereInput
    /**
     * Limit how many UbicacionAlertas to update.
     */
    limit?: number
  }

  /**
   * UbicacionAlerta updateManyAndReturn
   */
  export type UbicacionAlertaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * The data used to update UbicacionAlertas.
     */
    data: XOR<UbicacionAlertaUpdateManyMutationInput, UbicacionAlertaUncheckedUpdateManyInput>
    /**
     * Filter which UbicacionAlertas to update
     */
    where?: UbicacionAlertaWhereInput
    /**
     * Limit how many UbicacionAlertas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UbicacionAlerta upsert
   */
  export type UbicacionAlertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    /**
     * The filter to search for the UbicacionAlerta to update in case it exists.
     */
    where: UbicacionAlertaWhereUniqueInput
    /**
     * In case the UbicacionAlerta found by the `where` argument doesn't exist, create a new UbicacionAlerta with this data.
     */
    create: XOR<UbicacionAlertaCreateInput, UbicacionAlertaUncheckedCreateInput>
    /**
     * In case the UbicacionAlerta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UbicacionAlertaUpdateInput, UbicacionAlertaUncheckedUpdateInput>
  }

  /**
   * UbicacionAlerta delete
   */
  export type UbicacionAlertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
    /**
     * Filter which UbicacionAlerta to delete.
     */
    where: UbicacionAlertaWhereUniqueInput
  }

  /**
   * UbicacionAlerta deleteMany
   */
  export type UbicacionAlertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UbicacionAlertas to delete
     */
    where?: UbicacionAlertaWhereInput
    /**
     * Limit how many UbicacionAlertas to delete.
     */
    limit?: number
  }

  /**
   * UbicacionAlerta without action
   */
  export type UbicacionAlertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionAlerta
     */
    select?: UbicacionAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionAlerta
     */
    omit?: UbicacionAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionAlertaInclude<ExtArgs> | null
  }


  /**
   * Model CierreAlerta
   */

  export type AggregateCierreAlerta = {
    _count: CierreAlertaCountAggregateOutputType | null
    _avg: CierreAlertaAvgAggregateOutputType | null
    _sum: CierreAlertaSumAggregateOutputType | null
    _min: CierreAlertaMinAggregateOutputType | null
    _max: CierreAlertaMaxAggregateOutputType | null
  }

  export type CierreAlertaAvgAggregateOutputType = {
    id: number | null
    id_alerta: number | null
  }

  export type CierreAlertaSumAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
  }

  export type CierreAlertaMinAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
    id_funcionario: string | null
    fecha_hora: Date | null
    comentario: string | null
    tipo_alerta: $Enums.TipoAlerta | null
    estado_victima: string | null
    nombre_agresor: string | null
    ci_agresor: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CierreAlertaMaxAggregateOutputType = {
    id: bigint | null
    id_alerta: bigint | null
    id_funcionario: string | null
    fecha_hora: Date | null
    comentario: string | null
    tipo_alerta: $Enums.TipoAlerta | null
    estado_victima: string | null
    nombre_agresor: string | null
    ci_agresor: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CierreAlertaCountAggregateOutputType = {
    id: number
    id_alerta: number
    id_funcionario: number
    fecha_hora: number
    comentario: number
    tipo_alerta: number
    estado_victima: number
    nombre_agresor: number
    ci_agresor: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CierreAlertaAvgAggregateInputType = {
    id?: true
    id_alerta?: true
  }

  export type CierreAlertaSumAggregateInputType = {
    id?: true
    id_alerta?: true
  }

  export type CierreAlertaMinAggregateInputType = {
    id?: true
    id_alerta?: true
    id_funcionario?: true
    fecha_hora?: true
    comentario?: true
    tipo_alerta?: true
    estado_victima?: true
    nombre_agresor?: true
    ci_agresor?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CierreAlertaMaxAggregateInputType = {
    id?: true
    id_alerta?: true
    id_funcionario?: true
    fecha_hora?: true
    comentario?: true
    tipo_alerta?: true
    estado_victima?: true
    nombre_agresor?: true
    ci_agresor?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CierreAlertaCountAggregateInputType = {
    id?: true
    id_alerta?: true
    id_funcionario?: true
    fecha_hora?: true
    comentario?: true
    tipo_alerta?: true
    estado_victima?: true
    nombre_agresor?: true
    ci_agresor?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CierreAlertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CierreAlerta to aggregate.
     */
    where?: CierreAlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreAlertas to fetch.
     */
    orderBy?: CierreAlertaOrderByWithRelationInput | CierreAlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CierreAlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreAlertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreAlertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CierreAlertas
    **/
    _count?: true | CierreAlertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CierreAlertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CierreAlertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CierreAlertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CierreAlertaMaxAggregateInputType
  }

  export type GetCierreAlertaAggregateType<T extends CierreAlertaAggregateArgs> = {
        [P in keyof T & keyof AggregateCierreAlerta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCierreAlerta[P]>
      : GetScalarType<T[P], AggregateCierreAlerta[P]>
  }




  export type CierreAlertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CierreAlertaWhereInput
    orderBy?: CierreAlertaOrderByWithAggregationInput | CierreAlertaOrderByWithAggregationInput[]
    by: CierreAlertaScalarFieldEnum[] | CierreAlertaScalarFieldEnum
    having?: CierreAlertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CierreAlertaCountAggregateInputType | true
    _avg?: CierreAlertaAvgAggregateInputType
    _sum?: CierreAlertaSumAggregateInputType
    _min?: CierreAlertaMinAggregateInputType
    _max?: CierreAlertaMaxAggregateInputType
  }

  export type CierreAlertaGroupByOutputType = {
    id: bigint
    id_alerta: bigint
    id_funcionario: string
    fecha_hora: Date
    comentario: string
    tipo_alerta: $Enums.TipoAlerta
    estado_victima: string
    nombre_agresor: string
    ci_agresor: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: CierreAlertaCountAggregateOutputType | null
    _avg: CierreAlertaAvgAggregateOutputType | null
    _sum: CierreAlertaSumAggregateOutputType | null
    _min: CierreAlertaMinAggregateOutputType | null
    _max: CierreAlertaMaxAggregateOutputType | null
  }

  type GetCierreAlertaGroupByPayload<T extends CierreAlertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CierreAlertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CierreAlertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CierreAlertaGroupByOutputType[P]>
            : GetScalarType<T[P], CierreAlertaGroupByOutputType[P]>
        }
      >
    >


  export type CierreAlertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    id_funcionario?: boolean
    fecha_hora?: boolean
    comentario?: boolean
    tipo_alerta?: boolean
    estado_victima?: boolean
    nombre_agresor?: boolean
    ci_agresor?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cierreAlerta"]>

  export type CierreAlertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    id_funcionario?: boolean
    fecha_hora?: boolean
    comentario?: boolean
    tipo_alerta?: boolean
    estado_victima?: boolean
    nombre_agresor?: boolean
    ci_agresor?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cierreAlerta"]>

  export type CierreAlertaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_alerta?: boolean
    id_funcionario?: boolean
    fecha_hora?: boolean
    comentario?: boolean
    tipo_alerta?: boolean
    estado_victima?: boolean
    nombre_agresor?: boolean
    ci_agresor?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cierreAlerta"]>

  export type CierreAlertaSelectScalar = {
    id?: boolean
    id_alerta?: boolean
    id_funcionario?: boolean
    fecha_hora?: boolean
    comentario?: boolean
    tipo_alerta?: boolean
    estado_victima?: boolean
    nombre_agresor?: boolean
    ci_agresor?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type CierreAlertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_alerta" | "id_funcionario" | "fecha_hora" | "comentario" | "tipo_alerta" | "estado_victima" | "nombre_agresor" | "ci_agresor" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["cierreAlerta"]>
  export type CierreAlertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }
  export type CierreAlertaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }
  export type CierreAlertaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | AlertaDefaultArgs<ExtArgs>
  }

  export type $CierreAlertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CierreAlerta"
    objects: {
      alerta: Prisma.$AlertaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_alerta: bigint
      id_funcionario: string
      fecha_hora: Date
      comentario: string
      tipo_alerta: $Enums.TipoAlerta
      estado_victima: string
      nombre_agresor: string
      ci_agresor: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["cierreAlerta"]>
    composites: {}
  }

  type CierreAlertaGetPayload<S extends boolean | null | undefined | CierreAlertaDefaultArgs> = $Result.GetResult<Prisma.$CierreAlertaPayload, S>

  type CierreAlertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CierreAlertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CierreAlertaCountAggregateInputType | true
    }

  export interface CierreAlertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CierreAlerta'], meta: { name: 'CierreAlerta' } }
    /**
     * Find zero or one CierreAlerta that matches the filter.
     * @param {CierreAlertaFindUniqueArgs} args - Arguments to find a CierreAlerta
     * @example
     * // Get one CierreAlerta
     * const cierreAlerta = await prisma.cierreAlerta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CierreAlertaFindUniqueArgs>(args: SelectSubset<T, CierreAlertaFindUniqueArgs<ExtArgs>>): Prisma__CierreAlertaClient<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CierreAlerta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CierreAlertaFindUniqueOrThrowArgs} args - Arguments to find a CierreAlerta
     * @example
     * // Get one CierreAlerta
     * const cierreAlerta = await prisma.cierreAlerta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CierreAlertaFindUniqueOrThrowArgs>(args: SelectSubset<T, CierreAlertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CierreAlertaClient<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CierreAlerta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreAlertaFindFirstArgs} args - Arguments to find a CierreAlerta
     * @example
     * // Get one CierreAlerta
     * const cierreAlerta = await prisma.cierreAlerta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CierreAlertaFindFirstArgs>(args?: SelectSubset<T, CierreAlertaFindFirstArgs<ExtArgs>>): Prisma__CierreAlertaClient<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CierreAlerta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreAlertaFindFirstOrThrowArgs} args - Arguments to find a CierreAlerta
     * @example
     * // Get one CierreAlerta
     * const cierreAlerta = await prisma.cierreAlerta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CierreAlertaFindFirstOrThrowArgs>(args?: SelectSubset<T, CierreAlertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CierreAlertaClient<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CierreAlertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreAlertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CierreAlertas
     * const cierreAlertas = await prisma.cierreAlerta.findMany()
     * 
     * // Get first 10 CierreAlertas
     * const cierreAlertas = await prisma.cierreAlerta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cierreAlertaWithIdOnly = await prisma.cierreAlerta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CierreAlertaFindManyArgs>(args?: SelectSubset<T, CierreAlertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CierreAlerta.
     * @param {CierreAlertaCreateArgs} args - Arguments to create a CierreAlerta.
     * @example
     * // Create one CierreAlerta
     * const CierreAlerta = await prisma.cierreAlerta.create({
     *   data: {
     *     // ... data to create a CierreAlerta
     *   }
     * })
     * 
     */
    create<T extends CierreAlertaCreateArgs>(args: SelectSubset<T, CierreAlertaCreateArgs<ExtArgs>>): Prisma__CierreAlertaClient<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CierreAlertas.
     * @param {CierreAlertaCreateManyArgs} args - Arguments to create many CierreAlertas.
     * @example
     * // Create many CierreAlertas
     * const cierreAlerta = await prisma.cierreAlerta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CierreAlertaCreateManyArgs>(args?: SelectSubset<T, CierreAlertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CierreAlertas and returns the data saved in the database.
     * @param {CierreAlertaCreateManyAndReturnArgs} args - Arguments to create many CierreAlertas.
     * @example
     * // Create many CierreAlertas
     * const cierreAlerta = await prisma.cierreAlerta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CierreAlertas and only return the `id`
     * const cierreAlertaWithIdOnly = await prisma.cierreAlerta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CierreAlertaCreateManyAndReturnArgs>(args?: SelectSubset<T, CierreAlertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CierreAlerta.
     * @param {CierreAlertaDeleteArgs} args - Arguments to delete one CierreAlerta.
     * @example
     * // Delete one CierreAlerta
     * const CierreAlerta = await prisma.cierreAlerta.delete({
     *   where: {
     *     // ... filter to delete one CierreAlerta
     *   }
     * })
     * 
     */
    delete<T extends CierreAlertaDeleteArgs>(args: SelectSubset<T, CierreAlertaDeleteArgs<ExtArgs>>): Prisma__CierreAlertaClient<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CierreAlerta.
     * @param {CierreAlertaUpdateArgs} args - Arguments to update one CierreAlerta.
     * @example
     * // Update one CierreAlerta
     * const cierreAlerta = await prisma.cierreAlerta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CierreAlertaUpdateArgs>(args: SelectSubset<T, CierreAlertaUpdateArgs<ExtArgs>>): Prisma__CierreAlertaClient<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CierreAlertas.
     * @param {CierreAlertaDeleteManyArgs} args - Arguments to filter CierreAlertas to delete.
     * @example
     * // Delete a few CierreAlertas
     * const { count } = await prisma.cierreAlerta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CierreAlertaDeleteManyArgs>(args?: SelectSubset<T, CierreAlertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CierreAlertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreAlertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CierreAlertas
     * const cierreAlerta = await prisma.cierreAlerta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CierreAlertaUpdateManyArgs>(args: SelectSubset<T, CierreAlertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CierreAlertas and returns the data updated in the database.
     * @param {CierreAlertaUpdateManyAndReturnArgs} args - Arguments to update many CierreAlertas.
     * @example
     * // Update many CierreAlertas
     * const cierreAlerta = await prisma.cierreAlerta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CierreAlertas and only return the `id`
     * const cierreAlertaWithIdOnly = await prisma.cierreAlerta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CierreAlertaUpdateManyAndReturnArgs>(args: SelectSubset<T, CierreAlertaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CierreAlerta.
     * @param {CierreAlertaUpsertArgs} args - Arguments to update or create a CierreAlerta.
     * @example
     * // Update or create a CierreAlerta
     * const cierreAlerta = await prisma.cierreAlerta.upsert({
     *   create: {
     *     // ... data to create a CierreAlerta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CierreAlerta we want to update
     *   }
     * })
     */
    upsert<T extends CierreAlertaUpsertArgs>(args: SelectSubset<T, CierreAlertaUpsertArgs<ExtArgs>>): Prisma__CierreAlertaClient<$Result.GetResult<Prisma.$CierreAlertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CierreAlertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreAlertaCountArgs} args - Arguments to filter CierreAlertas to count.
     * @example
     * // Count the number of CierreAlertas
     * const count = await prisma.cierreAlerta.count({
     *   where: {
     *     // ... the filter for the CierreAlertas we want to count
     *   }
     * })
    **/
    count<T extends CierreAlertaCountArgs>(
      args?: Subset<T, CierreAlertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CierreAlertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CierreAlerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreAlertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CierreAlertaAggregateArgs>(args: Subset<T, CierreAlertaAggregateArgs>): Prisma.PrismaPromise<GetCierreAlertaAggregateType<T>>

    /**
     * Group by CierreAlerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CierreAlertaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CierreAlertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CierreAlertaGroupByArgs['orderBy'] }
        : { orderBy?: CierreAlertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CierreAlertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCierreAlertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CierreAlerta model
   */
  readonly fields: CierreAlertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CierreAlerta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CierreAlertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alerta<T extends AlertaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlertaDefaultArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CierreAlerta model
   */
  interface CierreAlertaFieldRefs {
    readonly id: FieldRef<"CierreAlerta", 'BigInt'>
    readonly id_alerta: FieldRef<"CierreAlerta", 'BigInt'>
    readonly id_funcionario: FieldRef<"CierreAlerta", 'String'>
    readonly fecha_hora: FieldRef<"CierreAlerta", 'DateTime'>
    readonly comentario: FieldRef<"CierreAlerta", 'String'>
    readonly tipo_alerta: FieldRef<"CierreAlerta", 'TipoAlerta'>
    readonly estado_victima: FieldRef<"CierreAlerta", 'String'>
    readonly nombre_agresor: FieldRef<"CierreAlerta", 'String'>
    readonly ci_agresor: FieldRef<"CierreAlerta", 'String'>
    readonly created_at: FieldRef<"CierreAlerta", 'DateTime'>
    readonly updated_at: FieldRef<"CierreAlerta", 'DateTime'>
    readonly deleted_at: FieldRef<"CierreAlerta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CierreAlerta findUnique
   */
  export type CierreAlertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    /**
     * Filter, which CierreAlerta to fetch.
     */
    where: CierreAlertaWhereUniqueInput
  }

  /**
   * CierreAlerta findUniqueOrThrow
   */
  export type CierreAlertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    /**
     * Filter, which CierreAlerta to fetch.
     */
    where: CierreAlertaWhereUniqueInput
  }

  /**
   * CierreAlerta findFirst
   */
  export type CierreAlertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    /**
     * Filter, which CierreAlerta to fetch.
     */
    where?: CierreAlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreAlertas to fetch.
     */
    orderBy?: CierreAlertaOrderByWithRelationInput | CierreAlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CierreAlertas.
     */
    cursor?: CierreAlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreAlertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreAlertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreAlertas.
     */
    distinct?: CierreAlertaScalarFieldEnum | CierreAlertaScalarFieldEnum[]
  }

  /**
   * CierreAlerta findFirstOrThrow
   */
  export type CierreAlertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    /**
     * Filter, which CierreAlerta to fetch.
     */
    where?: CierreAlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreAlertas to fetch.
     */
    orderBy?: CierreAlertaOrderByWithRelationInput | CierreAlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CierreAlertas.
     */
    cursor?: CierreAlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreAlertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreAlertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CierreAlertas.
     */
    distinct?: CierreAlertaScalarFieldEnum | CierreAlertaScalarFieldEnum[]
  }

  /**
   * CierreAlerta findMany
   */
  export type CierreAlertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    /**
     * Filter, which CierreAlertas to fetch.
     */
    where?: CierreAlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CierreAlertas to fetch.
     */
    orderBy?: CierreAlertaOrderByWithRelationInput | CierreAlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CierreAlertas.
     */
    cursor?: CierreAlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CierreAlertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CierreAlertas.
     */
    skip?: number
    distinct?: CierreAlertaScalarFieldEnum | CierreAlertaScalarFieldEnum[]
  }

  /**
   * CierreAlerta create
   */
  export type CierreAlertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    /**
     * The data needed to create a CierreAlerta.
     */
    data: XOR<CierreAlertaCreateInput, CierreAlertaUncheckedCreateInput>
  }

  /**
   * CierreAlerta createMany
   */
  export type CierreAlertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CierreAlertas.
     */
    data: CierreAlertaCreateManyInput | CierreAlertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CierreAlerta createManyAndReturn
   */
  export type CierreAlertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * The data used to create many CierreAlertas.
     */
    data: CierreAlertaCreateManyInput | CierreAlertaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CierreAlerta update
   */
  export type CierreAlertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    /**
     * The data needed to update a CierreAlerta.
     */
    data: XOR<CierreAlertaUpdateInput, CierreAlertaUncheckedUpdateInput>
    /**
     * Choose, which CierreAlerta to update.
     */
    where: CierreAlertaWhereUniqueInput
  }

  /**
   * CierreAlerta updateMany
   */
  export type CierreAlertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CierreAlertas.
     */
    data: XOR<CierreAlertaUpdateManyMutationInput, CierreAlertaUncheckedUpdateManyInput>
    /**
     * Filter which CierreAlertas to update
     */
    where?: CierreAlertaWhereInput
    /**
     * Limit how many CierreAlertas to update.
     */
    limit?: number
  }

  /**
   * CierreAlerta updateManyAndReturn
   */
  export type CierreAlertaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * The data used to update CierreAlertas.
     */
    data: XOR<CierreAlertaUpdateManyMutationInput, CierreAlertaUncheckedUpdateManyInput>
    /**
     * Filter which CierreAlertas to update
     */
    where?: CierreAlertaWhereInput
    /**
     * Limit how many CierreAlertas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CierreAlerta upsert
   */
  export type CierreAlertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    /**
     * The filter to search for the CierreAlerta to update in case it exists.
     */
    where: CierreAlertaWhereUniqueInput
    /**
     * In case the CierreAlerta found by the `where` argument doesn't exist, create a new CierreAlerta with this data.
     */
    create: XOR<CierreAlertaCreateInput, CierreAlertaUncheckedCreateInput>
    /**
     * In case the CierreAlerta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CierreAlertaUpdateInput, CierreAlertaUncheckedUpdateInput>
  }

  /**
   * CierreAlerta delete
   */
  export type CierreAlertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
    /**
     * Filter which CierreAlerta to delete.
     */
    where: CierreAlertaWhereUniqueInput
  }

  /**
   * CierreAlerta deleteMany
   */
  export type CierreAlertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CierreAlertas to delete
     */
    where?: CierreAlertaWhereInput
    /**
     * Limit how many CierreAlertas to delete.
     */
    limit?: number
  }

  /**
   * CierreAlerta without action
   */
  export type CierreAlertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CierreAlerta
     */
    select?: CierreAlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CierreAlerta
     */
    omit?: CierreAlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CierreAlertaInclude<ExtArgs> | null
  }


  /**
   * Model UbicacionFuncionario
   */

  export type AggregateUbicacionFuncionario = {
    _count: UbicacionFuncionarioCountAggregateOutputType | null
    _avg: UbicacionFuncionarioAvgAggregateOutputType | null
    _sum: UbicacionFuncionarioSumAggregateOutputType | null
    _min: UbicacionFuncionarioMinAggregateOutputType | null
    _max: UbicacionFuncionarioMaxAggregateOutputType | null
  }

  export type UbicacionFuncionarioAvgAggregateOutputType = {
    id: number | null
    id_atencion: number | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type UbicacionFuncionarioSumAggregateOutputType = {
    id: bigint | null
    id_atencion: bigint | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type UbicacionFuncionarioMinAggregateOutputType = {
    id: bigint | null
    id_atencion: bigint | null
    fecha_hora: Date | null
    latitud: Decimal | null
    longitud: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UbicacionFuncionarioMaxAggregateOutputType = {
    id: bigint | null
    id_atencion: bigint | null
    fecha_hora: Date | null
    latitud: Decimal | null
    longitud: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UbicacionFuncionarioCountAggregateOutputType = {
    id: number
    id_atencion: number
    fecha_hora: number
    latitud: number
    longitud: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UbicacionFuncionarioAvgAggregateInputType = {
    id?: true
    id_atencion?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionFuncionarioSumAggregateInputType = {
    id?: true
    id_atencion?: true
    latitud?: true
    longitud?: true
  }

  export type UbicacionFuncionarioMinAggregateInputType = {
    id?: true
    id_atencion?: true
    fecha_hora?: true
    latitud?: true
    longitud?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UbicacionFuncionarioMaxAggregateInputType = {
    id?: true
    id_atencion?: true
    fecha_hora?: true
    latitud?: true
    longitud?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UbicacionFuncionarioCountAggregateInputType = {
    id?: true
    id_atencion?: true
    fecha_hora?: true
    latitud?: true
    longitud?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UbicacionFuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UbicacionFuncionario to aggregate.
     */
    where?: UbicacionFuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionFuncionarios to fetch.
     */
    orderBy?: UbicacionFuncionarioOrderByWithRelationInput | UbicacionFuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UbicacionFuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionFuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionFuncionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UbicacionFuncionarios
    **/
    _count?: true | UbicacionFuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UbicacionFuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UbicacionFuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbicacionFuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbicacionFuncionarioMaxAggregateInputType
  }

  export type GetUbicacionFuncionarioAggregateType<T extends UbicacionFuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUbicacionFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbicacionFuncionario[P]>
      : GetScalarType<T[P], AggregateUbicacionFuncionario[P]>
  }




  export type UbicacionFuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbicacionFuncionarioWhereInput
    orderBy?: UbicacionFuncionarioOrderByWithAggregationInput | UbicacionFuncionarioOrderByWithAggregationInput[]
    by: UbicacionFuncionarioScalarFieldEnum[] | UbicacionFuncionarioScalarFieldEnum
    having?: UbicacionFuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbicacionFuncionarioCountAggregateInputType | true
    _avg?: UbicacionFuncionarioAvgAggregateInputType
    _sum?: UbicacionFuncionarioSumAggregateInputType
    _min?: UbicacionFuncionarioMinAggregateInputType
    _max?: UbicacionFuncionarioMaxAggregateInputType
  }

  export type UbicacionFuncionarioGroupByOutputType = {
    id: bigint
    id_atencion: bigint
    fecha_hora: Date
    latitud: Decimal
    longitud: Decimal
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: UbicacionFuncionarioCountAggregateOutputType | null
    _avg: UbicacionFuncionarioAvgAggregateOutputType | null
    _sum: UbicacionFuncionarioSumAggregateOutputType | null
    _min: UbicacionFuncionarioMinAggregateOutputType | null
    _max: UbicacionFuncionarioMaxAggregateOutputType | null
  }

  type GetUbicacionFuncionarioGroupByPayload<T extends UbicacionFuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbicacionFuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbicacionFuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbicacionFuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], UbicacionFuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type UbicacionFuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_atencion?: boolean
    fecha_hora?: boolean
    latitud?: boolean
    longitud?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacionFuncionario"]>

  export type UbicacionFuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_atencion?: boolean
    fecha_hora?: boolean
    latitud?: boolean
    longitud?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacionFuncionario"]>

  export type UbicacionFuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_atencion?: boolean
    fecha_hora?: boolean
    latitud?: boolean
    longitud?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacionFuncionario"]>

  export type UbicacionFuncionarioSelectScalar = {
    id?: boolean
    id_atencion?: boolean
    fecha_hora?: boolean
    latitud?: boolean
    longitud?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type UbicacionFuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_atencion" | "fecha_hora" | "latitud" | "longitud" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["ubicacionFuncionario"]>
  export type UbicacionFuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
  }
  export type UbicacionFuncionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
  }
  export type UbicacionFuncionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atencion?: boolean | AtencionDefaultArgs<ExtArgs>
  }

  export type $UbicacionFuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UbicacionFuncionario"
    objects: {
      atencion: Prisma.$AtencionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_atencion: bigint
      fecha_hora: Date
      latitud: Prisma.Decimal
      longitud: Prisma.Decimal
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["ubicacionFuncionario"]>
    composites: {}
  }

  type UbicacionFuncionarioGetPayload<S extends boolean | null | undefined | UbicacionFuncionarioDefaultArgs> = $Result.GetResult<Prisma.$UbicacionFuncionarioPayload, S>

  type UbicacionFuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UbicacionFuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbicacionFuncionarioCountAggregateInputType | true
    }

  export interface UbicacionFuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UbicacionFuncionario'], meta: { name: 'UbicacionFuncionario' } }
    /**
     * Find zero or one UbicacionFuncionario that matches the filter.
     * @param {UbicacionFuncionarioFindUniqueArgs} args - Arguments to find a UbicacionFuncionario
     * @example
     * // Get one UbicacionFuncionario
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UbicacionFuncionarioFindUniqueArgs>(args: SelectSubset<T, UbicacionFuncionarioFindUniqueArgs<ExtArgs>>): Prisma__UbicacionFuncionarioClient<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UbicacionFuncionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UbicacionFuncionarioFindUniqueOrThrowArgs} args - Arguments to find a UbicacionFuncionario
     * @example
     * // Get one UbicacionFuncionario
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UbicacionFuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UbicacionFuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UbicacionFuncionarioClient<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UbicacionFuncionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFuncionarioFindFirstArgs} args - Arguments to find a UbicacionFuncionario
     * @example
     * // Get one UbicacionFuncionario
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UbicacionFuncionarioFindFirstArgs>(args?: SelectSubset<T, UbicacionFuncionarioFindFirstArgs<ExtArgs>>): Prisma__UbicacionFuncionarioClient<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UbicacionFuncionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFuncionarioFindFirstOrThrowArgs} args - Arguments to find a UbicacionFuncionario
     * @example
     * // Get one UbicacionFuncionario
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UbicacionFuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UbicacionFuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UbicacionFuncionarioClient<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UbicacionFuncionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UbicacionFuncionarios
     * const ubicacionFuncionarios = await prisma.ubicacionFuncionario.findMany()
     * 
     * // Get first 10 UbicacionFuncionarios
     * const ubicacionFuncionarios = await prisma.ubicacionFuncionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ubicacionFuncionarioWithIdOnly = await prisma.ubicacionFuncionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UbicacionFuncionarioFindManyArgs>(args?: SelectSubset<T, UbicacionFuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UbicacionFuncionario.
     * @param {UbicacionFuncionarioCreateArgs} args - Arguments to create a UbicacionFuncionario.
     * @example
     * // Create one UbicacionFuncionario
     * const UbicacionFuncionario = await prisma.ubicacionFuncionario.create({
     *   data: {
     *     // ... data to create a UbicacionFuncionario
     *   }
     * })
     * 
     */
    create<T extends UbicacionFuncionarioCreateArgs>(args: SelectSubset<T, UbicacionFuncionarioCreateArgs<ExtArgs>>): Prisma__UbicacionFuncionarioClient<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UbicacionFuncionarios.
     * @param {UbicacionFuncionarioCreateManyArgs} args - Arguments to create many UbicacionFuncionarios.
     * @example
     * // Create many UbicacionFuncionarios
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UbicacionFuncionarioCreateManyArgs>(args?: SelectSubset<T, UbicacionFuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UbicacionFuncionarios and returns the data saved in the database.
     * @param {UbicacionFuncionarioCreateManyAndReturnArgs} args - Arguments to create many UbicacionFuncionarios.
     * @example
     * // Create many UbicacionFuncionarios
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UbicacionFuncionarios and only return the `id`
     * const ubicacionFuncionarioWithIdOnly = await prisma.ubicacionFuncionario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UbicacionFuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UbicacionFuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UbicacionFuncionario.
     * @param {UbicacionFuncionarioDeleteArgs} args - Arguments to delete one UbicacionFuncionario.
     * @example
     * // Delete one UbicacionFuncionario
     * const UbicacionFuncionario = await prisma.ubicacionFuncionario.delete({
     *   where: {
     *     // ... filter to delete one UbicacionFuncionario
     *   }
     * })
     * 
     */
    delete<T extends UbicacionFuncionarioDeleteArgs>(args: SelectSubset<T, UbicacionFuncionarioDeleteArgs<ExtArgs>>): Prisma__UbicacionFuncionarioClient<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UbicacionFuncionario.
     * @param {UbicacionFuncionarioUpdateArgs} args - Arguments to update one UbicacionFuncionario.
     * @example
     * // Update one UbicacionFuncionario
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UbicacionFuncionarioUpdateArgs>(args: SelectSubset<T, UbicacionFuncionarioUpdateArgs<ExtArgs>>): Prisma__UbicacionFuncionarioClient<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UbicacionFuncionarios.
     * @param {UbicacionFuncionarioDeleteManyArgs} args - Arguments to filter UbicacionFuncionarios to delete.
     * @example
     * // Delete a few UbicacionFuncionarios
     * const { count } = await prisma.ubicacionFuncionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UbicacionFuncionarioDeleteManyArgs>(args?: SelectSubset<T, UbicacionFuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UbicacionFuncionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UbicacionFuncionarios
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UbicacionFuncionarioUpdateManyArgs>(args: SelectSubset<T, UbicacionFuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UbicacionFuncionarios and returns the data updated in the database.
     * @param {UbicacionFuncionarioUpdateManyAndReturnArgs} args - Arguments to update many UbicacionFuncionarios.
     * @example
     * // Update many UbicacionFuncionarios
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UbicacionFuncionarios and only return the `id`
     * const ubicacionFuncionarioWithIdOnly = await prisma.ubicacionFuncionario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UbicacionFuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UbicacionFuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UbicacionFuncionario.
     * @param {UbicacionFuncionarioUpsertArgs} args - Arguments to update or create a UbicacionFuncionario.
     * @example
     * // Update or create a UbicacionFuncionario
     * const ubicacionFuncionario = await prisma.ubicacionFuncionario.upsert({
     *   create: {
     *     // ... data to create a UbicacionFuncionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UbicacionFuncionario we want to update
     *   }
     * })
     */
    upsert<T extends UbicacionFuncionarioUpsertArgs>(args: SelectSubset<T, UbicacionFuncionarioUpsertArgs<ExtArgs>>): Prisma__UbicacionFuncionarioClient<$Result.GetResult<Prisma.$UbicacionFuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UbicacionFuncionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFuncionarioCountArgs} args - Arguments to filter UbicacionFuncionarios to count.
     * @example
     * // Count the number of UbicacionFuncionarios
     * const count = await prisma.ubicacionFuncionario.count({
     *   where: {
     *     // ... the filter for the UbicacionFuncionarios we want to count
     *   }
     * })
    **/
    count<T extends UbicacionFuncionarioCountArgs>(
      args?: Subset<T, UbicacionFuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbicacionFuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UbicacionFuncionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UbicacionFuncionarioAggregateArgs>(args: Subset<T, UbicacionFuncionarioAggregateArgs>): Prisma.PrismaPromise<GetUbicacionFuncionarioAggregateType<T>>

    /**
     * Group by UbicacionFuncionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFuncionarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UbicacionFuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UbicacionFuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: UbicacionFuncionarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UbicacionFuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbicacionFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UbicacionFuncionario model
   */
  readonly fields: UbicacionFuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UbicacionFuncionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UbicacionFuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atencion<T extends AtencionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtencionDefaultArgs<ExtArgs>>): Prisma__AtencionClient<$Result.GetResult<Prisma.$AtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UbicacionFuncionario model
   */
  interface UbicacionFuncionarioFieldRefs {
    readonly id: FieldRef<"UbicacionFuncionario", 'BigInt'>
    readonly id_atencion: FieldRef<"UbicacionFuncionario", 'BigInt'>
    readonly fecha_hora: FieldRef<"UbicacionFuncionario", 'DateTime'>
    readonly latitud: FieldRef<"UbicacionFuncionario", 'Decimal'>
    readonly longitud: FieldRef<"UbicacionFuncionario", 'Decimal'>
    readonly created_at: FieldRef<"UbicacionFuncionario", 'DateTime'>
    readonly updated_at: FieldRef<"UbicacionFuncionario", 'DateTime'>
    readonly deleted_at: FieldRef<"UbicacionFuncionario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UbicacionFuncionario findUnique
   */
  export type UbicacionFuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionFuncionario to fetch.
     */
    where: UbicacionFuncionarioWhereUniqueInput
  }

  /**
   * UbicacionFuncionario findUniqueOrThrow
   */
  export type UbicacionFuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionFuncionario to fetch.
     */
    where: UbicacionFuncionarioWhereUniqueInput
  }

  /**
   * UbicacionFuncionario findFirst
   */
  export type UbicacionFuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionFuncionario to fetch.
     */
    where?: UbicacionFuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionFuncionarios to fetch.
     */
    orderBy?: UbicacionFuncionarioOrderByWithRelationInput | UbicacionFuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UbicacionFuncionarios.
     */
    cursor?: UbicacionFuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionFuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionFuncionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UbicacionFuncionarios.
     */
    distinct?: UbicacionFuncionarioScalarFieldEnum | UbicacionFuncionarioScalarFieldEnum[]
  }

  /**
   * UbicacionFuncionario findFirstOrThrow
   */
  export type UbicacionFuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionFuncionario to fetch.
     */
    where?: UbicacionFuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionFuncionarios to fetch.
     */
    orderBy?: UbicacionFuncionarioOrderByWithRelationInput | UbicacionFuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UbicacionFuncionarios.
     */
    cursor?: UbicacionFuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionFuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionFuncionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UbicacionFuncionarios.
     */
    distinct?: UbicacionFuncionarioScalarFieldEnum | UbicacionFuncionarioScalarFieldEnum[]
  }

  /**
   * UbicacionFuncionario findMany
   */
  export type UbicacionFuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which UbicacionFuncionarios to fetch.
     */
    where?: UbicacionFuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UbicacionFuncionarios to fetch.
     */
    orderBy?: UbicacionFuncionarioOrderByWithRelationInput | UbicacionFuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UbicacionFuncionarios.
     */
    cursor?: UbicacionFuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UbicacionFuncionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UbicacionFuncionarios.
     */
    skip?: number
    distinct?: UbicacionFuncionarioScalarFieldEnum | UbicacionFuncionarioScalarFieldEnum[]
  }

  /**
   * UbicacionFuncionario create
   */
  export type UbicacionFuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a UbicacionFuncionario.
     */
    data: XOR<UbicacionFuncionarioCreateInput, UbicacionFuncionarioUncheckedCreateInput>
  }

  /**
   * UbicacionFuncionario createMany
   */
  export type UbicacionFuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UbicacionFuncionarios.
     */
    data: UbicacionFuncionarioCreateManyInput | UbicacionFuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UbicacionFuncionario createManyAndReturn
   */
  export type UbicacionFuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many UbicacionFuncionarios.
     */
    data: UbicacionFuncionarioCreateManyInput | UbicacionFuncionarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UbicacionFuncionario update
   */
  export type UbicacionFuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a UbicacionFuncionario.
     */
    data: XOR<UbicacionFuncionarioUpdateInput, UbicacionFuncionarioUncheckedUpdateInput>
    /**
     * Choose, which UbicacionFuncionario to update.
     */
    where: UbicacionFuncionarioWhereUniqueInput
  }

  /**
   * UbicacionFuncionario updateMany
   */
  export type UbicacionFuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UbicacionFuncionarios.
     */
    data: XOR<UbicacionFuncionarioUpdateManyMutationInput, UbicacionFuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which UbicacionFuncionarios to update
     */
    where?: UbicacionFuncionarioWhereInput
    /**
     * Limit how many UbicacionFuncionarios to update.
     */
    limit?: number
  }

  /**
   * UbicacionFuncionario updateManyAndReturn
   */
  export type UbicacionFuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update UbicacionFuncionarios.
     */
    data: XOR<UbicacionFuncionarioUpdateManyMutationInput, UbicacionFuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which UbicacionFuncionarios to update
     */
    where?: UbicacionFuncionarioWhereInput
    /**
     * Limit how many UbicacionFuncionarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UbicacionFuncionario upsert
   */
  export type UbicacionFuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the UbicacionFuncionario to update in case it exists.
     */
    where: UbicacionFuncionarioWhereUniqueInput
    /**
     * In case the UbicacionFuncionario found by the `where` argument doesn't exist, create a new UbicacionFuncionario with this data.
     */
    create: XOR<UbicacionFuncionarioCreateInput, UbicacionFuncionarioUncheckedCreateInput>
    /**
     * In case the UbicacionFuncionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UbicacionFuncionarioUpdateInput, UbicacionFuncionarioUncheckedUpdateInput>
  }

  /**
   * UbicacionFuncionario delete
   */
  export type UbicacionFuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
    /**
     * Filter which UbicacionFuncionario to delete.
     */
    where: UbicacionFuncionarioWhereUniqueInput
  }

  /**
   * UbicacionFuncionario deleteMany
   */
  export type UbicacionFuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UbicacionFuncionarios to delete
     */
    where?: UbicacionFuncionarioWhereInput
    /**
     * Limit how many UbicacionFuncionarios to delete.
     */
    limit?: number
  }

  /**
   * UbicacionFuncionario without action
   */
  export type UbicacionFuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionFuncionario
     */
    select?: UbicacionFuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UbicacionFuncionario
     */
    omit?: UbicacionFuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionFuncionarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FuncionariosScalarFieldEnum: {
    id: 'id',
    grado: 'grado',
    nombres: 'nombres',
    ap_paterno: 'ap_paterno',
    ap_materno: 'ap_materno',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type FuncionariosScalarFieldEnum = (typeof FuncionariosScalarFieldEnum)[keyof typeof FuncionariosScalarFieldEnum]


  export const PersonaScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nombres: 'nombres',
    ap_paterno: 'ap_paterno',
    ap_materno: 'ap_materno',
    ci: 'ci',
    fecha_nac: 'fecha_nac',
    celular: 'celular',
    correo: 'correo',
    empresa_telefonica: 'empresa_telefonica',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const ContactoRefScalarFieldEnum: {
    id: 'id',
    id_persona: 'id_persona',
    nombre: 'nombre',
    relacion: 'relacion',
    celular: 'celular',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ContactoRefScalarFieldEnum = (typeof ContactoRefScalarFieldEnum)[keyof typeof ContactoRefScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
    id_alerta: 'id_alerta',
    id_funcionario: 'id_funcionario',
    id_seguimiento: 'id_seguimiento',
    fecha_hora: 'fecha_hora',
    comentario: 'comentario',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const AlertaScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    id_persona: 'id_persona',
    id_municipio: 'id_municipio',
    fecha_hora: 'fecha_hora',
    nro_caso: 'nro_caso',
    estado: 'estado',
    origen: 'origen',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AlertaScalarFieldEnum = (typeof AlertaScalarFieldEnum)[keyof typeof AlertaScalarFieldEnum]


  export const AtencionScalarFieldEnum: {
    id: 'id',
    id_alerta: 'id_alerta',
    usuario_despachador: 'usuario_despachador',
    id_vehiculo: 'id_vehiculo',
    sigla_radio: 'sigla_radio',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AtencionScalarFieldEnum = (typeof AtencionScalarFieldEnum)[keyof typeof AtencionScalarFieldEnum]


  export const AtencionFuncionarioScalarFieldEnum: {
    id: 'id',
    id_atencion: 'id_atencion',
    id_funcionario: 'id_funcionario',
    encargado: 'encargado',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AtencionFuncionarioScalarFieldEnum = (typeof AtencionFuncionarioScalarFieldEnum)[keyof typeof AtencionFuncionarioScalarFieldEnum]


  export const UbicacionAlertaScalarFieldEnum: {
    id: 'id',
    id_alerta: 'id_alerta',
    fecha_hora: 'fecha_hora',
    latitud: 'latitud',
    longitud: 'longitud',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UbicacionAlertaScalarFieldEnum = (typeof UbicacionAlertaScalarFieldEnum)[keyof typeof UbicacionAlertaScalarFieldEnum]


  export const CierreAlertaScalarFieldEnum: {
    id: 'id',
    id_alerta: 'id_alerta',
    id_funcionario: 'id_funcionario',
    fecha_hora: 'fecha_hora',
    comentario: 'comentario',
    tipo_alerta: 'tipo_alerta',
    estado_victima: 'estado_victima',
    nombre_agresor: 'nombre_agresor',
    ci_agresor: 'ci_agresor',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type CierreAlertaScalarFieldEnum = (typeof CierreAlertaScalarFieldEnum)[keyof typeof CierreAlertaScalarFieldEnum]


  export const UbicacionFuncionarioScalarFieldEnum: {
    id: 'id',
    id_atencion: 'id_atencion',
    fecha_hora: 'fecha_hora',
    latitud: 'latitud',
    longitud: 'longitud',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UbicacionFuncionarioScalarFieldEnum = (typeof UbicacionFuncionarioScalarFieldEnum)[keyof typeof UbicacionFuncionarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'EstadoAlerta'
   */
  export type EnumEstadoAlertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAlerta'>
    


  /**
   * Reference to a field of type 'EstadoAlerta[]'
   */
  export type ListEnumEstadoAlertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAlerta[]'>
    


  /**
   * Reference to a field of type 'OrigenAlerta'
   */
  export type EnumOrigenAlertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrigenAlerta'>
    


  /**
   * Reference to a field of type 'OrigenAlerta[]'
   */
  export type ListEnumOrigenAlertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrigenAlerta[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TipoAlerta'
   */
  export type EnumTipoAlertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAlerta'>
    


  /**
   * Reference to a field of type 'TipoAlerta[]'
   */
  export type ListEnumTipoAlertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAlerta[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FuncionariosWhereInput = {
    AND?: FuncionariosWhereInput | FuncionariosWhereInput[]
    OR?: FuncionariosWhereInput[]
    NOT?: FuncionariosWhereInput | FuncionariosWhereInput[]
    id?: StringFilter<"Funcionarios"> | string
    grado?: StringFilter<"Funcionarios"> | string
    nombres?: StringFilter<"Funcionarios"> | string
    ap_paterno?: StringFilter<"Funcionarios"> | string
    ap_materno?: StringFilter<"Funcionarios"> | string
    created_at?: DateTimeFilter<"Funcionarios"> | Date | string
    updated_at?: DateTimeFilter<"Funcionarios"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Funcionarios"> | Date | string | null
    atencion_funcionario?: AtencionFuncionarioListRelationFilter
  }

  export type FuncionariosOrderByWithRelationInput = {
    id?: SortOrder
    grado?: SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    atencion_funcionario?: AtencionFuncionarioOrderByRelationAggregateInput
  }

  export type FuncionariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FuncionariosWhereInput | FuncionariosWhereInput[]
    OR?: FuncionariosWhereInput[]
    NOT?: FuncionariosWhereInput | FuncionariosWhereInput[]
    grado?: StringFilter<"Funcionarios"> | string
    nombres?: StringFilter<"Funcionarios"> | string
    ap_paterno?: StringFilter<"Funcionarios"> | string
    ap_materno?: StringFilter<"Funcionarios"> | string
    created_at?: DateTimeFilter<"Funcionarios"> | Date | string
    updated_at?: DateTimeFilter<"Funcionarios"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Funcionarios"> | Date | string | null
    atencion_funcionario?: AtencionFuncionarioListRelationFilter
  }, "id">

  export type FuncionariosOrderByWithAggregationInput = {
    id?: SortOrder
    grado?: SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: FuncionariosCountOrderByAggregateInput
    _max?: FuncionariosMaxOrderByAggregateInput
    _min?: FuncionariosMinOrderByAggregateInput
  }

  export type FuncionariosScalarWhereWithAggregatesInput = {
    AND?: FuncionariosScalarWhereWithAggregatesInput | FuncionariosScalarWhereWithAggregatesInput[]
    OR?: FuncionariosScalarWhereWithAggregatesInput[]
    NOT?: FuncionariosScalarWhereWithAggregatesInput | FuncionariosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Funcionarios"> | string
    grado?: StringWithAggregatesFilter<"Funcionarios"> | string
    nombres?: StringWithAggregatesFilter<"Funcionarios"> | string
    ap_paterno?: StringWithAggregatesFilter<"Funcionarios"> | string
    ap_materno?: StringWithAggregatesFilter<"Funcionarios"> | string
    created_at?: DateTimeWithAggregatesFilter<"Funcionarios"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Funcionarios"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Funcionarios"> | Date | string | null
  }

  export type PersonaWhereInput = {
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    id?: BigIntFilter<"Persona"> | bigint | number
    uuid?: StringNullableFilter<"Persona"> | string | null
    nombres?: StringFilter<"Persona"> | string
    ap_paterno?: StringFilter<"Persona"> | string
    ap_materno?: StringFilter<"Persona"> | string
    ci?: StringFilter<"Persona"> | string
    fecha_nac?: DateTimeFilter<"Persona"> | Date | string
    celular?: StringFilter<"Persona"> | string
    correo?: StringFilter<"Persona"> | string
    empresa_telefonica?: StringFilter<"Persona"> | string
    created_at?: DateTimeFilter<"Persona"> | Date | string
    updated_at?: DateTimeFilter<"Persona"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Persona"> | Date | string | null
    contactos_ref?: ContactoRefListRelationFilter
    alertas?: AlertaListRelationFilter
  }

  export type PersonaOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    ci?: SortOrder
    fecha_nac?: SortOrder
    celular?: SortOrder
    correo?: SortOrder
    empresa_telefonica?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    contactos_ref?: ContactoRefOrderByRelationAggregateInput
    alertas?: AlertaOrderByRelationAggregateInput
  }

  export type PersonaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    uuid?: StringNullableFilter<"Persona"> | string | null
    nombres?: StringFilter<"Persona"> | string
    ap_paterno?: StringFilter<"Persona"> | string
    ap_materno?: StringFilter<"Persona"> | string
    ci?: StringFilter<"Persona"> | string
    fecha_nac?: DateTimeFilter<"Persona"> | Date | string
    celular?: StringFilter<"Persona"> | string
    correo?: StringFilter<"Persona"> | string
    empresa_telefonica?: StringFilter<"Persona"> | string
    created_at?: DateTimeFilter<"Persona"> | Date | string
    updated_at?: DateTimeFilter<"Persona"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Persona"> | Date | string | null
    contactos_ref?: ContactoRefListRelationFilter
    alertas?: AlertaListRelationFilter
  }, "id">

  export type PersonaOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    ci?: SortOrder
    fecha_nac?: SortOrder
    celular?: SortOrder
    correo?: SortOrder
    empresa_telefonica?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: PersonaCountOrderByAggregateInput
    _avg?: PersonaAvgOrderByAggregateInput
    _max?: PersonaMaxOrderByAggregateInput
    _min?: PersonaMinOrderByAggregateInput
    _sum?: PersonaSumOrderByAggregateInput
  }

  export type PersonaScalarWhereWithAggregatesInput = {
    AND?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    OR?: PersonaScalarWhereWithAggregatesInput[]
    NOT?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Persona"> | bigint | number
    uuid?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    nombres?: StringWithAggregatesFilter<"Persona"> | string
    ap_paterno?: StringWithAggregatesFilter<"Persona"> | string
    ap_materno?: StringWithAggregatesFilter<"Persona"> | string
    ci?: StringWithAggregatesFilter<"Persona"> | string
    fecha_nac?: DateTimeWithAggregatesFilter<"Persona"> | Date | string
    celular?: StringWithAggregatesFilter<"Persona"> | string
    correo?: StringWithAggregatesFilter<"Persona"> | string
    empresa_telefonica?: StringWithAggregatesFilter<"Persona"> | string
    created_at?: DateTimeWithAggregatesFilter<"Persona"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Persona"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Persona"> | Date | string | null
  }

  export type ContactoRefWhereInput = {
    AND?: ContactoRefWhereInput | ContactoRefWhereInput[]
    OR?: ContactoRefWhereInput[]
    NOT?: ContactoRefWhereInput | ContactoRefWhereInput[]
    id?: BigIntFilter<"ContactoRef"> | bigint | number
    id_persona?: BigIntFilter<"ContactoRef"> | bigint | number
    nombre?: StringFilter<"ContactoRef"> | string
    relacion?: StringFilter<"ContactoRef"> | string
    celular?: StringFilter<"ContactoRef"> | string
    created_at?: DateTimeFilter<"ContactoRef"> | Date | string
    updated_at?: DateTimeFilter<"ContactoRef"> | Date | string
    deleted_at?: DateTimeNullableFilter<"ContactoRef"> | Date | string | null
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
  }

  export type ContactoRefOrderByWithRelationInput = {
    id?: SortOrder
    id_persona?: SortOrder
    nombre?: SortOrder
    relacion?: SortOrder
    celular?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    persona?: PersonaOrderByWithRelationInput
  }

  export type ContactoRefWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ContactoRefWhereInput | ContactoRefWhereInput[]
    OR?: ContactoRefWhereInput[]
    NOT?: ContactoRefWhereInput | ContactoRefWhereInput[]
    id_persona?: BigIntFilter<"ContactoRef"> | bigint | number
    nombre?: StringFilter<"ContactoRef"> | string
    relacion?: StringFilter<"ContactoRef"> | string
    celular?: StringFilter<"ContactoRef"> | string
    created_at?: DateTimeFilter<"ContactoRef"> | Date | string
    updated_at?: DateTimeFilter<"ContactoRef"> | Date | string
    deleted_at?: DateTimeNullableFilter<"ContactoRef"> | Date | string | null
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
  }, "id">

  export type ContactoRefOrderByWithAggregationInput = {
    id?: SortOrder
    id_persona?: SortOrder
    nombre?: SortOrder
    relacion?: SortOrder
    celular?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ContactoRefCountOrderByAggregateInput
    _avg?: ContactoRefAvgOrderByAggregateInput
    _max?: ContactoRefMaxOrderByAggregateInput
    _min?: ContactoRefMinOrderByAggregateInput
    _sum?: ContactoRefSumOrderByAggregateInput
  }

  export type ContactoRefScalarWhereWithAggregatesInput = {
    AND?: ContactoRefScalarWhereWithAggregatesInput | ContactoRefScalarWhereWithAggregatesInput[]
    OR?: ContactoRefScalarWhereWithAggregatesInput[]
    NOT?: ContactoRefScalarWhereWithAggregatesInput | ContactoRefScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ContactoRef"> | bigint | number
    id_persona?: BigIntWithAggregatesFilter<"ContactoRef"> | bigint | number
    nombre?: StringWithAggregatesFilter<"ContactoRef"> | string
    relacion?: StringWithAggregatesFilter<"ContactoRef"> | string
    celular?: StringWithAggregatesFilter<"ContactoRef"> | string
    created_at?: DateTimeWithAggregatesFilter<"ContactoRef"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ContactoRef"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ContactoRef"> | Date | string | null
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: BigIntFilter<"Evento"> | bigint | number
    id_alerta?: BigIntFilter<"Evento"> | bigint | number
    id_funcionario?: StringFilter<"Evento"> | string
    id_seguimiento?: StringNullableFilter<"Evento"> | string | null
    fecha_hora?: DateTimeFilter<"Evento"> | Date | string
    comentario?: StringFilter<"Evento"> | string
    created_at?: DateTimeFilter<"Evento"> | Date | string
    updated_at?: DateTimeFilter<"Evento"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Evento"> | Date | string | null
    alerta?: XOR<AlertaScalarRelationFilter, AlertaWhereInput>
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    id_seguimiento?: SortOrderInput | SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    alerta?: AlertaOrderByWithRelationInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id_alerta?: BigIntFilter<"Evento"> | bigint | number
    id_funcionario?: StringFilter<"Evento"> | string
    id_seguimiento?: StringNullableFilter<"Evento"> | string | null
    fecha_hora?: DateTimeFilter<"Evento"> | Date | string
    comentario?: StringFilter<"Evento"> | string
    created_at?: DateTimeFilter<"Evento"> | Date | string
    updated_at?: DateTimeFilter<"Evento"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Evento"> | Date | string | null
    alerta?: XOR<AlertaScalarRelationFilter, AlertaWhereInput>
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    id_seguimiento?: SortOrderInput | SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Evento"> | bigint | number
    id_alerta?: BigIntWithAggregatesFilter<"Evento"> | bigint | number
    id_funcionario?: StringWithAggregatesFilter<"Evento"> | string
    id_seguimiento?: StringNullableWithAggregatesFilter<"Evento"> | string | null
    fecha_hora?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    comentario?: StringWithAggregatesFilter<"Evento"> | string
    created_at?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Evento"> | Date | string | null
  }

  export type AlertaWhereInput = {
    AND?: AlertaWhereInput | AlertaWhereInput[]
    OR?: AlertaWhereInput[]
    NOT?: AlertaWhereInput | AlertaWhereInput[]
    id?: BigIntFilter<"Alerta"> | bigint | number
    uuid?: StringFilter<"Alerta"> | string
    id_persona?: BigIntFilter<"Alerta"> | bigint | number
    id_municipio?: StringNullableFilter<"Alerta"> | string | null
    fecha_hora?: DateTimeFilter<"Alerta"> | Date | string
    nro_caso?: StringFilter<"Alerta"> | string
    estado?: EnumEstadoAlertaFilter<"Alerta"> | $Enums.EstadoAlerta
    origen?: EnumOrigenAlertaNullableFilter<"Alerta"> | $Enums.OrigenAlerta | null
    created_at?: DateTimeFilter<"Alerta"> | Date | string
    updated_at?: DateTimeFilter<"Alerta"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Alerta"> | Date | string | null
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    atencion?: XOR<AtencionNullableScalarRelationFilter, AtencionWhereInput> | null
    cierre?: XOR<CierreAlertaNullableScalarRelationFilter, CierreAlertaWhereInput> | null
    ubicaciones?: UbicacionAlertaListRelationFilter
    eventos?: EventoListRelationFilter
  }

  export type AlertaOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_persona?: SortOrder
    id_municipio?: SortOrderInput | SortOrder
    fecha_hora?: SortOrder
    nro_caso?: SortOrder
    estado?: SortOrder
    origen?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    persona?: PersonaOrderByWithRelationInput
    atencion?: AtencionOrderByWithRelationInput
    cierre?: CierreAlertaOrderByWithRelationInput
    ubicaciones?: UbicacionAlertaOrderByRelationAggregateInput
    eventos?: EventoOrderByRelationAggregateInput
  }

  export type AlertaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid_origen?: AlertaUuidOrigenCompoundUniqueInput
    AND?: AlertaWhereInput | AlertaWhereInput[]
    OR?: AlertaWhereInput[]
    NOT?: AlertaWhereInput | AlertaWhereInput[]
    uuid?: StringFilter<"Alerta"> | string
    id_persona?: BigIntFilter<"Alerta"> | bigint | number
    id_municipio?: StringNullableFilter<"Alerta"> | string | null
    fecha_hora?: DateTimeFilter<"Alerta"> | Date | string
    nro_caso?: StringFilter<"Alerta"> | string
    estado?: EnumEstadoAlertaFilter<"Alerta"> | $Enums.EstadoAlerta
    origen?: EnumOrigenAlertaNullableFilter<"Alerta"> | $Enums.OrigenAlerta | null
    created_at?: DateTimeFilter<"Alerta"> | Date | string
    updated_at?: DateTimeFilter<"Alerta"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Alerta"> | Date | string | null
    persona?: XOR<PersonaScalarRelationFilter, PersonaWhereInput>
    atencion?: XOR<AtencionNullableScalarRelationFilter, AtencionWhereInput> | null
    cierre?: XOR<CierreAlertaNullableScalarRelationFilter, CierreAlertaWhereInput> | null
    ubicaciones?: UbicacionAlertaListRelationFilter
    eventos?: EventoListRelationFilter
  }, "id" | "uuid_origen">

  export type AlertaOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_persona?: SortOrder
    id_municipio?: SortOrderInput | SortOrder
    fecha_hora?: SortOrder
    nro_caso?: SortOrder
    estado?: SortOrder
    origen?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: AlertaCountOrderByAggregateInput
    _avg?: AlertaAvgOrderByAggregateInput
    _max?: AlertaMaxOrderByAggregateInput
    _min?: AlertaMinOrderByAggregateInput
    _sum?: AlertaSumOrderByAggregateInput
  }

  export type AlertaScalarWhereWithAggregatesInput = {
    AND?: AlertaScalarWhereWithAggregatesInput | AlertaScalarWhereWithAggregatesInput[]
    OR?: AlertaScalarWhereWithAggregatesInput[]
    NOT?: AlertaScalarWhereWithAggregatesInput | AlertaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Alerta"> | bigint | number
    uuid?: StringWithAggregatesFilter<"Alerta"> | string
    id_persona?: BigIntWithAggregatesFilter<"Alerta"> | bigint | number
    id_municipio?: StringNullableWithAggregatesFilter<"Alerta"> | string | null
    fecha_hora?: DateTimeWithAggregatesFilter<"Alerta"> | Date | string
    nro_caso?: StringWithAggregatesFilter<"Alerta"> | string
    estado?: EnumEstadoAlertaWithAggregatesFilter<"Alerta"> | $Enums.EstadoAlerta
    origen?: EnumOrigenAlertaNullableWithAggregatesFilter<"Alerta"> | $Enums.OrigenAlerta | null
    created_at?: DateTimeWithAggregatesFilter<"Alerta"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Alerta"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Alerta"> | Date | string | null
  }

  export type AtencionWhereInput = {
    AND?: AtencionWhereInput | AtencionWhereInput[]
    OR?: AtencionWhereInput[]
    NOT?: AtencionWhereInput | AtencionWhereInput[]
    id?: BigIntFilter<"Atencion"> | bigint | number
    id_alerta?: BigIntFilter<"Atencion"> | bigint | number
    usuario_despachador?: StringFilter<"Atencion"> | string
    id_vehiculo?: StringFilter<"Atencion"> | string
    sigla_radio?: StringNullableFilter<"Atencion"> | string | null
    created_at?: DateTimeFilter<"Atencion"> | Date | string
    updated_at?: DateTimeFilter<"Atencion"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Atencion"> | Date | string | null
    alerta?: XOR<AlertaScalarRelationFilter, AlertaWhereInput>
    atencion_funcionario?: AtencionFuncionarioListRelationFilter
    ubicaciones_funcionario?: UbicacionFuncionarioListRelationFilter
  }

  export type AtencionOrderByWithRelationInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    usuario_despachador?: SortOrder
    id_vehiculo?: SortOrder
    sigla_radio?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    alerta?: AlertaOrderByWithRelationInput
    atencion_funcionario?: AtencionFuncionarioOrderByRelationAggregateInput
    ubicaciones_funcionario?: UbicacionFuncionarioOrderByRelationAggregateInput
  }

  export type AtencionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    id_alerta?: bigint | number
    AND?: AtencionWhereInput | AtencionWhereInput[]
    OR?: AtencionWhereInput[]
    NOT?: AtencionWhereInput | AtencionWhereInput[]
    usuario_despachador?: StringFilter<"Atencion"> | string
    id_vehiculo?: StringFilter<"Atencion"> | string
    sigla_radio?: StringNullableFilter<"Atencion"> | string | null
    created_at?: DateTimeFilter<"Atencion"> | Date | string
    updated_at?: DateTimeFilter<"Atencion"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Atencion"> | Date | string | null
    alerta?: XOR<AlertaScalarRelationFilter, AlertaWhereInput>
    atencion_funcionario?: AtencionFuncionarioListRelationFilter
    ubicaciones_funcionario?: UbicacionFuncionarioListRelationFilter
  }, "id" | "id_alerta">

  export type AtencionOrderByWithAggregationInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    usuario_despachador?: SortOrder
    id_vehiculo?: SortOrder
    sigla_radio?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: AtencionCountOrderByAggregateInput
    _avg?: AtencionAvgOrderByAggregateInput
    _max?: AtencionMaxOrderByAggregateInput
    _min?: AtencionMinOrderByAggregateInput
    _sum?: AtencionSumOrderByAggregateInput
  }

  export type AtencionScalarWhereWithAggregatesInput = {
    AND?: AtencionScalarWhereWithAggregatesInput | AtencionScalarWhereWithAggregatesInput[]
    OR?: AtencionScalarWhereWithAggregatesInput[]
    NOT?: AtencionScalarWhereWithAggregatesInput | AtencionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Atencion"> | bigint | number
    id_alerta?: BigIntWithAggregatesFilter<"Atencion"> | bigint | number
    usuario_despachador?: StringWithAggregatesFilter<"Atencion"> | string
    id_vehiculo?: StringWithAggregatesFilter<"Atencion"> | string
    sigla_radio?: StringNullableWithAggregatesFilter<"Atencion"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Atencion"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Atencion"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Atencion"> | Date | string | null
  }

  export type AtencionFuncionarioWhereInput = {
    AND?: AtencionFuncionarioWhereInput | AtencionFuncionarioWhereInput[]
    OR?: AtencionFuncionarioWhereInput[]
    NOT?: AtencionFuncionarioWhereInput | AtencionFuncionarioWhereInput[]
    id?: BigIntFilter<"AtencionFuncionario"> | bigint | number
    id_atencion?: BigIntFilter<"AtencionFuncionario"> | bigint | number
    id_funcionario?: StringNullableFilter<"AtencionFuncionario"> | string | null
    encargado?: BoolFilter<"AtencionFuncionario"> | boolean
    created_at?: DateTimeFilter<"AtencionFuncionario"> | Date | string
    updated_at?: DateTimeFilter<"AtencionFuncionario"> | Date | string
    deleted_at?: DateTimeNullableFilter<"AtencionFuncionario"> | Date | string | null
    atencion?: XOR<AtencionScalarRelationFilter, AtencionWhereInput>
    funcionario?: XOR<FuncionariosNullableScalarRelationFilter, FuncionariosWhereInput> | null
  }

  export type AtencionFuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    id_funcionario?: SortOrderInput | SortOrder
    encargado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    atencion?: AtencionOrderByWithRelationInput
    funcionario?: FuncionariosOrderByWithRelationInput
  }

  export type AtencionFuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AtencionFuncionarioWhereInput | AtencionFuncionarioWhereInput[]
    OR?: AtencionFuncionarioWhereInput[]
    NOT?: AtencionFuncionarioWhereInput | AtencionFuncionarioWhereInput[]
    id_atencion?: BigIntFilter<"AtencionFuncionario"> | bigint | number
    id_funcionario?: StringNullableFilter<"AtencionFuncionario"> | string | null
    encargado?: BoolFilter<"AtencionFuncionario"> | boolean
    created_at?: DateTimeFilter<"AtencionFuncionario"> | Date | string
    updated_at?: DateTimeFilter<"AtencionFuncionario"> | Date | string
    deleted_at?: DateTimeNullableFilter<"AtencionFuncionario"> | Date | string | null
    atencion?: XOR<AtencionScalarRelationFilter, AtencionWhereInput>
    funcionario?: XOR<FuncionariosNullableScalarRelationFilter, FuncionariosWhereInput> | null
  }, "id">

  export type AtencionFuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    id_funcionario?: SortOrderInput | SortOrder
    encargado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: AtencionFuncionarioCountOrderByAggregateInput
    _avg?: AtencionFuncionarioAvgOrderByAggregateInput
    _max?: AtencionFuncionarioMaxOrderByAggregateInput
    _min?: AtencionFuncionarioMinOrderByAggregateInput
    _sum?: AtencionFuncionarioSumOrderByAggregateInput
  }

  export type AtencionFuncionarioScalarWhereWithAggregatesInput = {
    AND?: AtencionFuncionarioScalarWhereWithAggregatesInput | AtencionFuncionarioScalarWhereWithAggregatesInput[]
    OR?: AtencionFuncionarioScalarWhereWithAggregatesInput[]
    NOT?: AtencionFuncionarioScalarWhereWithAggregatesInput | AtencionFuncionarioScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"AtencionFuncionario"> | bigint | number
    id_atencion?: BigIntWithAggregatesFilter<"AtencionFuncionario"> | bigint | number
    id_funcionario?: StringNullableWithAggregatesFilter<"AtencionFuncionario"> | string | null
    encargado?: BoolWithAggregatesFilter<"AtencionFuncionario"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"AtencionFuncionario"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AtencionFuncionario"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"AtencionFuncionario"> | Date | string | null
  }

  export type UbicacionAlertaWhereInput = {
    AND?: UbicacionAlertaWhereInput | UbicacionAlertaWhereInput[]
    OR?: UbicacionAlertaWhereInput[]
    NOT?: UbicacionAlertaWhereInput | UbicacionAlertaWhereInput[]
    id?: BigIntFilter<"UbicacionAlerta"> | bigint | number
    id_alerta?: BigIntFilter<"UbicacionAlerta"> | bigint | number
    fecha_hora?: DateTimeFilter<"UbicacionAlerta"> | Date | string
    latitud?: DecimalFilter<"UbicacionAlerta"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"UbicacionAlerta"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"UbicacionAlerta"> | Date | string
    updated_at?: DateTimeFilter<"UbicacionAlerta"> | Date | string
    deleted_at?: DateTimeNullableFilter<"UbicacionAlerta"> | Date | string | null
    alerta?: XOR<AlertaScalarRelationFilter, AlertaWhereInput>
  }

  export type UbicacionAlertaOrderByWithRelationInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    alerta?: AlertaOrderByWithRelationInput
  }

  export type UbicacionAlertaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    unique_ubicacion_alerta?: UbicacionAlertaUnique_ubicacion_alertaCompoundUniqueInput
    AND?: UbicacionAlertaWhereInput | UbicacionAlertaWhereInput[]
    OR?: UbicacionAlertaWhereInput[]
    NOT?: UbicacionAlertaWhereInput | UbicacionAlertaWhereInput[]
    id_alerta?: BigIntFilter<"UbicacionAlerta"> | bigint | number
    fecha_hora?: DateTimeFilter<"UbicacionAlerta"> | Date | string
    latitud?: DecimalFilter<"UbicacionAlerta"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"UbicacionAlerta"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"UbicacionAlerta"> | Date | string
    updated_at?: DateTimeFilter<"UbicacionAlerta"> | Date | string
    deleted_at?: DateTimeNullableFilter<"UbicacionAlerta"> | Date | string | null
    alerta?: XOR<AlertaScalarRelationFilter, AlertaWhereInput>
  }, "id" | "unique_ubicacion_alerta">

  export type UbicacionAlertaOrderByWithAggregationInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: UbicacionAlertaCountOrderByAggregateInput
    _avg?: UbicacionAlertaAvgOrderByAggregateInput
    _max?: UbicacionAlertaMaxOrderByAggregateInput
    _min?: UbicacionAlertaMinOrderByAggregateInput
    _sum?: UbicacionAlertaSumOrderByAggregateInput
  }

  export type UbicacionAlertaScalarWhereWithAggregatesInput = {
    AND?: UbicacionAlertaScalarWhereWithAggregatesInput | UbicacionAlertaScalarWhereWithAggregatesInput[]
    OR?: UbicacionAlertaScalarWhereWithAggregatesInput[]
    NOT?: UbicacionAlertaScalarWhereWithAggregatesInput | UbicacionAlertaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UbicacionAlerta"> | bigint | number
    id_alerta?: BigIntWithAggregatesFilter<"UbicacionAlerta"> | bigint | number
    fecha_hora?: DateTimeWithAggregatesFilter<"UbicacionAlerta"> | Date | string
    latitud?: DecimalWithAggregatesFilter<"UbicacionAlerta"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalWithAggregatesFilter<"UbicacionAlerta"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"UbicacionAlerta"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UbicacionAlerta"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"UbicacionAlerta"> | Date | string | null
  }

  export type CierreAlertaWhereInput = {
    AND?: CierreAlertaWhereInput | CierreAlertaWhereInput[]
    OR?: CierreAlertaWhereInput[]
    NOT?: CierreAlertaWhereInput | CierreAlertaWhereInput[]
    id?: BigIntFilter<"CierreAlerta"> | bigint | number
    id_alerta?: BigIntFilter<"CierreAlerta"> | bigint | number
    id_funcionario?: StringFilter<"CierreAlerta"> | string
    fecha_hora?: DateTimeFilter<"CierreAlerta"> | Date | string
    comentario?: StringFilter<"CierreAlerta"> | string
    tipo_alerta?: EnumTipoAlertaFilter<"CierreAlerta"> | $Enums.TipoAlerta
    estado_victima?: StringFilter<"CierreAlerta"> | string
    nombre_agresor?: StringFilter<"CierreAlerta"> | string
    ci_agresor?: StringFilter<"CierreAlerta"> | string
    created_at?: DateTimeFilter<"CierreAlerta"> | Date | string
    updated_at?: DateTimeFilter<"CierreAlerta"> | Date | string
    deleted_at?: DateTimeNullableFilter<"CierreAlerta"> | Date | string | null
    alerta?: XOR<AlertaScalarRelationFilter, AlertaWhereInput>
  }

  export type CierreAlertaOrderByWithRelationInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    tipo_alerta?: SortOrder
    estado_victima?: SortOrder
    nombre_agresor?: SortOrder
    ci_agresor?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    alerta?: AlertaOrderByWithRelationInput
  }

  export type CierreAlertaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    id_alerta?: bigint | number
    AND?: CierreAlertaWhereInput | CierreAlertaWhereInput[]
    OR?: CierreAlertaWhereInput[]
    NOT?: CierreAlertaWhereInput | CierreAlertaWhereInput[]
    id_funcionario?: StringFilter<"CierreAlerta"> | string
    fecha_hora?: DateTimeFilter<"CierreAlerta"> | Date | string
    comentario?: StringFilter<"CierreAlerta"> | string
    tipo_alerta?: EnumTipoAlertaFilter<"CierreAlerta"> | $Enums.TipoAlerta
    estado_victima?: StringFilter<"CierreAlerta"> | string
    nombre_agresor?: StringFilter<"CierreAlerta"> | string
    ci_agresor?: StringFilter<"CierreAlerta"> | string
    created_at?: DateTimeFilter<"CierreAlerta"> | Date | string
    updated_at?: DateTimeFilter<"CierreAlerta"> | Date | string
    deleted_at?: DateTimeNullableFilter<"CierreAlerta"> | Date | string | null
    alerta?: XOR<AlertaScalarRelationFilter, AlertaWhereInput>
  }, "id" | "id_alerta">

  export type CierreAlertaOrderByWithAggregationInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    tipo_alerta?: SortOrder
    estado_victima?: SortOrder
    nombre_agresor?: SortOrder
    ci_agresor?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: CierreAlertaCountOrderByAggregateInput
    _avg?: CierreAlertaAvgOrderByAggregateInput
    _max?: CierreAlertaMaxOrderByAggregateInput
    _min?: CierreAlertaMinOrderByAggregateInput
    _sum?: CierreAlertaSumOrderByAggregateInput
  }

  export type CierreAlertaScalarWhereWithAggregatesInput = {
    AND?: CierreAlertaScalarWhereWithAggregatesInput | CierreAlertaScalarWhereWithAggregatesInput[]
    OR?: CierreAlertaScalarWhereWithAggregatesInput[]
    NOT?: CierreAlertaScalarWhereWithAggregatesInput | CierreAlertaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CierreAlerta"> | bigint | number
    id_alerta?: BigIntWithAggregatesFilter<"CierreAlerta"> | bigint | number
    id_funcionario?: StringWithAggregatesFilter<"CierreAlerta"> | string
    fecha_hora?: DateTimeWithAggregatesFilter<"CierreAlerta"> | Date | string
    comentario?: StringWithAggregatesFilter<"CierreAlerta"> | string
    tipo_alerta?: EnumTipoAlertaWithAggregatesFilter<"CierreAlerta"> | $Enums.TipoAlerta
    estado_victima?: StringWithAggregatesFilter<"CierreAlerta"> | string
    nombre_agresor?: StringWithAggregatesFilter<"CierreAlerta"> | string
    ci_agresor?: StringWithAggregatesFilter<"CierreAlerta"> | string
    created_at?: DateTimeWithAggregatesFilter<"CierreAlerta"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CierreAlerta"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"CierreAlerta"> | Date | string | null
  }

  export type UbicacionFuncionarioWhereInput = {
    AND?: UbicacionFuncionarioWhereInput | UbicacionFuncionarioWhereInput[]
    OR?: UbicacionFuncionarioWhereInput[]
    NOT?: UbicacionFuncionarioWhereInput | UbicacionFuncionarioWhereInput[]
    id?: BigIntFilter<"UbicacionFuncionario"> | bigint | number
    id_atencion?: BigIntFilter<"UbicacionFuncionario"> | bigint | number
    fecha_hora?: DateTimeFilter<"UbicacionFuncionario"> | Date | string
    latitud?: DecimalFilter<"UbicacionFuncionario"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"UbicacionFuncionario"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"UbicacionFuncionario"> | Date | string
    updated_at?: DateTimeFilter<"UbicacionFuncionario"> | Date | string
    deleted_at?: DateTimeNullableFilter<"UbicacionFuncionario"> | Date | string | null
    atencion?: XOR<AtencionScalarRelationFilter, AtencionWhereInput>
  }

  export type UbicacionFuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    atencion?: AtencionOrderByWithRelationInput
  }

  export type UbicacionFuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UbicacionFuncionarioWhereInput | UbicacionFuncionarioWhereInput[]
    OR?: UbicacionFuncionarioWhereInput[]
    NOT?: UbicacionFuncionarioWhereInput | UbicacionFuncionarioWhereInput[]
    id_atencion?: BigIntFilter<"UbicacionFuncionario"> | bigint | number
    fecha_hora?: DateTimeFilter<"UbicacionFuncionario"> | Date | string
    latitud?: DecimalFilter<"UbicacionFuncionario"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"UbicacionFuncionario"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"UbicacionFuncionario"> | Date | string
    updated_at?: DateTimeFilter<"UbicacionFuncionario"> | Date | string
    deleted_at?: DateTimeNullableFilter<"UbicacionFuncionario"> | Date | string | null
    atencion?: XOR<AtencionScalarRelationFilter, AtencionWhereInput>
  }, "id">

  export type UbicacionFuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: UbicacionFuncionarioCountOrderByAggregateInput
    _avg?: UbicacionFuncionarioAvgOrderByAggregateInput
    _max?: UbicacionFuncionarioMaxOrderByAggregateInput
    _min?: UbicacionFuncionarioMinOrderByAggregateInput
    _sum?: UbicacionFuncionarioSumOrderByAggregateInput
  }

  export type UbicacionFuncionarioScalarWhereWithAggregatesInput = {
    AND?: UbicacionFuncionarioScalarWhereWithAggregatesInput | UbicacionFuncionarioScalarWhereWithAggregatesInput[]
    OR?: UbicacionFuncionarioScalarWhereWithAggregatesInput[]
    NOT?: UbicacionFuncionarioScalarWhereWithAggregatesInput | UbicacionFuncionarioScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UbicacionFuncionario"> | bigint | number
    id_atencion?: BigIntWithAggregatesFilter<"UbicacionFuncionario"> | bigint | number
    fecha_hora?: DateTimeWithAggregatesFilter<"UbicacionFuncionario"> | Date | string
    latitud?: DecimalWithAggregatesFilter<"UbicacionFuncionario"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalWithAggregatesFilter<"UbicacionFuncionario"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"UbicacionFuncionario"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UbicacionFuncionario"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"UbicacionFuncionario"> | Date | string | null
  }

  export type FuncionariosCreateInput = {
    id?: string
    grado: string
    nombres: string
    ap_paterno: string
    ap_materno: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion_funcionario?: AtencionFuncionarioCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionariosUncheckedCreateInput = {
    id?: string
    grado: string
    nombres: string
    ap_paterno: string
    ap_materno: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion_funcionario?: AtencionFuncionarioUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion_funcionario?: AtencionFuncionarioUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion_funcionario?: AtencionFuncionarioUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionariosCreateManyInput = {
    id?: string
    grado: string
    nombres: string
    ap_paterno: string
    ap_materno: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type FuncionariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FuncionariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonaCreateInput = {
    id?: bigint | number
    uuid?: string | null
    nombres: string
    ap_paterno: string
    ap_materno: string
    ci: string
    fecha_nac: Date | string
    celular: string
    correo: string
    empresa_telefonica: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    contactos_ref?: ContactoRefCreateNestedManyWithoutPersonaInput
    alertas?: AlertaCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string | null
    nombres: string
    ap_paterno: string
    ap_materno: string
    ci: string
    fecha_nac: Date | string
    celular: string
    correo: string
    empresa_telefonica: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    contactos_ref?: ContactoRefUncheckedCreateNestedManyWithoutPersonaInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    fecha_nac?: DateTimeFieldUpdateOperationsInput | Date | string
    celular?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    empresa_telefonica?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactos_ref?: ContactoRefUpdateManyWithoutPersonaNestedInput
    alertas?: AlertaUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    fecha_nac?: DateTimeFieldUpdateOperationsInput | Date | string
    celular?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    empresa_telefonica?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactos_ref?: ContactoRefUncheckedUpdateManyWithoutPersonaNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaCreateManyInput = {
    id?: bigint | number
    uuid?: string | null
    nombres: string
    ap_paterno: string
    ap_materno: string
    ci: string
    fecha_nac: Date | string
    celular: string
    correo: string
    empresa_telefonica: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type PersonaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    fecha_nac?: DateTimeFieldUpdateOperationsInput | Date | string
    celular?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    empresa_telefonica?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    fecha_nac?: DateTimeFieldUpdateOperationsInput | Date | string
    celular?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    empresa_telefonica?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactoRefCreateInput = {
    id?: bigint | number
    nombre: string
    relacion: string
    celular: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    persona: PersonaCreateNestedOneWithoutContactos_refInput
  }

  export type ContactoRefUncheckedCreateInput = {
    id?: bigint | number
    id_persona: bigint | number
    nombre: string
    relacion: string
    celular: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ContactoRefUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: PersonaUpdateOneRequiredWithoutContactos_refNestedInput
  }

  export type ContactoRefUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_persona?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactoRefCreateManyInput = {
    id?: bigint | number
    id_persona: bigint | number
    nombre: string
    relacion: string
    celular: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ContactoRefUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactoRefUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_persona?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventoCreateInput = {
    id?: bigint | number
    id_funcionario: string
    id_seguimiento?: string | null
    fecha_hora: Date | string
    comentario: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    alerta: AlertaCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateInput = {
    id?: bigint | number
    id_alerta: bigint | number
    id_funcionario: string
    id_seguimiento?: string | null
    fecha_hora: Date | string
    comentario: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type EventoUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    id_seguimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alerta?: AlertaUpdateOneRequiredWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    id_seguimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventoCreateManyInput = {
    id?: bigint | number
    id_alerta: bigint | number
    id_funcionario: string
    id_seguimiento?: string | null
    fecha_hora: Date | string
    comentario: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type EventoUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    id_seguimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    id_seguimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertaCreateInput = {
    id?: bigint | number
    uuid: string
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    persona: PersonaCreateNestedOneWithoutAlertasInput
    atencion?: AtencionCreateNestedOneWithoutAlertaInput
    cierre?: CierreAlertaCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaCreateNestedManyWithoutAlertaInput
    eventos?: EventoCreateNestedManyWithoutAlertaInput
  }

  export type AlertaUncheckedCreateInput = {
    id?: bigint | number
    uuid: string
    id_persona: bigint | number
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion?: AtencionUncheckedCreateNestedOneWithoutAlertaInput
    cierre?: CierreAlertaUncheckedCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaUncheckedCreateNestedManyWithoutAlertaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutAlertaInput
  }

  export type AlertaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: PersonaUpdateOneRequiredWithoutAlertasNestedInput
    atencion?: AtencionUpdateOneWithoutAlertaNestedInput
    cierre?: CierreAlertaUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUpdateManyWithoutAlertaNestedInput
    eventos?: EventoUpdateManyWithoutAlertaNestedInput
  }

  export type AlertaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_persona?: BigIntFieldUpdateOperationsInput | bigint | number
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion?: AtencionUncheckedUpdateOneWithoutAlertaNestedInput
    cierre?: CierreAlertaUncheckedUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUncheckedUpdateManyWithoutAlertaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutAlertaNestedInput
  }

  export type AlertaCreateManyInput = {
    id?: bigint | number
    uuid: string
    id_persona: bigint | number
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AlertaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_persona?: BigIntFieldUpdateOperationsInput | bigint | number
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AtencionCreateInput = {
    id?: bigint | number
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    alerta: AlertaCreateNestedOneWithoutAtencionInput
    atencion_funcionario?: AtencionFuncionarioCreateNestedManyWithoutAtencionInput
    ubicaciones_funcionario?: UbicacionFuncionarioCreateNestedManyWithoutAtencionInput
  }

  export type AtencionUncheckedCreateInput = {
    id?: bigint | number
    id_alerta: bigint | number
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion_funcionario?: AtencionFuncionarioUncheckedCreateNestedManyWithoutAtencionInput
    ubicaciones_funcionario?: UbicacionFuncionarioUncheckedCreateNestedManyWithoutAtencionInput
  }

  export type AtencionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alerta?: AlertaUpdateOneRequiredWithoutAtencionNestedInput
    atencion_funcionario?: AtencionFuncionarioUpdateManyWithoutAtencionNestedInput
    ubicaciones_funcionario?: UbicacionFuncionarioUpdateManyWithoutAtencionNestedInput
  }

  export type AtencionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion_funcionario?: AtencionFuncionarioUncheckedUpdateManyWithoutAtencionNestedInput
    ubicaciones_funcionario?: UbicacionFuncionarioUncheckedUpdateManyWithoutAtencionNestedInput
  }

  export type AtencionCreateManyInput = {
    id?: bigint | number
    id_alerta: bigint | number
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AtencionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AtencionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AtencionFuncionarioCreateInput = {
    id?: bigint | number
    encargado: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion: AtencionCreateNestedOneWithoutAtencion_funcionarioInput
    funcionario?: FuncionariosCreateNestedOneWithoutAtencion_funcionarioInput
  }

  export type AtencionFuncionarioUncheckedCreateInput = {
    id?: bigint | number
    id_atencion: bigint | number
    id_funcionario?: string | null
    encargado: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AtencionFuncionarioUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion?: AtencionUpdateOneRequiredWithoutAtencion_funcionarioNestedInput
    funcionario?: FuncionariosUpdateOneWithoutAtencion_funcionarioNestedInput
  }

  export type AtencionFuncionarioUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_atencion?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: NullableStringFieldUpdateOperationsInput | string | null
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AtencionFuncionarioCreateManyInput = {
    id?: bigint | number
    id_atencion: bigint | number
    id_funcionario?: string | null
    encargado: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AtencionFuncionarioUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AtencionFuncionarioUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_atencion?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: NullableStringFieldUpdateOperationsInput | string | null
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionAlertaCreateInput = {
    id?: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    alerta: AlertaCreateNestedOneWithoutUbicacionesInput
  }

  export type UbicacionAlertaUncheckedCreateInput = {
    id?: bigint | number
    id_alerta: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionAlertaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alerta?: AlertaUpdateOneRequiredWithoutUbicacionesNestedInput
  }

  export type UbicacionAlertaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionAlertaCreateManyInput = {
    id?: bigint | number
    id_alerta: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionAlertaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionAlertaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CierreAlertaCreateInput = {
    id?: bigint | number
    id_funcionario: string
    fecha_hora: Date | string
    comentario: string
    tipo_alerta: $Enums.TipoAlerta
    estado_victima: string
    nombre_agresor: string
    ci_agresor: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    alerta: AlertaCreateNestedOneWithoutCierreInput
  }

  export type CierreAlertaUncheckedCreateInput = {
    id?: bigint | number
    id_alerta: bigint | number
    id_funcionario: string
    fecha_hora: Date | string
    comentario: string
    tipo_alerta: $Enums.TipoAlerta
    estado_victima: string
    nombre_agresor: string
    ci_agresor: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CierreAlertaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    tipo_alerta?: EnumTipoAlertaFieldUpdateOperationsInput | $Enums.TipoAlerta
    estado_victima?: StringFieldUpdateOperationsInput | string
    nombre_agresor?: StringFieldUpdateOperationsInput | string
    ci_agresor?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alerta?: AlertaUpdateOneRequiredWithoutCierreNestedInput
  }

  export type CierreAlertaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    tipo_alerta?: EnumTipoAlertaFieldUpdateOperationsInput | $Enums.TipoAlerta
    estado_victima?: StringFieldUpdateOperationsInput | string
    nombre_agresor?: StringFieldUpdateOperationsInput | string
    ci_agresor?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CierreAlertaCreateManyInput = {
    id?: bigint | number
    id_alerta: bigint | number
    id_funcionario: string
    fecha_hora: Date | string
    comentario: string
    tipo_alerta: $Enums.TipoAlerta
    estado_victima: string
    nombre_agresor: string
    ci_agresor: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CierreAlertaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    tipo_alerta?: EnumTipoAlertaFieldUpdateOperationsInput | $Enums.TipoAlerta
    estado_victima?: StringFieldUpdateOperationsInput | string
    nombre_agresor?: StringFieldUpdateOperationsInput | string
    ci_agresor?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CierreAlertaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    tipo_alerta?: EnumTipoAlertaFieldUpdateOperationsInput | $Enums.TipoAlerta
    estado_victima?: StringFieldUpdateOperationsInput | string
    nombre_agresor?: StringFieldUpdateOperationsInput | string
    ci_agresor?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionFuncionarioCreateInput = {
    id?: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion: AtencionCreateNestedOneWithoutUbicaciones_funcionarioInput
  }

  export type UbicacionFuncionarioUncheckedCreateInput = {
    id?: bigint | number
    id_atencion: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionFuncionarioUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion?: AtencionUpdateOneRequiredWithoutUbicaciones_funcionarioNestedInput
  }

  export type UbicacionFuncionarioUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_atencion?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionFuncionarioCreateManyInput = {
    id?: bigint | number
    id_atencion: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionFuncionarioUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionFuncionarioUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_atencion?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AtencionFuncionarioListRelationFilter = {
    every?: AtencionFuncionarioWhereInput
    some?: AtencionFuncionarioWhereInput
    none?: AtencionFuncionarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AtencionFuncionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuncionariosCountOrderByAggregateInput = {
    id?: SortOrder
    grado?: SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type FuncionariosMaxOrderByAggregateInput = {
    id?: SortOrder
    grado?: SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type FuncionariosMinOrderByAggregateInput = {
    id?: SortOrder
    grado?: SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ContactoRefListRelationFilter = {
    every?: ContactoRefWhereInput
    some?: ContactoRefWhereInput
    none?: ContactoRefWhereInput
  }

  export type AlertaListRelationFilter = {
    every?: AlertaWhereInput
    some?: AlertaWhereInput
    none?: AlertaWhereInput
  }

  export type ContactoRefOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonaCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    ci?: SortOrder
    fecha_nac?: SortOrder
    celular?: SortOrder
    correo?: SortOrder
    empresa_telefonica?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type PersonaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonaMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    ci?: SortOrder
    fecha_nac?: SortOrder
    celular?: SortOrder
    correo?: SortOrder
    empresa_telefonica?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type PersonaMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nombres?: SortOrder
    ap_paterno?: SortOrder
    ap_materno?: SortOrder
    ci?: SortOrder
    fecha_nac?: SortOrder
    celular?: SortOrder
    correo?: SortOrder
    empresa_telefonica?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type PersonaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PersonaScalarRelationFilter = {
    is?: PersonaWhereInput
    isNot?: PersonaWhereInput
  }

  export type ContactoRefCountOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    nombre?: SortOrder
    relacion?: SortOrder
    celular?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ContactoRefAvgOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
  }

  export type ContactoRefMaxOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    nombre?: SortOrder
    relacion?: SortOrder
    celular?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ContactoRefMinOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    nombre?: SortOrder
    relacion?: SortOrder
    celular?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ContactoRefSumOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
  }

  export type AlertaScalarRelationFilter = {
    is?: AlertaWhereInput
    isNot?: AlertaWhereInput
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    id_seguimiento?: SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    id_seguimiento?: SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    id_seguimiento?: SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
  }

  export type EnumEstadoAlertaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAlerta | EnumEstadoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAlertaFilter<$PrismaModel> | $Enums.EstadoAlerta
  }

  export type EnumOrigenAlertaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigenAlerta | EnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrigenAlerta[] | ListEnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrigenAlerta[] | ListEnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrigenAlertaNullableFilter<$PrismaModel> | $Enums.OrigenAlerta | null
  }

  export type AtencionNullableScalarRelationFilter = {
    is?: AtencionWhereInput | null
    isNot?: AtencionWhereInput | null
  }

  export type CierreAlertaNullableScalarRelationFilter = {
    is?: CierreAlertaWhereInput | null
    isNot?: CierreAlertaWhereInput | null
  }

  export type UbicacionAlertaListRelationFilter = {
    every?: UbicacionAlertaWhereInput
    some?: UbicacionAlertaWhereInput
    none?: UbicacionAlertaWhereInput
  }

  export type EventoListRelationFilter = {
    every?: EventoWhereInput
    some?: EventoWhereInput
    none?: EventoWhereInput
  }

  export type UbicacionAlertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertaUuidOrigenCompoundUniqueInput = {
    uuid: string
    origen: $Enums.OrigenAlerta
  }

  export type AlertaCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_persona?: SortOrder
    id_municipio?: SortOrder
    fecha_hora?: SortOrder
    nro_caso?: SortOrder
    estado?: SortOrder
    origen?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AlertaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
  }

  export type AlertaMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_persona?: SortOrder
    id_municipio?: SortOrder
    fecha_hora?: SortOrder
    nro_caso?: SortOrder
    estado?: SortOrder
    origen?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AlertaMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_persona?: SortOrder
    id_municipio?: SortOrder
    fecha_hora?: SortOrder
    nro_caso?: SortOrder
    estado?: SortOrder
    origen?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AlertaSumOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
  }

  export type EnumEstadoAlertaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAlerta | EnumEstadoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAlertaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAlerta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAlertaFilter<$PrismaModel>
    _max?: NestedEnumEstadoAlertaFilter<$PrismaModel>
  }

  export type EnumOrigenAlertaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigenAlerta | EnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrigenAlerta[] | ListEnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrigenAlerta[] | ListEnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrigenAlertaNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrigenAlerta | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrigenAlertaNullableFilter<$PrismaModel>
    _max?: NestedEnumOrigenAlertaNullableFilter<$PrismaModel>
  }

  export type UbicacionFuncionarioListRelationFilter = {
    every?: UbicacionFuncionarioWhereInput
    some?: UbicacionFuncionarioWhereInput
    none?: UbicacionFuncionarioWhereInput
  }

  export type UbicacionFuncionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtencionCountOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    usuario_despachador?: SortOrder
    id_vehiculo?: SortOrder
    sigla_radio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AtencionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
  }

  export type AtencionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    usuario_despachador?: SortOrder
    id_vehiculo?: SortOrder
    sigla_radio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AtencionMinOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    usuario_despachador?: SortOrder
    id_vehiculo?: SortOrder
    sigla_radio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AtencionSumOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AtencionScalarRelationFilter = {
    is?: AtencionWhereInput
    isNot?: AtencionWhereInput
  }

  export type FuncionariosNullableScalarRelationFilter = {
    is?: FuncionariosWhereInput | null
    isNot?: FuncionariosWhereInput | null
  }

  export type AtencionFuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    id_funcionario?: SortOrder
    encargado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AtencionFuncionarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
  }

  export type AtencionFuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    id_funcionario?: SortOrder
    encargado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AtencionFuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    id_funcionario?: SortOrder
    encargado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AtencionFuncionarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UbicacionAlertaUnique_ubicacion_alertaCompoundUniqueInput = {
    id_alerta: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
  }

  export type UbicacionAlertaCountOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UbicacionAlertaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type UbicacionAlertaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UbicacionAlertaMinOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UbicacionAlertaSumOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTipoAlertaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAlerta | EnumTipoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAlerta[] | ListEnumTipoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAlerta[] | ListEnumTipoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAlertaFilter<$PrismaModel> | $Enums.TipoAlerta
  }

  export type CierreAlertaCountOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    tipo_alerta?: SortOrder
    estado_victima?: SortOrder
    nombre_agresor?: SortOrder
    ci_agresor?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CierreAlertaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
  }

  export type CierreAlertaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    tipo_alerta?: SortOrder
    estado_victima?: SortOrder
    nombre_agresor?: SortOrder
    ci_agresor?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CierreAlertaMinOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
    id_funcionario?: SortOrder
    fecha_hora?: SortOrder
    comentario?: SortOrder
    tipo_alerta?: SortOrder
    estado_victima?: SortOrder
    nombre_agresor?: SortOrder
    ci_agresor?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CierreAlertaSumOrderByAggregateInput = {
    id?: SortOrder
    id_alerta?: SortOrder
  }

  export type EnumTipoAlertaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAlerta | EnumTipoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAlerta[] | ListEnumTipoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAlerta[] | ListEnumTipoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAlertaWithAggregatesFilter<$PrismaModel> | $Enums.TipoAlerta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAlertaFilter<$PrismaModel>
    _max?: NestedEnumTipoAlertaFilter<$PrismaModel>
  }

  export type UbicacionFuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UbicacionFuncionarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type UbicacionFuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UbicacionFuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    fecha_hora?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UbicacionFuncionarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_atencion?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type AtencionFuncionarioCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<AtencionFuncionarioCreateWithoutFuncionarioInput, AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput> | AtencionFuncionarioCreateWithoutFuncionarioInput[] | AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: AtencionFuncionarioCreateOrConnectWithoutFuncionarioInput | AtencionFuncionarioCreateOrConnectWithoutFuncionarioInput[]
    createMany?: AtencionFuncionarioCreateManyFuncionarioInputEnvelope
    connect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
  }

  export type AtencionFuncionarioUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<AtencionFuncionarioCreateWithoutFuncionarioInput, AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput> | AtencionFuncionarioCreateWithoutFuncionarioInput[] | AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: AtencionFuncionarioCreateOrConnectWithoutFuncionarioInput | AtencionFuncionarioCreateOrConnectWithoutFuncionarioInput[]
    createMany?: AtencionFuncionarioCreateManyFuncionarioInputEnvelope
    connect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AtencionFuncionarioUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<AtencionFuncionarioCreateWithoutFuncionarioInput, AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput> | AtencionFuncionarioCreateWithoutFuncionarioInput[] | AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: AtencionFuncionarioCreateOrConnectWithoutFuncionarioInput | AtencionFuncionarioCreateOrConnectWithoutFuncionarioInput[]
    upsert?: AtencionFuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput | AtencionFuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: AtencionFuncionarioCreateManyFuncionarioInputEnvelope
    set?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    disconnect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    delete?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    connect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    update?: AtencionFuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput | AtencionFuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: AtencionFuncionarioUpdateManyWithWhereWithoutFuncionarioInput | AtencionFuncionarioUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: AtencionFuncionarioScalarWhereInput | AtencionFuncionarioScalarWhereInput[]
  }

  export type AtencionFuncionarioUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<AtencionFuncionarioCreateWithoutFuncionarioInput, AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput> | AtencionFuncionarioCreateWithoutFuncionarioInput[] | AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: AtencionFuncionarioCreateOrConnectWithoutFuncionarioInput | AtencionFuncionarioCreateOrConnectWithoutFuncionarioInput[]
    upsert?: AtencionFuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput | AtencionFuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: AtencionFuncionarioCreateManyFuncionarioInputEnvelope
    set?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    disconnect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    delete?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    connect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    update?: AtencionFuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput | AtencionFuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: AtencionFuncionarioUpdateManyWithWhereWithoutFuncionarioInput | AtencionFuncionarioUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: AtencionFuncionarioScalarWhereInput | AtencionFuncionarioScalarWhereInput[]
  }

  export type ContactoRefCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ContactoRefCreateWithoutPersonaInput, ContactoRefUncheckedCreateWithoutPersonaInput> | ContactoRefCreateWithoutPersonaInput[] | ContactoRefUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ContactoRefCreateOrConnectWithoutPersonaInput | ContactoRefCreateOrConnectWithoutPersonaInput[]
    createMany?: ContactoRefCreateManyPersonaInputEnvelope
    connect?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
  }

  export type AlertaCreateNestedManyWithoutPersonaInput = {
    create?: XOR<AlertaCreateWithoutPersonaInput, AlertaUncheckedCreateWithoutPersonaInput> | AlertaCreateWithoutPersonaInput[] | AlertaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutPersonaInput | AlertaCreateOrConnectWithoutPersonaInput[]
    createMany?: AlertaCreateManyPersonaInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type ContactoRefUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ContactoRefCreateWithoutPersonaInput, ContactoRefUncheckedCreateWithoutPersonaInput> | ContactoRefCreateWithoutPersonaInput[] | ContactoRefUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ContactoRefCreateOrConnectWithoutPersonaInput | ContactoRefCreateOrConnectWithoutPersonaInput[]
    createMany?: ContactoRefCreateManyPersonaInputEnvelope
    connect?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
  }

  export type AlertaUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<AlertaCreateWithoutPersonaInput, AlertaUncheckedCreateWithoutPersonaInput> | AlertaCreateWithoutPersonaInput[] | AlertaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutPersonaInput | AlertaCreateOrConnectWithoutPersonaInput[]
    createMany?: AlertaCreateManyPersonaInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ContactoRefUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ContactoRefCreateWithoutPersonaInput, ContactoRefUncheckedCreateWithoutPersonaInput> | ContactoRefCreateWithoutPersonaInput[] | ContactoRefUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ContactoRefCreateOrConnectWithoutPersonaInput | ContactoRefCreateOrConnectWithoutPersonaInput[]
    upsert?: ContactoRefUpsertWithWhereUniqueWithoutPersonaInput | ContactoRefUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ContactoRefCreateManyPersonaInputEnvelope
    set?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
    disconnect?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
    delete?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
    connect?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
    update?: ContactoRefUpdateWithWhereUniqueWithoutPersonaInput | ContactoRefUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ContactoRefUpdateManyWithWhereWithoutPersonaInput | ContactoRefUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ContactoRefScalarWhereInput | ContactoRefScalarWhereInput[]
  }

  export type AlertaUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<AlertaCreateWithoutPersonaInput, AlertaUncheckedCreateWithoutPersonaInput> | AlertaCreateWithoutPersonaInput[] | AlertaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutPersonaInput | AlertaCreateOrConnectWithoutPersonaInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutPersonaInput | AlertaUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: AlertaCreateManyPersonaInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutPersonaInput | AlertaUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutPersonaInput | AlertaUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type ContactoRefUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ContactoRefCreateWithoutPersonaInput, ContactoRefUncheckedCreateWithoutPersonaInput> | ContactoRefCreateWithoutPersonaInput[] | ContactoRefUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ContactoRefCreateOrConnectWithoutPersonaInput | ContactoRefCreateOrConnectWithoutPersonaInput[]
    upsert?: ContactoRefUpsertWithWhereUniqueWithoutPersonaInput | ContactoRefUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ContactoRefCreateManyPersonaInputEnvelope
    set?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
    disconnect?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
    delete?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
    connect?: ContactoRefWhereUniqueInput | ContactoRefWhereUniqueInput[]
    update?: ContactoRefUpdateWithWhereUniqueWithoutPersonaInput | ContactoRefUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ContactoRefUpdateManyWithWhereWithoutPersonaInput | ContactoRefUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ContactoRefScalarWhereInput | ContactoRefScalarWhereInput[]
  }

  export type AlertaUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<AlertaCreateWithoutPersonaInput, AlertaUncheckedCreateWithoutPersonaInput> | AlertaCreateWithoutPersonaInput[] | AlertaUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutPersonaInput | AlertaCreateOrConnectWithoutPersonaInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutPersonaInput | AlertaUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: AlertaCreateManyPersonaInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutPersonaInput | AlertaUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutPersonaInput | AlertaUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type PersonaCreateNestedOneWithoutContactos_refInput = {
    create?: XOR<PersonaCreateWithoutContactos_refInput, PersonaUncheckedCreateWithoutContactos_refInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutContactos_refInput
    connect?: PersonaWhereUniqueInput
  }

  export type PersonaUpdateOneRequiredWithoutContactos_refNestedInput = {
    create?: XOR<PersonaCreateWithoutContactos_refInput, PersonaUncheckedCreateWithoutContactos_refInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutContactos_refInput
    upsert?: PersonaUpsertWithoutContactos_refInput
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutContactos_refInput, PersonaUpdateWithoutContactos_refInput>, PersonaUncheckedUpdateWithoutContactos_refInput>
  }

  export type AlertaCreateNestedOneWithoutEventosInput = {
    create?: XOR<AlertaCreateWithoutEventosInput, AlertaUncheckedCreateWithoutEventosInput>
    connectOrCreate?: AlertaCreateOrConnectWithoutEventosInput
    connect?: AlertaWhereUniqueInput
  }

  export type AlertaUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<AlertaCreateWithoutEventosInput, AlertaUncheckedCreateWithoutEventosInput>
    connectOrCreate?: AlertaCreateOrConnectWithoutEventosInput
    upsert?: AlertaUpsertWithoutEventosInput
    connect?: AlertaWhereUniqueInput
    update?: XOR<XOR<AlertaUpdateToOneWithWhereWithoutEventosInput, AlertaUpdateWithoutEventosInput>, AlertaUncheckedUpdateWithoutEventosInput>
  }

  export type PersonaCreateNestedOneWithoutAlertasInput = {
    create?: XOR<PersonaCreateWithoutAlertasInput, PersonaUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutAlertasInput
    connect?: PersonaWhereUniqueInput
  }

  export type AtencionCreateNestedOneWithoutAlertaInput = {
    create?: XOR<AtencionCreateWithoutAlertaInput, AtencionUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: AtencionCreateOrConnectWithoutAlertaInput
    connect?: AtencionWhereUniqueInput
  }

  export type CierreAlertaCreateNestedOneWithoutAlertaInput = {
    create?: XOR<CierreAlertaCreateWithoutAlertaInput, CierreAlertaUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: CierreAlertaCreateOrConnectWithoutAlertaInput
    connect?: CierreAlertaWhereUniqueInput
  }

  export type UbicacionAlertaCreateNestedManyWithoutAlertaInput = {
    create?: XOR<UbicacionAlertaCreateWithoutAlertaInput, UbicacionAlertaUncheckedCreateWithoutAlertaInput> | UbicacionAlertaCreateWithoutAlertaInput[] | UbicacionAlertaUncheckedCreateWithoutAlertaInput[]
    connectOrCreate?: UbicacionAlertaCreateOrConnectWithoutAlertaInput | UbicacionAlertaCreateOrConnectWithoutAlertaInput[]
    createMany?: UbicacionAlertaCreateManyAlertaInputEnvelope
    connect?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
  }

  export type EventoCreateNestedManyWithoutAlertaInput = {
    create?: XOR<EventoCreateWithoutAlertaInput, EventoUncheckedCreateWithoutAlertaInput> | EventoCreateWithoutAlertaInput[] | EventoUncheckedCreateWithoutAlertaInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAlertaInput | EventoCreateOrConnectWithoutAlertaInput[]
    createMany?: EventoCreateManyAlertaInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type AtencionUncheckedCreateNestedOneWithoutAlertaInput = {
    create?: XOR<AtencionCreateWithoutAlertaInput, AtencionUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: AtencionCreateOrConnectWithoutAlertaInput
    connect?: AtencionWhereUniqueInput
  }

  export type CierreAlertaUncheckedCreateNestedOneWithoutAlertaInput = {
    create?: XOR<CierreAlertaCreateWithoutAlertaInput, CierreAlertaUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: CierreAlertaCreateOrConnectWithoutAlertaInput
    connect?: CierreAlertaWhereUniqueInput
  }

  export type UbicacionAlertaUncheckedCreateNestedManyWithoutAlertaInput = {
    create?: XOR<UbicacionAlertaCreateWithoutAlertaInput, UbicacionAlertaUncheckedCreateWithoutAlertaInput> | UbicacionAlertaCreateWithoutAlertaInput[] | UbicacionAlertaUncheckedCreateWithoutAlertaInput[]
    connectOrCreate?: UbicacionAlertaCreateOrConnectWithoutAlertaInput | UbicacionAlertaCreateOrConnectWithoutAlertaInput[]
    createMany?: UbicacionAlertaCreateManyAlertaInputEnvelope
    connect?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutAlertaInput = {
    create?: XOR<EventoCreateWithoutAlertaInput, EventoUncheckedCreateWithoutAlertaInput> | EventoCreateWithoutAlertaInput[] | EventoUncheckedCreateWithoutAlertaInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAlertaInput | EventoCreateOrConnectWithoutAlertaInput[]
    createMany?: EventoCreateManyAlertaInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type EnumEstadoAlertaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAlerta
  }

  export type NullableEnumOrigenAlertaFieldUpdateOperationsInput = {
    set?: $Enums.OrigenAlerta | null
  }

  export type PersonaUpdateOneRequiredWithoutAlertasNestedInput = {
    create?: XOR<PersonaCreateWithoutAlertasInput, PersonaUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutAlertasInput
    upsert?: PersonaUpsertWithoutAlertasInput
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutAlertasInput, PersonaUpdateWithoutAlertasInput>, PersonaUncheckedUpdateWithoutAlertasInput>
  }

  export type AtencionUpdateOneWithoutAlertaNestedInput = {
    create?: XOR<AtencionCreateWithoutAlertaInput, AtencionUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: AtencionCreateOrConnectWithoutAlertaInput
    upsert?: AtencionUpsertWithoutAlertaInput
    disconnect?: AtencionWhereInput | boolean
    delete?: AtencionWhereInput | boolean
    connect?: AtencionWhereUniqueInput
    update?: XOR<XOR<AtencionUpdateToOneWithWhereWithoutAlertaInput, AtencionUpdateWithoutAlertaInput>, AtencionUncheckedUpdateWithoutAlertaInput>
  }

  export type CierreAlertaUpdateOneWithoutAlertaNestedInput = {
    create?: XOR<CierreAlertaCreateWithoutAlertaInput, CierreAlertaUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: CierreAlertaCreateOrConnectWithoutAlertaInput
    upsert?: CierreAlertaUpsertWithoutAlertaInput
    disconnect?: CierreAlertaWhereInput | boolean
    delete?: CierreAlertaWhereInput | boolean
    connect?: CierreAlertaWhereUniqueInput
    update?: XOR<XOR<CierreAlertaUpdateToOneWithWhereWithoutAlertaInput, CierreAlertaUpdateWithoutAlertaInput>, CierreAlertaUncheckedUpdateWithoutAlertaInput>
  }

  export type UbicacionAlertaUpdateManyWithoutAlertaNestedInput = {
    create?: XOR<UbicacionAlertaCreateWithoutAlertaInput, UbicacionAlertaUncheckedCreateWithoutAlertaInput> | UbicacionAlertaCreateWithoutAlertaInput[] | UbicacionAlertaUncheckedCreateWithoutAlertaInput[]
    connectOrCreate?: UbicacionAlertaCreateOrConnectWithoutAlertaInput | UbicacionAlertaCreateOrConnectWithoutAlertaInput[]
    upsert?: UbicacionAlertaUpsertWithWhereUniqueWithoutAlertaInput | UbicacionAlertaUpsertWithWhereUniqueWithoutAlertaInput[]
    createMany?: UbicacionAlertaCreateManyAlertaInputEnvelope
    set?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
    disconnect?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
    delete?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
    connect?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
    update?: UbicacionAlertaUpdateWithWhereUniqueWithoutAlertaInput | UbicacionAlertaUpdateWithWhereUniqueWithoutAlertaInput[]
    updateMany?: UbicacionAlertaUpdateManyWithWhereWithoutAlertaInput | UbicacionAlertaUpdateManyWithWhereWithoutAlertaInput[]
    deleteMany?: UbicacionAlertaScalarWhereInput | UbicacionAlertaScalarWhereInput[]
  }

  export type EventoUpdateManyWithoutAlertaNestedInput = {
    create?: XOR<EventoCreateWithoutAlertaInput, EventoUncheckedCreateWithoutAlertaInput> | EventoCreateWithoutAlertaInput[] | EventoUncheckedCreateWithoutAlertaInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAlertaInput | EventoCreateOrConnectWithoutAlertaInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutAlertaInput | EventoUpsertWithWhereUniqueWithoutAlertaInput[]
    createMany?: EventoCreateManyAlertaInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutAlertaInput | EventoUpdateWithWhereUniqueWithoutAlertaInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutAlertaInput | EventoUpdateManyWithWhereWithoutAlertaInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type AtencionUncheckedUpdateOneWithoutAlertaNestedInput = {
    create?: XOR<AtencionCreateWithoutAlertaInput, AtencionUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: AtencionCreateOrConnectWithoutAlertaInput
    upsert?: AtencionUpsertWithoutAlertaInput
    disconnect?: AtencionWhereInput | boolean
    delete?: AtencionWhereInput | boolean
    connect?: AtencionWhereUniqueInput
    update?: XOR<XOR<AtencionUpdateToOneWithWhereWithoutAlertaInput, AtencionUpdateWithoutAlertaInput>, AtencionUncheckedUpdateWithoutAlertaInput>
  }

  export type CierreAlertaUncheckedUpdateOneWithoutAlertaNestedInput = {
    create?: XOR<CierreAlertaCreateWithoutAlertaInput, CierreAlertaUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: CierreAlertaCreateOrConnectWithoutAlertaInput
    upsert?: CierreAlertaUpsertWithoutAlertaInput
    disconnect?: CierreAlertaWhereInput | boolean
    delete?: CierreAlertaWhereInput | boolean
    connect?: CierreAlertaWhereUniqueInput
    update?: XOR<XOR<CierreAlertaUpdateToOneWithWhereWithoutAlertaInput, CierreAlertaUpdateWithoutAlertaInput>, CierreAlertaUncheckedUpdateWithoutAlertaInput>
  }

  export type UbicacionAlertaUncheckedUpdateManyWithoutAlertaNestedInput = {
    create?: XOR<UbicacionAlertaCreateWithoutAlertaInput, UbicacionAlertaUncheckedCreateWithoutAlertaInput> | UbicacionAlertaCreateWithoutAlertaInput[] | UbicacionAlertaUncheckedCreateWithoutAlertaInput[]
    connectOrCreate?: UbicacionAlertaCreateOrConnectWithoutAlertaInput | UbicacionAlertaCreateOrConnectWithoutAlertaInput[]
    upsert?: UbicacionAlertaUpsertWithWhereUniqueWithoutAlertaInput | UbicacionAlertaUpsertWithWhereUniqueWithoutAlertaInput[]
    createMany?: UbicacionAlertaCreateManyAlertaInputEnvelope
    set?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
    disconnect?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
    delete?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
    connect?: UbicacionAlertaWhereUniqueInput | UbicacionAlertaWhereUniqueInput[]
    update?: UbicacionAlertaUpdateWithWhereUniqueWithoutAlertaInput | UbicacionAlertaUpdateWithWhereUniqueWithoutAlertaInput[]
    updateMany?: UbicacionAlertaUpdateManyWithWhereWithoutAlertaInput | UbicacionAlertaUpdateManyWithWhereWithoutAlertaInput[]
    deleteMany?: UbicacionAlertaScalarWhereInput | UbicacionAlertaScalarWhereInput[]
  }

  export type EventoUncheckedUpdateManyWithoutAlertaNestedInput = {
    create?: XOR<EventoCreateWithoutAlertaInput, EventoUncheckedCreateWithoutAlertaInput> | EventoCreateWithoutAlertaInput[] | EventoUncheckedCreateWithoutAlertaInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAlertaInput | EventoCreateOrConnectWithoutAlertaInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutAlertaInput | EventoUpsertWithWhereUniqueWithoutAlertaInput[]
    createMany?: EventoCreateManyAlertaInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutAlertaInput | EventoUpdateWithWhereUniqueWithoutAlertaInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutAlertaInput | EventoUpdateManyWithWhereWithoutAlertaInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type AlertaCreateNestedOneWithoutAtencionInput = {
    create?: XOR<AlertaCreateWithoutAtencionInput, AlertaUncheckedCreateWithoutAtencionInput>
    connectOrCreate?: AlertaCreateOrConnectWithoutAtencionInput
    connect?: AlertaWhereUniqueInput
  }

  export type AtencionFuncionarioCreateNestedManyWithoutAtencionInput = {
    create?: XOR<AtencionFuncionarioCreateWithoutAtencionInput, AtencionFuncionarioUncheckedCreateWithoutAtencionInput> | AtencionFuncionarioCreateWithoutAtencionInput[] | AtencionFuncionarioUncheckedCreateWithoutAtencionInput[]
    connectOrCreate?: AtencionFuncionarioCreateOrConnectWithoutAtencionInput | AtencionFuncionarioCreateOrConnectWithoutAtencionInput[]
    createMany?: AtencionFuncionarioCreateManyAtencionInputEnvelope
    connect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
  }

  export type UbicacionFuncionarioCreateNestedManyWithoutAtencionInput = {
    create?: XOR<UbicacionFuncionarioCreateWithoutAtencionInput, UbicacionFuncionarioUncheckedCreateWithoutAtencionInput> | UbicacionFuncionarioCreateWithoutAtencionInput[] | UbicacionFuncionarioUncheckedCreateWithoutAtencionInput[]
    connectOrCreate?: UbicacionFuncionarioCreateOrConnectWithoutAtencionInput | UbicacionFuncionarioCreateOrConnectWithoutAtencionInput[]
    createMany?: UbicacionFuncionarioCreateManyAtencionInputEnvelope
    connect?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
  }

  export type AtencionFuncionarioUncheckedCreateNestedManyWithoutAtencionInput = {
    create?: XOR<AtencionFuncionarioCreateWithoutAtencionInput, AtencionFuncionarioUncheckedCreateWithoutAtencionInput> | AtencionFuncionarioCreateWithoutAtencionInput[] | AtencionFuncionarioUncheckedCreateWithoutAtencionInput[]
    connectOrCreate?: AtencionFuncionarioCreateOrConnectWithoutAtencionInput | AtencionFuncionarioCreateOrConnectWithoutAtencionInput[]
    createMany?: AtencionFuncionarioCreateManyAtencionInputEnvelope
    connect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
  }

  export type UbicacionFuncionarioUncheckedCreateNestedManyWithoutAtencionInput = {
    create?: XOR<UbicacionFuncionarioCreateWithoutAtencionInput, UbicacionFuncionarioUncheckedCreateWithoutAtencionInput> | UbicacionFuncionarioCreateWithoutAtencionInput[] | UbicacionFuncionarioUncheckedCreateWithoutAtencionInput[]
    connectOrCreate?: UbicacionFuncionarioCreateOrConnectWithoutAtencionInput | UbicacionFuncionarioCreateOrConnectWithoutAtencionInput[]
    createMany?: UbicacionFuncionarioCreateManyAtencionInputEnvelope
    connect?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
  }

  export type AlertaUpdateOneRequiredWithoutAtencionNestedInput = {
    create?: XOR<AlertaCreateWithoutAtencionInput, AlertaUncheckedCreateWithoutAtencionInput>
    connectOrCreate?: AlertaCreateOrConnectWithoutAtencionInput
    upsert?: AlertaUpsertWithoutAtencionInput
    connect?: AlertaWhereUniqueInput
    update?: XOR<XOR<AlertaUpdateToOneWithWhereWithoutAtencionInput, AlertaUpdateWithoutAtencionInput>, AlertaUncheckedUpdateWithoutAtencionInput>
  }

  export type AtencionFuncionarioUpdateManyWithoutAtencionNestedInput = {
    create?: XOR<AtencionFuncionarioCreateWithoutAtencionInput, AtencionFuncionarioUncheckedCreateWithoutAtencionInput> | AtencionFuncionarioCreateWithoutAtencionInput[] | AtencionFuncionarioUncheckedCreateWithoutAtencionInput[]
    connectOrCreate?: AtencionFuncionarioCreateOrConnectWithoutAtencionInput | AtencionFuncionarioCreateOrConnectWithoutAtencionInput[]
    upsert?: AtencionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput | AtencionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput[]
    createMany?: AtencionFuncionarioCreateManyAtencionInputEnvelope
    set?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    disconnect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    delete?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    connect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    update?: AtencionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput | AtencionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput[]
    updateMany?: AtencionFuncionarioUpdateManyWithWhereWithoutAtencionInput | AtencionFuncionarioUpdateManyWithWhereWithoutAtencionInput[]
    deleteMany?: AtencionFuncionarioScalarWhereInput | AtencionFuncionarioScalarWhereInput[]
  }

  export type UbicacionFuncionarioUpdateManyWithoutAtencionNestedInput = {
    create?: XOR<UbicacionFuncionarioCreateWithoutAtencionInput, UbicacionFuncionarioUncheckedCreateWithoutAtencionInput> | UbicacionFuncionarioCreateWithoutAtencionInput[] | UbicacionFuncionarioUncheckedCreateWithoutAtencionInput[]
    connectOrCreate?: UbicacionFuncionarioCreateOrConnectWithoutAtencionInput | UbicacionFuncionarioCreateOrConnectWithoutAtencionInput[]
    upsert?: UbicacionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput | UbicacionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput[]
    createMany?: UbicacionFuncionarioCreateManyAtencionInputEnvelope
    set?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
    disconnect?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
    delete?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
    connect?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
    update?: UbicacionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput | UbicacionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput[]
    updateMany?: UbicacionFuncionarioUpdateManyWithWhereWithoutAtencionInput | UbicacionFuncionarioUpdateManyWithWhereWithoutAtencionInput[]
    deleteMany?: UbicacionFuncionarioScalarWhereInput | UbicacionFuncionarioScalarWhereInput[]
  }

  export type AtencionFuncionarioUncheckedUpdateManyWithoutAtencionNestedInput = {
    create?: XOR<AtencionFuncionarioCreateWithoutAtencionInput, AtencionFuncionarioUncheckedCreateWithoutAtencionInput> | AtencionFuncionarioCreateWithoutAtencionInput[] | AtencionFuncionarioUncheckedCreateWithoutAtencionInput[]
    connectOrCreate?: AtencionFuncionarioCreateOrConnectWithoutAtencionInput | AtencionFuncionarioCreateOrConnectWithoutAtencionInput[]
    upsert?: AtencionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput | AtencionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput[]
    createMany?: AtencionFuncionarioCreateManyAtencionInputEnvelope
    set?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    disconnect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    delete?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    connect?: AtencionFuncionarioWhereUniqueInput | AtencionFuncionarioWhereUniqueInput[]
    update?: AtencionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput | AtencionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput[]
    updateMany?: AtencionFuncionarioUpdateManyWithWhereWithoutAtencionInput | AtencionFuncionarioUpdateManyWithWhereWithoutAtencionInput[]
    deleteMany?: AtencionFuncionarioScalarWhereInput | AtencionFuncionarioScalarWhereInput[]
  }

  export type UbicacionFuncionarioUncheckedUpdateManyWithoutAtencionNestedInput = {
    create?: XOR<UbicacionFuncionarioCreateWithoutAtencionInput, UbicacionFuncionarioUncheckedCreateWithoutAtencionInput> | UbicacionFuncionarioCreateWithoutAtencionInput[] | UbicacionFuncionarioUncheckedCreateWithoutAtencionInput[]
    connectOrCreate?: UbicacionFuncionarioCreateOrConnectWithoutAtencionInput | UbicacionFuncionarioCreateOrConnectWithoutAtencionInput[]
    upsert?: UbicacionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput | UbicacionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput[]
    createMany?: UbicacionFuncionarioCreateManyAtencionInputEnvelope
    set?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
    disconnect?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
    delete?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
    connect?: UbicacionFuncionarioWhereUniqueInput | UbicacionFuncionarioWhereUniqueInput[]
    update?: UbicacionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput | UbicacionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput[]
    updateMany?: UbicacionFuncionarioUpdateManyWithWhereWithoutAtencionInput | UbicacionFuncionarioUpdateManyWithWhereWithoutAtencionInput[]
    deleteMany?: UbicacionFuncionarioScalarWhereInput | UbicacionFuncionarioScalarWhereInput[]
  }

  export type AtencionCreateNestedOneWithoutAtencion_funcionarioInput = {
    create?: XOR<AtencionCreateWithoutAtencion_funcionarioInput, AtencionUncheckedCreateWithoutAtencion_funcionarioInput>
    connectOrCreate?: AtencionCreateOrConnectWithoutAtencion_funcionarioInput
    connect?: AtencionWhereUniqueInput
  }

  export type FuncionariosCreateNestedOneWithoutAtencion_funcionarioInput = {
    create?: XOR<FuncionariosCreateWithoutAtencion_funcionarioInput, FuncionariosUncheckedCreateWithoutAtencion_funcionarioInput>
    connectOrCreate?: FuncionariosCreateOrConnectWithoutAtencion_funcionarioInput
    connect?: FuncionariosWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AtencionUpdateOneRequiredWithoutAtencion_funcionarioNestedInput = {
    create?: XOR<AtencionCreateWithoutAtencion_funcionarioInput, AtencionUncheckedCreateWithoutAtencion_funcionarioInput>
    connectOrCreate?: AtencionCreateOrConnectWithoutAtencion_funcionarioInput
    upsert?: AtencionUpsertWithoutAtencion_funcionarioInput
    connect?: AtencionWhereUniqueInput
    update?: XOR<XOR<AtencionUpdateToOneWithWhereWithoutAtencion_funcionarioInput, AtencionUpdateWithoutAtencion_funcionarioInput>, AtencionUncheckedUpdateWithoutAtencion_funcionarioInput>
  }

  export type FuncionariosUpdateOneWithoutAtencion_funcionarioNestedInput = {
    create?: XOR<FuncionariosCreateWithoutAtencion_funcionarioInput, FuncionariosUncheckedCreateWithoutAtencion_funcionarioInput>
    connectOrCreate?: FuncionariosCreateOrConnectWithoutAtencion_funcionarioInput
    upsert?: FuncionariosUpsertWithoutAtencion_funcionarioInput
    disconnect?: FuncionariosWhereInput | boolean
    delete?: FuncionariosWhereInput | boolean
    connect?: FuncionariosWhereUniqueInput
    update?: XOR<XOR<FuncionariosUpdateToOneWithWhereWithoutAtencion_funcionarioInput, FuncionariosUpdateWithoutAtencion_funcionarioInput>, FuncionariosUncheckedUpdateWithoutAtencion_funcionarioInput>
  }

  export type AlertaCreateNestedOneWithoutUbicacionesInput = {
    create?: XOR<AlertaCreateWithoutUbicacionesInput, AlertaUncheckedCreateWithoutUbicacionesInput>
    connectOrCreate?: AlertaCreateOrConnectWithoutUbicacionesInput
    connect?: AlertaWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AlertaUpdateOneRequiredWithoutUbicacionesNestedInput = {
    create?: XOR<AlertaCreateWithoutUbicacionesInput, AlertaUncheckedCreateWithoutUbicacionesInput>
    connectOrCreate?: AlertaCreateOrConnectWithoutUbicacionesInput
    upsert?: AlertaUpsertWithoutUbicacionesInput
    connect?: AlertaWhereUniqueInput
    update?: XOR<XOR<AlertaUpdateToOneWithWhereWithoutUbicacionesInput, AlertaUpdateWithoutUbicacionesInput>, AlertaUncheckedUpdateWithoutUbicacionesInput>
  }

  export type AlertaCreateNestedOneWithoutCierreInput = {
    create?: XOR<AlertaCreateWithoutCierreInput, AlertaUncheckedCreateWithoutCierreInput>
    connectOrCreate?: AlertaCreateOrConnectWithoutCierreInput
    connect?: AlertaWhereUniqueInput
  }

  export type EnumTipoAlertaFieldUpdateOperationsInput = {
    set?: $Enums.TipoAlerta
  }

  export type AlertaUpdateOneRequiredWithoutCierreNestedInput = {
    create?: XOR<AlertaCreateWithoutCierreInput, AlertaUncheckedCreateWithoutCierreInput>
    connectOrCreate?: AlertaCreateOrConnectWithoutCierreInput
    upsert?: AlertaUpsertWithoutCierreInput
    connect?: AlertaWhereUniqueInput
    update?: XOR<XOR<AlertaUpdateToOneWithWhereWithoutCierreInput, AlertaUpdateWithoutCierreInput>, AlertaUncheckedUpdateWithoutCierreInput>
  }

  export type AtencionCreateNestedOneWithoutUbicaciones_funcionarioInput = {
    create?: XOR<AtencionCreateWithoutUbicaciones_funcionarioInput, AtencionUncheckedCreateWithoutUbicaciones_funcionarioInput>
    connectOrCreate?: AtencionCreateOrConnectWithoutUbicaciones_funcionarioInput
    connect?: AtencionWhereUniqueInput
  }

  export type AtencionUpdateOneRequiredWithoutUbicaciones_funcionarioNestedInput = {
    create?: XOR<AtencionCreateWithoutUbicaciones_funcionarioInput, AtencionUncheckedCreateWithoutUbicaciones_funcionarioInput>
    connectOrCreate?: AtencionCreateOrConnectWithoutUbicaciones_funcionarioInput
    upsert?: AtencionUpsertWithoutUbicaciones_funcionarioInput
    connect?: AtencionWhereUniqueInput
    update?: XOR<XOR<AtencionUpdateToOneWithWhereWithoutUbicaciones_funcionarioInput, AtencionUpdateWithoutUbicaciones_funcionarioInput>, AtencionUncheckedUpdateWithoutUbicaciones_funcionarioInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoAlertaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAlerta | EnumEstadoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAlertaFilter<$PrismaModel> | $Enums.EstadoAlerta
  }

  export type NestedEnumOrigenAlertaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigenAlerta | EnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrigenAlerta[] | ListEnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrigenAlerta[] | ListEnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrigenAlertaNullableFilter<$PrismaModel> | $Enums.OrigenAlerta | null
  }

  export type NestedEnumEstadoAlertaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAlerta | EnumEstadoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAlertaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAlerta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAlertaFilter<$PrismaModel>
    _max?: NestedEnumEstadoAlertaFilter<$PrismaModel>
  }

  export type NestedEnumOrigenAlertaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigenAlerta | EnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrigenAlerta[] | ListEnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrigenAlerta[] | ListEnumOrigenAlertaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrigenAlertaNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrigenAlerta | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrigenAlertaNullableFilter<$PrismaModel>
    _max?: NestedEnumOrigenAlertaNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTipoAlertaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAlerta | EnumTipoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAlerta[] | ListEnumTipoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAlerta[] | ListEnumTipoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAlertaFilter<$PrismaModel> | $Enums.TipoAlerta
  }

  export type NestedEnumTipoAlertaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAlerta | EnumTipoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAlerta[] | ListEnumTipoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAlerta[] | ListEnumTipoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAlertaWithAggregatesFilter<$PrismaModel> | $Enums.TipoAlerta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAlertaFilter<$PrismaModel>
    _max?: NestedEnumTipoAlertaFilter<$PrismaModel>
  }

  export type AtencionFuncionarioCreateWithoutFuncionarioInput = {
    id?: bigint | number
    encargado: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion: AtencionCreateNestedOneWithoutAtencion_funcionarioInput
  }

  export type AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput = {
    id?: bigint | number
    id_atencion: bigint | number
    encargado: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AtencionFuncionarioCreateOrConnectWithoutFuncionarioInput = {
    where: AtencionFuncionarioWhereUniqueInput
    create: XOR<AtencionFuncionarioCreateWithoutFuncionarioInput, AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput>
  }

  export type AtencionFuncionarioCreateManyFuncionarioInputEnvelope = {
    data: AtencionFuncionarioCreateManyFuncionarioInput | AtencionFuncionarioCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type AtencionFuncionarioUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: AtencionFuncionarioWhereUniqueInput
    update: XOR<AtencionFuncionarioUpdateWithoutFuncionarioInput, AtencionFuncionarioUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<AtencionFuncionarioCreateWithoutFuncionarioInput, AtencionFuncionarioUncheckedCreateWithoutFuncionarioInput>
  }

  export type AtencionFuncionarioUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: AtencionFuncionarioWhereUniqueInput
    data: XOR<AtencionFuncionarioUpdateWithoutFuncionarioInput, AtencionFuncionarioUncheckedUpdateWithoutFuncionarioInput>
  }

  export type AtencionFuncionarioUpdateManyWithWhereWithoutFuncionarioInput = {
    where: AtencionFuncionarioScalarWhereInput
    data: XOR<AtencionFuncionarioUpdateManyMutationInput, AtencionFuncionarioUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type AtencionFuncionarioScalarWhereInput = {
    AND?: AtencionFuncionarioScalarWhereInput | AtencionFuncionarioScalarWhereInput[]
    OR?: AtencionFuncionarioScalarWhereInput[]
    NOT?: AtencionFuncionarioScalarWhereInput | AtencionFuncionarioScalarWhereInput[]
    id?: BigIntFilter<"AtencionFuncionario"> | bigint | number
    id_atencion?: BigIntFilter<"AtencionFuncionario"> | bigint | number
    id_funcionario?: StringNullableFilter<"AtencionFuncionario"> | string | null
    encargado?: BoolFilter<"AtencionFuncionario"> | boolean
    created_at?: DateTimeFilter<"AtencionFuncionario"> | Date | string
    updated_at?: DateTimeFilter<"AtencionFuncionario"> | Date | string
    deleted_at?: DateTimeNullableFilter<"AtencionFuncionario"> | Date | string | null
  }

  export type ContactoRefCreateWithoutPersonaInput = {
    id?: bigint | number
    nombre: string
    relacion: string
    celular: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ContactoRefUncheckedCreateWithoutPersonaInput = {
    id?: bigint | number
    nombre: string
    relacion: string
    celular: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ContactoRefCreateOrConnectWithoutPersonaInput = {
    where: ContactoRefWhereUniqueInput
    create: XOR<ContactoRefCreateWithoutPersonaInput, ContactoRefUncheckedCreateWithoutPersonaInput>
  }

  export type ContactoRefCreateManyPersonaInputEnvelope = {
    data: ContactoRefCreateManyPersonaInput | ContactoRefCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type AlertaCreateWithoutPersonaInput = {
    id?: bigint | number
    uuid: string
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion?: AtencionCreateNestedOneWithoutAlertaInput
    cierre?: CierreAlertaCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaCreateNestedManyWithoutAlertaInput
    eventos?: EventoCreateNestedManyWithoutAlertaInput
  }

  export type AlertaUncheckedCreateWithoutPersonaInput = {
    id?: bigint | number
    uuid: string
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion?: AtencionUncheckedCreateNestedOneWithoutAlertaInput
    cierre?: CierreAlertaUncheckedCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaUncheckedCreateNestedManyWithoutAlertaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutAlertaInput
  }

  export type AlertaCreateOrConnectWithoutPersonaInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutPersonaInput, AlertaUncheckedCreateWithoutPersonaInput>
  }

  export type AlertaCreateManyPersonaInputEnvelope = {
    data: AlertaCreateManyPersonaInput | AlertaCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type ContactoRefUpsertWithWhereUniqueWithoutPersonaInput = {
    where: ContactoRefWhereUniqueInput
    update: XOR<ContactoRefUpdateWithoutPersonaInput, ContactoRefUncheckedUpdateWithoutPersonaInput>
    create: XOR<ContactoRefCreateWithoutPersonaInput, ContactoRefUncheckedCreateWithoutPersonaInput>
  }

  export type ContactoRefUpdateWithWhereUniqueWithoutPersonaInput = {
    where: ContactoRefWhereUniqueInput
    data: XOR<ContactoRefUpdateWithoutPersonaInput, ContactoRefUncheckedUpdateWithoutPersonaInput>
  }

  export type ContactoRefUpdateManyWithWhereWithoutPersonaInput = {
    where: ContactoRefScalarWhereInput
    data: XOR<ContactoRefUpdateManyMutationInput, ContactoRefUncheckedUpdateManyWithoutPersonaInput>
  }

  export type ContactoRefScalarWhereInput = {
    AND?: ContactoRefScalarWhereInput | ContactoRefScalarWhereInput[]
    OR?: ContactoRefScalarWhereInput[]
    NOT?: ContactoRefScalarWhereInput | ContactoRefScalarWhereInput[]
    id?: BigIntFilter<"ContactoRef"> | bigint | number
    id_persona?: BigIntFilter<"ContactoRef"> | bigint | number
    nombre?: StringFilter<"ContactoRef"> | string
    relacion?: StringFilter<"ContactoRef"> | string
    celular?: StringFilter<"ContactoRef"> | string
    created_at?: DateTimeFilter<"ContactoRef"> | Date | string
    updated_at?: DateTimeFilter<"ContactoRef"> | Date | string
    deleted_at?: DateTimeNullableFilter<"ContactoRef"> | Date | string | null
  }

  export type AlertaUpsertWithWhereUniqueWithoutPersonaInput = {
    where: AlertaWhereUniqueInput
    update: XOR<AlertaUpdateWithoutPersonaInput, AlertaUncheckedUpdateWithoutPersonaInput>
    create: XOR<AlertaCreateWithoutPersonaInput, AlertaUncheckedCreateWithoutPersonaInput>
  }

  export type AlertaUpdateWithWhereUniqueWithoutPersonaInput = {
    where: AlertaWhereUniqueInput
    data: XOR<AlertaUpdateWithoutPersonaInput, AlertaUncheckedUpdateWithoutPersonaInput>
  }

  export type AlertaUpdateManyWithWhereWithoutPersonaInput = {
    where: AlertaScalarWhereInput
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyWithoutPersonaInput>
  }

  export type AlertaScalarWhereInput = {
    AND?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
    OR?: AlertaScalarWhereInput[]
    NOT?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
    id?: BigIntFilter<"Alerta"> | bigint | number
    uuid?: StringFilter<"Alerta"> | string
    id_persona?: BigIntFilter<"Alerta"> | bigint | number
    id_municipio?: StringNullableFilter<"Alerta"> | string | null
    fecha_hora?: DateTimeFilter<"Alerta"> | Date | string
    nro_caso?: StringFilter<"Alerta"> | string
    estado?: EnumEstadoAlertaFilter<"Alerta"> | $Enums.EstadoAlerta
    origen?: EnumOrigenAlertaNullableFilter<"Alerta"> | $Enums.OrigenAlerta | null
    created_at?: DateTimeFilter<"Alerta"> | Date | string
    updated_at?: DateTimeFilter<"Alerta"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Alerta"> | Date | string | null
  }

  export type PersonaCreateWithoutContactos_refInput = {
    id?: bigint | number
    uuid?: string | null
    nombres: string
    ap_paterno: string
    ap_materno: string
    ci: string
    fecha_nac: Date | string
    celular: string
    correo: string
    empresa_telefonica: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    alertas?: AlertaCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutContactos_refInput = {
    id?: bigint | number
    uuid?: string | null
    nombres: string
    ap_paterno: string
    ap_materno: string
    ci: string
    fecha_nac: Date | string
    celular: string
    correo: string
    empresa_telefonica: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    alertas?: AlertaUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutContactos_refInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutContactos_refInput, PersonaUncheckedCreateWithoutContactos_refInput>
  }

  export type PersonaUpsertWithoutContactos_refInput = {
    update: XOR<PersonaUpdateWithoutContactos_refInput, PersonaUncheckedUpdateWithoutContactos_refInput>
    create: XOR<PersonaCreateWithoutContactos_refInput, PersonaUncheckedCreateWithoutContactos_refInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutContactos_refInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutContactos_refInput, PersonaUncheckedUpdateWithoutContactos_refInput>
  }

  export type PersonaUpdateWithoutContactos_refInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    fecha_nac?: DateTimeFieldUpdateOperationsInput | Date | string
    celular?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    empresa_telefonica?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alertas?: AlertaUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutContactos_refInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    fecha_nac?: DateTimeFieldUpdateOperationsInput | Date | string
    celular?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    empresa_telefonica?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alertas?: AlertaUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type AlertaCreateWithoutEventosInput = {
    id?: bigint | number
    uuid: string
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    persona: PersonaCreateNestedOneWithoutAlertasInput
    atencion?: AtencionCreateNestedOneWithoutAlertaInput
    cierre?: CierreAlertaCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaCreateNestedManyWithoutAlertaInput
  }

  export type AlertaUncheckedCreateWithoutEventosInput = {
    id?: bigint | number
    uuid: string
    id_persona: bigint | number
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion?: AtencionUncheckedCreateNestedOneWithoutAlertaInput
    cierre?: CierreAlertaUncheckedCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaUncheckedCreateNestedManyWithoutAlertaInput
  }

  export type AlertaCreateOrConnectWithoutEventosInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutEventosInput, AlertaUncheckedCreateWithoutEventosInput>
  }

  export type AlertaUpsertWithoutEventosInput = {
    update: XOR<AlertaUpdateWithoutEventosInput, AlertaUncheckedUpdateWithoutEventosInput>
    create: XOR<AlertaCreateWithoutEventosInput, AlertaUncheckedCreateWithoutEventosInput>
    where?: AlertaWhereInput
  }

  export type AlertaUpdateToOneWithWhereWithoutEventosInput = {
    where?: AlertaWhereInput
    data: XOR<AlertaUpdateWithoutEventosInput, AlertaUncheckedUpdateWithoutEventosInput>
  }

  export type AlertaUpdateWithoutEventosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: PersonaUpdateOneRequiredWithoutAlertasNestedInput
    atencion?: AtencionUpdateOneWithoutAlertaNestedInput
    cierre?: CierreAlertaUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUpdateManyWithoutAlertaNestedInput
  }

  export type AlertaUncheckedUpdateWithoutEventosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_persona?: BigIntFieldUpdateOperationsInput | bigint | number
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion?: AtencionUncheckedUpdateOneWithoutAlertaNestedInput
    cierre?: CierreAlertaUncheckedUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUncheckedUpdateManyWithoutAlertaNestedInput
  }

  export type PersonaCreateWithoutAlertasInput = {
    id?: bigint | number
    uuid?: string | null
    nombres: string
    ap_paterno: string
    ap_materno: string
    ci: string
    fecha_nac: Date | string
    celular: string
    correo: string
    empresa_telefonica: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    contactos_ref?: ContactoRefCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutAlertasInput = {
    id?: bigint | number
    uuid?: string | null
    nombres: string
    ap_paterno: string
    ap_materno: string
    ci: string
    fecha_nac: Date | string
    celular: string
    correo: string
    empresa_telefonica: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    contactos_ref?: ContactoRefUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutAlertasInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutAlertasInput, PersonaUncheckedCreateWithoutAlertasInput>
  }

  export type AtencionCreateWithoutAlertaInput = {
    id?: bigint | number
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion_funcionario?: AtencionFuncionarioCreateNestedManyWithoutAtencionInput
    ubicaciones_funcionario?: UbicacionFuncionarioCreateNestedManyWithoutAtencionInput
  }

  export type AtencionUncheckedCreateWithoutAlertaInput = {
    id?: bigint | number
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion_funcionario?: AtencionFuncionarioUncheckedCreateNestedManyWithoutAtencionInput
    ubicaciones_funcionario?: UbicacionFuncionarioUncheckedCreateNestedManyWithoutAtencionInput
  }

  export type AtencionCreateOrConnectWithoutAlertaInput = {
    where: AtencionWhereUniqueInput
    create: XOR<AtencionCreateWithoutAlertaInput, AtencionUncheckedCreateWithoutAlertaInput>
  }

  export type CierreAlertaCreateWithoutAlertaInput = {
    id?: bigint | number
    id_funcionario: string
    fecha_hora: Date | string
    comentario: string
    tipo_alerta: $Enums.TipoAlerta
    estado_victima: string
    nombre_agresor: string
    ci_agresor: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CierreAlertaUncheckedCreateWithoutAlertaInput = {
    id?: bigint | number
    id_funcionario: string
    fecha_hora: Date | string
    comentario: string
    tipo_alerta: $Enums.TipoAlerta
    estado_victima: string
    nombre_agresor: string
    ci_agresor: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CierreAlertaCreateOrConnectWithoutAlertaInput = {
    where: CierreAlertaWhereUniqueInput
    create: XOR<CierreAlertaCreateWithoutAlertaInput, CierreAlertaUncheckedCreateWithoutAlertaInput>
  }

  export type UbicacionAlertaCreateWithoutAlertaInput = {
    id?: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionAlertaUncheckedCreateWithoutAlertaInput = {
    id?: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionAlertaCreateOrConnectWithoutAlertaInput = {
    where: UbicacionAlertaWhereUniqueInput
    create: XOR<UbicacionAlertaCreateWithoutAlertaInput, UbicacionAlertaUncheckedCreateWithoutAlertaInput>
  }

  export type UbicacionAlertaCreateManyAlertaInputEnvelope = {
    data: UbicacionAlertaCreateManyAlertaInput | UbicacionAlertaCreateManyAlertaInput[]
    skipDuplicates?: boolean
  }

  export type EventoCreateWithoutAlertaInput = {
    id?: bigint | number
    id_funcionario: string
    id_seguimiento?: string | null
    fecha_hora: Date | string
    comentario: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type EventoUncheckedCreateWithoutAlertaInput = {
    id?: bigint | number
    id_funcionario: string
    id_seguimiento?: string | null
    fecha_hora: Date | string
    comentario: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type EventoCreateOrConnectWithoutAlertaInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutAlertaInput, EventoUncheckedCreateWithoutAlertaInput>
  }

  export type EventoCreateManyAlertaInputEnvelope = {
    data: EventoCreateManyAlertaInput | EventoCreateManyAlertaInput[]
    skipDuplicates?: boolean
  }

  export type PersonaUpsertWithoutAlertasInput = {
    update: XOR<PersonaUpdateWithoutAlertasInput, PersonaUncheckedUpdateWithoutAlertasInput>
    create: XOR<PersonaCreateWithoutAlertasInput, PersonaUncheckedCreateWithoutAlertasInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutAlertasInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutAlertasInput, PersonaUncheckedUpdateWithoutAlertasInput>
  }

  export type PersonaUpdateWithoutAlertasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    fecha_nac?: DateTimeFieldUpdateOperationsInput | Date | string
    celular?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    empresa_telefonica?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactos_ref?: ContactoRefUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutAlertasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    fecha_nac?: DateTimeFieldUpdateOperationsInput | Date | string
    celular?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    empresa_telefonica?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactos_ref?: ContactoRefUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type AtencionUpsertWithoutAlertaInput = {
    update: XOR<AtencionUpdateWithoutAlertaInput, AtencionUncheckedUpdateWithoutAlertaInput>
    create: XOR<AtencionCreateWithoutAlertaInput, AtencionUncheckedCreateWithoutAlertaInput>
    where?: AtencionWhereInput
  }

  export type AtencionUpdateToOneWithWhereWithoutAlertaInput = {
    where?: AtencionWhereInput
    data: XOR<AtencionUpdateWithoutAlertaInput, AtencionUncheckedUpdateWithoutAlertaInput>
  }

  export type AtencionUpdateWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion_funcionario?: AtencionFuncionarioUpdateManyWithoutAtencionNestedInput
    ubicaciones_funcionario?: UbicacionFuncionarioUpdateManyWithoutAtencionNestedInput
  }

  export type AtencionUncheckedUpdateWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion_funcionario?: AtencionFuncionarioUncheckedUpdateManyWithoutAtencionNestedInput
    ubicaciones_funcionario?: UbicacionFuncionarioUncheckedUpdateManyWithoutAtencionNestedInput
  }

  export type CierreAlertaUpsertWithoutAlertaInput = {
    update: XOR<CierreAlertaUpdateWithoutAlertaInput, CierreAlertaUncheckedUpdateWithoutAlertaInput>
    create: XOR<CierreAlertaCreateWithoutAlertaInput, CierreAlertaUncheckedCreateWithoutAlertaInput>
    where?: CierreAlertaWhereInput
  }

  export type CierreAlertaUpdateToOneWithWhereWithoutAlertaInput = {
    where?: CierreAlertaWhereInput
    data: XOR<CierreAlertaUpdateWithoutAlertaInput, CierreAlertaUncheckedUpdateWithoutAlertaInput>
  }

  export type CierreAlertaUpdateWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    tipo_alerta?: EnumTipoAlertaFieldUpdateOperationsInput | $Enums.TipoAlerta
    estado_victima?: StringFieldUpdateOperationsInput | string
    nombre_agresor?: StringFieldUpdateOperationsInput | string
    ci_agresor?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CierreAlertaUncheckedUpdateWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    tipo_alerta?: EnumTipoAlertaFieldUpdateOperationsInput | $Enums.TipoAlerta
    estado_victima?: StringFieldUpdateOperationsInput | string
    nombre_agresor?: StringFieldUpdateOperationsInput | string
    ci_agresor?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionAlertaUpsertWithWhereUniqueWithoutAlertaInput = {
    where: UbicacionAlertaWhereUniqueInput
    update: XOR<UbicacionAlertaUpdateWithoutAlertaInput, UbicacionAlertaUncheckedUpdateWithoutAlertaInput>
    create: XOR<UbicacionAlertaCreateWithoutAlertaInput, UbicacionAlertaUncheckedCreateWithoutAlertaInput>
  }

  export type UbicacionAlertaUpdateWithWhereUniqueWithoutAlertaInput = {
    where: UbicacionAlertaWhereUniqueInput
    data: XOR<UbicacionAlertaUpdateWithoutAlertaInput, UbicacionAlertaUncheckedUpdateWithoutAlertaInput>
  }

  export type UbicacionAlertaUpdateManyWithWhereWithoutAlertaInput = {
    where: UbicacionAlertaScalarWhereInput
    data: XOR<UbicacionAlertaUpdateManyMutationInput, UbicacionAlertaUncheckedUpdateManyWithoutAlertaInput>
  }

  export type UbicacionAlertaScalarWhereInput = {
    AND?: UbicacionAlertaScalarWhereInput | UbicacionAlertaScalarWhereInput[]
    OR?: UbicacionAlertaScalarWhereInput[]
    NOT?: UbicacionAlertaScalarWhereInput | UbicacionAlertaScalarWhereInput[]
    id?: BigIntFilter<"UbicacionAlerta"> | bigint | number
    id_alerta?: BigIntFilter<"UbicacionAlerta"> | bigint | number
    fecha_hora?: DateTimeFilter<"UbicacionAlerta"> | Date | string
    latitud?: DecimalFilter<"UbicacionAlerta"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"UbicacionAlerta"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"UbicacionAlerta"> | Date | string
    updated_at?: DateTimeFilter<"UbicacionAlerta"> | Date | string
    deleted_at?: DateTimeNullableFilter<"UbicacionAlerta"> | Date | string | null
  }

  export type EventoUpsertWithWhereUniqueWithoutAlertaInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutAlertaInput, EventoUncheckedUpdateWithoutAlertaInput>
    create: XOR<EventoCreateWithoutAlertaInput, EventoUncheckedCreateWithoutAlertaInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutAlertaInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutAlertaInput, EventoUncheckedUpdateWithoutAlertaInput>
  }

  export type EventoUpdateManyWithWhereWithoutAlertaInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutAlertaInput>
  }

  export type EventoScalarWhereInput = {
    AND?: EventoScalarWhereInput | EventoScalarWhereInput[]
    OR?: EventoScalarWhereInput[]
    NOT?: EventoScalarWhereInput | EventoScalarWhereInput[]
    id?: BigIntFilter<"Evento"> | bigint | number
    id_alerta?: BigIntFilter<"Evento"> | bigint | number
    id_funcionario?: StringFilter<"Evento"> | string
    id_seguimiento?: StringNullableFilter<"Evento"> | string | null
    fecha_hora?: DateTimeFilter<"Evento"> | Date | string
    comentario?: StringFilter<"Evento"> | string
    created_at?: DateTimeFilter<"Evento"> | Date | string
    updated_at?: DateTimeFilter<"Evento"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Evento"> | Date | string | null
  }

  export type AlertaCreateWithoutAtencionInput = {
    id?: bigint | number
    uuid: string
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    persona: PersonaCreateNestedOneWithoutAlertasInput
    cierre?: CierreAlertaCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaCreateNestedManyWithoutAlertaInput
    eventos?: EventoCreateNestedManyWithoutAlertaInput
  }

  export type AlertaUncheckedCreateWithoutAtencionInput = {
    id?: bigint | number
    uuid: string
    id_persona: bigint | number
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    cierre?: CierreAlertaUncheckedCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaUncheckedCreateNestedManyWithoutAlertaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutAlertaInput
  }

  export type AlertaCreateOrConnectWithoutAtencionInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutAtencionInput, AlertaUncheckedCreateWithoutAtencionInput>
  }

  export type AtencionFuncionarioCreateWithoutAtencionInput = {
    id?: bigint | number
    encargado: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    funcionario?: FuncionariosCreateNestedOneWithoutAtencion_funcionarioInput
  }

  export type AtencionFuncionarioUncheckedCreateWithoutAtencionInput = {
    id?: bigint | number
    id_funcionario?: string | null
    encargado: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AtencionFuncionarioCreateOrConnectWithoutAtencionInput = {
    where: AtencionFuncionarioWhereUniqueInput
    create: XOR<AtencionFuncionarioCreateWithoutAtencionInput, AtencionFuncionarioUncheckedCreateWithoutAtencionInput>
  }

  export type AtencionFuncionarioCreateManyAtencionInputEnvelope = {
    data: AtencionFuncionarioCreateManyAtencionInput | AtencionFuncionarioCreateManyAtencionInput[]
    skipDuplicates?: boolean
  }

  export type UbicacionFuncionarioCreateWithoutAtencionInput = {
    id?: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionFuncionarioUncheckedCreateWithoutAtencionInput = {
    id?: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionFuncionarioCreateOrConnectWithoutAtencionInput = {
    where: UbicacionFuncionarioWhereUniqueInput
    create: XOR<UbicacionFuncionarioCreateWithoutAtencionInput, UbicacionFuncionarioUncheckedCreateWithoutAtencionInput>
  }

  export type UbicacionFuncionarioCreateManyAtencionInputEnvelope = {
    data: UbicacionFuncionarioCreateManyAtencionInput | UbicacionFuncionarioCreateManyAtencionInput[]
    skipDuplicates?: boolean
  }

  export type AlertaUpsertWithoutAtencionInput = {
    update: XOR<AlertaUpdateWithoutAtencionInput, AlertaUncheckedUpdateWithoutAtencionInput>
    create: XOR<AlertaCreateWithoutAtencionInput, AlertaUncheckedCreateWithoutAtencionInput>
    where?: AlertaWhereInput
  }

  export type AlertaUpdateToOneWithWhereWithoutAtencionInput = {
    where?: AlertaWhereInput
    data: XOR<AlertaUpdateWithoutAtencionInput, AlertaUncheckedUpdateWithoutAtencionInput>
  }

  export type AlertaUpdateWithoutAtencionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: PersonaUpdateOneRequiredWithoutAlertasNestedInput
    cierre?: CierreAlertaUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUpdateManyWithoutAlertaNestedInput
    eventos?: EventoUpdateManyWithoutAlertaNestedInput
  }

  export type AlertaUncheckedUpdateWithoutAtencionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_persona?: BigIntFieldUpdateOperationsInput | bigint | number
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cierre?: CierreAlertaUncheckedUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUncheckedUpdateManyWithoutAlertaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutAlertaNestedInput
  }

  export type AtencionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput = {
    where: AtencionFuncionarioWhereUniqueInput
    update: XOR<AtencionFuncionarioUpdateWithoutAtencionInput, AtencionFuncionarioUncheckedUpdateWithoutAtencionInput>
    create: XOR<AtencionFuncionarioCreateWithoutAtencionInput, AtencionFuncionarioUncheckedCreateWithoutAtencionInput>
  }

  export type AtencionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput = {
    where: AtencionFuncionarioWhereUniqueInput
    data: XOR<AtencionFuncionarioUpdateWithoutAtencionInput, AtencionFuncionarioUncheckedUpdateWithoutAtencionInput>
  }

  export type AtencionFuncionarioUpdateManyWithWhereWithoutAtencionInput = {
    where: AtencionFuncionarioScalarWhereInput
    data: XOR<AtencionFuncionarioUpdateManyMutationInput, AtencionFuncionarioUncheckedUpdateManyWithoutAtencionInput>
  }

  export type UbicacionFuncionarioUpsertWithWhereUniqueWithoutAtencionInput = {
    where: UbicacionFuncionarioWhereUniqueInput
    update: XOR<UbicacionFuncionarioUpdateWithoutAtencionInput, UbicacionFuncionarioUncheckedUpdateWithoutAtencionInput>
    create: XOR<UbicacionFuncionarioCreateWithoutAtencionInput, UbicacionFuncionarioUncheckedCreateWithoutAtencionInput>
  }

  export type UbicacionFuncionarioUpdateWithWhereUniqueWithoutAtencionInput = {
    where: UbicacionFuncionarioWhereUniqueInput
    data: XOR<UbicacionFuncionarioUpdateWithoutAtencionInput, UbicacionFuncionarioUncheckedUpdateWithoutAtencionInput>
  }

  export type UbicacionFuncionarioUpdateManyWithWhereWithoutAtencionInput = {
    where: UbicacionFuncionarioScalarWhereInput
    data: XOR<UbicacionFuncionarioUpdateManyMutationInput, UbicacionFuncionarioUncheckedUpdateManyWithoutAtencionInput>
  }

  export type UbicacionFuncionarioScalarWhereInput = {
    AND?: UbicacionFuncionarioScalarWhereInput | UbicacionFuncionarioScalarWhereInput[]
    OR?: UbicacionFuncionarioScalarWhereInput[]
    NOT?: UbicacionFuncionarioScalarWhereInput | UbicacionFuncionarioScalarWhereInput[]
    id?: BigIntFilter<"UbicacionFuncionario"> | bigint | number
    id_atencion?: BigIntFilter<"UbicacionFuncionario"> | bigint | number
    fecha_hora?: DateTimeFilter<"UbicacionFuncionario"> | Date | string
    latitud?: DecimalFilter<"UbicacionFuncionario"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"UbicacionFuncionario"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"UbicacionFuncionario"> | Date | string
    updated_at?: DateTimeFilter<"UbicacionFuncionario"> | Date | string
    deleted_at?: DateTimeNullableFilter<"UbicacionFuncionario"> | Date | string | null
  }

  export type AtencionCreateWithoutAtencion_funcionarioInput = {
    id?: bigint | number
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    alerta: AlertaCreateNestedOneWithoutAtencionInput
    ubicaciones_funcionario?: UbicacionFuncionarioCreateNestedManyWithoutAtencionInput
  }

  export type AtencionUncheckedCreateWithoutAtencion_funcionarioInput = {
    id?: bigint | number
    id_alerta: bigint | number
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ubicaciones_funcionario?: UbicacionFuncionarioUncheckedCreateNestedManyWithoutAtencionInput
  }

  export type AtencionCreateOrConnectWithoutAtencion_funcionarioInput = {
    where: AtencionWhereUniqueInput
    create: XOR<AtencionCreateWithoutAtencion_funcionarioInput, AtencionUncheckedCreateWithoutAtencion_funcionarioInput>
  }

  export type FuncionariosCreateWithoutAtencion_funcionarioInput = {
    id?: string
    grado: string
    nombres: string
    ap_paterno: string
    ap_materno: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type FuncionariosUncheckedCreateWithoutAtencion_funcionarioInput = {
    id?: string
    grado: string
    nombres: string
    ap_paterno: string
    ap_materno: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type FuncionariosCreateOrConnectWithoutAtencion_funcionarioInput = {
    where: FuncionariosWhereUniqueInput
    create: XOR<FuncionariosCreateWithoutAtencion_funcionarioInput, FuncionariosUncheckedCreateWithoutAtencion_funcionarioInput>
  }

  export type AtencionUpsertWithoutAtencion_funcionarioInput = {
    update: XOR<AtencionUpdateWithoutAtencion_funcionarioInput, AtencionUncheckedUpdateWithoutAtencion_funcionarioInput>
    create: XOR<AtencionCreateWithoutAtencion_funcionarioInput, AtencionUncheckedCreateWithoutAtencion_funcionarioInput>
    where?: AtencionWhereInput
  }

  export type AtencionUpdateToOneWithWhereWithoutAtencion_funcionarioInput = {
    where?: AtencionWhereInput
    data: XOR<AtencionUpdateWithoutAtencion_funcionarioInput, AtencionUncheckedUpdateWithoutAtencion_funcionarioInput>
  }

  export type AtencionUpdateWithoutAtencion_funcionarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alerta?: AlertaUpdateOneRequiredWithoutAtencionNestedInput
    ubicaciones_funcionario?: UbicacionFuncionarioUpdateManyWithoutAtencionNestedInput
  }

  export type AtencionUncheckedUpdateWithoutAtencion_funcionarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ubicaciones_funcionario?: UbicacionFuncionarioUncheckedUpdateManyWithoutAtencionNestedInput
  }

  export type FuncionariosUpsertWithoutAtencion_funcionarioInput = {
    update: XOR<FuncionariosUpdateWithoutAtencion_funcionarioInput, FuncionariosUncheckedUpdateWithoutAtencion_funcionarioInput>
    create: XOR<FuncionariosCreateWithoutAtencion_funcionarioInput, FuncionariosUncheckedCreateWithoutAtencion_funcionarioInput>
    where?: FuncionariosWhereInput
  }

  export type FuncionariosUpdateToOneWithWhereWithoutAtencion_funcionarioInput = {
    where?: FuncionariosWhereInput
    data: XOR<FuncionariosUpdateWithoutAtencion_funcionarioInput, FuncionariosUncheckedUpdateWithoutAtencion_funcionarioInput>
  }

  export type FuncionariosUpdateWithoutAtencion_funcionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FuncionariosUncheckedUpdateWithoutAtencion_funcionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    ap_paterno?: StringFieldUpdateOperationsInput | string
    ap_materno?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertaCreateWithoutUbicacionesInput = {
    id?: bigint | number
    uuid: string
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    persona: PersonaCreateNestedOneWithoutAlertasInput
    atencion?: AtencionCreateNestedOneWithoutAlertaInput
    cierre?: CierreAlertaCreateNestedOneWithoutAlertaInput
    eventos?: EventoCreateNestedManyWithoutAlertaInput
  }

  export type AlertaUncheckedCreateWithoutUbicacionesInput = {
    id?: bigint | number
    uuid: string
    id_persona: bigint | number
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion?: AtencionUncheckedCreateNestedOneWithoutAlertaInput
    cierre?: CierreAlertaUncheckedCreateNestedOneWithoutAlertaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutAlertaInput
  }

  export type AlertaCreateOrConnectWithoutUbicacionesInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutUbicacionesInput, AlertaUncheckedCreateWithoutUbicacionesInput>
  }

  export type AlertaUpsertWithoutUbicacionesInput = {
    update: XOR<AlertaUpdateWithoutUbicacionesInput, AlertaUncheckedUpdateWithoutUbicacionesInput>
    create: XOR<AlertaCreateWithoutUbicacionesInput, AlertaUncheckedCreateWithoutUbicacionesInput>
    where?: AlertaWhereInput
  }

  export type AlertaUpdateToOneWithWhereWithoutUbicacionesInput = {
    where?: AlertaWhereInput
    data: XOR<AlertaUpdateWithoutUbicacionesInput, AlertaUncheckedUpdateWithoutUbicacionesInput>
  }

  export type AlertaUpdateWithoutUbicacionesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: PersonaUpdateOneRequiredWithoutAlertasNestedInput
    atencion?: AtencionUpdateOneWithoutAlertaNestedInput
    cierre?: CierreAlertaUpdateOneWithoutAlertaNestedInput
    eventos?: EventoUpdateManyWithoutAlertaNestedInput
  }

  export type AlertaUncheckedUpdateWithoutUbicacionesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_persona?: BigIntFieldUpdateOperationsInput | bigint | number
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion?: AtencionUncheckedUpdateOneWithoutAlertaNestedInput
    cierre?: CierreAlertaUncheckedUpdateOneWithoutAlertaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutAlertaNestedInput
  }

  export type AlertaCreateWithoutCierreInput = {
    id?: bigint | number
    uuid: string
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    persona: PersonaCreateNestedOneWithoutAlertasInput
    atencion?: AtencionCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaCreateNestedManyWithoutAlertaInput
    eventos?: EventoCreateNestedManyWithoutAlertaInput
  }

  export type AlertaUncheckedCreateWithoutCierreInput = {
    id?: bigint | number
    uuid: string
    id_persona: bigint | number
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion?: AtencionUncheckedCreateNestedOneWithoutAlertaInput
    ubicaciones?: UbicacionAlertaUncheckedCreateNestedManyWithoutAlertaInput
    eventos?: EventoUncheckedCreateNestedManyWithoutAlertaInput
  }

  export type AlertaCreateOrConnectWithoutCierreInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutCierreInput, AlertaUncheckedCreateWithoutCierreInput>
  }

  export type AlertaUpsertWithoutCierreInput = {
    update: XOR<AlertaUpdateWithoutCierreInput, AlertaUncheckedUpdateWithoutCierreInput>
    create: XOR<AlertaCreateWithoutCierreInput, AlertaUncheckedCreateWithoutCierreInput>
    where?: AlertaWhereInput
  }

  export type AlertaUpdateToOneWithWhereWithoutCierreInput = {
    where?: AlertaWhereInput
    data: XOR<AlertaUpdateWithoutCierreInput, AlertaUncheckedUpdateWithoutCierreInput>
  }

  export type AlertaUpdateWithoutCierreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: PersonaUpdateOneRequiredWithoutAlertasNestedInput
    atencion?: AtencionUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUpdateManyWithoutAlertaNestedInput
    eventos?: EventoUpdateManyWithoutAlertaNestedInput
  }

  export type AlertaUncheckedUpdateWithoutCierreInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_persona?: BigIntFieldUpdateOperationsInput | bigint | number
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion?: AtencionUncheckedUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUncheckedUpdateManyWithoutAlertaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutAlertaNestedInput
  }

  export type AtencionCreateWithoutUbicaciones_funcionarioInput = {
    id?: bigint | number
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    alerta: AlertaCreateNestedOneWithoutAtencionInput
    atencion_funcionario?: AtencionFuncionarioCreateNestedManyWithoutAtencionInput
  }

  export type AtencionUncheckedCreateWithoutUbicaciones_funcionarioInput = {
    id?: bigint | number
    id_alerta: bigint | number
    usuario_despachador: string
    id_vehiculo: string
    sigla_radio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atencion_funcionario?: AtencionFuncionarioUncheckedCreateNestedManyWithoutAtencionInput
  }

  export type AtencionCreateOrConnectWithoutUbicaciones_funcionarioInput = {
    where: AtencionWhereUniqueInput
    create: XOR<AtencionCreateWithoutUbicaciones_funcionarioInput, AtencionUncheckedCreateWithoutUbicaciones_funcionarioInput>
  }

  export type AtencionUpsertWithoutUbicaciones_funcionarioInput = {
    update: XOR<AtencionUpdateWithoutUbicaciones_funcionarioInput, AtencionUncheckedUpdateWithoutUbicaciones_funcionarioInput>
    create: XOR<AtencionCreateWithoutUbicaciones_funcionarioInput, AtencionUncheckedCreateWithoutUbicaciones_funcionarioInput>
    where?: AtencionWhereInput
  }

  export type AtencionUpdateToOneWithWhereWithoutUbicaciones_funcionarioInput = {
    where?: AtencionWhereInput
    data: XOR<AtencionUpdateWithoutUbicaciones_funcionarioInput, AtencionUncheckedUpdateWithoutUbicaciones_funcionarioInput>
  }

  export type AtencionUpdateWithoutUbicaciones_funcionarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alerta?: AlertaUpdateOneRequiredWithoutAtencionNestedInput
    atencion_funcionario?: AtencionFuncionarioUpdateManyWithoutAtencionNestedInput
  }

  export type AtencionUncheckedUpdateWithoutUbicaciones_funcionarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_alerta?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_despachador?: StringFieldUpdateOperationsInput | string
    id_vehiculo?: StringFieldUpdateOperationsInput | string
    sigla_radio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion_funcionario?: AtencionFuncionarioUncheckedUpdateManyWithoutAtencionNestedInput
  }

  export type AtencionFuncionarioCreateManyFuncionarioInput = {
    id?: bigint | number
    id_atencion: bigint | number
    encargado: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AtencionFuncionarioUpdateWithoutFuncionarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion?: AtencionUpdateOneRequiredWithoutAtencion_funcionarioNestedInput
  }

  export type AtencionFuncionarioUncheckedUpdateWithoutFuncionarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_atencion?: BigIntFieldUpdateOperationsInput | bigint | number
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AtencionFuncionarioUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_atencion?: BigIntFieldUpdateOperationsInput | bigint | number
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactoRefCreateManyPersonaInput = {
    id?: bigint | number
    nombre: string
    relacion: string
    celular: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AlertaCreateManyPersonaInput = {
    id?: bigint | number
    uuid: string
    id_municipio?: string | null
    fecha_hora: Date | string
    nro_caso: string
    estado: $Enums.EstadoAlerta
    origen?: $Enums.OrigenAlerta | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ContactoRefUpdateWithoutPersonaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactoRefUncheckedUpdateWithoutPersonaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactoRefUncheckedUpdateManyWithoutPersonaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    relacion?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertaUpdateWithoutPersonaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion?: AtencionUpdateOneWithoutAlertaNestedInput
    cierre?: CierreAlertaUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUpdateManyWithoutAlertaNestedInput
    eventos?: EventoUpdateManyWithoutAlertaNestedInput
  }

  export type AlertaUncheckedUpdateWithoutPersonaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atencion?: AtencionUncheckedUpdateOneWithoutAlertaNestedInput
    cierre?: CierreAlertaUncheckedUpdateOneWithoutAlertaNestedInput
    ubicaciones?: UbicacionAlertaUncheckedUpdateManyWithoutAlertaNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutAlertaNestedInput
  }

  export type AlertaUncheckedUpdateManyWithoutPersonaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_municipio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    nro_caso?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    origen?: NullableEnumOrigenAlertaFieldUpdateOperationsInput | $Enums.OrigenAlerta | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionAlertaCreateManyAlertaInput = {
    id?: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type EventoCreateManyAlertaInput = {
    id?: bigint | number
    id_funcionario: string
    id_seguimiento?: string | null
    fecha_hora: Date | string
    comentario: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionAlertaUpdateWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionAlertaUncheckedUpdateWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionAlertaUncheckedUpdateManyWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventoUpdateWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    id_seguimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventoUncheckedUpdateWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    id_seguimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventoUncheckedUpdateManyWithoutAlertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: StringFieldUpdateOperationsInput | string
    id_seguimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AtencionFuncionarioCreateManyAtencionInput = {
    id?: bigint | number
    id_funcionario?: string | null
    encargado: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UbicacionFuncionarioCreateManyAtencionInput = {
    id?: bigint | number
    fecha_hora: Date | string
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AtencionFuncionarioUpdateWithoutAtencionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    funcionario?: FuncionariosUpdateOneWithoutAtencion_funcionarioNestedInput
  }

  export type AtencionFuncionarioUncheckedUpdateWithoutAtencionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: NullableStringFieldUpdateOperationsInput | string | null
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AtencionFuncionarioUncheckedUpdateManyWithoutAtencionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_funcionario?: NullableStringFieldUpdateOperationsInput | string | null
    encargado?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionFuncionarioUpdateWithoutAtencionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionFuncionarioUncheckedUpdateWithoutAtencionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UbicacionFuncionarioUncheckedUpdateManyWithoutAtencionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}