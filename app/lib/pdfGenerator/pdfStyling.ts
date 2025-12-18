import { CVData } from './types';
import { getStyles } from './templates/styles';
import { getHeaderHTML } from './templates/header';
import { getFooterHTML } from './templates/footer';
import {
  getAboutSectionHTML,
  getSkillsSectionHTML,
  getExperienceSectionHTML,
  getEducationSectionHTML,
  getProjectsSectionHTML,
  getGoalsSectionHTML,
  getDifferentialsSectionHTML,
  getLanguagesSectionHTML,
} from './templates/sections';

export const getHTMLTemplate = (
  data: CVData,
  language: 'pt' | 'en'
): string => {
  return `
    ${getStyles()}
    
    <div class="cv-container">
      <!-- Page 1 -->
      ${getHeaderHTML(data)}
      ${getAboutSectionHTML(data, language)}
      ${getSkillsSectionHTML(data, language)}
      ${getExperienceSectionHTML(data, language)}
      ${getEducationSectionHTML(data, language)}
      <!-- Page break -->
      <div class="page-break"></div>
      <!-- Page 2 -->
      ${getProjectsSectionHTML(data, language)}
      ${getGoalsSectionHTML(data, language)}
      ${getDifferentialsSectionHTML(data, language)}
      ${getLanguagesSectionHTML(data, language)}
      ${getFooterHTML(data, language)}
    </div>
  `;
};
