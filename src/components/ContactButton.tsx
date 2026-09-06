import React from 'react';
import { motion } from 'motion/react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Contact Me',
  onClick,
  className = '',
  id = 'contact-me-btn',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'mailto:garvshawinfo@gmail.com';
      }
    }
  };

  return (
    <motion.button
      id={id}
      whileHover={{ scale: 1.05, filter: 'brightness(1.18)' }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center cursor-pointer rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 transition-all duration-200 select-none ${className}`}
      style={{
        background: 'linear-gradient(123deg, #083344 0%, #06B6D4 38%, #4F46E5 72%, #7C3AED 100%)',
        boxShadow: '0px 4px 24px rgba(6, 182, 212, 0.4), inset 2px 2px 12px rgba(34, 211, 238, 0.5)',
        outline: '2px solid rgba(255, 255, 255, 0.95)',
        outlineOffset: '-3px',
      }}
    >
      <span className="relative z-10 whitespace-nowrap drop-shadow-md">{label}</span>
    </motion.button>
  );
};
