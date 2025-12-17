import { motion } from 'framer-motion';

interface HeroTechnologiesProps {
  technologies: string[];
}

export function HeroTechnologies({ technologies }: HeroTechnologiesProps) {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
      {technologies.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}
