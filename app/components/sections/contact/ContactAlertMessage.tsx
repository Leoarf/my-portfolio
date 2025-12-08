'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface ContactAlertMessageProps {
  type: 'success' | 'error';
}

export function ContactAlertMessage({ type }: ContactAlertMessageProps) {
  const { language } = useLanguage();

  const texts = {
    pt: {
      success: {
        title: 'Mensagem enviada com sucesso!',
        message: 'Em breve entrarei em contato. Obrigado!',
      },
      error: {
        title: 'Ops! Algo deu errado.',
        message: 'Tente novamente ou entre em contato pelo email/WhatsApp.',
      },
    },
    en: {
      success: {
        title: 'Message sent successfully!',
        message: 'I will contact you soon. Thank you!',
      },
      error: {
        title: 'Oops! Something went wrong.',
        message: 'Please try again or contact via email/WhatsApp.',
      },
    },
  };

  const t = texts[language][type];
  const isSuccess = type === 'success';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`flex items-center gap-3 p-4 rounded-lg bg-linear-to-r ${
        isSuccess
          ? 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800'
          : 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800'
      }`}
    >
      <div
        className={`p-2 rounded-full ${
          isSuccess
            ? 'bg-green-100 dark:bg-green-900'
            : 'bg-red-100 dark:bg-red-900'
        }`}
      >
        {isSuccess ? (
          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
        ) : (
          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
        )}
      </div>
      <div>
        <p
          className={`font-medium ${
            isSuccess
              ? 'text-green-800 dark:text-green-300'
              : 'text-red-800 dark:text-red-300'
          }`}
        >
          {t.title}
        </p>
        <p
          className={`text-sm ${
            isSuccess
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
          } mt-1`}
        >
          {t.message}
        </p>
      </div>
    </motion.div>
  );
}
