'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

export function ScrollIndicator() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      scrollText: 'Role para ver mais',
    },
    en: {
      scrollText: 'Scroll to see more',
    },
  };

  const t = texts[language];

  return (
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10"
    >
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {t.scrollText}
        </span>
        <div className="w-5 h-8 border border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </div>
      </div>
    </motion.div>
  );
}
