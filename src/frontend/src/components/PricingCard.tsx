import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

interface PricingCardProps {
  title: string;
  price?: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({ title, price, features, highlighted = false }: PricingCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      className={`border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all ${
        highlighted ? 'border-primary shadow-glow-red' : ''
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        {price && <p className="text-3xl font-bold text-primary mt-2">{price}</p>}
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          onClick={() => navigate({ to: '/contact' })}
          variant={highlighted ? 'default' : 'outline'}
          className="w-full"
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
