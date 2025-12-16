export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured?: boolean;
};

// Function to obtain projects based on language
export const getProjects = (language: 'pt' | 'en'): Project[] => {
  const projects = {
    pt: [
      {
        id: 1,
        title: 'Azurio | E-commerce Full Stack',
        description: 'E-commerce completo com backend e frontend na stack MERN',
        longDescription:
          'Plataforma de e-commerce desenvolvida com React, Node.js, Express e MongoDB. Possui sistema de autenticação, carrinho de compras, pagamento e painel administrativo.',
        techStack: [
          'React',
          'Node.js',
          'Express',
          'MongoDB',
          'Tailwind CSS',
          'Redux',
        ],
        githubUrl: 'https://github.com/Leoarf/azurio',
        liveUrl: 'https://azurio.vercel.app/',
        imageUrl: '/projects/azurio.webp',
        status: 'completed' as const,
        featured: true,
      },
      {
        id: 2,
        title: 'ShortBeam | Encurtador de URLs Moderno',
        description: 'Plataforma de encurtamento de URLs com analytics em tempo real',
        longDescription:
          'Encurtador de URLs de alta performance construído com T3 Stack (Next.js, TypeScript, Prisma, PostgreSQL). Oferece encurtamento rápido, slugs personalizados, analytics detalhados (geolocalização, dispositivos, referências), painel de usuários e segurança empresarial.',
        techStack: [
          'Next.js',
          'TypeScript',
          'Prisma',
          'PostgreSQL',
          'Tailwind CSS',
          'React',
        ],
        githubUrl: 'https://github.com/Leoarf/shortbeam',
        liveUrl: 'https://shortbeam.vercel.app/',
        imageUrl: '/projects/shortbeam.webp',
        status: 'completed' as const,
        featured: true,
      },
    ],
    en: [
      {
        id: 1,
        title: 'Azurio | Full Stack E-commerce',
        description:
          'Complete e-commerce with backend and frontend in MERN stack',
        longDescription:
          'E-commerce platform developed with React, Node.js, Express and MongoDB. Features authentication system, shopping cart, payment and admin panel.',
        techStack: [
          'React',
          'Node.js',
          'Express',
          'MongoDB',
          'Tailwind CSS',
          'Redux',
        ],
        githubUrl: 'https://github.com/Leoarf/azurio',
        liveUrl: 'https://azurio.vercel.app/',
        imageUrl: '/projects/azurio.webp',
        status: 'completed' as const,
        featured: true,
      },
      {
        id: 2,
        title: 'ShortBeam | Modern URL Shortener',
        description: 'URL shortening platform with real-time analytics',
        longDescription:
          'High-performance URL shortener built with T3 Stack (Next.js, TypeScript, Prisma, PostgreSQL). Offers fast URL shortening, custom slugs, detailed analytics (geolocation, devices, referrers), user dashboard, and enterprise-grade security.',
        techStack: [
          'Next.js',
          'TypeScript',
          'Prisma',
          'PostgreSQL',
          'Tailwind CSS',
          'React',
        ],
        githubUrl: 'https://github.com/Leoarf/shortbeam',
        liveUrl: 'https://shortbeam.vercel.app/',
        imageUrl: '/projects/shortbeam.webp',
        status: 'completed' as const,
        featured: true,
      },
    ],
  };

  return projects[language];
};

export const techIcons: Record<string, string> = {
  React: '⚛️',
  'Node.js': '🟢',
  Express: '🚂',
  MongoDB: '🍃',
  'Tailwind CSS': '🎨',
  Redux: '🔄',
  'Next.js': '▲',
  TypeScript: '📘',
  Prisma: '⚡',
  PostgreSQL: '🐘',
  'React Native': '📱',
  Firebase: '🔥',
};

// Function to obtain status texts based on language
export const getStatusText = (
  status: 'completed' | 'in-progress' | 'planned',
  language: 'pt' | 'en'
) => {
  const statusTexts = {
    pt: {
      completed: 'Concluído',
      'in-progress': 'Em Desenvolvimento',
      planned: 'Planejado',
    },
    en: {
      completed: 'Completed',
      'in-progress': 'In Progress',
      planned: 'Planned',
    },
  };

  return statusTexts[language][status];
};

// Function to retrieve button text based on language
export const getButtonTexts = (language: 'pt' | 'en') => {
  return {
    github: language === 'pt' ? 'GitHub' : 'GitHub',
    liveDemo: language === 'pt' ? 'Live Demo' : 'Live Demo',
  };
};