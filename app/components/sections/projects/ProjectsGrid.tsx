'use client';

import { projects } from './constants';
import { ProjectCard } from './ProjectCard';
import { ProjectPlaceholder } from './ProjectPlaceholder';

export function ProjectsGrid() {
  // 3 cards: 1 real project + 2 placeholders (or more projects when available).
  const totalCards = 3;
  const realProjectsCount = projects.filter(
    (p) => p.status === 'completed'
  ).length;
  const placeholderCount = totalCards - realProjectsCount;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Real projects */}
      {projects
        .filter((project) => project.status === 'completed')
        .map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      {/* Projects in development/planned */}
      {projects
        .filter((project) => project.status !== 'completed')
        .map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={realProjectsCount + index}
          />
        ))}
      {/* Additional placeholders if needed */}
      {Array.from({ length: Math.max(0, placeholderCount) }).map((_, index) => (
        <ProjectPlaceholder
          key={`placeholder-${index}`}
          index={
            realProjectsCount +
            projects.filter((p) => p.status !== 'completed').length +
            index
          }
        />
      ))}
    </div>
  );
}
