'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2 } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { language } = useLanguage();

  const texts = {
    pt: {
      menu: 'Menu',
      home: 'Início',
      about: 'Sobre',
      skills: 'Skills',
      projects: 'Projetos',
      contact: 'Contato',
      toggleTheme: 'Alternar tema',
      toggleLanguage: 'Alternar idioma',
    },
    en: {
      menu: 'Menu',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Toggle language',
    },
  };

  const t = texts[language];
  const navItems = [
    { label: t.home, href: '#home' },
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
          {/* Menu Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full bg-white dark:bg-gray-900 shadow-xl lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Code2 className="h-7 w-7 sm:h-8 sm:w-8 text-blue-500" />
                  <span className="text-lg sm:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t.menu}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
              {/* Navigation links */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 py-3 px-4 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                      onClick={onClose}
                    >
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              {/* Mobile menu footer */}
              <div className="border-t border-gray-200 dark:border-gray-800 p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {t.toggleLanguage}
                  </span>
                  <LanguageToggle variant="mobile" showText={false} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {t.toggleTheme}
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
