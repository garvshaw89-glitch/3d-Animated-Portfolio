import React from 'react';
import { FadeIn } from './FadeIn';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  id?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  id = 'projects',
}) => {
  return (
    <section
      id={id}
      className="relative w-full bg-transparent rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-12 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Heading */}
        <FadeIn delay={0} y={30} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            id="projects-heading"
            className="hero-heading font-black uppercase tracking-tight leading-none text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Stacked Cards Container */}
        <div className="relative w-full flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
