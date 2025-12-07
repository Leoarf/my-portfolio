import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from './constants';

export function AboutExperience() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          dot: 'bg-blue-500',
          badge:
            'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
        };
      case 'purple':
        return {
          dot: 'bg-purple-500',
          badge:
            'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
        };
      default:
        return {
          dot: 'bg-blue-500',
          badge:
            'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        Experiência Profissional
      </h3>
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const colorClasses = getColorClasses(exp.color);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative pl-8 ${
                index < experiences.length - 1
                  ? 'pb-6 border-l border-gray-200 dark:border-gray-700'
                  : ''
              }`}
            >
              <div
                className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${colorClasses.dot} border-4 border-white dark:border-gray-800`}
              />
              <h4 className="font-bold text-gray-900 dark:text-white">
                {exp.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {exp.company}
              </p>
              <span
                className={`text-xs font-medium px-2 py-1 ${colorClasses.badge} rounded-full`}
              >
                {exp.period}
              </span>
              <p className="text-gray-600 dark:text-gray-300 mt-3">
                {exp.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
