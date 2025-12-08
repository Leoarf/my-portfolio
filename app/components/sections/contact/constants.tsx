import { Mail, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import { ReactElement } from 'react';

export type ContactInfoItem = {
  id: string;
  title: string;
  description: string;
  icon: ReactElement;
  link?: string;
  color: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: ReactElement;
  username: string;
};

export const contactInfo: ContactInfoItem[] = [
  {
    id: 'email',
    title: 'Email',
    description: 'leonardoaraujofonsecaofc@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    link: 'mailto:leonardoaraujofonsecaofc@gmail.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    description: '+55 (66) 99920-2575',
    icon: <MessageCircle className="w-5 h-5" />,
    link: 'https://wa.me/5566999202575',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'location',
    title: 'Localização',
    description: 'Aquidauana - MS, Brasil',
    icon: <MapPin className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-500',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Leoarf',
    icon: <Github className="w-5 h-5" />,
    username: '@Leoarf',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/leoarf/',
    icon: <Linkedin className="w-5 h-5" />,
    username: '@leoarf',
  },
];
