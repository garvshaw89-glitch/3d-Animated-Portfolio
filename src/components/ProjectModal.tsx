import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Layers, Tag } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          id="project-modal-content"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-slate-900/95 border border-cyan-500/30 rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(6,182,212,0.25)] backdrop-blur-2xl my-8 overflow-hidden text-[#D7E2EA]"
        >
          {/* Close button */}
          <button
            id="close-project-modal"
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-cyan-500/20 hover:text-cyan-400 text-[#D7E2EA] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-2">
            <span className="font-black text-cyan-400 text-2xl drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">{project.number}</span>
            <span className="text-xs uppercase tracking-widest text-cyan-400/80 font-medium">
              {project.category} &bull; {project.type}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight mb-4">
            {project.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
              >
                <Tag className="w-3 h-3 text-cyan-400" />
                {tag}
              </span>
            ))}
          </div>

          {/* Image Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 group"
              >
                <img
                  src={project.col1TopImage}
                  alt={`${project.title} screen 1`}
                  className="w-full h-48 object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 group"
              >
                <img
                  src={project.col1BottomImage}
                  alt={`${project.title} screen 2`}
                  className="w-full h-48 object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="h-full min-h-[300px] relative overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group"
            >
              <img
                src={project.col2Image}
                alt={`${project.title} featured`}
                className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
            </motion.div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-slate-300 text-sm font-medium uppercase tracking-wider hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-black text-sm font-bold uppercase tracking-wider hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Project</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
