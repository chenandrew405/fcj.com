import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

import { Container } from '@/components/shared/container';
import { PageIntro } from '@/components/shared/page-intro';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeader } from '@/components/shared/section-header';
import { aboutContent } from '@/lib/content';
import { aboutMissionVisionLayout, aboutTeamLayout, aboutWhyCodingLayout, aboutWhyNonprofitLayout } from '@/lib/layout';
import { getLayoutBoxStyle } from '@/lib/layout-utils';

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        description={aboutContent.pageIntro.description}
        eyebrow={aboutContent.pageIntro.eyebrow}
        title={aboutContent.pageIntro.title}
      />

      <section className="layout-shell" style={getLayoutBoxStyle(aboutMissionVisionLayout.section)}>
        <Container>
          <div className="layout-grid layout-grid-cols grid" style={getLayoutBoxStyle(aboutMissionVisionLayout.grid)}>
            {[aboutContent.mission, aboutContent.vision].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="layout-card-size premium-card interactive-card" style={getLayoutBoxStyle(aboutMissionVisionLayout.card)}>
                  <h2 className="font-mono text-3xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-5 text-base leading-8 text-slate-600">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="layout-shell" style={getLayoutBoxStyle(aboutWhyCodingLayout.section)}>
        <Container>
          <div className="layout-grid layout-grid-cols grid" style={getLayoutBoxStyle(aboutWhyCodingLayout.grid)}>
            <Reveal>
              <article className="layout-card-size premium-card" style={getLayoutBoxStyle(aboutWhyCodingLayout.card)}>
                <SectionHeader
                  description={aboutContent.whyCoding.paragraphs[0] ?? ''}
                  eyebrow={aboutContent.pageIntro.eyebrow}
                  title={aboutContent.whyCoding.title}
                />
                <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                  {aboutContent.whyCoding.paragraphs.slice(1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="layout-card-size premium-card overflow-hidden" style={getLayoutBoxStyle(aboutWhyCodingLayout.card)}>
                <div className="layout-media relative overflow-hidden" style={getLayoutBoxStyle(aboutWhyCodingLayout.media)}>
                  <Image alt={aboutContent.storyImages[0]?.alt ?? ''} className="object-cover" fill sizes="40vw" src={aboutContent.storyImages[0]?.src ?? '/images/classroom.jpg'} />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="layout-shell" style={getLayoutBoxStyle(aboutWhyNonprofitLayout.section)}>
        <Container>
          <div className="layout-grid layout-grid-cols grid" style={getLayoutBoxStyle(aboutWhyNonprofitLayout.grid)}>
            <Reveal>
              <div className="layout-card-size premium-card overflow-hidden" style={getLayoutBoxStyle(aboutWhyNonprofitLayout.card)}>
                <div className="layout-media relative overflow-hidden" style={getLayoutBoxStyle(aboutWhyNonprofitLayout.media)}>
                  <Image alt={aboutContent.storyImages[1]?.alt ?? ''} className="object-cover" fill sizes="40vw" src={aboutContent.storyImages[1]?.src ?? '/images/header.jpg'} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="layout-card-size premium-card" style={getLayoutBoxStyle(aboutWhyNonprofitLayout.card)}>
                <SectionHeader
                  description={aboutContent.whyNonprofit.paragraphs[0] ?? ''}
                  eyebrow={aboutContent.pageIntro.eyebrow}
                  title={aboutContent.whyNonprofit.title}
                />
                <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                  {aboutContent.whyNonprofit.paragraphs.slice(1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="layout-shell" style={getLayoutBoxStyle(aboutTeamLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              description={aboutContent.team.description}
              eyebrow={aboutContent.pageIntro.eyebrow}
              title={aboutContent.team.title}
            />
          </Reveal>
          <div className="mt-10 flex flex-col items-center">
            <Reveal>
              <article className="w-full max-w-md rounded-[1.75rem] border border-[#2563EB]/15 bg-white px-8 py-7 text-center shadow-[0_25px_55px_-40px_rgba(37,99,235,0.45)]">
                <h3 className="font-mono text-2xl font-semibold text-slate-950">Student Instructors</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Student volunteers support event coordination, peer learning, and direct family-facing community work.</p>
              </article>
            </Reveal>

            <div className="mt-6 flex w-full max-w-5xl flex-col items-center">
              <div className="h-10 w-px bg-slate-300" />
              <div className="hidden h-px w-[min(100%,34rem)] bg-slate-300 md:block" />
              <div className="grid w-full gap-6 pt-6 md:grid-cols-2" style={getLayoutBoxStyle(aboutTeamLayout.grid)}>
                {aboutContent.team.members.map((member, index) => (
                  <Reveal key={member.name} className="h-full" delay={index * 0.08}>
                    <article className="layout-radius premium-card h-full overflow-hidden" style={getLayoutBoxStyle(aboutTeamLayout.card)}>
                      <div className="layout-card-size space-y-5" style={getLayoutBoxStyle(aboutTeamLayout.cardSecondary)}>
                        {member.image ? (
                          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-slate-100">
                            <Image alt={member.name} className="object-cover" fill sizes="(max-width: 768px) 100vw, 33vw" src={member.image} />
                          </div>
                        ) : (
                          <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] border border-dashed border-slate-300 bg-slate-50 text-center text-sm text-slate-400">
                            Add volunteer photo
                          </div>
                        )}

                        <div className="space-y-3">
                          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#2563EB]">{member.role}</p>
                          <h3 className="font-mono text-2xl font-semibold text-slate-950">{member.name}</h3>
                        </div>

                        <div className="rounded-[1.25rem] border border-slate-200/80 bg-white/90 p-5">
                          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">Pedigree</p>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
                        </div>

                        <div className="grid gap-3 rounded-[1.25rem] border border-slate-200/80 bg-slate-50/70 p-4 text-sm text-slate-600">
                          <div className="flex items-center gap-3">
                            <span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-[#2563EB] shadow-sm">
                              <Mail className="size-4" aria-hidden="true" />
                            </span>
                            {member.email?.includes('@') ? (
                              <Link className="transition hover:text-[#2563EB]" href={`mailto:${member.email}`}>
                                {member.email}
                              </Link>
                            ) : (
                              <span>{member.email ?? 'Email coming soon'}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-[#2563EB] shadow-sm">
                              <Phone className="size-4" aria-hidden="true" />
                            </span>
                            {member.phone && !member.phone.toLowerCase().includes('coming soon') ? (
                              <Link className="transition hover:text-[#2563EB]" href={`tel:${member.phone}`}>
                                {member.phone}
                              </Link>
                            ) : (
                              <span>{member.phone ?? 'Phone coming soon'}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
