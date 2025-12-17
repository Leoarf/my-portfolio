'use client';

import { HeroContent } from './hero/HeroContent';
import { HeroCard } from './hero/HeroCard';
import { ScrollIndicator } from './hero/ScrollIndicator';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-20 lg:pb-8"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <HeroContent />
          <HeroCard />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
