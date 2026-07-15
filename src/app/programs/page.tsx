import Image from 'next/image';

import { Container } from '@/components/shared/container';
import { PageIntro } from '@/components/shared/page-intro';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeader } from '@/components/shared/section-header';
import { programsContent } from '@/lib/content';
import { programsListLayout } from '@/lib/layout';
import { getLayoutBoxStyle } from '@/lib/layout-utils';

export default function ProgramsPage() {
  return (
    <main>
      <PageIntro
        description={programsContent.pageIntro.description}
        eyebrow={programsContent.pageIntro.eyebrow}
        title={programsContent.pageIntro.title}
      />

      <section className="layout-shell" style={getLayoutBoxStyle(programsListLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              description={programsContent.sectionIntro.description}
              eyebrow={programsContent.sectionIntro.eyebrow}
              title={programsContent.sectionIntro.title}
            />
          </Reveal>
          <div className="layout-grid layout-grid-cols mt-10 grid" style={getLayoutBoxStyle(programsListLayout.grid)}>
            {programsContent.programs.map((program, index) => {
              return (
                <Reveal key={program.id} delay={index * 0.06}>
                  <article className="layout-radius premium-card interactive-card overflow-hidden lg:grid lg:grid-cols-[0.95fr_1.05fr]" style={getLayoutBoxStyle(programsListLayout.card)}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 lg:aspect-auto lg:h-full lg:min-h-[22rem]">
                      {program.imagePlaceholderText ? (
                        <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.14),_transparent_58%),linear-gradient(180deg,_rgba(241,245,249,0.95),_rgba(226,232,240,0.9))] px-8 text-center">
                          <p className="font-mono text-3xl font-semibold tracking-[0.12em] text-slate-500 sm:text-4xl">{program.imagePlaceholderText}</p>
                        </div>
                      ) : (
                        <Image alt={program.title} className="object-cover" fill sizes="(max-width: 1280px) 100vw, 45vw" src={program.image} />
                      )}
                    </div>
                    <div className="layout-card-size flex h-full flex-col gap-6" style={getLayoutBoxStyle(programsListLayout.cardSecondary)}>
                      <div className="relative inline-flex size-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                        <Image alt="" aria-hidden="true" className="object-contain p-2" fill sizes="48px" src={program.badgeImage} />
                      </div>
                      <div className="space-y-3">
                        <h2 className="font-mono text-2xl font-semibold text-slate-950">{program.title}</h2>
                        <p className="text-sm leading-7 text-slate-600">{program.description}</p>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-4 pt-2">
                        <div className="min-w-[11rem] flex-1 rounded-[1.25rem] border border-slate-200/80 bg-white/90 p-5">
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Age</p>
                          <p className="mt-3 break-words text-sm font-semibold leading-6 text-slate-900">{program.recommendedAge}</p>
                        </div>
                        <div className="min-w-[11rem] flex-1 rounded-[1.25rem] border border-slate-200/80 bg-white/90 p-5">
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Duration</p>
                          <p className="mt-3 break-words text-sm font-semibold leading-6 text-slate-900">{program.duration}</p>
                        </div>
                        <div className="min-w-[11rem] flex-1 rounded-[1.25rem] border border-slate-200/80 bg-white/90 p-5">
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Level</p>
                          <p className="mt-3 break-words text-sm font-semibold leading-6 text-slate-900">{program.skillLevel}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
