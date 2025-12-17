'use client';

import { useLanguage } from '../../../context/LanguageContext';

interface ContactFormFieldProps {
  type: 'text' | 'email' | 'textarea';
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  minLength?: number;
  pattern?: string;
  rows?: number;
  placeholder?: string;
  label?: string;
}

export function ContactFormField({
  type,
  id,
  name,
  value,
  onChange,
  required = false,
  minLength,
  pattern,
  rows = 5,
  placeholder = '',
  label,
}: ContactFormFieldProps) {
  const { language } = useLanguage();

  const fieldLabels = {
    pt: {
      name: 'Nome *',
      email: 'Email *',
      subject: 'Assunto *',
      message: 'Mensagem *',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seu@email.com',
      subjectPlaceholder: 'Ex: Proposta de trabalho, Orçamento, Dúvida',
      messagePlaceholder: 'Descreva sua ideia, projeto ou dúvida...',
    },
    en: {
      name: 'Name *',
      email: 'Email *',
      subject: 'Subject *',
      message: 'Message *',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      subjectPlaceholder: 'E.g.: Job proposal, Quote, Question',
      messagePlaceholder: 'Describe your idea, project or question...',
    },
  };

  const t = fieldLabels[language];

  // Use provided label or get from translations based on field name
  const fieldLabel = label || t[name as keyof typeof t];

  const commonClasses =
    'w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors';

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {fieldLabel}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          rows={rows}
          className={`${commonClasses} resize-none`}
          placeholder={placeholder || t[`${name}Placeholder` as keyof typeof t]}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          pattern={pattern}
          className={commonClasses}
          placeholder={placeholder || t[`${name}Placeholder` as keyof typeof t]}
        />
      )}
    </div>
  );
}
