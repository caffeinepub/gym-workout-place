import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitContactForm } from '../hooks/useQueries';
import { Loader2, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !contact.trim() || !message.trim()) {
      return;
    }

    try {
      await submitMutation.mutateAsync({ name, contact, message });
      setSubmitted(true);
      setName('');
      setContact('');
      setMessage('');
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  if (submitted) {
    return (
      <Card className="border-primary/50 bg-card/50 backdrop-blur">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              We've received your message and will get back to you soon.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="contact">Email or Phone *</Label>
            <Input
              id="contact"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              placeholder="your@email.com or phone number"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Tell us about your fitness goals..."
              rows={5}
              className="mt-1"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
