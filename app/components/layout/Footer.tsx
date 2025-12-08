'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Code2, ArrowUp, Coffee } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  // Controls the visibility of the Back to Top button.
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      setShowBackToTop(y > 500);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating Back to Top button */}
      <motion.button
        style={{ opacity }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 p-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
      {/* Footer */}
      <footer className="relative py-12">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Logo and description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Leoarf
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mx-auto">
                Transformando ideias em realidade através do código.
              </p>
            </motion.div>
            {/* Dividing line */}
            <div className="border-t border-gray-300/50 dark:border-gray-700/50 my-8" />
            {/* Copyright and credits */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Technology credits */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  <span className="text-xs text-gray-500 dark:text-gray-500 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center gap-1">
                    <span className="text-blue-500">▲</span>
                    Next.js
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center gap-1">
                    <span className="text-cyan-500">🎨</span>
                    Tailwind CSS
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center gap-1">
                    <span className="text-purple-500">✨</span>
                    Framer Motion
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center gap-1">
                    <span className="text-yellow-500">⚡</span>
                    TypeScript
                  </span>
                </div>
                {/* Copyright text */}
                <p className="text-sm text-gray-600 dark:text-gray-400 flex flex-wrap items-center justify-center gap-1">
                  <span>© {currentYear} Leoarf.</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Todos os direitos reservados.</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    Feito com
                    <Heart className="h-3 w-3 text-red-500 animate-pulse" />
                    e
                    <Coffee className="h-3 w-3 text-amber-600 animate-bounce" />
                  </span>
                </p>
                {/* Final message */}
                <p className="text-xs text-gray-500 dark:text-gray-500 max-w-md">
                  Este portfólio foi desenvolvido com as tecnologias mais
                  modernas para garantir a melhor experiência de navegação.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
