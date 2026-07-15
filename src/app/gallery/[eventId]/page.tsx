import type { Metadata } from 'next';
import { Film, Images } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { Container } from '@/components/shared/container';
import { GalleryLightbox } from '@/components/shared/gallery-lightbox';
import { PageIntro } from '@/components/shared/page-intro';
import { Reveal } from '@/components/shared/reveal';
import { galleryContent, getGalleryEventById, siteContent } from '@/lib/content';
import { galleryEventLayout } from '@/lib/layout';
import { getLayoutBoxStyle } from '@/lib/layout-utils';

interface GalleryEventPageProps {
  params: Promise<{
    eventId: string;
  }>;
}

export async function generateStaticParams() {
  return galleryContent.events.map((event) => ({ eventId: event.id }));
}

export async function generateMetadata({ params }: GalleryEventPageProps): Promise<Metadata> {
  const { eventId } = await params;
  const event = getGalleryEventById(eventId);

  if (!event) {
    return {
      title: siteContent.title,
    };
  }

  return {
    title: `${event.title} | ${siteContent.name}`,
    description: event.description,
  };
}

export default async function GalleryEventPage({ params }: GalleryEventPageProps) {
  const { eventId } = await params;
  const event = getGalleryEventById(eventId);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <PageIntro description={event.description} eyebrow={event.date} title={event.title} />

      <section className="layout-shell" style={getLayoutBoxStyle(galleryEventLayout.section)}>
        <Container>
          <Reveal>
            <div className="layout-stack mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between" style={getLayoutBoxStyle(galleryEventLayout.stack)}>
              <Link className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-[#2563EB]" href="/gallery">
                <ArrowLeft className="size-4" aria-hidden="true" />
                {galleryContent.pageIntro.eyebrow}
              </Link>
              {event.location ? <p className="text-sm text-slate-500">{event.location}</p> : null}
            </div>
          </Reveal>
          <Reveal>
            <div className="space-y-12">
              <section className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                    <Images className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-mono text-2xl font-semibold text-slate-950">Images</h2>
                    <p className="text-sm text-slate-500">Browse the photo story from this lesson, with captions attached to each image.</p>
                  </div>
                </div>
                <GalleryLightbox images={event.images} />
              </section>

              <section className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                    <Film className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-mono text-2xl font-semibold text-slate-950">Videos</h2>
                    <p className="text-sm text-slate-500">Lesson videos are organized separately so each session page keeps its own media archive.</p>
                  </div>
                </div>

                {event.videos?.length ? (
                  <div className="grid gap-5 lg:grid-cols-2">
                    {event.videos.map((video) => (
                      <article key={video.src} className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_20px_50px_-40px_rgba(15,23,42,0.45)]">
                        <div className="bg-slate-950">
                          <video className="aspect-video w-full" controls preload="metadata">
                            <source src={video.src} />
                            Your browser does not support this video.
                          </video>
                        </div>
                        <div className="space-y-2 px-5 py-4">
                          <h3 className="font-mono text-lg font-semibold text-slate-950">{video.title}</h3>
                          {video.caption ? <p className="text-sm leading-6 text-slate-600">{video.caption}</p> : null}
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-sm text-slate-500">
                    No videos have been added for this lesson yet.
                  </div>
                )}
              </section>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
