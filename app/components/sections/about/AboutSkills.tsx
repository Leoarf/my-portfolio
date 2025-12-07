import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { skillsHighlights } from './constants';

export function AboutSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />O Que Me
        Diferencia
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillsHighlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
