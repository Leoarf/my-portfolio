'use client';

import { ProjectsHeader } from './projects/ProjectsHeader';
import { ProjectsGrid } from './projects/ProjectsGrid';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Projects() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      paragraph1:
        'Estou constantemente trabalhando em novos projetos para expandir meu portfólio e aprimorar minhas habilidades.',
      highlighted: 'Em breve mais projetos serão adicionados!',
    },
    en: {
      paragraph1:
        'I am constantly working on new projects to expand my portfolio and improve my skills.',
      highlighted: 'More projects will be added soon!',
    },
  };

  const t = texts[language];

  return (
    <section id="projects" className="relative py-20">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-100/10 dark:bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-100/10 dark:bg-purple-500/5 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ProjectsHeader />
        <ProjectsGrid />
        {/* Section footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.paragraph1}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {' '}
              {t.highlighted}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
