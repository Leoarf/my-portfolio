'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-default">
      {/* Icon with subtle rotation */}
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="relative"
      >
        <Code2 className="h-8 w-8 text-blue-500" />
      </motion.div>
      {/* Animated gradient text */}
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
          backgroundPosition: {
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        className="text-xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-[200%_auto] bg-clip-text text-transparent"
        style={{
          backgroundSize: '200% auto',
        }}
      >
        Leoarf
      </motion.span>
    </div>
  );
}
