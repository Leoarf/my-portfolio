import { Palette, Server, Smartphone, Cloud } from 'lucide-react';
import { ReactElement } from 'react';

export type Skill = {
  name: string;
  level: number;
  icon: string;
};

export type SkillCategoryType = {
  title: string;
  icon: ReactElement;
  color: string;
  skills: Skill[];
};

// Function to obtain skillsData based on language
export const getSkillsData = (
  language: 'pt' | 'en'
): Record<string, SkillCategoryType> => {
  const skillsData = {
    frontend: {
      title: language === 'pt' ? 'Frontend' : 'Frontend',
      icon: <Palette className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'Next.js', level: 88, icon: '▲' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Vue.js', level: 75, icon: '🟢' },
        { name: 'HTML/CSS', level: 98, icon: '🌐' },
      ],
    },
    backend: {
      title: language === 'pt' ? 'Backend' : 'Backend',
      icon: <Server className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟩' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Express', level: 88, icon: '🚂' },
        { name: 'PostgreSQL', level: 75, icon: '🐘' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'REST API', level: 90, icon: '🔌' },
      ],
    },
    mobile: {
      title: language === 'pt' ? 'Mobile' : 'Mobile',
      icon: <Smartphone className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'React Native', level: 80, icon: '📱' },
        { name: 'Flutter', level: 23, icon: '🐦' },
        { name: 'Dart', level: 18, icon: '🎯' },
        { name: 'Android Studio', level: 60, icon: '🤖' },
        { name: 'Expo', level: 63, icon: '⚡' },
      ],
    },
    devops: {
      title: language === 'pt' ? 'DevOps & Cloud' : 'DevOps & Cloud',
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Git', level: 95, icon: '📚' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'CI/CD', level: 80, icon: '⚡' },
        { name: 'Linux', level: 85, icon: '🐧' },
      ],
    },
  };

  return skillsData;
};

// Function to acquire complementary skills based on language
export const getComplementarySkills = (language: 'pt' | 'en') => {
  const complementarySkills = {
    pt: [
      { name: 'UI/UX Design', icon: '🎨' },
      { name: 'Scrum/Agile', icon: '🔄' },
      { name: 'Testes Automatizados', icon: '🧪' },
      { name: 'SEO', icon: '🔍' },
      { name: 'Performance', icon: '⚡' },
      { name: 'Acessibilidade', icon: '♿' },
      { name: 'GraphQL', icon: '📈' },
      { name: 'WebSocket', icon: '🔗' },
    ],
    en: [
      { name: 'UI/UX Design', icon: '🎨' },
      { name: 'Scrum/Agile', icon: '🔄' },
      { name: 'Automated Testing', icon: '🧪' },
      { name: 'SEO', icon: '🔍' },
      { name: 'Performance', icon: '⚡' },
      { name: 'Accessibility', icon: '♿' },
      { name: 'GraphQL', icon: '📈' },
      { name: 'WebSocket', icon: '🔗' },
    ],
  };

  return complementarySkills[language];
};
