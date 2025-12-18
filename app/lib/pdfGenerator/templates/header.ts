import { CVData } from '../types';

export const getHeaderHTML = (data: CVData): string => `
  <div class="header">
    <div class="name">${data.name}</div>
    <div class="title">${data.title}</div>
    <div class="contact-info">
      <div class="contact-item">📍 ${data.contact.location}</div>
      <div class="contact-item">📧 ${data.contact.email}</div>
      <div class="contact-item">📱 WhatsApp: ${data.contact.phone}</div>
      <div class="contact-item">🔗 GitHub: ${data.contact.github}</div>
      <div class="contact-item">🔗 LinkedIn: ${data.contact.linkedin}</div>
      <div class="contact-item">🌐 Portfolio: ${data.contact.portfolio}</div>
    </div>
  </div>
`;
