'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../lib/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Do not render until you are on the client
  if (!mounted) {
    return (
      <div className="p-3">
        <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative"
      aria-label={`Alternar para tema ${
        theme === 'light' ? 'escuro' : 'claro'
      }`}
      title={`Tema atual: ${theme === 'light' ? 'Claro' : 'Escuro'}`}
    >
      {/* Visual indicator of the current theme */}
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
        <span className="text-[8px] font-bold text-white">
          {theme === 'light' ? 'C' : 'E'}
        </span>
      </div>
      {theme === 'light' ? (
        <div className="flex items-center gap-2">
          <Sun className="h-5 w-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700 hidden md:inline">
            Claro
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Moon className="h-5 w-5 text-blue-400" />
          <span className="text-sm font-medium text-gray-300 hidden md:inline">
            Escuro
          </span>
        </div>
      )}
    </motion.button>
  );
}
