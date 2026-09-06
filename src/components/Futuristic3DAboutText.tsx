import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface Futuristic3DAboutTextProps {
  id?: string;
}

interface DomainBadge {
  id: string;
  label: string;
  emoji: string;
  glowColor: string;
  accentBg: string;
  borderHover: string;
  delay: number;
}

const DOMAINS: DomainBadge[] = [
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    emoji: '🤖',
    glowColor: 'rgba(6, 182, 212, 0.5)',
    accentBg: 'from-cyan-500/20 to-blue-600/10',
    borderHover: 'hover:border-cyan-400',
    delay: 0,
  },
  {
    id: 'cloud',
    label: 'Cloud Computing',
    emoji: '☁️',
    glowColor: 'rgba(56, 189, 248, 0.5)',
    accentBg: 'from-sky-500/20 to-indigo-600/10',
    borderHover: 'hover:border-sky-400',
    delay: 0.6,
  },
  {
    id: 'dev',
    label: 'Software Development',
    emoji: '💻',
    glowColor: 'rgba(99, 102, 241, 0.5)',
    accentBg: 'from-indigo-500/20 to-purple-600/10',
    borderHover: 'hover:border-indigo-400',
    delay: 1.2,
  },
  {
    id: 'business',
    label: 'Business',
    emoji: '📊',
    glowColor: 'rgba(168, 85, 247, 0.5)',
    accentBg: 'from-purple-500/20 to-pink-600/10',
    borderHover: 'hover:border-purple-400',
    delay: 1.8,
  },
  {
    id: 'finance',
    label: 'Finance',
    emoji: '📈',
    glowColor: 'rgba(16, 185, 129, 0.5)',
    accentBg: 'from-emerald-500/20 to-teal-600/10',
    borderHover: 'hover:border-emerald-400',
    delay: 2.4,
  },
];

export const Futuristic3DAboutText: React.FC<Futuristic3DAboutTextProps> = ({
  id = 'futuristic-3d-about-text',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural gyroscopic tilt
  const springConfig = { damping: 22, stiffness: 180, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[820px] px-2 sm:px-4 select-none [perspective:1200px]"
    >
      {/* 3D Tilted Card Body */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full rounded-3xl sm:rounded-[36px] bg-[#070B13]/85 backdrop-blur-xl border border-white/10 p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(6,182,212,0.1)] transition-colors duration-500 hover:border-cyan-500/40"
      >
        {/* Holographic Ambient Backlight Aura */}
        <div
          style={{ transform: 'translateZ(-30px)' }}
          className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-indigo-500/15 blur-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Futuristic Cyber Scanning Beam */}
        <motion.div
          animate={{
            y: ['-100%', '350%'],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 2,
          }}
          className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent blur-sm z-0"
        />

        {/* Futuristic Corner Tech Reticles */}
        <div className="pointer-events-none absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-sm" />
        <div className="pointer-events-none absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-sm" />
        <div className="pointer-events-none absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-sm" />
        <div className="pointer-events-none absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/60 rounded-br-sm" />

        {/* Futuristic Status Badge Header */}
        <div
          style={{ transform: 'translateZ(35px)' }}
          className="relative z-10 flex items-center justify-center gap-2 mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-[11px] font-mono tracking-widest text-cyan-300/80 uppercase">
            Engineering Identity // Cyber Profile
          </span>
        </div>

        {/* Section 1: Intro Text */}
        <div
          style={{ transform: 'translateZ(40px)' }}
          className="relative z-10 text-center space-y-3"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-slate-200 text-lg sm:text-xl md:text-[22px] font-medium leading-relaxed tracking-wide"
          >
            Hello! I&apos;m{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 drop-shadow-[0_0_18px_rgba(6,182,212,0.4)]">
              Garv Shaw
            </span>
            , a passionate{' '}
            <span className="text-white font-semibold underline decoration-cyan-400/40 decoration-2 underline-offset-4">
              B.Tech Computer Science &amp; Engineering
            </span>{' '}
            student exploring the intersection of:
          </motion.p>
        </div>

        {/* Section 2: 3D Holographic Interactive Domain Badges */}
        <div
          style={{ transform: 'translateZ(60px)' }}
          className="relative z-20 my-8 sm:my-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
        >
          {DOMAINS.map((domain) => (
            <motion.div
              key={domain.id}
              animate={{
                y: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: domain.delay,
              }}
              whileHover={{
                scale: 1.08,
                y: -6,
                transition: { type: 'spring', stiffness: 400, damping: 18 },
              }}
              className={`group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-r ${domain.accentBg} bg-[#0A101D]/90 border border-white/15 backdrop-blur-md cursor-pointer transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.6)] ${domain.borderHover}`}
            >
              {/* Internal neon shimmer glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                style={{ backgroundColor: domain.glowColor }}
              />

              <span className="relative z-10 text-base sm:text-lg select-none filter drop-shadow">
                {domain.emoji}
              </span>
              <span className="relative z-10 text-xs sm:text-sm font-semibold text-slate-100 tracking-wide group-hover:text-white whitespace-nowrap">
                {domain.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Section 3: Passion Manifesto Statement */}
        <div
          style={{ transform: 'translateZ(35px)' }}
          className="relative z-10 text-center pt-2 border-t border-white/5"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-normal max-w-2xl mx-auto"
          >
            I&apos;m passionate about{' '}
            <span className="text-cyan-300 font-medium">building with AI</span>, developing{' '}
            <span className="text-sky-300 font-medium">modern web experiences</span>, experimenting with{' '}
            <span className="text-indigo-300 font-medium">emerging technologies</span>, and turning ideas into{' '}
            <span className="text-emerald-300 font-medium">useful digital products</span>.
          </motion.p>
        </div>

        {/* Interactive 3D Depth Floating Particles / Nodes */}
        <motion.div
          style={{ transform: 'translateZ(50px)' }}
          animate={{
            opacity: isHovered ? 0.9 : 0.4,
            rotate: [0, 360],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 0.3 },
          }}
          className="pointer-events-none absolute -top-4 -right-4 w-16 h-16 rounded-full border border-cyan-400/20 border-dashed"
        />
        <motion.div
          style={{ transform: 'translateZ(45px)' }}
          animate={{
            opacity: isHovered ? 0.8 : 0.3,
            rotate: [360, 0],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 0.3 },
          }}
          className="pointer-events-none absolute -bottom-4 -left-4 w-20 h-20 rounded-full border border-indigo-400/20 border-dotted"
        />
      </motion.div>
    </div>
  );
};
