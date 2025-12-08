'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  'Desenvolvedor Full Stack',
  'Entusiasta de tecnologia',
  'Apaixonado por inovação',
];

export function TextAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center lg:justify-start w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="block bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left w-full"
          style={{ 
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            lineHeight: '1.2'
          }}
        >
          {titles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}