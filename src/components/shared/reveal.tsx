'use client';

import type { CSSProperties, PropsWithChildren } from 'react';
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  style?: CSSProperties;
  initialX?: number;
  initialY?: number;
}

export const Reveal = ({ children, className, delay = 0, style, initialX = 0, initialY = 24 }: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: '-80px' });

  const hiddenState = { opacity: 0, x: initialX, y: initialY };
  const visibleState = { opacity: 1, x: 0, y: 0 };

  if (reduceMotion) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={hiddenState}
      animate={isInView ? visibleState : hiddenState}
      transition={{ type: 'spring', stiffness: 150, damping: 22, delay }}
    >
      {children}
    </motion.div>
  );
};
