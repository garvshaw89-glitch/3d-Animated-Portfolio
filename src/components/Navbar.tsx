import React from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
  onContactClick?: () => void;
  id?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, id = 'main-navbar' }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'contact') {
      if (onContactClick) {
        onContactClick();
        return;
      }
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      window.location.href = 'mailto:garvshawinfo@gmail.com';
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <motion.nav
      id={id}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 z-30 select-none"
    >
      {navLinks.map((link) => (
        <a
          key={link.target}
          id={`nav-link-${link.target}`}
          href={`#${link.target}`}
          onClick={(e) => scrollToSection(e, link.target)}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-200 cursor-pointer"
        >
          {link.label}
        </a>
      ))}
    </motion.nav>
  );
};
