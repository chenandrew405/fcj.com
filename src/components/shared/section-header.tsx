import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { TerminalType } from '@/components/shared/terminal-type';
import { TextTransition } from '@/components/shared/text-transition';
import { sectionHeaderLayout } from '@/lib/layout';
import { getLayoutBoxStyle, getLayoutTextStyle } from '@/lib/layout-utils';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  action?: {
    label: string;
    href: string;
  };
}

export const SectionHeader = ({ eyebrow, title, description, className, action }: SectionHeaderProps) => (
  <div className={cn('layout-stack flex flex-col md:flex-row md:items-end md:justify-between', className)} style={getLayoutBoxStyle(sectionHeaderLayout.stack)}>
    <div className="layout-stack max-w-3xl" style={getLayoutBoxStyle({ gap: { mobile: '1rem', tablet: '1.125rem', desktop: '1.25rem' } })}>
      <p className="layout-eyebrow mb-1 font-mono font-semibold uppercase tracking-[0.28em] text-[#2563EB] sm:mb-2" style={getLayoutTextStyle(sectionHeaderLayout.eyebrow)}>
        <TerminalType text={eyebrow} />
      </p>
      <TextTransition delay={0.08}>
        <h2 className="layout-title font-mono font-semibold tracking-tight text-slate-950" style={getLayoutTextStyle(sectionHeaderLayout.title)}>
          {title}
        </h2>
      </TextTransition>
      <TextTransition delay={0.14}>
        <p className="layout-description text-slate-600" style={getLayoutTextStyle(sectionHeaderLayout.description)}>
          {description}
        </p>
      </TextTransition>
    </div>
    {action ? (
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-[#2563EB]"
        href={action.href}
      >
        {action.label}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    ) : null}
  </div>
);
