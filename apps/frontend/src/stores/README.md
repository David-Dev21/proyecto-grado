# Sistema de Autenticación con Zustand

Este sistema proporciona una solución completa de autenticación usando Zustand para el manejo de estado y localStorage para la persistencia.

## Archivos Creados

### 1. Store Principal (`src/stores/authStore.ts`)

- **Propósito**: Define el store de Zustand para manejar el estado de autenticación
- **Funciones principales**:
  - `setToken(token)`: Establece el token de autenticación
  - `setUserData(userData)`: Establece los datos del usuario
  - `setRoles(roles)`: Establece los roles del usuario
  - `setModules(modules)`: Establece los módulos disponibles
  - `setPermissions(permissions)`: Establece los permisos del usuario
  - `setSystemData(systemData)`: Establece todos los datos del sistema
  - `logout()`: Limpia todos los datos de autenticación

### 2. Hook de Hidratación (`src/hooks/useAuthHydration.ts`)

- **Propósito**: Lee los datos de localStorage y los carga en el store de Zustand
- **Características**:
  - Se ejecuta automáticamente cuando la app arranca
  - Lee `authToken`, `userData` y `systemData` desde localStorage
  - Maneja errores de parsing graciosamente
  - Solo se ejecuta una vez usando un flag de hidratación

### 3. Proveedor de Hidratación (`src/components/AuthHydrationProvider.tsx`)

- **Propósito**: Componente que ejecuta la hidratación en el árbol de React
- **Uso**: Envuelve la aplicación en el layout principal
- **Características**: No renderiza nada adicional, solo ejecuta el hook

### 4. Hook de Autenticación (`src/hooks/useAuth.ts`)

- **Propósito**: Hook conveniente para acceder a todos los datos de autenticación
- **Características**:
  - Proporciona acceso fácil a todos los datos del store
  - Incluye helpers como `hasRole()`, `hasPermission()`, `hasModule()`
  - Valores por defecto seguros para evitar errores
  - Datos calculados como `fullName`

## Cómo Funciona

1. **Arranque de la Aplicación**:

   - El `AuthHydrationProvider` se ejecuta en el layout principal
   - El hook `useAuthHydration` lee los datos de localStorage
   - Los datos se cargan en el store de Zustand

2. **Persistencia**:

   - Los datos se guardan tanto en localStorage como en el store
   - El store de Zustand tiene persistencia automática configurada
   - Los datos persisten entre recargas de página

3. **Acceso a los Datos**:
   - Cualquier componente puede usar `useAuth()` para acceder a los datos
   - Los datos están disponibles inmediatamente después de la hidratación
   - No hay necesidad de verificar localStorage manualmente

## Uso Básico

```tsx
import { useAuth } from '@/hooks/useAuth';

export default function MyComponent() {
  const { user, token, system, isAuthenticated, hasRole, hasPermission } = useAuth();

  if (!isAuthenticated) {
    return <div>No autenticado</div>;
  }

  return (
    <div>
      <h1>Bienvenido, {user.fullName}!</h1>
      <p>Token: {token}</p>
      <p>Roles: {system.roles.join(', ')}</p>

      {hasRole('admin') && <button>Panel de Administrador</button>}
    </div>
  );
}
```

## Integración Completada

- ✅ Store de Zustand creado con todas las funciones requeridas
- ✅ Hook de hidratación que lee desde localStorage
- ✅ Proveedor integrado en el layout principal
- ✅ Hook conveniente para acceder a los datos
- ✅ Página de inicialización actualizada para usar el store
- ✅ Ejemplos de uso documentados

## Flujo de Datos

1. Usuario inicia sesión → Datos se guardan en localStorage
2. App arranca → `useAuthHydration` lee localStorage → Datos se cargan en Zustand
3. Componentes usan `useAuth()` → Acceden a los datos del store
4. Logout → Store se limpia → localStorage se limpia

El sistema es completamente automático y no requiere configuración adicional.
