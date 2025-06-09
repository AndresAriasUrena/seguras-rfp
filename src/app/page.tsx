// src/app/page.tsx

'use client';

import { Navigation } from '@/components/ui/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { SummarySection } from '@/components/sections/SummarySection';
import TechnologySection from '@/components/sections/TechnologySection';
import PricingSection from '@/components/sections/PricingSection';
import TimelineSection from '@/components/sections/TimelineSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <SummarySection />
        <TechnologySection />
        <PricingSection />
        <TimelineSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}