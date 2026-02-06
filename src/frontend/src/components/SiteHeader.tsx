import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_ITEMS, SITE_NAME } from './DesignSystem';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom flex h-16 items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span>{SITE_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: 'text-primary' }}
            >
              {item.label}
            </Link>
          ))}
          <Button
            onClick={() => navigate({ to: '/plans' })}
            size="sm"
            className="ml-2"
          >
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container-custom py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                activeProps={{ className: 'text-primary' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                navigate({ to: '/plans' });
                setMobileMenuOpen(false);
              }}
              size="sm"
              className="w-full"
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
