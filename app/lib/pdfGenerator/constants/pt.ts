import { CVData } from '../types';

export const getPTData = (): Omit<
  CVData,
  'title' | 'about' | 'goals' | 'generatedDate'
> => ({
  name: 'LEONARDO ARAUJO FONSECA',
  contact: {
    location: 'Aquidauana - MS, Brasil',
    email: 'leonardoaraujofonsecaofc@gmail.com',
    phone: '(66) 99920-2575',
    github: 'github.com/Leoarf',
    linkedin: 'linkedin.com/in/leoarf',
    portfolio: 'portfolio-leoarf.vercel.app',
  },
  skills: {
    frontend: [
      'React/Next.js',
      'TypeScript/JavaScript',
      'Tailwind CSS',
      'HTML5/CSS3',
      'Vue.js',
    ],
    backend: [
      'Node.js',
      'Python',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'REST API',
    ],
    mobile: ['React Native', 'Expo', 'Android Studio'],
    devops: ['Docker', 'Git', 'AWS', 'CI/CD', 'Linux'],
    complementary: [
      'UI/UX Design',
      'Scrum/Ágil',
      'Testes Automatizados',
      'SEO',
      'Performance',
      'Acessibilidade',
      'GraphQL',
      'WebSocket',
    ],
  },
  experience: [
    {
      title: 'Desenvolvedor Full Stack Freelancer',
      company: 'Autônomo',
      period: '2022 – Presente',
      points: [
        'Desenvolvimento de aplicações web completas para diversos clientes',
        'Criação de landing pages a sistemas complexos com autenticação, bancos de dados e APIs',
        'Implementação de soluções com foco em performance e experiência do usuário',
      ],
    },
    {
      title: 'Projetos Pessoais & Open Source',
      company: 'Desenvolvimento Contínuo',
      period: '2020 – Presente',
      points: [
        'Criação e manutenção de projetos para aprendizado',
        'Desenvolvimento de portfólio diversificado com tecnologias modernas',
        'Contribuição para a comunidade de desenvolvimento',
      ],
    },
  ],
  education: [
    {
      degree: 'Sistemas de Informação',
      institution: 'Universidade Federal do Piauí (UFPI)',
      period: '2025 – Pausado',
    },
    {
      degree: 'Tecnologia em Gestão da TI',
      institution: 'UniCesumar',
      period: '2021 – 2023',
    },
    {
      degree: 'Especializações Frontend & Backend',
      institution: 'Cursos Online',
      period: '2021 – Presente',
    },
  ],
  projects: [
    {
      name: 'AZURIO | FULL STACK E-COMMERCE',
      description:
        'E-commerce completo com backend e frontend em stack MERN - https://azurio.vercel.app/',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Tailwind CSS',
        'Redux',
      ],
    },
    {
      name: 'SHORTBEAM | ENCURTADOR DE URLS MODERNO',
      description:
        'Plataforma de encurtamento de URLs com analytics em tempo real - https://shortbeam.vercel.app/',
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Tailwind CSS',
      ],
    },
  ],
  differentials: [
    'Mentalidade de aprendizagem contínua',
    'Foco em qualidade e código limpo',
    'Visão full stack completa',
    'Proatividade na resolução de problemas',
    'Comunicação clara e eficaz',
    'Adaptabilidade a novas tecnologias',
  ],
  languages: ['Português – Nativo', 'Inglês – Técnico (leitura e escrita)'],
});
