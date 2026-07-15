import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/container';
import { PageIntro } from '@/components/shared/page-intro';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeader } from '@/components/shared/section-header';
import { galleryContent } from '@/lib/content';
import { galleryGridLayout } from '@/lib/layout';
import { getLayoutBoxStyle } from '@/lib/layout-utils';

export default function GalleryPage() {
  return (
    <main>
      <PageIntro
        description={galleryContent.pageIntro.description}
        eyebrow={galleryContent.pageIntro.eyebrow}
        title={galleryContent.pageIntro.title}
      />

      <section className="layout-shell" style={getLayoutBoxStyle(galleryGridLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              description={galleryContent.sectionIntro.description}
              eyebrow={galleryContent.sectionIntro.eyebrow}
              title={galleryContent.sectionIntro.title}
            />
          </Reveal>

          <div className="layout-grid layout-grid-cols mt-10 grid" style={getLayoutBoxStyle(galleryGridLayout.grid)}>
            {galleryContent.events.map((event, index) => (
              <Reveal key={event.id} delay={index * 0.06}>
                <Link className="group block" href={`/gallery/${event.id}`}>
                  <article className="layout-radius premium-card interactive-card overflow-hidden" style={getLayoutBoxStyle(galleryGridLayout.card)}>
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image alt={event.title} className="object-cover transition duration-500 group-hover:scale-[1.04]" fill sizes="(max-width: 1280px) 100vw, 33vw" src={event.coverImage} />
                    </div>
                    <div className="layout-card-size space-y-3" style={getLayoutBoxStyle(galleryGridLayout.cardSecondary)}>
                      <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                        <span>{event.date}</span>
                        {event.location ? <span>{event.location}</span> : null}
                      </div>
                      <h2 className="font-mono text-2xl font-semibold text-slate-950">{event.title}</h2>
                      <p className="text-sm leading-7 text-slate-600">{event.description}</p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
