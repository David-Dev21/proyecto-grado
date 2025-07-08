'use client';

import { usePathname } from 'next/navigation';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import AlertaPantalla from '@/modules/alertas/components/AlertaPantalla';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Rutas donde NO queremos mostrar el sidebar
  const noSidebarRoutes = ['/auth/initialize'];
  const shouldHideSidebar = noSidebarRoutes.some((route) => pathname.startsWith(route));

  if (shouldHideSidebar) {
    return <>{children}</>;
  }

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
      <AlertaPantalla />
    </>
  );
}
