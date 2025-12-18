export const getStyles = (): string => `
  <style>
    .cv-container { max-width: 100%; font-family: 'Helvetica', 'Arial', sans-serif; }
    .header { text-align: center; margin-bottom: 25px; border-bottom: 2px solid #3b82f6; padding-bottom: 15px; }
    .name { font-size: 24px; font-weight: bold; color: #1e40af; margin-bottom: 5px; }
    .title { font-size: 16px; color: #4b5563; margin-bottom: 15px; }
    .contact-info { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; font-size: 10px; color: #6b7280; margin-bottom: 20px; }
    .contact-item { display: flex; align-items: center; gap: 5px; }
    .section { margin-bottom: 20px; break-inside: avoid; }
    .section-title { font-size: 14px; font-weight: bold; color: #1e40af; border-bottom: 1px solid #d1d5db; padding-bottom: 8px; margin-bottom: 12px; }
    .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 15px; }
    .skill-category { margin-bottom: 10px; }
    .skill-category strong { color: #374151; display: block; margin-bottom: 3px; }
    .experience-item, .education-item { margin-bottom: 15px; }
    .job-title { font-weight: bold; color: #374151; font-size: 12px; }
    .company-period { font-style: italic; color: #6b7280; font-size: 11px; margin: 3px 0; }
    .bullet-points { padding-left: 20px; margin-top: 5px; }
    .bullet-points li { margin-bottom: 4px; font-size: 11px; line-height: 1.4; }
    .project-item { margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed #e5e7eb; }
    .project-name { font-weight: bold; color: #374151; font-size: 12px; }
    .project-desc { font-size: 11px; color: #4b5563; margin: 3px 0; }
    .project-tech { font-size: 10px; color: #6b7280; font-style: italic; }
    .footer { margin-top: 25px; padding-top: 15px; border-top: 1px solid #d1d5db; text-align: center; font-size: 9px; color: #6b7280; }
    .page-break { page-break-before: always; }
  </style>
`;
