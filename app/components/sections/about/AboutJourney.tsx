'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export function AboutJourney() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      title: 'Minha Jornada',
      paragraph1:
        'Comecei minha jornada na programação em 2021, e desde então venho me especializando em desenvolvimento web full stack. Sempre fui fascinado por como a tecnologia pode transformar ideias em soluções reais e impactantes.',
      paragraph2:
        'Meu foco está em criar aplicações que não apenas funcionem bem, mas que também ofereçam uma experiência excepcional ao usuário. Acredito que código limpo, performance e atenção aos detalhes são fundamentais para o sucesso de qualquer projeto.',
    },
    en: {
      title: 'My Journey',
      paragraph1:
        'I started my programming journey in 2021, and since then I have been specializing in full stack web development. I have always been fascinated by how technology can transform ideas into real and impactful solutions.',
      paragraph2:
        'My focus is on creating applications that not only work well, but also offer an exceptional user experience. I believe that clean code, performance and attention to detail are fundamental to the success of any project.',
    },
  };

  const t = texts[language];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        {t.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{t.paragraph1}</p>
      <p className="text-gray-600 dark:text-gray-300">{t.paragraph2}</p>
    </motion.div>
  );
}
