import React from 'react';
import { FadeIn } from './FadeIn';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { Github, Linkedin, Instagram, Mail, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterSectionProps {
  onContactClick?: () => void;
  id?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  id = 'contact',
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Email':
      default:
        return <Mail className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <footer
      id={id}
      className="relative w-full bg-[#05070A] text-[#D7E2EA] px-6 sm:px-10 md:px-16 pt-20 pb-12 border-t border-cyan-500/20 overflow-hidden select-none"
    >
      {/* Immersive UI ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        {/* Main Footer Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-14 border-b border-white/10">
          <FadeIn delay={0} y={30} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-4">
              <span>Connect Directly</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              Let&apos;s build something transformative.
            </h2>
            <p className="mt-4 text-[#D7E2EA]/70 font-light text-base sm:text-lg max-w-xl leading-relaxed">
              Open for AI systems engineering, cloud architecture consulting, quantitative market analysis, and high-performance backend development.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} y={30} className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              id="footer-email-direct-btn"
              href="mailto:garvshawinfo@gmail.com"
              className="relative inline-flex items-center justify-center gap-3 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm px-8 py-3.5 sm:px-10 sm:py-4 transition-all duration-200 cursor-pointer shadow-[0_4px_24px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.6)] hover:scale-105"
              style={{
                background: 'linear-gradient(123deg, #083344 0%, #06B6D4 38%, #4F46E5 72%, #7C3AED 100%)',
                outline: '2px solid rgba(255, 255, 255, 0.95)',
                outlineOffset: '-3px',
              }}
            >
              <Mail className="w-4 h-4 text-cyan-200" />
              <span>Email Garv</span>
            </a>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/60 hover:text-cyan-400 transition-colors cursor-pointer py-2 px-3 rounded-lg hover:bg-white/5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>

        {/* Social Links Grid: GitHub, LinkedIn, Instagram, Email */}
        <div id="social-links" className="py-12 border-b border-white/10">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Online Presence & Direct Inquiries
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                id={`footer-social-${link.name.toLowerCase()}`}
                href={link.url}
                target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-slate-900/80 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                    {getIcon(link.name)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                      {link.name}
                    </span>
                    <span className="text-xs text-slate-400 font-light truncate max-w-[170px] sm:max-w-[190px]">
                      {link.label}
                    </span>
                  </div>
                </div>

                <div className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/50">
          <p>&copy; {new Date().getFullYear()} Garv Shaw. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-cyan-400 font-medium">B.Tech Computer Science</span>
            <span>&bull;</span>
            <span>AI & Cloud Specialist</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
