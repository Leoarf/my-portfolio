'use client';

import { motion } from 'framer-motion';
import { contactInfo, socialLinks } from './constants';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact information */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Informações de Contato
        </h3>
        <div className="space-y-4">
          {contactInfo.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div
                className={`p-3 rounded-lg bg-linear-to-r ${item.color} shrink-0`}
              >
                <div className="text-white">{item.icon}</div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors wrap-break-word break-all"
                    style={{ wordBreak: 'break-word' }}
                  >
                    {item.description}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 wrap-break-word break-all">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Social media */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Redes Sociais
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-600 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all shrink-0">
                <div className="text-gray-700 dark:text-gray-300 group-hover:text-white">
                  {social.icon}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white truncate">
                  {social.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {social.username}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
