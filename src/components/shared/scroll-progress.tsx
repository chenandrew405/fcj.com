'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 1000 : 160,
    damping: reduceMotion ? 100 : 24,
    mass: 0.2,
  });

  return <motion.div className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-[#2563EB]" style={{ scaleX }} />;
};
