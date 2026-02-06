import { Section } from '../components/Section';
import { ContactForm } from '../components/ContactForm';
import { BusinessInfo } from '../components/BusinessInfo';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../components/DesignSystem';
import { usePageTitle } from '../hooks/usePageTitle';

export function ContactPage() {
  usePageTitle('Contact Us');

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber.replace(/\s/g, '')}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${BUSINESS_INFO.phoneNumber}`;
  };

  const handleMap = () => {
    window.open(BUSINESS_INFO.googleMapsUrl, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 text-center">
        <h1 className="mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Get in touch with us to start your fitness journey today
        </p>
      </Section>

      {/* Contact Section */}
      <Section className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <BusinessInfo />

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full justify-start"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                className="w-full justify-start"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button
                onClick={handleMap}
                variant="outline"
                className="w-full justify-start"
                size="lg"
              >
                <MapPin className="mr-2 h-5 w-5" />
                View on Google Maps
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-card/30">
        <div className="text-center">
          <h2 className="mb-6">Visit Us</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Come visit our facility and experience the difference. Our team is ready to help you achieve your fitness goals.
          </p>
          <Button onClick={handleMap} size="lg">
            Get Directions
          </Button>
        </div>
      </Section>
    </>
  );
}
