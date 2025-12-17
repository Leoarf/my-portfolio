'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export function SkillsHeader() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      badge: 'Habilidades Técnicas',
      title1: 'Minhas ',
      title2: 'Skills',
      description:
        'Tecnologias e ferramentas que utilizo para transformar ideias em soluções digitais funcionais.',
    },
    en: {
      badge: 'Technical Skills',
      title1: 'My ',
      title2: 'Skills',
      description:
        'Technologies and tools I use to transform ideas into functional digital solutions.',
    },
  };

  const t = texts[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 mb-4">
        <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {t.badge}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {t.title1}
        <span className="text-blue-600 dark:text-blue-400">{t.title2}</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {t.description}
      </p>
    </motion.div>
  );
}
