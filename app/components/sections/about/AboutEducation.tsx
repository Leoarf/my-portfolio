import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from './constants';

export function AboutEducation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        Educação & Formação
      </h3>
      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
              {item.icon}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {item.degree}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {item.institution}
              </p>
              <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                {item.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
