import { CVData } from '../types';

export const getENData = (): Omit<
  CVData,
  'title' | 'about' | 'goals' | 'generatedDate'
> => ({
  name: 'LEONARDO ARAUJO FONSECA',
  contact: {
    location: 'Aquidauana - MS, Brazil',
    email: 'leonardoaraujofonsecaofc@gmail.com',
    phone: '+55 (66) 99920-2575',
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
      'Scrum/Agile',
      'Automated Testing',
      'SEO',
      'Performance',
      'Accessibility',
      'GraphQL',
      'WebSocket',
    ],
  },
  experience: [
    {
      title: 'Full Stack Developer Freelancer',
      company: 'Self-Employed',
      period: '2022 – Present',
      points: [
        'Development of complete web applications for various clients',
        'Creation from landing pages to complex systems with authentication, databases, and APIs',
        'Implementation of solutions focusing on performance and user experience',
      ],
    },
    {
      title: 'Personal & Open Source Projects',
      company: 'Continuous Development',
      period: '2020 – Present',
      points: [
        'Creation and maintenance of projects for learning purposes',
        'Development of a diversified portfolio with modern technologies',
        'Contribution to the development community',
      ],
    },
  ],
  education: [
    {
      degree: 'Information Systems',
      institution: 'Federal University of Piauí (UFPI)',
      period: '2025 – Paused',
    },
    {
      degree: 'IT Management Technology',
      institution: 'UniCesumar',
      period: '2021 – 2023',
    },
    {
      degree: 'Frontend & Backend Specializations',
      institution: 'Online Courses',
      period: '2021 – Present',
    },
  ],
  projects: [
    {
      name: 'AZURIO | FULL STACK E-COMMERCE',
      description:
        'Complete e-commerce with backend and frontend in MERN stack - https://azurio.vercel.app/',
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
      name: 'SHORTBEAM | MODERN URL SHORTENER',
      description:
        'URL shortening platform with real-time analytics - https://shortbeam.vercel.app/',
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
    'Continuous learning mindset',
    'Focus on quality and clean code',
    'Complete full stack vision',
    'Proactivity in problem-solving',
    'Clear and effective communication',
    'Adaptability to new technologies',
  ],
  languages: [
    'Portuguese – Native',
    'English – Technical (reading and writing)',
  ],
});
