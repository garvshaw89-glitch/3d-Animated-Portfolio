import React from 'react';
import { motion } from 'motion/react';
import { MARQUEE_IMAGES } from '../data/portfolioData';
import { ApiDev3dScreen } from './ApiDev3dScreen';

interface MarqueeSectionProps {
  id?: string;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ id = 'marquee-gallery' }) => {
  // Split images into two distinct sets
  const half = Math.ceil(MARQUEE_IMAGES.length / 2);
  const row1Images = MARQUEE_IMAGES.slice(0, half);
  const row2Images = MARQUEE_IMAGES.slice(half);

  const renderCard = (src: string, key: string, labelIndex: number) => (
    <motion.div
      key={key}
      whileHover={{ y: -8, scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[270px] rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 shadow-lg group relative hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300"
    >
      {src === 'api-dev-3d-screen' ? (
        <ApiDev3dScreen />
      ) : (
        <>
          <img
            src={src}
            alt={`Showcase item ${labelIndex}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </>
      )}
    </motion.div>
  );

  return (
    <section
      id={id}
      className="relative w-full bg-transparent pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      {/* Side Fade Vignettes for Seamless Edge Flow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#05070A] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#05070A] to-transparent z-10" />

      <div className="flex flex-col gap-4 w-full">
        {/* Row 1: Smooth Infinite Left Scroll */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-left flex">
            <div className="flex gap-4 pr-4 shrink-0">
              {row1Images.map((src, index) => renderCard(src, `r1-a-${index}`, index + 1))}
            </div>
            <div className="flex gap-4 pr-4 shrink-0" aria-hidden="true">
              {row1Images.map((src, index) => renderCard(src, `r1-b-${index}`, index + 1))}
            </div>
          </div>
        </div>

        {/* Row 2: Smooth Infinite Right Scroll */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-right flex">
            <div className="flex gap-4 pr-4 shrink-0">
              {row2Images.map((src, index) => renderCard(src, `r2-a-${index}`, index + half + 1))}
            </div>
            <div className="flex gap-4 pr-4 shrink-0" aria-hidden="true">
              {row2Images.map((src, index) => renderCard(src, `r2-b-${index}`, index + half + 1))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

