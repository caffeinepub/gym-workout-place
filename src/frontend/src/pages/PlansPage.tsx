import { Section } from '../components/Section';
import { PricingCard } from '../components/PricingCard';
import { usePageTitle } from '../hooks/usePageTitle';

const plans = [
  {
    title: 'Monthly Plan',
    price: 'Contact Us',
    features: [
      'Full gym access',
      'All workout programs',
      'Trainer guidance',
      'Flexible timings',
      'Locker facilities',
    ],
  },
  {
    title: 'Quarterly Plan',
    price: 'Contact Us',
    features: [
      'Full gym access',
      'All workout programs',
      'Trainer guidance',
      'Flexible timings',
      'Locker facilities',
      'Free fitness assessment',
    ],
    highlighted: true,
  },
  {
    title: 'Half-Yearly Plan',
    price: 'Contact Us',
    features: [
      'Full gym access',
      'All workout programs',
      'Trainer guidance',
      'Flexible timings',
      'Locker facilities',
      'Free fitness assessment',
      '2 personal training sessions',
    ],
  },
  {
    title: 'Yearly Plan',
    price: 'Contact Us',
    features: [
      'Full gym access',
      'All workout programs',
      'Trainer guidance',
      'Flexible timings',
      'Locker facilities',
      'Free fitness assessment',
      '4 personal training sessions',
      'Nutrition consultation',
    ],
  },
];

export function PlansPage() {
  usePageTitle('Membership Plans');

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 text-center">
        <h1 className="mb-6">Membership Plans</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the plan that fits your lifestyle and fitness goals
        </p>
      </Section>

      {/* Pricing Grid */}
      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">All Plans Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold mb-2">Full Gym Access</h3>
              <p className="text-muted-foreground text-sm">
                Unlimited access to all gym equipment and facilities during operating hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">All Workout Programs</h3>
              <p className="text-muted-foreground text-sm">
                Access to all our specialized training programs and group classes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Trainer Guidance</h3>
              <p className="text-muted-foreground text-sm">
                Professional support and guidance from our certified trainers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Flexible Timings</h3>
              <p className="text-muted-foreground text-sm">
                Train at your convenience with our extended operating hours.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
