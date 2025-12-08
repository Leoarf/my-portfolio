'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

export function SkillsFooter() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      paragraph:
        'Estou sempre aprendendo e me adaptando às novas tecnologias. Acredito que a ',
      highlighted: 'aprendizagem contínua',
      rest: ' é essencial para criar soluções inovadoras e de alta qualidade.',
    },
    en: {
      paragraph:
        'I am always learning and adapting to new technologies. I believe that ',
      highlighted: 'continuous learning',
      rest: ' is essential to create innovative and high-quality solutions.',
    },
  };

  const t = texts[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-12 text-center"
    >
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {t.paragraph}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {t.highlighted}
        </span>
        {t.rest}
      </p>
    </motion.div>
  );
}
