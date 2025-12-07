import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10"
    >
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          Role para ver mais
        </span>
        <div className="w-5 h-8 border border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </div>
      </div>
    </motion.div>
  );
}
