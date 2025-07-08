import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserData {
  name: string;
  lastName: string;
  fullName: string;
  email: string;
  imageUser: string;
  userId: string;
  username: string;
  active: boolean;
  verified: boolean;
  createdAt: string;
  lastAccess: string;
  unidad: {
    unidadId: number;
    abreviacion: string;
    organismoId: number;
    organismoFullName: string;
  };
}

interface ModuleData {
  name: string;
  path: string;
  icon: string;
  order: number;
  children: any[];
}

interface RoleData {
  name: string;
}

interface SystemData {
  name: string;
  roles: RoleData[];
  modules: ModuleData[];
  permissions: any[];
}

interface AuthStore {
  // Estado
  token: string | null;
  userData: UserData | null;
  systemData: SystemData | null;
  isAuthenticated: boolean;

  // Acciones
  setToken: (token: string | null) => void;
  setUserData: (userData: UserData | null) => void;
  setRoles: (roles: RoleData[]) => void;
  setModules: (modules: ModuleData[]) => void;
  setPermissions: (permissions: any[]) => void;
  setSystemData: (systemData: SystemData | null) => void;
  logout: () => void;
  isHydrated: boolean;
  setHydrated: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Estado inicial
      token: null,
      userData: null,
      systemData: null,
      isAuthenticated: false,
      isHydrated: false,

      // Acciones
      setToken: (token: string | null) => {
        set((state) => ({
          token,
          isAuthenticated: !!token && !!state.userData,
        }));

        // Guardar token en localStorage
        if (typeof window !== 'undefined') {
          if (token) {
            localStorage.setItem('authToken', token);
            // También en cookie para middleware
            document.cookie = `authToken=${token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`;
          } else {
            localStorage.removeItem('authToken');
            document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
          }
        }
      },

      setUserData: (userData: UserData | null) => {
        set((state) => ({
          userData,
          isAuthenticated: !!state.token && !!userData,
        }));

        // Guardar userData en sessionStorage
        if (typeof window !== 'undefined') {
          if (userData) {
            sessionStorage.setItem('userData', JSON.stringify(userData));
          } else {
            sessionStorage.removeItem('userData');
          }
        }
      },

      setRoles: (roles: RoleData[]) =>
        set((state) => ({
          systemData: state.systemData ? { ...state.systemData, roles } : { name: '', roles, modules: [], permissions: [] },
        })),

      setModules: (modules: ModuleData[]) =>
        set((state) => ({
          systemData: state.systemData ? { ...state.systemData, modules } : { name: '', roles: [], modules, permissions: [] },
        })),

      setPermissions: (permissions: any[]) =>
        set((state) => ({
          systemData: state.systemData ? { ...state.systemData, permissions } : { name: '', roles: [], modules: [], permissions },
        })),

      setSystemData: (systemData: SystemData | null) => {
        set({ systemData });

        // Guardar systemData en sessionStorage
        if (typeof window !== 'undefined') {
          if (systemData) {
            sessionStorage.setItem('systemData', JSON.stringify(systemData));
          } else {
            sessionStorage.removeItem('systemData');
          }
        }
      },

      logout: () => {
        set({
          token: null,
          userData: null,
          systemData: null,
          isAuthenticated: false,
        });

        // Limpiar storages
        if (typeof window !== 'undefined') {
          localStorage.removeItem('authToken');
          sessionStorage.removeItem('userData');
          sessionStorage.removeItem('systemData');
          document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
      },

      setHydrated: () => {
        set({ isHydrated: true });

        // Cargar datos desde storages al hidratar
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('authToken');
          const userData = sessionStorage.getItem('userData');
          const systemData = sessionStorage.getItem('systemData');

          if (token || userData || systemData) {
            set({
              token: token || null,
              userData: userData ? JSON.parse(userData) : null,
              systemData: systemData ? JSON.parse(systemData) : null,
              isAuthenticated: !!(token && userData),
            });
          }
        }
      },
    }),
    {
      name: 'auth-store',
      // Solo persistir isHydrated en Zustand
      partialize: (state) => ({
        isHydrated: state.isHydrated,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated();
        }
      },
    },
  ),
);

// Tipos exportados para uso en otros archivos
export type { UserData, SystemData, AuthStore };
