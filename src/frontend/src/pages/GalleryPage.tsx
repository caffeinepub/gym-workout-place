import { Section } from '../components/Section';
import { GalleryGrid, GalleryImage } from '../components/GalleryGrid';
import { usePageTitle } from '../hooks/usePageTitle';

export function GalleryPage() {
  usePageTitle('Gallery');

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 text-center">
        <h1 className="mb-6">Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Take a look at our state-of-the-art facilities and vibrant community
        </p>
      </Section>

      {/* Gallery Sections */}
      <Section className="pt-0">
        <GalleryGrid title="Gym Interior">
          <GalleryImage
            src="/assets/generated/gallery-interior-1.dim_1600x1000.png"
            alt="Gym interior view 1"
          />
          <GalleryImage
            src="/assets/generated/gallery-interior-2.dim_1600x1000.png"
            alt="Gym interior view 2"
          />
          <GalleryImage
            src="/assets/generated/about-hero.dim_2000x1200.png"
            alt="Gym interior view 3"
          />
        </GalleryGrid>

        <GalleryGrid title="Workout Sessions">
          <GalleryImage
            src="/assets/generated/gallery-workout-1.dim_1600x1000.png"
            alt="Workout session 1"
          />
          <GalleryImage
            src="/assets/generated/gallery-workout-2.dim_1600x1000.png"
            alt="Workout session 2"
          />
          <GalleryImage
            src="/assets/generated/program-strength.dim_1600x1000.png"
            alt="Workout session 3"
          />
        </GalleryGrid>

        <GalleryGrid title="Equipment">
          <GalleryImage
            src="/assets/generated/gallery-equipment-1.dim_1600x1000.png"
            alt="Gym equipment 1"
          />
          <GalleryImage
            src="/assets/generated/gallery-equipment-2.dim_1600x1000.png"
            alt="Gym equipment 2"
          />
          <GalleryImage
            src="/assets/generated/program-weight.dim_1600x1000.png"
            alt="Gym equipment 3"
          />
        </GalleryGrid>

        <GalleryGrid title="Client Workout Moments">
          <GalleryImage
            src="/assets/generated/gallery-client-1.dim_1600x1000.png"
            alt="Client workout moment 1"
          />
          <GalleryImage
            src="/assets/generated/gallery-client-2.dim_1600x1000.png"
            alt="Client workout moment 2"
          />
          <GalleryImage
            src="/assets/generated/program-hiit.dim_1600x1000.png"
            alt="Client workout moment 3"
          />
        </GalleryGrid>
      </Section>
    </>
  );
}
