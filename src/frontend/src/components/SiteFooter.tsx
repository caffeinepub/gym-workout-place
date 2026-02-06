import { Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { SITE_NAME, SOCIAL_LINKS } from './DesignSystem';

const iconMap = {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">{SITE_NAME}</h3>
            <p className="text-sm text-muted-foreground">
              Transform your body and mind with expert training and modern facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="/programs" className="hover:text-foreground transition-colors">Programs</a></li>
              <li><a href="/trainers" className="hover:text-foreground transition-colors">Trainers</a></li>
              <li><a href="/plans" className="hover:text-foreground transition-colors">Membership</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-primary" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
