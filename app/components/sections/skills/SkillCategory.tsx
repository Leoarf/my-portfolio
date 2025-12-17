'use client';

import { motion } from 'framer-motion';
import { SkillCategoryType } from './constants';
import { SkillBar } from './SkillBar';

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl bg-linear-to-r ${category.color}`}>
          <div className="text-white">{category.icon}</div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>
      <div className="space-y-6">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} delay={skillIndex * 0.1} />
        ))}
      </div>
    </motion.div>
  );
}
