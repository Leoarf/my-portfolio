import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDFFromElement = async (
  element: HTMLElement,
  filename: string
): Promise<void> => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
  });

  const imgData = canvas.toDataURL('image/png');
  const imgWidth = 210;
  const pageHeight = 297;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  // First Page
  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  // Additional pages if needed
  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(filename);
};

export const createTempElement = (html: string): HTMLElement => {
  const element = document.createElement('div');
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.top = '0';
  element.style.width = '210mm';
  element.style.padding = '20mm';
  element.style.background = 'white';
  element.style.color = 'black';
  element.style.fontFamily = "'Helvetica', 'Arial', sans-serif";
  element.style.fontSize = '12px';
  element.style.lineHeight = '1.5';
  element.innerHTML = html;

  return element;
};
