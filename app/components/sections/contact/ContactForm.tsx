'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { ContactFormField } from './ContactFormField';
import { ContactSubmitButton } from './ContactSubmitButton';
import { ContactAlertMessage } from './ContactAlertMessage';

export function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvgloqy';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _source: 'Portfolio Website',
          _subject:
            language === 'pt'
              ? `Novo contato do portfólio: ${formData.subject}`
              : `New contact from portfolio: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
    }
  };

  const texts = {
    pt: {
      title: 'Envie uma mensagem',
      additionalInfo1: 'Resposta em até 24h',
      additionalInfo2: 'Dados protegidos',
    },
    en: {
      title: 'Send a message',
      additionalInfo1: 'Response within 24 hours',
      additionalInfo2: 'Data protected',
    },
  };

  const t = texts[language];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        {t.title}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactFormField
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={2}
          />
          <ContactFormField
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </div>
        <ContactFormField
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          minLength={3}
        />
        <ContactFormField
          type="textarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          rows={5}
        />
        <ContactSubmitButton status={status} />
        {status === 'success' && <ContactAlertMessage type="success" />}
        {status === 'error' && <ContactAlertMessage type="error" />}
      </form>
      {/* Additional information */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          <span className="inline-flex items-center gap-1">
            <CheckCircle className="h-4 w-4 text-green-500" />
            {t.additionalInfo1}
          </span>
          <span className="mx-2">•</span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle className="h-4 w-4 text-green-500" />
            {t.additionalInfo2}
          </span>
        </p>
      </div>
    </motion.div>
  );
}
