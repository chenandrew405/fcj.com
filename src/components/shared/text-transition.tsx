'use client';

import type { CSSProperties, PropsWithChildren } from 'react';
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface TextTransitionProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  delay?: number;
  initialY?: number;
}

export const TextTransition = ({ children, className, style, delay = 0, initialY = 14 }: TextTransitionProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: '-80px' });

  if (reduceMotion) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: initialY }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: initialY }}
      transition={{ duration: 0.42, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};
