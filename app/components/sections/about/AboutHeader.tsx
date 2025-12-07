import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 mb-4">
        <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          Conheça mais sobre mim
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Sobre <span className="text-blue-600 dark:text-blue-400">Mim</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Desenvolvedor apaixonado por tecnologia, sempre buscando criar soluções
        inovadoras e eficientes.
      </p>
    </motion.div>
  );
}
