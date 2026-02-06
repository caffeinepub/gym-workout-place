import { Section } from '../components/Section';
import { TrainerCard } from '../components/TrainerCard';
import { usePageTitle } from '../hooks/usePageTitle';

const trainers = [
  {
    name: 'Alex Rodriguez',
    image: '/assets/generated/trainer-1.dim_1200x1200.png',
    specialty: 'Strength & Conditioning Coach',
  },
  {
    name: 'Jessica Martinez',
    image: '/assets/generated/trainer-2.dim_1200x1200.png',
    specialty: 'Nutrition & Fitness Expert',
  },
  {
    name: 'David Thompson',
    image: '/assets/generated/trainer-3.dim_1200x1200.png',
    specialty: 'CrossFit & HIIT Specialist',
  },
];

export function TrainersPage() {
  usePageTitle('Trainers');

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 text-center">
        <h1 className="mb-6">Meet Our Trainers</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our certified fitness professionals are here to guide you every step of the way
        </p>
      </Section>

      {/* Trainers Grid */}
      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.name}
              name={trainer.name}
              image={trainer.image}
              specialty={trainer.specialty}
            />
          ))}
        </div>
      </Section>

      {/* Info Section */}
      <Section className="bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Expert Guidance for Your Journey</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            All our trainers are certified fitness professionals with years of experience in helping clients achieve their goals. Whether you're looking to lose weight, build muscle, or improve your overall fitness, our team has the expertise to create a personalized plan that works for you.
          </p>
          <p className="text-muted-foreground">
            Book a consultation today and start your transformation with professional support.
          </p>
        </div>
      </Section>
    </>
  );
}
