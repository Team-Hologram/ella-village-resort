import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSection';
import ExperiencePreview from '@/components/home/ExperiencePreview';
import Tradit from '@/components/home/TraditionalFestivals';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ExperiencePreview />
      <Tradit/>
      <CTASection />
    </>
  );
}