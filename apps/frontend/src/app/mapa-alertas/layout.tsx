'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useAlertSocket } from '@/modules/notificaciones/hooks/useAlertaSocket';
import AlertaNotificaciones from '@/modules/notificaciones/components/AlertaNotificaciones';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { alertasPendientes } = useAlertSocket();
  const cantidadPendientes = alertasPendientes.length;

  // Debug log
  // console.log('Layout - alertasPendientes:', alertasPendientes);
  // console.log('Layout - cantidadPendientes:', cantidadPendientes);
  return (
    <main className="flex h-full w-full flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-full hover:bg-muted transition-colors relative" aria-label="Notificaciones">
                <Bell className="w-5 h-5" />
                {cantidadPendientes > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cantidadPendientes > 99 ? '99+' : cantidadPendientes}
                  </Badge>
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle className="flex items-start gap-2">
                  <Bell className="w-5 h-5" />
                  Alertas Pendientes
                  {cantidadPendientes > 0 && <Badge variant="destructive">{cantidadPendientes}</Badge>}
                </SheetTitle>
                <SheetDescription>Alertas de emergencia que requieren atención inmediata.</SheetDescription>
              </SheetHeader>
              <AlertaNotificaciones />
            </SheetContent>
          </Sheet>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Monitoreo</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Mapa de Alertas</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      {children}
    </main>
  );
}
