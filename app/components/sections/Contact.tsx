'use client';

import { ContactHeader } from './contact/ContactHeader';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-100/10 dark:bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-100/10 dark:bg-purple-500/5 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact information - occupies 1 column */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          {/* Form - occupies 2 columns */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
