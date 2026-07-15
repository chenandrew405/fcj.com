'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import type { GalleryImage } from '@/types/content';

interface GalleryLightboxProps {
  images: GalleryImage[];
}

export const GalleryLightbox = ({ images }: GalleryLightboxProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const activeImage = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }

    return images[activeIndex] ?? null;
  }, [activeIndex, images]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length));
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => {
          let touchStart = 0;

          return (
            <button
              key={image.src}
              className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white text-left shadow-[0_20px_50px_-40px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(37,99,235,0.35)]"
              onClick={() => setActiveIndex(index)}
              onTouchEnd={(event) => {
                if (!touchStart) {
                  return;
                }

                const delta = event.changedTouches[0].clientX - touchStart;

                if (Math.abs(delta) < 40) {
                  setActiveIndex(index);
                }
              }}
              onTouchStart={(event) => {
                touchStart = event.touches[0].clientX;
              }}
              type="button"
            >
              <div className="relative aspect-[1.1/1] overflow-hidden">
                <Image
                  alt={image.alt}
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  src={image.src}
                />
              </div>
              {image.caption ? <p className="px-5 py-4 text-sm leading-6 text-slate-600">{image.caption}</p> : null}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[90] bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <div className="flex h-full items-center justify-center">
              <motion.div
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 text-white shadow-2xl"
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    {activeImage.caption ? <p className="text-base text-slate-100">{activeImage.caption}</p> : null}
                    <p className="mt-2 text-sm text-slate-400">{activeImage.alt}</p>
                  </div>
                  <button
                    aria-label="Close gallery"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                    onClick={() => setActiveIndex(null)}
                    type="button"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] bg-black/30">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      priority
                      alt={activeImage.alt}
                      className="object-contain"
                      fill
                      sizes="100vw"
                      src={activeImage.src}
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4">
                  <button
                    aria-label="Previous image"
                    className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-white transition hover:bg-slate-950"
                    onClick={() => setActiveIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length))}
                    type="button"
                  >
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </button>
                  <button
                    aria-label="Next image"
                    className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-white transition hover:bg-slate-950"
                    onClick={() => setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length))}
                    type="button"
                  >
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
