import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ProjectItem } from '../types';
import { LiveProjectButton } from './LiveProjectButton';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelectProject,
}) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="min-h-[85vh] flex items-start justify-center sticky mb-12 sm:mb-16"
      style={{
        top: `${index * 28 + 84}px`,
      }}
    >
      <motion.div
        style={{ scale }}
        id={`project-card-${project.id}`}
        className="w-full max-w-6xl rounded-[32px] sm:rounded-[45px] md:rounded-[60px] border border-cyan-500/30 bg-gradient-to-br from-slate-900/95 via-[#070D18]/95 to-[#05070A] p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.22)] backdrop-blur-xl"
      >
        {/* Top Row: Huge number, Category & Name, Live Project Button */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6 sm:mb-8 md:mb-12 border-b border-white/10 pb-6">
          <div className="flex items-baseline gap-4 sm:gap-8">
            {/* Project Number */}
            <span
              className="font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-slate-500 leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.number}
            </span>

            {/* Category & Name */}
            <div className="flex flex-col">
              <span className="font-semibold uppercase tracking-widest text-xs sm:text-sm text-cyan-400 mb-1">
                {project.category} &bull; {project.type}
              </span>
              <h3
                className="font-black uppercase text-white tracking-tight leading-none"
                style={{ fontSize: 'clamp(1.4rem, 4vw, 3rem)' }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 text-slate-300 font-medium uppercase tracking-wider text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all cursor-pointer"
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <LiveProjectButton
                id={`live-btn-${project.id}`}
                label="Live Project"
                url={project.liveUrl}
              />
            )}
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-300 transition-colors px-2 py-1 cursor-pointer"
            >
              Details
            </button>
          </div>
        </div>

        {/* Bottom Row: Image Grid (40% Left 2 stacked images, 60% Right 1 tall image) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full">
          {/* Left column (approx 40% -> col-span-5) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
            {/* Top image */}
            <motion.div
              whileHover={{ y: -3, scale: 1.012 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => onSelectProject(project)}
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[45px] overflow-hidden bg-slate-900/80 border border-white/10 group cursor-pointer relative hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1TopImage}
                alt={`${project.title} screenshot 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              {/* Dynamic Shimmer Sheen Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="text-cyan-300 text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  Expand Preview
                </span>
              </div>
            </motion.div>

            {/* Bottom image */}
            <motion.div
              whileHover={{ y: -3, scale: 1.012 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => onSelectProject(project)}
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[45px] overflow-hidden bg-slate-900/80 border border-white/10 group cursor-pointer relative hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1BottomImage}
                alt={`${project.title} screenshot 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              {/* Dynamic Shimmer Sheen Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="text-cyan-300 text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  Expand Preview
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right column (approx 60% -> col-span-7) */}
          <motion.div
            whileHover={{ y: -4, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => onSelectProject(project)}
            className="md:col-span-7 w-full h-[280px] sm:h-[360px] md:h-full min-h-[300px] md:min-h-[420px] rounded-[24px] sm:rounded-[36px] md:rounded-[45px] overflow-hidden bg-slate-900/80 border border-white/10 group cursor-pointer relative hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            <img
              src={project.col2Image}
              alt={`${project.title} featured showcase`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            {/* Dynamic Shimmer Sheen Sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
              <span className="text-cyan-300 text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                View Project Details
              </span>
            </div>
          </motion.div>
        </div>

        {/* Project Description & Tags */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-slate-300 font-light text-sm sm:text-base opacity-80 max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
