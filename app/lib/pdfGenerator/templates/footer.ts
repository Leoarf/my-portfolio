import { CVData } from '../types';

export const getFooterHTML = (data: CVData, language: 'pt' | 'en'): string => `
  <div class="footer">
    <div>📍 ${
      language === 'pt'
        ? 'Disponível para oportunidades presenciais no Brasil e remotas em todo o mundo'
        : 'Available for on-site opportunities in Brazil and remote roles worldwide.'
    }</div>
    <div style="margin-top: 5px;">${
      language === 'pt' ? 'Gerado em' : 'Generated on'
    } ${data.generatedDate}</div>
  </div>
`;
