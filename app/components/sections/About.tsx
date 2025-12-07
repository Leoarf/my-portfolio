'use client';

import { AboutHeader } from './about/AboutHeader';
import { AboutJourney } from './about/AboutJourney';
import { AboutEducation } from './about/AboutEducation';
import { AboutSkills } from './about/AboutSkills';
import { AboutExperience } from './about/AboutExperience';
import { AboutGoals } from './about/AboutGoals';

export default function About() {
  return (
    <section id="sobre" className="relative py-20">
      {/* Adicione um overlay suave para transição */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/30 to-transparent dark:via-gray-900/30" />
      {/* Very subtle decorative elements, just for this section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.03) 0%, transparent 40%)
          `,
        }}
      />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <AboutHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div className="space-y-8">
            <AboutJourney />
            <AboutEducation />
          </div>
          {/* Right column */}
          <div className="space-y-8">
            <AboutSkills />
            <AboutExperience />
            <AboutGoals />
          </div>
        </div>
      </div>
    </section>
  );
}
