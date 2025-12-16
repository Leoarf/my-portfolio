'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenu } from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blocks scrolling when the mobile menu is open.
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isMobileMenuOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
          <div className="flex items-center justify-between w-full">
            <Logo />
            <DesktopNav />
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </motion.div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
