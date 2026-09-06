import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
  id?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharSpan: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (children === '\n') {
    return <br />;
  }

  return (
    <motion.span style={{ opacity }} className="inline">
      {children}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  containerRef,
  id,
  style,
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  const characters = useMemo(() => Array.from(text), [text]);
  const total = characters.length;

  return (
    <p id={id} className={className} style={style}>
      {characters.map((char, index) => {
        // Calculate range for this character
        const start = index / total;
        const end = Math.min(1, (index + 1) / total);

        return (
          <CharSpan key={index} progress={scrollYProgress} range={[start, end]}>
            {char}
          </CharSpan>
        );
      })}
    </p>
  );
};
