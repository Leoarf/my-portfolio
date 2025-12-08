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

export const projects: Project[] = [
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
    status: 'completed',
    featured: true,
  },
];

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
