import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { TextAnimation } from '../../ui/TextAnimation';
import { technologies, socialLinks } from './constants';
import { HeroTechnologies } from './HeroTechnologies';
import { HeroSocialLinks } from './HeroSocialLinks';

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center lg:text-left w-full lg:w-1/2"
    >
      <WelcomeBadge />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="block text-gray-900 dark:text-gray-100 mb-2">
          Eu sou
        </span>
        <TextAnimation />
      </h1>
      <Description />
      <HeroTechnologies technologies={technologies} />
      <CTAButtons />
      <HeroSocialLinks socialLinks={socialLinks} />
    </motion.div>
  );
}

function WelcomeBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 mb-6"
    >
      <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
        Olá, seja bem-vindo! 👋
      </span>
    </motion.div>
  );
}

function Description() {
  return (
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
      Transformo ideias em soluções digitais robustas e escaláveis. Gosto de
      criar aplicações web modernas com foco em performance, experiência do
      usuário e código limpo.
    </p>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="#projetos"
        className="px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all shadow-md"
      >
        Ver Projetos
        <ArrowDown className="h-5 w-5" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="#contato"
        className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors shadow-sm"
      >
        Entrar em Contato
      </motion.a>
    </div>
  );
}
