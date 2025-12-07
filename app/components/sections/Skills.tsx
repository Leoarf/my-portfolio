'use client';

import { SkillsHeader } from './skills/SkillsHeader';
import { SkillsCategories } from './skills/SkillsCategories';
import { ComplementarySkills } from './skills/ComplementarySkills';
import { SkillsFooter } from './skills/SkillsFooter';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-100/10 dark:bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-100/10 dark:bg-purple-500/5 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SkillsHeader />
        <SkillsCategories />
        <ComplementarySkills />
        <SkillsFooter />
      </div>
    </section>
  );
}
