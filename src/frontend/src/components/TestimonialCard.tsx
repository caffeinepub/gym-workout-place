import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export function TestimonialCard({ name, role, content, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{content}"</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
