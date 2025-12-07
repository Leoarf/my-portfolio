'use client';

import { motion } from 'framer-motion';
import { complementarySkills } from './constants';

export function ComplementarySkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 bg-linear-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Competências Complementares
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {complementarySkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-2xl mb-2">{skill.icon}</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
