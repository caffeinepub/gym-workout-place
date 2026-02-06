import { useBusinessInfo } from '../hooks/useQueries';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function BusinessInfo() {
  const { data: phone } = useBusinessInfo('phone');
  const { data: address } = useBusinessInfo('address');
  const { data: hours } = useBusinessInfo('hours');

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Address</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {address || 'Loading...'}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Phone</h4>
            <p className="text-sm text-muted-foreground">
              {phone || 'Loading...'}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold mb-1">Opening Hours</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {hours || 'Loading...'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
