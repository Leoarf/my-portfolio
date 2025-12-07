'use client';

import { useState, useLayoutEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // useLayoutEffect for synchronous synchronization (avoids flash)
  useLayoutEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initialTheme =
      saved === 'dark' || (!saved && prefersDark) ? 'dark' : 'light';
    // Updates the state after the initial rendering.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initialTheme);
    setMounted(true);
    // Applies the class to the document.
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    // Listen to system preference change
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return { theme, toggleTheme, mounted };
}
