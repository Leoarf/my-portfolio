import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface HeroSocialLinksProps {
  socialLinks: SocialLink[];
}

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

export function HeroSocialLinks({ socialLinks }: HeroSocialLinksProps) {
  return (
    <div className="flex justify-center lg:justify-start gap-4">
      {socialLinks.map((social, index) => {
        const IconComponent = iconMap[social.icon as keyof typeof iconMap];
        return (
          <motion.a
            key={social.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ y: -3 }}
            href={social.href}
            target={social.label !== 'Email' ? '_blank' : '_self'}
            className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all border border-gray-200 dark:border-gray-700 shadow-sm"
            aria-label={social.label}
          >
            <IconComponent className="h-5 w-5" />
          </motion.a>
        );
      })}
    </div>
  );
}
