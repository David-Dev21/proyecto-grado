import { Phone } from 'lucide-react';
import { ContactoRefBackend } from '../../types/Alerta';

interface ContactosReferenciaProps {
  contactos: ContactoRefBackend[] | null | undefined;
}

export function ContactosReferencia({ contactos }: ContactosReferenciaProps) {
  return (
    <div className="flex items-start gap-3">
      <Phone className="h-4 w-4 text-muted-foreground mt-1" />
      <div className="flex-1">
        <p className="text-sm font-medium text-muted-foreground mb-2">Contactos de referencia</p>
        {contactos && contactos.length > 0 ? (
          <div className="grid grid-cols-1 gap-2">
            {contactos.map((contacto, index) => (
              <div key={contacto.id || index} className="bg-muted/50 p-3 rounded-md border">
                <p className="text-sm font-medium text-foreground">{contacto.nombre}</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>Relación: {contacto.relacion}</div>
                  <div>Tel: {contacto.celular}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Sin contactos registrados</p>
        )}
      </div>
    </div>
  );
}
