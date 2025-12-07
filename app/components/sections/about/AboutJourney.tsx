import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export function AboutJourney() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        Minha Jornada
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Comecei minha jornada na programação em 2021, e desde então venho me
        especializando em desenvolvimento web full stack. Sempre fui fascinado
        por como a tecnologia pode transformar ideias em soluções reais e
        impactantes.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Meu foco está em criar aplicações que não apenas funcionem bem, mas que
        também ofereçam uma experiência excepcional ao usuário. Acredito que
        código limpo, performance e atenção aos detalhes são fundamentais para o
        sucesso de qualquer projeto.
      </p>
    </motion.div>
  );
}
