import { Card, CardContent } from '@/components/ui/card';
import { Award, TrendingUp, Users } from 'lucide-react';

interface TrainerCardProps {
  name: string;
  image: string;
  specialty?: string;
}

export function TrainerCard({ name, image, specialty = 'Fitness Coach' }: TrainerCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all group">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{specialty}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="h-4 w-4 text-primary" />
            <span>Certified Fitness Coach</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>Experience in weight loss & muscle building</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>Personal training support</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
