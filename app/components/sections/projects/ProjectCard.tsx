'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ImageOff } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Project, techIcons } from './constants';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const isPlaceholder = project.status !== 'completed';

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 group flex flex-col h-full"
    >
      {/* Project image */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden">
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <ImageOff className="h-12 w-12 text-gray-400 dark:text-gray-600 mb-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Preview não disponível
            </span>
          </div>
        ) : (
          <>
            <Image
              src={project.imageUrl}
              alt={`Screenshot do projeto ${project.title}`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={handleImageError}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized={
                project.imageUrl.includes('screenshotmachine.com') ||
                project.imageUrl.includes('imgur.com')
              }
            />
            {/* Dark overlay to improve badge readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
          </>
        )}
        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
              Destaque
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'completed'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : project.status === 'in-progress'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
            }`}
          >
            {project.status === 'completed'
              ? 'Concluído'
              : project.status === 'in-progress'
              ? 'Em Desenvolvimento'
              : 'Planejado'}
          </span>
        </div>
      </div>
      {/* Card content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                <span>{techIcons[tech] || '💻'}</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Links */}
        <div className="flex items-center justify-between mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isPlaceholder
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                : 'bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600'
            }`}
            onClick={(e) => isPlaceholder && e.preventDefault()}
          >
            <Github className="h-4 w-4" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isPlaceholder
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600'
            }`}
            onClick={(e) => isPlaceholder && e.preventDefault()}
          >
            <ExternalLink className="h-4 w-4" />
            <span className="font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
