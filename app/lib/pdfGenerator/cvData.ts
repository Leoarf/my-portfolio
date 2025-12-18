import { CVData } from './types';
import { getPTData } from './constants/pt';
import { getENData } from './constants/en';

export const getCVData = (language: 'pt' | 'en'): CVData => {
  const baseData = language === 'pt' ? getPTData() : getENData();

  return {
    ...baseData,
    title:
      language === 'pt'
        ? 'Desenvolvedor Full Stack Júnior'
        : 'Junior Full Stack Developer',
    about:
      language === 'pt'
        ? 'Desenvolvedor Full Stack apaixonado por tecnologia, com experiência em criar soluções web modernas e escaláveis. Busco transformar ideias em produtos digitais funcionais, com foco em performance, experiência do usuário e código limpo.'
        : 'Full Stack Developer passionate about technology, with experience creating modern and scalable web solutions. I seek to transform ideas into functional digital products, focusing on performance, user experience, and clean code.',
    goals:
      language === 'pt'
        ? 'Busco colaborar em projetos desafiadores onde possa aplicar minhas habilidades técnicas enquanto continuo aprendendo e crescendo como desenvolvedor.'
        : 'I seek to collaborate on challenging projects where I can apply my technical skills while continuing to learn and grow as a developer.',
    generatedDate: new Date().toLocaleDateString(
      language === 'pt' ? 'pt-BR' : 'en-US'
    ),
  };
};
