import { Container } from '@/components/shared/container';
import { TerminalType } from '@/components/shared/terminal-type';
import { TextTransition } from '@/components/shared/text-transition';
import { pageIntroLayout } from '@/lib/layout';
import { getLayoutBoxStyle, getLayoutTextStyle } from '@/lib/layout-utils';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const PageIntro = ({ eyebrow, title, description }: PageIntroProps) => (
  <section className="relative overflow-hidden layout-shell" style={getLayoutBoxStyle(pageIntroLayout.section)}>
    <Container>
      <div className="glass-panel layout-panel-size relative overflow-hidden border border-white/70 bg-white/80 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.3)]" style={getLayoutBoxStyle(pageIntroLayout.panel)}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent" />
        <div className="layout-stack max-w-3xl" style={getLayoutBoxStyle(pageIntroLayout.stack)}>
          <p className="layout-eyebrow mb-1 font-mono font-semibold uppercase tracking-[0.28em] text-[#2563EB] sm:mb-2" style={getLayoutTextStyle(pageIntroLayout.eyebrow)}>
            <TerminalType text={eyebrow} />
          </p>
          <TextTransition delay={0.08}>
            <h1 className="layout-title font-mono font-semibold tracking-tight text-slate-950" style={getLayoutTextStyle(pageIntroLayout.title)}>
              {title}
            </h1>
          </TextTransition>
          <TextTransition delay={0.14}>
            <p className="layout-description text-slate-600" style={getLayoutTextStyle(pageIntroLayout.description)}>
              {description}
            </p>
          </TextTransition>
        </div>
      </div>
    </Container>
  </section>
);
