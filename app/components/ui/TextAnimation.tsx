'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const titles = {
  pt: [
    'Desenvolvedor Full Stack',
    'Entusiasta de tecnologia',
    'Apaixonado por inovação',
    'Criador de soluções digitais',
  ],
  en: [
    'Full Stack Developer',
    'Technology Enthusiast',
    'Passionate about innovation',
    'Digital Solutions Creator',
  ],
};

export function TextAnimation() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentTitles = titles[language];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % currentTitles.length);

        // Reset animation state after animation completes
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentTitles.length, isAnimating]);

  return (
    <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center lg:justify-start w-full relative">
      <div className="relative w-full h-full flex items-center justify-center lg:justify-start">
        <AnimatePresence mode="wait">
          <motion.span
            key={`${language}-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className="block bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left w-full"
            style={{
              lineHeight: '1.2',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            {currentTitles[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
