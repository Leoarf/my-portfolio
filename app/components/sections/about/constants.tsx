import { GraduationCap, BookOpen } from 'lucide-react';

// Function to obtain language-based education
export const getEducation = (language: 'pt' | 'en') => {
  const education = {
    pt: [
      {
        institution: 'Universidade Federal - PI',
        degree: 'Sistemas de Informação',
        period: '2025 - Pausa',
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        institution: 'UniCesumar',
        degree: 'Curso Superior de Tecnologia (CST) - Gestão de TI',
        period: '2021 - 2023',
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        institution: 'Cursos Online',
        degree: 'Especializações em Frontend & Backend',
        period: '2021 - Presente',
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
    en: [
      {
        institution: 'Federal University - PI',
        degree: 'Information Systems',
        period: '2025 - Paused',
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        institution: 'UniCesumar',
        degree: 'Higher Technology Course (CST) - IT Management',
        period: '2021 - 2023',
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        institution: 'Online Courses',
        degree: 'Frontend & Backend Specializations',
        period: '2021 - Present',
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
  };

  return education[language];
};

// Function to obtain language-based experiences
export const getExperiences = (language: 'pt' | 'en') => {
  const experiences = {
    pt: [
      {
        title: 'Desenvolvedor Full Stack Freelancer',
        company: 'Trabalho Autônomo',
        period: '2022 - Presente',
        description:
          'Desenvolvimento de aplicações web completas para diversos clientes, desde landing pages até sistemas complexos com autenticação, banco de dados e APIs.',
        color: 'blue',
      },
      {
        title: 'Projetos Pessoais & Open Source',
        company: 'Desenvolvimento Contínuo',
        period: '2020 - Presente',
        description:
          'Criação e manutenção de diversos projetos pessoais para aprendizado e contribuição com a comunidade de desenvolvimento.',
        color: 'purple',
      },
    ],
    en: [
      {
        title: 'Full Stack Developer Freelancer',
        company: 'Self-Employed',
        period: '2022 - Present',
        description:
          'Development of complete web applications for various clients, from landing pages to complex systems with authentication, databases, and APIs.',
        color: 'blue',
      },
      {
        title: 'Personal & Open Source Projects',
        company: 'Continuous Development',
        period: '2020 - Present',
        description:
          'Creation and maintenance of various personal projects for learning and contribution to the development community.',
        color: 'purple',
      },
    ],
  };

  return experiences[language];
};

// Function to obtain language-based skills
export const getSkillsHighlights = (language: 'pt' | 'en') => {
  const skillsHighlights = {
    pt: [
      { icon: '⚛️', text: 'React & Next.js' },
      { icon: '🎨', text: 'UI/UX e design responsivo' },
      { icon: '🚀', text: 'Performance e otimização' },
      { icon: '🔧', text: 'Arquitetura limpa e escalável' },
    ],
    en: [
      { icon: '⚛️', text: 'React & Next.js' },
      { icon: '🎨', text: 'UI/UX and responsive design' },
      { icon: '🚀', text: 'Performance and optimization' },
      { icon: '🔧', text: 'Clean and scalable architecture' },
    ],
  };

  return skillsHighlights[language];
};
