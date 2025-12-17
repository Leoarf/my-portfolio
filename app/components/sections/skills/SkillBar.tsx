'use client';

import { motion } from 'framer-motion';
import { Skill } from './constants';

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

export function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  // Mapping cores to specific icons that may have contrast issues
  const getIconColor = (icon: string) => {
    // For the Next.js icon (▲) - use black in the light theme and white in the dark theme
    if (icon === '▲') {
      return 'text-gray-900 dark:text-white';
    }
    // For other icons, keep the default color
    return 'text-gray-800 dark:text-gray-200';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-lg ${getIconColor(skill.icon)}`}>
            {skill.icon}
          </span>
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {skill.name}
          </span>
        </div>
        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="h-full rounded-full bg-linear-to-r from-blue-500 to-purple-500"
        />
      </div>
    </motion.div>
  );
}
