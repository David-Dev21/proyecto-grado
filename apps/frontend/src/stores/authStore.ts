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
      setToken: (token: string | null) =>
        set((state) => ({
          token,
          isAuthenticated: !!token && !!state.userData,
        })),

      setUserData: (userData: UserData | null) =>
        set((state) => ({
          userData,
          isAuthenticated: !!state.token && !!userData,
        })),

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

      setSystemData: (systemData: SystemData | null) => set({ systemData }),

      logout: () =>
        set({
          token: null,
          userData: null,
          systemData: null,
          isAuthenticated: false,
        }),

      setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({
        token: state.token,
        userData: state.userData,
        systemData: state.systemData,
        isAuthenticated: state.isAuthenticated,
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
