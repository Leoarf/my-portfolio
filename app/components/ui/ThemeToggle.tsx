'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../lib/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Do not render until on the client
  if (!mounted) {
    return (
      <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
        <div className="h-5 w-5 bg-gray-300 dark:bg-gray-600 rounded-full" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative flex items-center gap-2 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
      title={`Tema atual: ${isDark ? 'Escuro' : 'Claro'}`}
    >
      {/* Visual indicator of the current theme */}
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
        <span className="text-[8px] font-bold text-white">
          {isDark ? 'E' : 'C'}
        </span>
      </div>
      {/* Content based on the theme */}
      {isDark ? (
        <>
          <Moon className="h-5 w-5 text-blue-400" />
          <span className="text-sm font-medium text-gray-300 hidden md:inline">
            Escuro
          </span>
        </>
      ) : (
        <>
          <Sun className="h-5 w-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700 hidden md:inline">
            Claro
          </span>
        </>
      )}
    </motion.button>
  );
}
