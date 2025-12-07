'use client';

import { motion } from 'framer-motion';

export function SkillsFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-12 text-center"
    >
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Estou sempre aprendendo e me adaptando às novas tecnologias. Acredito
        que a
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {' '}
          aprendizagem contínua
        </span>{' '}
        é essencial para criar soluções inovadoras e de alta qualidade.
      </p>
    </motion.div>
  );
}
