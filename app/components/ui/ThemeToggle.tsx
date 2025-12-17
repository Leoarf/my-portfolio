'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../lib/useTheme';
import { useLanguage } from '../../context/LanguageContext';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const { language } = useLanguage();

  const texts = {
    pt: {
      dark: 'Escuro',
      light: 'Claro',
      toggleToDark: 'Alternar para tema escuro',
      toggleToLight: 'Alternar para tema claro',
      currentTheme: 'Tema atual:',
    },
    en: {
      dark: 'Dark',
      light: 'Light',
      toggleToDark: 'Switch to dark theme',
      toggleToLight: 'Switch to light theme',
      currentTheme: 'Current theme:',
    },
  };

  const t = texts[language];
  const isDark = theme === 'dark';

  // Do not render until on the client
  if (!mounted) {
    return (
      <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
        <div className="h-5 w-5 bg-gray-300 dark:bg-gray-600 rounded-full" />
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative flex items-center gap-2 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={isDark ? t.toggleToLight : t.toggleToDark}
      title={`${t.currentTheme} ${isDark ? t.dark : t.light}`}
    >
      {/* Content based on the theme */}
      {isDark ? (
        <>
          <Moon className="h-5 w-5 text-blue-400" />
          <span className="text-sm font-medium text-gray-300 md:inline">
            {t.dark}
          </span>
        </>
      ) : (
        <>
          <Sun className="h-5 w-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700 md:inline">
            {t.light}
          </span>
        </>
      )}
    </motion.button>
  );
}
