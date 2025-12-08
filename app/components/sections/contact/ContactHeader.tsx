'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 mb-4">
        <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          Vamos Conversar
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Entre em{' '}
        <span className="text-blue-600 dark:text-blue-400">Contato</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Tem um projeto em mente? Vamos trabalhar juntos para torná-lo realidade.
      </p>
    </motion.div>
  );
}
