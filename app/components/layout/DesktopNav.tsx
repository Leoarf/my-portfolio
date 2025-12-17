'use client';

import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';

export function DesktopNav() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Skills',
      projects: 'Projetos',
      contact: 'Contato',
    },
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
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
    <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group text-sm lg:text-base"
        >
          {item.label}
          <span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 
            dark:bg-blue-400 group-hover:w-full transition-all duration-300"
          />
        </a>
      ))}
      <div className="flex items-center gap-2 lg:gap-4 ml-2 lg:ml-4">
        <div className="hidden lg:block">
          <LanguageToggle variant="desktop" />
        </div>
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <LanguageToggle variant="mobile" showText={false} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
