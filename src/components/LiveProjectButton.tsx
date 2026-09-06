import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  url?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
  id?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  url,
  onClick,
  className = '',
  label = 'Live Project',
  id = 'live-project-btn',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.button
      id={id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={handleClick}
      className={`group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 font-medium uppercase tracking-widest text-sm sm:text-base px-6 py-2.5 sm:px-8 sm:py-3 backdrop-blur-md transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] cursor-pointer whitespace-nowrap ${className}`}
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
    </motion.button>
  );
};
