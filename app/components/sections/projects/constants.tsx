const SCREENSHOT_KEY = process.env.NEXT_PUBLIC_SCREENSHOT_MACHINE_KEY || '';

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
    imageUrl: SCREENSHOT_KEY
      ? `https://api.screenshotmachine.com?key=${SCREENSHOT_KEY}&url=https://azurio.vercel.app&dimension=800x600&device=desktop&delay=2000&cacheLimit=0`
      : 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
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
