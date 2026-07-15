'use client';

import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface TerminalTypeProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  delay?: number;
  maxCharacters?: number;
}

export const TerminalType = ({ text, delay = 0, maxCharacters = 28, style, ...props }: TerminalTypeProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { margin: '-80px' });
  const [visibleCount, setVisibleCount] = useState(0);
  const characterCount = Math.max(text.length, 1);
  const duration = Math.min(Math.max(characterCount * 0.05, 0.45), 1.3);
  const stepDuration = (duration * 1000) / characterCount;

  useEffect(() => {
    if (reduceMotion || text.length > maxCharacters) {
      return;
    }

    let interval: number | undefined;

    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setVisibleCount((currentCount) => {
          if (isInView) {
            const nextCount = Math.min(currentCount + 1, text.length);

            if (nextCount >= text.length) {
              window.clearInterval(interval);
            }

            return nextCount;
          }

          const nextCount = Math.max(currentCount - 1, 0);

          if (nextCount <= 0) {
            window.clearInterval(interval);
          }

          return nextCount;
        });
      }, stepDuration);
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);

      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [delay, isInView, maxCharacters, reduceMotion, stepDuration, text]);

  if (reduceMotion || text.length > maxCharacters) {
    return <span {...props} style={style}>{text}</span>;
  }

  return (
    <span ref={ref} {...props} style={style}>
      <span className="inline-flex max-w-full items-center align-top">
        <span className="inline-block whitespace-nowrap align-top">{text.slice(0, visibleCount)}</span>
        <motion.span
          aria-hidden="true"
          className="ml-0.5 inline-block h-[1.1em] w-[0.55em] bg-current align-middle"
          animate={isInView ? { opacity: [1, 0.2, 1] } : { opacity: 0 }}
          transition={{ delay: delay + Math.min(duration, 0.7), duration: 0.9, ease: 'linear', repeat: isInView ? Infinity : 0 }}
        />
      </span>
    </span>
  );
};
