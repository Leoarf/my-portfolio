import { getCVData } from './pdfGenerator/cvData';
import { getHTMLTemplate } from './pdfGenerator/pdfStyling';
import {
  createTempElement,
  generatePDFFromElement,
} from './pdfGenerator/pdfUtils';

export const generatePDF = async (language: 'pt' | 'en'): Promise<void> => {
  const data = getCVData(language);
  const html = getHTMLTemplate(data, language);
  const element = createTempElement(html);

  document.body.appendChild(element);

  try {
    const filename = `Leonardo_Araujo_Fonseca_CV_${language.toUpperCase()}.pdf`;
    await generatePDFFromElement(element, filename);
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw new Error(
      language === 'pt' ? 'Falha ao gerar PDF' : 'Failed to generate PDF'
    );
  } finally {
    document.body.removeChild(element);
  }
};
