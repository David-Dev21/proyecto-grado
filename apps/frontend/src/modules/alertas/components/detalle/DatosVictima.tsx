import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, FileText, Phone, Calendar } from 'lucide-react';
import { PersonaBackend } from '../../types/Alerta';
import { ContactosReferencia } from './ContactosReferencia';

interface DatosVictimaProps {
  persona: PersonaBackend;
  codDenuncia?: string;
}

export function DatosVictima({ persona, codDenuncia }: DatosVictimaProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center gap-3">
          <User className="size-5 text-blue-600" />
          <CardTitle className="text-lg">DATOS DE LA VÍCTIMA</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="" alt="Víctima" />
            <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-lg font-semibold">
              {persona?.nombres?.charAt(0) || 'N'}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{persona?.nombres || 'N/A'}</h3>
            <p className="text-sm text-muted-foreground">Víctima de la alerta</p>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Cédula de Identidad</p>
              <p className="text-foreground">{persona?.ci || 'N/A'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Teléfono Celular</p>
              <p className="text-foreground">{persona?.celular || 'N/A'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Fecha de Nacimiento</p>
              <p className="text-foreground">{persona?.fecha_nac ? new Date(persona.fecha_nac).toLocaleDateString() : 'N/A'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Número de caso</p>
              <p className="text-foreground font-mono">{codDenuncia || 'N/A'}</p>
            </div>
          </div>
          <ContactosReferencia contactos={persona?.contactos_ref} />
        </div>
      </CardContent>
    </Card>
  );
}
