import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';
import { HERO_PORTRAIT } from '../data/portfolioData';

interface HeroSectionProps {
  onContactClick?: () => void;
  id?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  id = 'hero-section',
}) => {
  return (
    <section
      id={id}
      className="relative w-full h-screen min-h-[660px] flex flex-col justify-between bg-transparent overflow-hidden select-none"
    >
      {/* Subtle Immersive UI hero radial glow behind portrait */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-cyan-500/10 via-indigo-600/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Top Navbar */}
      <Navbar onContactClick={onContactClick} />

      {/* Hero Big Heading */}
      <div className="w-full overflow-hidden text-center z-10 px-2 sm:px-4">
        <motion.h1
          id="hero-main-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 cursor-default select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          Hi, i&apos;m garv
        </motion.h1>
      </div>

      {/* Hero Portrait in Magnet Component */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto">
        <Magnet
          id="hero-portrait-magnet"
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] flex items-end justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full flex justify-center"
            >
              <img
                id="hero-portrait-img"
                src={HERO_PORTRAIT}
                alt="Garv Shaw - AI & Cloud Developer"
                className="w-full h-auto object-contain pointer-events-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)] filter contrast-105 hover:contrast-110 transition-all duration-300"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </Magnet>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        {/* Left Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] backdrop-blur-[2px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          an ai & cloud developer crafting intelligent solutions and scalable digital experiences
        </motion.div>

        {/* Right Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton id="hero-contact-btn" onClick={onContactClick} />
        </motion.div>
      </div>
    </section>
  );
};
