import Link from 'next/link';

import { Container } from '@/components/shared/container';
import { PageIntro } from '@/components/shared/page-intro';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeader } from '@/components/shared/section-header';
import { Button } from '@/components/ui/button';
import { scheduleContent } from '@/lib/content';
import { scheduleCalloutLayout, scheduleTableLayout } from '@/lib/layout';
import { getLayoutBoxStyle } from '@/lib/layout-utils';

export default function SchedulePage() {
  return (
    <main>
      <PageIntro
        description={scheduleContent.pageIntro.description}
        eyebrow={scheduleContent.pageIntro.eyebrow}
        title={scheduleContent.pageIntro.title}
      />

      <section className="layout-shell" style={getLayoutBoxStyle(scheduleTableLayout.section)}>
        <Container>
          <Reveal>
            <SectionHeader
              description={scheduleContent.sectionIntro.description}
              eyebrow={scheduleContent.sectionIntro.eyebrow}
              title={scheduleContent.sectionIntro.title}
            />
          </Reveal>

          <div className="layout-radius mt-10 overflow-hidden border border-white/70 bg-white/85 shadow-[0_30px_70px_-55px_rgba(15,23,42,0.45)] backdrop-blur-xl" style={getLayoutBoxStyle(scheduleTableLayout.panel)}>
            <div className="hidden grid-cols-[1.3fr_repeat(5,minmax(0,1fr))] gap-4 border-b border-slate-200/80 bg-slate-50/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 md:grid">
              <span>Program</span>
              <span>Day</span>
              <span>Time</span>
              <span>Place</span>
              <span>Instructor</span>
              <span>Availability</span>
            </div>
            {scheduleContent.items.map((item, index) => {
              const availabilityClassName = item.availabilityHref
                ? 'inline-flex w-fit rounded-full bg-[#2563EB]/10 px-3 py-1 text-sm font-medium text-[#1d4ed8] transition hover:bg-[#2563EB]/15 hover:text-[#1e40af]'
                : 'inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600';

              return (
                <div key={`${item.program}-${item.day}-${index}`} className="grid gap-3 border-b border-slate-200/70 px-6 py-5 md:grid-cols-[1.3fr_repeat(5,minmax(0,1fr))] md:items-center md:gap-4 last:border-b-0">
                  <p className="font-mono text-lg font-semibold text-slate-950">{item.program}</p>
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

          <Reveal className="mt-8">
            <div className="layout-panel-size premium-card" style={getLayoutBoxStyle(scheduleCalloutLayout.panel)}>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl space-y-3">
                  <h2 className="font-mono text-2xl font-semibold text-slate-950">{scheduleContent.callout.title}</h2>
                  <p className="text-base leading-7 text-slate-600">{scheduleContent.callout.description}</p>
                </div>
                <Button asChild>
                  <Link href={scheduleContent.callout.cta.href}>{scheduleContent.callout.cta.label}</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
