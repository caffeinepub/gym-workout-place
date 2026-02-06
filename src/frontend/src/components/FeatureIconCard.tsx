import { type ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureIconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureIconCard({ icon, title, description }: FeatureIconCardProps) {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
