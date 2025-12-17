'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export function AboutGoals() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      title: 'Meus Objetivos',
      paragraph:
        'Busco colaborar em projetos desafiadores onde posso aplicar minhas habilidades técnicas enquanto continuo aprendendo e crescendo como desenvolvedor. Meu objetivo é criar impacto positivo através da tecnologia.',
    },
    en: {
      title: 'My Goals',
      paragraph:
        'I seek to collaborate on challenging projects where I can apply my technical skills while continuing to learn and grow as a developer. My goal is to create positive impact through technology.',
    },
  };

  const t = texts[language];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-linear-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 shadow-lg border border-blue-200/50 dark:border-blue-800/50"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        {t.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{t.paragraph}</p>
    </motion.div>
  );
}
