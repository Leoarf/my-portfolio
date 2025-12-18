import { CVData } from '../types';

export const getAboutSectionHTML = (
  data: CVData,
  language: 'pt' | 'en'
): string => `
  <div class="section">
    <div class="section-title">${language === 'pt' ? 'SOBRE' : 'ABOUT'}</div>
    <p style="font-size: 11px; line-height: 1.5;">${data.about}</p>
  </div>
`;

export const getSkillsSectionHTML = (
  data: CVData,
  language: 'pt' | 'en'
): string => `
  <div class="section">
    <div class="section-title">${
      language === 'pt' ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS'
    }</div>
    <div class="skills-grid">
      <div class="skill-category">
        <strong>Frontend:</strong>
        <span style="font-size: 10px;">${data.skills.frontend.join(', ')}</span>
      </div>
      <div class="skill-category">
        <strong>Backend:</strong>
        <span style="font-size: 10px;">${data.skills.backend.join(', ')}</span>
      </div>
      <div class="skill-category">
        <strong>Mobile:</strong>
        <span style="font-size: 10px;">${data.skills.mobile.join(', ')}</span>
      </div>
      <div class="skill-category">
        <strong>DevOps:</strong>
        <span style="font-size: 10px;">${data.skills.devops.join(', ')}</span>
      </div>
      <div class="skill-category" style="grid-column: span 2;">
        <strong>${
          language === 'pt'
            ? 'Habilidades Complementares'
            : 'Complementary Skills'
        }:</strong>
        <span style="font-size: 10px;">${data.skills.complementary.join(
          ', '
        )}</span>
      </div>
    </div>
  </div>
`;

export const getExperienceSectionHTML = (
  data: CVData,
  language: 'pt' | 'en'
): string => `
  <div class="section">
    <div class="section-title">${
      language === 'pt' ? 'EXPERIÊNCIA PROFISSIONAL' : 'PROFESSIONAL EXPERIENCE'
    }</div>
    ${data.experience
      .map(
        (exp) => `
      <div class="experience-item">
        <div class="job-title">${exp.title}</div>
        <div class="company-period">${exp.company} | ${exp.period}</div>
        <ul class="bullet-points">
          ${exp.points.map((point) => `<li>${point}</li>`).join('')}
        </ul>
      </div>
    `
      )
      .join('')}
  </div>
`;

export const getEducationSectionHTML = (
  data: CVData,
  language: 'pt' | 'en'
): string => `
  <div class="section">
    <div class="section-title">${
      language === 'pt' ? 'FORMAÇÃO ACADÊMICA' : 'EDUCATION'
    }</div>
    ${data.education
      .map(
        (edu) => `
      <div class="education-item">
        <div class="job-title">${edu.degree}</div>
        <div class="company-period">${edu.institution} | ${edu.period}</div>
      </div>
    `
      )
      .join('')}
  </div>
`;

export const getProjectsSectionHTML = (
  data: CVData,
  language: 'pt' | 'en'
): string => `
  <div class="section">
    <div class="section-title">${
      language === 'pt' ? 'PROJETOS DESTACADOS' : 'FEATURED PROJECTS'
    }</div>
    ${data.projects
      .map(
        (project) => `
      <div class="project-item">
        <div class="project-name">${project.name}</div>
        <div class="project-desc">${project.description}</div>
        <div class="project-tech">${project.technologies.join(' • ')}</div>
      </div>
    `
      )
      .join('')}
  </div>
`;

export const getGoalsSectionHTML = (
  data: CVData,
  language: 'pt' | 'en'
): string => `
  <div class="section">
    <div class="section-title">${
      language === 'pt' ? 'OBJETIVOS PROFISSIONAIS' : 'PROFESSIONAL GOALS'
    }</div>
    <p style="font-size: 11px; line-height: 1.5;">${data.goals}</p>
  </div>
`;

export const getDifferentialsSectionHTML = (
  data: CVData,
  language: 'pt' | 'en'
): string => `
  <div class="section">
    <div class="section-title">${
      language === 'pt' ? 'DIFERENCIAIS' : 'DIFFERENTIALS'
    }</div>
    <ul class="bullet-points">
      ${data.differentials.map((diff) => `<li>${diff}</li>`).join('')}
    </ul>
  </div>
`;

export const getLanguagesSectionHTML = (
  data: CVData,
  language: 'pt' | 'en'
): string => `
  <div class="section">
    <div class="section-title">${
      language === 'pt' ? 'IDIOMAS' : 'LANGUAGES'
    }</div>
    <ul class="bullet-points">
      ${data.languages.map((lang) => `<li>${lang}</li>`).join('')}
    </ul>
  </div>
`;
