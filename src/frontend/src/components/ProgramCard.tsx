import { Card, CardContent } from '@/components/ui/card';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
}

export function ProgramCard({ title, description, image }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all group">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
