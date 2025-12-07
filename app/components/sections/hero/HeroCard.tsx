import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-1/2 mt-8 lg:mt-0"
    >
      <div className="relative max-w-md mx-auto">
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <CardHeader />
          <CodePreview />
          <Decorations />
        </div>
      </div>
    </motion.div>
  );
}

function CardHeader() {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
        Meu Stack
      </span>
    </div>
  );
}

function CodePreview() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
      <div className="flex gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <pre className="text-gray-800 dark:text-gray-300 text-sm font-mono">
        <code className="block whitespace-pre-wrap">
          {`const myStack = {
  frontend: {
    frameworks: ["React", "Next.js"],
    languages: ["TypeScript", "JavaScript"],
    styling: ["Tailwind CSS", "CSS Modules"]
  },
  backend: {
    runtime: ["Node.js", "Python"],
    databases: ["PostgreSQL", "MongoDB"]
  },
  devops: ["Docker", "AWS", "Git", "CI/CD"]
};`}
        </code>
      </pre>
    </div>
  );
}

function Decorations() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
        className="absolute -bottom-2 -left-2 w-10 h-10 bg-purple-500/10 rounded-full"
      />
    </>
  );
}
