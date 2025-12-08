'use client';

import { Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface ContactSubmitButtonProps {
  status: 'idle' | 'loading' | 'success' | 'error';
}

export function ContactSubmitButton({ status }: ContactSubmitButtonProps) {
  const { language } = useLanguage();

  const texts = {
    pt: {
      idle: 'Enviar Mensagem',
      loading: 'Enviando...',
    },
    en: {
      idle: 'Send Message',
      loading: 'Sending...',
    },
  };

  const t = texts[language];

  return (
    <button
      type="submit"
      disabled={status === 'loading'}
      className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform ${
        status === 'loading'
          ? 'bg-blue-400 dark:bg-blue-600 cursor-not-allowed scale-95'
          : 'bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98]'
      } text-white shadow-lg hover:shadow-xl`}
    >
      {status === 'loading' ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          <span className="animate-pulse">{t.loading}</span>
        </>
      ) : (
        <>
          <Send className="h-5 w-5" />
          <span>{t.idle}</span>
        </>
      )}
    </button>
  );
}
