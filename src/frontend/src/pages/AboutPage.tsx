import { Section } from '../components/Section';
import { Target, TrendingUp, Zap } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

export function AboutPage() {
  usePageTitle('About Us');

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/about-hero.dim_2000x1200.png"
            alt="Gym interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-center md:text-left">About Us</h1>
        </div>
      </section>

      {/* Mission Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            Gym Workout Place is a professional fitness center dedicated to helping people build strength, confidence, and a healthy lifestyle. Our mission is to provide quality training, a motivating environment, and result-oriented workout programs.
          </p>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
              <Target className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Discipline</h3>
            <p className="text-muted-foreground">
              We believe in the power of consistent effort and dedication to achieve lasting results.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
              <TrendingUp className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Consistency</h3>
            <p className="text-muted-foreground">
              Regular training and commitment are the keys to transforming your body and mind.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
              <Zap className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Results</h3>
            <p className="text-muted-foreground">
              We focus on delivering measurable outcomes that exceed your expectations.
            </p>
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-center">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded with a passion for fitness and a commitment to excellence, Gym Workout Place has become a trusted destination for individuals seeking to transform their lives through fitness.
            </p>
            <p>
              Our state-of-the-art facility features the latest equipment, experienced trainers, and a supportive community that motivates you to push beyond your limits. Whether you're a beginner taking your first steps or an experienced athlete looking to reach new heights, we provide the tools, guidance, and environment you need to succeed.
            </p>
            <p>
              We're more than just a gym – we're a community dedicated to helping you become the best version of yourself.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
