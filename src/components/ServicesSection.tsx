import React from 'react';
import { Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { SKILLS } from '../data/portfolioData';

interface ServicesSectionProps {
  id?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ id = 'skills' }) => {
  return (
    <section
      id={id}
      className="relative w-full bg-gradient-to-b from-slate-900/90 via-[#080E1A]/95 to-[#05070A] text-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] border-t border-cyan-500/20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0 overflow-hidden shadow-[0_-20px_50px_rgba(6,182,212,0.08)]"
    >
      {/* Immersive UI ambient spotlights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-80 h-80 bg-blue-900/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical & Strategic Arsenal</span>
          </div>
          <h2
            id="skills-heading"
            className="hero-heading-cyan font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28 select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Skills List */}
        <div className="w-full flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
          {SKILLS.map((skill, index) => (
            <FadeIn
              key={skill.id}
              delay={index * 0.07}
              y={30}
              className="w-full py-8 sm:py-10 md:py-12"
            >
              <div
                id={`skill-item-${skill.id}`}
                className="w-full flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 group p-4 sm:p-6 -mx-4 sm:-mx-6 rounded-2xl sm:rounded-3xl hover:bg-white/[0.03] transition-all duration-300"
              >
                {/* Number Left */}
                <div
                  className="font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-400/90 to-slate-600 leading-none select-none shrink-0 group-hover:from-cyan-300 group-hover:to-cyan-500 transition-all duration-300 w-24 sm:w-28 md:w-36"
                  style={{ fontSize: 'clamp(3rem, 8vw, 120px)' }}
                >
                  {skill.number}
                </div>

                {/* Name, Description & Skill Tags Right */}
                <div className="flex-1 flex flex-col justify-center pt-2 md:pt-4">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <h3
                      className="font-medium uppercase text-white group-hover:text-cyan-400 tracking-wide transition-colors"
                      style={{ fontSize: 'clamp(1.15rem, 2.2vw, 2rem)' }}
                    >
                      {skill.title}
                    </h3>
                  </div>

                  <p
                    className="font-light text-slate-400 leading-relaxed max-w-3xl mb-4 sm:mb-5"
                    style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)' }}
                  >
                    {skill.description}
                  </p>

                  {/* Skill Tag Pills */}
                  {skill.tags && skill.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs uppercase tracking-wider px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
