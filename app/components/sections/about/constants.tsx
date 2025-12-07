import { GraduationCap, BookOpen } from 'lucide-react';

export const education = [
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
];

export const skillsHighlights = [
  { icon: '⚛️', text: 'React & Next.js' },
  { icon: '🎨', text: 'UI/UX e design responsivo' },
  { icon: '🚀', text: 'Performance e otimização' },
  { icon: '🔧', text: 'Arquitetura limpa e escalável' },
];

export const experiences = [
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
];
