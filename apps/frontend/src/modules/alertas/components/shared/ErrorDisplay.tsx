import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ErrorDisplayProps {
  error: string;
}

export function ErrorDisplay({ error }: ErrorDisplayProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-2 text-red-600">
          <AlertTriangle className="size-5" />
          <span>{error}</span>
        </div>
      </CardContent>
    </Card>
  );
}
