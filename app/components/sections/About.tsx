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
      {/* Minimum decorative elements for this section */}
      <div className="absolute inset-0 pointer-events-none">
        {/* A subtle circle to mark the section */}
        <div className="absolute left-1/4 top-1/4 w-32 h-32 rounded-full bg-blue-100/10 dark:bg-blue-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-32 h-32 rounded-full bg-purple-100/10 dark:bg-purple-500/5 blur-3xl" />
      </div>
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
