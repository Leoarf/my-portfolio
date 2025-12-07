import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Single background for the entire page */}
      <div className="fixed inset-0 -z-10">
        {/* Base layer */}
        <div
          className="absolute inset-0 bg-linear-to-br 
          from-blue-50 via-white to-purple-50 
          dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
        />
        {/* Upper gradient */}
        <div
          className="absolute top-0 left-0 right-0 h-64 bg-linear-to-b 
          from-blue-100/40 via-blue-50/20 to-transparent 
          dark:from-blue-900/15 dark:via-blue-900/10 dark:to-transparent"
        />
        {/* Lower gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t 
          from-purple-100/40 via-purple-50/20 to-transparent 
          dark:from-purple-900/15 dark:via-purple-900/10 dark:to-transparent"
        />
        {/* Subtle decorative details */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl 
          dark:bg-blue-500/5"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl 
          dark:bg-purple-500/5"
        />
      </div>
      {/* Page content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
      </div>
    </div>
  );
}
