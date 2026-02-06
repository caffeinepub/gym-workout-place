import { useNavigate } from '@tanstack/react-router';
import { Section } from '../components/Section';
import { CtaButton } from '../components/CtaButton';
import { FeatureIconCard } from '../components/FeatureIconCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Award, Dumbbell, DollarSign, ArrowRight } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

export function HomePage() {
  usePageTitle('Home');
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/home-hero.dim_2400x1350.png"
            alt="Gym interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        <div className="container-custom relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">
              Transform Your Body. Transform Your Life.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Join Gym Workout Place and achieve your fitness goals with expert trainers and modern equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <CtaButton size="lg" onClick={() => navigate({ to: '/plans' })}>
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </CtaButton>
              <CtaButton
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: '/contact' })}
              >
                Free Trial
              </CtaButton>
              <CtaButton
                size="lg"
                variant="secondary"
                onClick={() => navigate({ to: '/contact' })}
              >
                Contact Us
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide everything you need to achieve your fitness goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureIconCard
            icon={<Award className="h-8 w-8" />}
            title="Certified Trainers"
            description="Our expert trainers are certified professionals dedicated to helping you reach your goals safely and effectively."
          />
          <FeatureIconCard
            icon={<Dumbbell className="h-8 w-8" />}
            title="Modern Equipment"
            description="State-of-the-art fitness equipment and facilities designed for optimal performance and results."
          />
          <FeatureIconCard
            icon={<DollarSign className="h-8 w-8" />}
            title="Affordable Plans"
            description="Flexible membership options that fit your budget without compromising on quality or service."
          />
        </div>
      </Section>

      {/* Popular Workouts */}
      <Section id="workouts">
        <div className="text-center mb-12">
          <h2 className="mb-4">Popular Workouts</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our most popular training programs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Strength Training',
              image: '/assets/generated/program-strength.dim_1600x1000.png',
              description: 'Build muscle and increase strength with our comprehensive strength training program.',
            },
            {
              title: 'HIIT Workout',
              image: '/assets/generated/program-hiit.dim_1600x1000.png',
              description: 'High-intensity interval training for maximum calorie burn and cardiovascular fitness.',
            },
            {
              title: 'Personal Training',
              image: '/assets/generated/program-personaltraining.dim_1600x1000.png',
              description: 'One-on-one coaching tailored to your specific goals and fitness level.',
            },
          ].map((program) => (
            <div
              key={program.title}
              className="group cursor-pointer"
              onClick={() => navigate({ to: '/programs' })}
            >
              <div className="aspect-video overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all mb-4">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">{program.title}</h3>
              <p className="text-muted-foreground text-sm">{program.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CtaButton onClick={() => navigate({ to: '/programs' })}>
            View All Programs
          </CtaButton>
        </div>
      </Section>

      {/* Member Transformations */}
      <Section className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">Member Transformations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real members
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur">
            <img
              src="/assets/generated/transformation-1.dim_1600x900.png"
              alt="Member transformation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur">
            <img
              src="/assets/generated/transformation-2.dim_1600x900.png"
              alt="Member transformation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Our Members Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="Member since 2024"
            content="Best gym I've ever joined! The trainers are amazing and the equipment is top-notch. I've lost 15kg in 6 months!"
          />
          <TestimonialCard
            name="Michael Chen"
            role="Member since 2023"
            content="The personal training sessions have completely transformed my fitness journey. Highly recommend to anyone serious about results."
          />
          <TestimonialCard
            name="Emma Williams"
            role="Member since 2025"
            content="Great atmosphere, friendly staff, and excellent facilities. The variety of programs keeps me motivated every day."
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary/20 to-primary/10 text-center">
        <h2 className="mb-6">Ready to Start Your Transformation?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join hundreds of members who have already transformed their lives
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CtaButton size="lg" onClick={() => navigate({ to: '/plans' })}>
            View Membership Plans
          </CtaButton>
          <CtaButton
            size="lg"
            variant="outline"
            onClick={() => navigate({ to: '/contact' })}
          >
            Schedule Free Trial
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
