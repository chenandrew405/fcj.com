'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-50 inline-flex size-12 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-900 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.65)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          type="button"
        >
          <ArrowUp className="size-4" aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};
