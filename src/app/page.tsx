import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container } from '@/components/shared/container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeader } from '@/components/shared/section-header';
import { TerminalType } from '@/components/shared/terminal-type';
import { TextTransition } from '@/components/shared/text-transition';
import { Button } from '@/components/ui/button';
import {
  homeAboutPreviewLayout,
  homeContactLayout,
  homeGalleryPreviewLayout,
  homeHeroLayout,
  homeProgramsPreviewLayout,
  homeSchedulePreviewLayout,
  homeTestimonialsLayout,
  homeVolunteerLayout,
} from '@/lib/layout';
import { getLayoutBoxStyle, getLayoutTextStyle } from '@/lib/layout-utils';
import {
  aboutContent,
  galleryContent,
  heroContent,
  programsContent,
  scheduleContent,
  siteContent,
  testimonialsContent,
} from '@/lib/content';

export default function HomePage() {
  const k = 0.5;

  return (
    <main>
      <section className="layout-shell relative overflow-hidden" style={getLayoutBoxStyle(homeHeroLayout.section)}>
        <div className="orb orb-one left-[5%] top-16 h-48 w-48" />
        <div className="orb orb-two right-[10%] top-24 h-64 w-64" />
        <Container>
          <div className="layout-grid layout-grid-cols grid lg:items-center" style={getLayoutBoxStyle(homeHeroLayout.grid)}>
            <Reveal className="layout-stack" style={getLayoutBoxStyle(homeHeroLayout.stack)}>
              <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-[#2563EB]/15 bg-[#2563EB]/8 px-4 py-2 text-sm text-[#1d4ed8] sm:mb-4 lg:mb-5">
                <span className="font-mono font-semibold uppercase tracking-[0.22em]"><TerminalType text={heroContent.eyebrow} /></span>
              </div>

              <div className="layout-stack" style={getLayoutBoxStyle(homeHeroLayout.stackSecondary)}>
                <TextTransition delay={0.08}>
                  <h1 className="layout-title font-mono font-semibold tracking-tight text-slate-950" style={getLayoutTextStyle(homeHeroLayout.title)}>
                    {heroContent.title}
                  </h1>
                </TextTransition>
                <TextTransition delay={0.15}>
                  <p className="layout-description mt-[10px] text-slate-600" style={getLayoutTextStyle(homeHeroLayout.description)}>
                    {heroContent.description}
                  </p>
                </TextTransition>
              </div>

              <div className="layout-stack mt-4 mb-3 flex flex-col sm:mt-5 sm:mb-4 sm:flex-row sm:flex-wrap sm:items-center" style={getLayoutBoxStyle(homeHeroLayout.card)}>
                <Button asChild className="m-[20px]">
                  <Link href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Link>
                </Button>
                <Button asChild className="m-[20px]" variant="secondary">
                  <Link href={heroContent.secondaryCta.href}>{heroContent.secondaryCta.label}</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal className="relative lg:pl-8" delay={0.1}>
              <div className="grid-sheen layout-panel-size premium-card relative min-h-[32rem] overflow-visible sm:min-h-[40rem] lg:min-h-[46rem]" style={getLayoutBoxStyle(homeHeroLayout.panel)}>
                <div className="layout-grid grid overflow-hidden rounded-[1.75rem] sm:grid-cols-[1.35fr_0.65fr]" style={getLayoutBoxStyle(homeHeroLayout.media)}>
                  <Reveal initialX={0} initialY={-180 * k}>
                    <div className="relative min-h-[20rem] overflow-hidden rounded-[1.5rem] sm:min-h-[28rem] lg:min-h-[41rem]">
                      <Image
                        alt={heroContent.heroImages.primary.alt}
                        className="object-cover"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 38vw"
                        src={heroContent.heroImages.primary.src}
                      />
                    </div>
                  </Reveal>
                  <div className="layout-grid grid grid-rows-2" style={getLayoutBoxStyle(homeHeroLayout.media)}>
                    <Reveal delay={0.06} initialX={0} initialY={-150 * k}>
                      <div className="relative min-h-[9.5rem] overflow-hidden rounded-[1.5rem] sm:min-h-[13rem] lg:min-h-[19.5rem]">
                        <Image
                          alt={heroContent.heroImages.secondary.alt}
                          className="object-cover"
                          fill
                          sizes="(max-width: 1024px) 100vw, 20vw"
                          src={heroContent.heroImages.secondary.src}
                        />
                      </div>
                    </Reveal>
                    <Reveal delay={0.12} initialX={0} initialY={-150 * k}>
                      <div className="relative min-h-[9.5rem] overflow-hidden rounded-[1.5rem] sm:min-h-[13rem] lg:min-h-[19.5rem]">
                        <Image
                          alt={heroContent.heroImages.tertiary.alt}
                          className="object-cover"
                          fill
                          sizes="(max-width: 1024px) 100vw, 20vw"
                          src={heroContent.heroImages.tertiary.src}
                        />
                      </div>
                    </Reveal>
                  </div>
                </div>

                <Reveal className="absolute -left-5 bottom-8 hidden sm:block lg:-left-10 lg:bottom-10" delay={0.14} initialX={-160 * k} initialY={26 * k}>
                  <div className="w-72 rounded-[1.5rem] border border-white/70 bg-white/92 p-5 shadow-[0_24px_44px_-25px_rgba(15,23,42,0.35)] backdrop-blur-xl">
                    <p className="font-mono text-sm font-semibold text-slate-950">{heroContent.floatingCards[0]?.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{heroContent.floatingCards[0]?.description}</p>
                  </div>
                </Reveal>
                <Reveal className="absolute -right-5 top-8 hidden lg:block lg:-right-10 lg:top-10" delay={0.2} initialX={160 * k} initialY={-26 * k}>
                  <div className="w-64 rounded-[1.5rem] border border-white/70 bg-white/92 p-5 shadow-[0_24px_44px_-25px_rgba(15,23,42,0.35)] backdrop-blur-xl">
                    <p className="font-mono text-sm font-semibold text-slate-950">{heroContent.floatingCards[1]?.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{heroContent.floatingCards[1]?.description}</p>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>

          <div className="layout-grid layout-grid-cols mt-10 grid" style={getLayoutBoxStyle(homeHeroLayout.gridSecondary)}>
            {heroContent.stats.map((stat) => (
              <div key={stat.label} className="layout-card-size premium-card interactive-card flex min-h-[8rem] flex-col justify-between lg:min-h-[7rem]" style={getLayoutBoxStyle(homeHeroLayout.cardSecondary)}>
                <p className="font-mono text-lg font-semibold text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{stat.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="layout-shell" id="about" style={getLayoutBoxStyle(homeAboutPreviewLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              action={{ href: '/about', label: siteContent.sectionLabels.about }}
              description={aboutContent.pageIntro.description}
              eyebrow={siteContent.sectionLabels.about}
              title={aboutContent.pageIntro.title}
            />
          </Reveal>
          <div className="layout-grid layout-grid-cols mt-10 grid" style={getLayoutBoxStyle(homeAboutPreviewLayout.grid)}>
            {[aboutContent.mission, aboutContent.vision].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="layout-card-size premium-card interactive-card flex h-full flex-col" style={getLayoutBoxStyle(homeAboutPreviewLayout.card)}>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#2563EB]">{siteContent.name}</p>
                  <h3 className="mt-4 font-mono text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{item.description}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <article className="layout-card-size premium-card interactive-card flex h-full flex-col overflow-hidden" style={getLayoutBoxStyle(homeAboutPreviewLayout.card)}>
                <div className="relative h-full min-h-72 overflow-hidden rounded-[1.25rem]">
                  <Image alt={aboutContent.storyImages[0]?.alt ?? ''} className="object-cover" fill sizes="30vw" src={aboutContent.storyImages[0]?.src ?? '/images/classroom.jpg'} />
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="layout-shell" id="programs" style={getLayoutBoxStyle(homeProgramsPreviewLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              action={{ href: '/programs', label: siteContent.sectionLabels.programs }}
              description={programsContent.sectionIntro.description}
              eyebrow={programsContent.sectionIntro.eyebrow}
              title={programsContent.sectionIntro.title}
            />
          </Reveal>
          <div className="layout-grid layout-grid-cols mt-10 grid" style={getLayoutBoxStyle(homeProgramsPreviewLayout.grid)}>
            {programsContent.programs.slice(0, 3).map((program, index) => {
              return (
                <Reveal key={program.id} delay={index * 0.08}>
                  <article className="layout-radius premium-card interactive-card overflow-hidden" style={getLayoutBoxStyle(homeProgramsPreviewLayout.card)}>
                    <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                      {program.imagePlaceholderText ? (
                        <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.14),_transparent_58%),linear-gradient(180deg,_rgba(241,245,249,0.95),_rgba(226,232,240,0.9))] px-8 text-center">
                          <p className="font-mono text-3xl font-semibold tracking-[0.12em] text-slate-500">{program.imagePlaceholderText}</p>
                        </div>
                      ) : (
                        <Image alt={program.title} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 33vw" src={program.image} />
                      )}
                    </div>
                    <div className="layout-card-size flex h-full flex-col gap-5" style={getLayoutBoxStyle(homeProgramsPreviewLayout.cardSecondary)}>
                      <div className="relative inline-flex size-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                        <Image alt="" aria-hidden="true" className="object-contain p-2" fill sizes="48px" src={program.badgeImage} />
                      </div>
                      <div>
                        <h3 className="font-mono text-2xl font-semibold text-slate-950">{program.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-3 pt-1 text-sm text-slate-600">
                        <div className="min-w-[9rem] flex-1 rounded-[1.1rem] border border-slate-200/80 bg-white/90 p-4">
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Age</p>
                          <p className="mt-2 break-words leading-5 text-slate-700">{program.recommendedAge}</p>
                        </div>
                        <div className="min-w-[9rem] flex-1 rounded-[1.1rem] border border-slate-200/80 bg-white/90 p-4">
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Duration</p>
                          <p className="mt-2 break-words leading-5 text-slate-700">{program.duration}</p>
                        </div>
                        <div className="min-w-[9rem] flex-1 rounded-[1.1rem] border border-slate-200/80 bg-white/90 p-4">
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Level</p>
                          <p className="mt-2 break-words leading-5 text-slate-700">{program.skillLevel}</p>
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

      <section className="layout-shell" id="schedule" style={getLayoutBoxStyle(homeSchedulePreviewLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              action={{ href: '/schedule', label: siteContent.sectionLabels.schedule }}
              description={scheduleContent.sectionIntro.description}
              eyebrow={scheduleContent.sectionIntro.eyebrow}
              title={scheduleContent.sectionIntro.title}
            />
          </Reveal>
          <Reveal className="layout-radius mt-10 overflow-hidden border border-white/70 bg-white/85 shadow-[0_30px_70px_-55px_rgba(15,23,42,0.45)] backdrop-blur-xl" style={getLayoutBoxStyle(homeSchedulePreviewLayout.panel)}>
            <div className="hidden grid-cols-[1.3fr_repeat(5,minmax(0,1fr))] gap-4 border-b border-slate-200/80 bg-slate-50/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 md:grid">
              <span>Program</span>
              <span>Day</span>
              <span>Time</span>
              <span>Place</span>
              <span>Instructor</span>
              <span>Availability</span>
            </div>
            <div>
              {scheduleContent.items.slice(0, 4).map((item, index) => {
                const availabilityClassName = item.availabilityHref
                  ? 'inline-flex w-fit rounded-full bg-[#2563EB]/10 px-3 py-1 text-sm font-medium text-[#1d4ed8] transition hover:bg-[#2563EB]/15 hover:text-[#1e40af]'
                  : 'inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600';

                return (
                  <div key={`${item.program}-${item.day}-${index}`} className="grid gap-3 border-b border-slate-200/70 px-6 py-5 md:grid-cols-[1.3fr_repeat(5,minmax(0,1fr))] md:items-center md:gap-4">
                    <div>
                      <p className="font-mono text-lg font-semibold text-slate-950">{item.program}</p>
                    </div>
                    <p className="text-sm text-slate-600">{item.day}</p>
                    <p className="text-sm text-slate-600">{item.time}</p>
                    <p className="text-sm text-slate-600">{item.place}</p>
                    <p className="text-sm text-slate-600">{item.instructor}</p>
                    {item.availabilityHref ? (
                      <Link className={availabilityClassName} href={item.availabilityHref}>
                        {item.availability}
                      </Link>
                    ) : (
                      <p className={availabilityClassName}>{item.availability}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="layout-shell" id="gallery" style={getLayoutBoxStyle(homeGalleryPreviewLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              action={{ href: '/gallery', label: siteContent.sectionLabels.gallery }}
              description={galleryContent.sectionIntro.description}
              eyebrow={galleryContent.sectionIntro.eyebrow}
              title={galleryContent.sectionIntro.title}
            />
          </Reveal>
          <div className="layout-grid layout-grid-cols mt-10 grid" style={getLayoutBoxStyle(homeGalleryPreviewLayout.grid)}>
            {galleryContent.events.slice(0, 3).map((event, index) => (
              <Reveal key={event.id} delay={index * 0.08}>
                <Link className="group block" href={`/gallery/${event.id}`}>
                  <article className="layout-radius premium-card interactive-card flex h-full flex-col overflow-hidden" style={getLayoutBoxStyle(homeGalleryPreviewLayout.card)}>
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image alt={event.title} className="object-cover transition duration-500 group-hover:scale-[1.03]" fill sizes="(max-width: 1024px) 100vw, 33vw" src={event.coverImage} />
                    </div>
                    <div className="layout-card-size flex h-full flex-col gap-3" style={getLayoutBoxStyle(homeGalleryPreviewLayout.cardSecondary)}>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                        <span>{event.date}</span>
                        {event.location ? <span>{event.location}</span> : null}
                      </div>
                      <h3 className="font-mono text-2xl font-semibold text-slate-950">{event.title}</h3>
                      <p className="flex-1 text-sm leading-6 text-slate-600">{event.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                        {siteContent.sectionLabels.gallery}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="layout-shell" id="testimonials" style={getLayoutBoxStyle(homeTestimonialsLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              description={testimonialsContent.sectionIntro.description}
              eyebrow={testimonialsContent.sectionIntro.eyebrow}
              title={testimonialsContent.sectionIntro.title}
            />
          </Reveal>
          <div className="layout-grid layout-grid-cols mt-10 grid" style={getLayoutBoxStyle(homeTestimonialsLayout.grid)}>
            {testimonialsContent.items.map((testimonial, index) => (
              <Reveal key={`${testimonial.name}-${testimonial.role}`} delay={index * 0.08}>
                <article className="layout-card-size premium-card interactive-card flex h-full flex-col" style={getLayoutBoxStyle(homeTestimonialsLayout.card)}>
                  <p className="flex-1 text-lg leading-8 text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="font-mono text-sm font-semibold text-slate-950">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                    <p className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                      {testimonial.type}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="layout-shell" id="volunteer" style={getLayoutBoxStyle(homeVolunteerLayout.section)}>
        <Container>
          <Reveal>
            <div className="layout-panel-size premium-card" style={getLayoutBoxStyle(homeVolunteerLayout.panel)}>
              <div className="layout-grid layout-grid-cols grid lg:items-center" style={getLayoutBoxStyle(homeVolunteerLayout.grid)}>
                <div className="space-y-5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#2563EB]"><TerminalType text={siteContent.volunteer.eyebrow} /></p>
                  <h2 className="font-mono text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{siteContent.volunteer.title}</h2>
                  <p className="text-base leading-7 text-slate-600 sm:text-lg">{siteContent.volunteer.description}</p>
                </div>
                <div className="grid gap-4">
                  {siteContent.volunteer.reasons.map((reason) => (
                    <div key={reason} className="rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm">
                      <div className="flex gap-3">
                        <CheckCircle2 className="mt-1 size-5 text-[#2563EB]" aria-hidden="true" />
                        <p className="text-sm leading-7 text-slate-600">{reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="layout-shell" id="contact" style={getLayoutBoxStyle(homeContactLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              description={siteContent.contact.description}
              eyebrow={siteContent.contact.eyebrow}
              title={siteContent.contact.title}
            />
          </Reveal>
          <div className="layout-grid layout-grid-cols mt-10 grid" style={getLayoutBoxStyle(homeContactLayout.grid)}>
            <Reveal>
              <div className="layout-card-size premium-card" style={getLayoutBoxStyle(homeContactLayout.card)}>
                <div className="space-y-5">
                  {siteContent.contact.details.map((detail) => (
                    <div key={detail.label} className="rounded-[1.25rem] border border-slate-200/80 bg-white/90 p-5">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">{detail.label}</p>
                      {detail.href ? (
                        <Link className="mt-2 block text-base font-semibold text-slate-900 transition hover:text-[#2563EB]" href={detail.href}>
                          {detail.value}
                        </Link>
                      ) : (
                        <p className="mt-2 text-base font-semibold text-slate-900">{detail.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form
                action={`https://formsubmit.co/${siteContent.organization.email}`}
                className="layout-card-size premium-card"
                style={getLayoutBoxStyle(homeContactLayout.card)}
                method="post"
              >
                <input name="_subject" type="hidden" value="New Free Code Juniors contact form submission" />
                <input name="_captcha" type="hidden" value="false" />
                <input name="_next" type="hidden" value={`${siteContent.url}/#contact`} />
                <input name="_template" type="hidden" value="table" />
                <input name="_honey" type="text" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid gap-5">
                  <label className="grid gap-2 text-sm font-medium text-slate-700">
                    <span>{siteContent.contact.form.nameLabel}</span>
                    <input
                      className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 shadow-inner shadow-slate-100 outline-none transition focus:border-[#2563EB]/40 focus:ring-4 focus:ring-[#2563EB]/10"
                      name="name"
                      required
                      type="text"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-slate-700">
                    <span>{siteContent.contact.form.emailLabel}</span>
                    <input
                      className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 shadow-inner shadow-slate-100 outline-none transition focus:border-[#2563EB]/40 focus:ring-4 focus:ring-[#2563EB]/10"
                      name="email"
                      required
                      type="email"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-slate-700">
                    <span>{siteContent.contact.form.messageLabel}</span>
                    <textarea
                      className="min-h-36 rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-inner shadow-slate-100 outline-none transition focus:border-[#2563EB]/40 focus:ring-4 focus:ring-[#2563EB]/10"
                      name="message"
                      required
                    />
                  </label>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit">{siteContent.contact.form.submitLabel}</Button>
                    <p className="max-w-sm text-sm leading-6 text-slate-500">{siteContent.contact.form.disclaimer}</p>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
