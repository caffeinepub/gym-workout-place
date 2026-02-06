import { Section } from '../components/Section';
import { ProgramCard } from '../components/ProgramCard';
import { usePageTitle } from '../hooks/usePageTitle';

const programs = [
  {
    title: 'Strength Training',
    description: 'Build muscle mass and increase overall strength with progressive resistance training. Perfect for those looking to develop power and muscular endurance.',
    image: '/assets/generated/program-strength.dim_1600x1000.png',
  },
  {
    title: 'Weight Training',
    description: 'Comprehensive weight lifting programs designed to sculpt your physique. Learn proper form and technique from certified professionals.',
    image: '/assets/generated/program-weight.dim_1600x1000.png',
  },
  {
    title: 'Cardio Training',
    description: 'Improve cardiovascular health and endurance with varied cardio workouts. From treadmills to rowing machines, we have it all.',
    image: '/assets/generated/program-cardio.dim_1600x1000.png',
  },
  {
    title: 'CrossFit Training',
    description: 'High-intensity functional movements that build strength, speed, and agility. Join our CrossFit community for challenging group workouts.',
    image: '/assets/generated/program-crossfit.dim_1600x1000.png',
  },
  {
    title: 'Functional Training',
    description: 'Train movements that help you perform everyday activities with ease. Improve balance, coordination, and overall functional fitness.',
    image: '/assets/generated/program-functional.dim_1600x1000.png',
  },
  {
    title: 'Fat Loss Program',
    description: 'Scientifically designed program combining cardio and strength training to maximize fat burning. Achieve sustainable weight loss results.',
    image: '/assets/generated/program-fatloss.dim_1600x1000.png',
  },
  {
    title: 'Muscle Gain Program',
    description: 'Structured hypertrophy training to build lean muscle mass. Includes nutrition guidance and progressive overload principles.',
    image: '/assets/generated/program-musclegain.dim_1600x1000.png',
  },
  {
    title: 'HIIT Workout',
    description: 'High-Intensity Interval Training for maximum calorie burn in minimal time. Perfect for busy schedules and rapid results.',
    image: '/assets/generated/program-hiit.dim_1600x1000.png',
  },
  {
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your specific goals and fitness level. Get personalized attention and customized workout plans.',
    image: '/assets/generated/program-personaltraining.dim_1600x1000.png',
  },
];

export function ProgramsPage() {
  usePageTitle('Programs');

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 text-center">
        <h1 className="mb-6">Our Programs</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose from our comprehensive range of training programs designed to help you achieve your fitness goals
        </p>
      </Section>

      {/* Programs Grid */}
      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              image={program.image}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
