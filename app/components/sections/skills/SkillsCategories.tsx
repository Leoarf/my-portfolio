'use client';

import { useLanguage } from '../../../context/LanguageContext';
import { getSkillsData } from './constants';
import { SkillCategory } from './SkillCategory';

export function SkillsCategories() {
  const { language } = useLanguage();
  const skillsData = getSkillsData(language);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {Object.values(skillsData).map((category, index) => (
        <SkillCategory key={category.title} category={category} index={index} />
      ))}
    </div>
  );
}
