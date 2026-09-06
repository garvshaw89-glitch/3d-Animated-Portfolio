import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Futuristic3DAboutText } from './Futuristic3DAboutText';
import { ContactButton } from './ContactButton';
import { ABOUT_3D_ASSETS } from '../data/portfolioData';

interface AboutSectionProps {
  onContactClick?: () => void;
  id?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onContactClick,
  id = 'about',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id={id}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-transparent overflow-hidden select-none"
    >
      {/* Immersive UI ambient backlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/15 via-cyan-500/10 to-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative 3D Assets (Animated Floating Physics) */}

      {/* Top-left (Moon icon) */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <motion.div
            animate={{
              y: [-12, 12, -12],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src={ABOUT_3D_ASSETS.moon}
              alt="3D Moon Asset"
              loading="lazy"
              className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-85 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter hover:brightness-110 transition-all duration-300"
            />
          </motion.div>
        </FadeIn>
      </div>

      {/* Bottom-left (3D object) */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <motion.div
            animate={{
              y: [10, -14, 10],
              rotate: [4, -5, 4],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src={ABOUT_3D_ASSETS.object3D}
              alt="3D Sphere Asset"
              loading="lazy"
              className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain opacity-85 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter hover:brightness-110 transition-all duration-300"
            />
          </motion.div>
        </FadeIn>
      </div>

      {/* Top-right (Lego icon) */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <motion.div
            animate={{
              y: [-14, 10, -14],
              rotate: [-6, 6, -6],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src={ABOUT_3D_ASSETS.lego}
              alt="3D Lego Asset"
              loading="lazy"
              className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain opacity-85 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter hover:brightness-110 transition-all duration-300"
            />
          </motion.div>
        </FadeIn>
      </div>

      {/* Bottom-right (3D group) */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <motion.div
            animate={{
              y: [12, -12, 12],
              rotate: [3, -6, 3],
              scale: [0.98, 1.02, 0.98],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src={ABOUT_3D_ASSETS.group3D}
              alt="3D Abstract Group Asset"
              loading="lazy"
              className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain opacity-85 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter hover:brightness-110 transition-all duration-300"
            />
          </motion.div>
        </FadeIn>
      </div>

      {/* Main Content Column */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            id="about-me-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* 3D Animated Futuristic Text Container */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center">
          <Futuristic3DAboutText id="about-me-description" />
        </div>

        {/* Contact Button */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton id="about-contact-btn" onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
