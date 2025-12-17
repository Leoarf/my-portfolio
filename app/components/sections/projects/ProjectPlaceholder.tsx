'use client';

import { motion } from 'framer-motion';
import { Plus, Code } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface ProjectPlaceholderProps {
  index: number;
}

export function ProjectPlaceholder({ index }: ProjectPlaceholderProps) {
  const { language } = useLanguage();

  const texts = {
    pt: {
      title: 'Próximo Projeto',
      description: 'Em breve mais um projeto incrível será adicionado aqui!',
      status: 'Em desenvolvimento...',
    },
    en: {
      title: 'Next Project',
      description: 'Another amazing project will be added here soon!',
      status: 'In development...',
    },
  };

  const t = texts[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center text-center min-h-[400px] group hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
    >
      <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
        <Plus className="h-12 w-12 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
        {t.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
        {t.description}
      </p>
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Code className="h-4 w-4" />
        <span>{t.status}</span>
      </div>
    </motion.div>
  );
}
