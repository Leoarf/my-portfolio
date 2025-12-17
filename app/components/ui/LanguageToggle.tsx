'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface LanguageToggleProps {
  variant?: 'desktop' | 'mobile';
  showText?: boolean;
}

export function LanguageToggle({
  variant = 'desktop',
  showText = true,
}: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage();

  const isPortuguese = language === 'pt';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className={`
        flex items-center gap-2 rounded-full transition-colors
        ${
          variant === 'desktop'
            ? 'px-3 py-1.5 lg:px-4 lg:py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            : 'p-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
        }
      `}
      aria-label={`Alternar para ${isPortuguese ? 'inglês' : 'português'}`}
      title={`Idioma atual: ${isPortuguese ? 'Português' : 'Inglês'}`}
    >
      <Globe className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600 dark:text-blue-400" />

      {showText && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden xl:inline">
          {isPortuguese ? 'Português' : 'English'}
        </span>
      )}
      {/* Switch toggle */}
      <div className="flex items-center">
        <span
          className={`text-xs lg:text-sm font-medium px-0.5 lg:px-1 ${
            isPortuguese ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
          }`}
        >
          PT
        </span>
        <div className="relative w-8 h-5 lg:w-10 lg:h-6 mx-0.5 lg:mx-1">
          <div
            className={`absolute top-0 left-0 w-full h-full rounded-full transition-colors ${
              isPortuguese
                ? 'bg-gray-300 dark:bg-gray-700'
                : 'bg-blue-600 dark:bg-blue-500'
            }`}
          />
          <motion.div
            animate={{ x: isPortuguese ? 0 : 12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute top-0.5 left-0.5 w-4 h-4 lg:top-1 lg:left-1 lg:w-4 lg:h-4 bg-white rounded-full shadow-md"
          />
        </div>
        <span
          className={`text-xs lg:text-sm font-medium px-0.5 lg:px-1 ${
            !isPortuguese ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
          }`}
        >
          EN
        </span>
      </div>
    </motion.button>
  );
}
