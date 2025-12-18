'use client';

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { generatePDF } from '@/app/lib/pdfGenerator';

interface CVDownloadButtonProps {
  language: 'pt' | 'en';
  className?: string;
}

export const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({
  language,
  className = '',
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await generatePDF(language);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert(
        language === 'pt'
          ? 'Erro ao gerar PDF. Por favor, tente novamente.'
          : 'Error generating PDF. Please try again.'
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const buttonText = {
    pt: 'Baixar CV',
    en: 'Download CV',
  };

  const loadingText = {
    pt: 'Gerando PDF...',
    en: 'Generating PDF...',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleDownload}
      disabled={isDownloading}
      className={`
        w-full sm:w-auto px-6 py-3 
        bg-linear-to-r from-emerald-600 to-emerald-700 
        dark:from-emerald-500 dark:to-emerald-600 
        text-white rounded-lg font-semibold 
        flex items-center justify-center gap-2 
        hover:shadow-lg transition-all shadow-md
        disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
      aria-label={
        language === 'pt' ? 'Baixar currículo em PDF' : 'Download resume in PDF'
      }
    >
      {isDownloading ? (
        <>
          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          <span className="whitespace-nowrap">{loadingText[language]}</span>
        </>
      ) : (
        <>
          <Download className="h-5 w-5 shrink-0" />
          <span className="whitespace-nowrap">{buttonText[language]}</span>
        </>
      )}
    </motion.button>
  );
};
