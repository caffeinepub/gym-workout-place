import { type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  asChild?: boolean;
}

export function CtaButton({
  children,
  onClick,
  variant = 'default',
  size = 'default',
  className,
  asChild,
}: CtaButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      className={cn('font-semibold', className)}
      asChild={asChild}
    >
      {children}
    </Button>
  );
}
