import Image from 'next/image';
import Link from 'next/link';

import { getSocialIcon } from '@/components/content-icons';
import { Container } from '@/components/shared/container';
import { footerLayout } from '@/lib/layout';
import { getLayoutBoxStyle } from '@/lib/layout-utils';
import type { FooterContent, SiteConfig } from '@/types/content';

interface SiteFooterProps {
  footer: FooterContent;
  site: SiteConfig;
}

export const SiteFooter = ({ footer, site }: SiteFooterProps) => (
  <footer className="layout-shell border-t border-slate-200/80 bg-white/90" style={getLayoutBoxStyle(footerLayout.section)}>
    <Container>
      <div className="layout-grid grid lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]" style={getLayoutBoxStyle(footerLayout.grid)}>
        <div className="space-y-[10px]">
          <div className="inline-flex items-center">
            <div className="relative h-24 w-24 shrink-0">
              <Image alt="Free Code Juniors" className="object-contain" fill sizes="96px" src="/images/freecode-juniors-logo.png" />
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">{site.missionStatement}</p>
          <div className="flex flex-wrap gap-3">
            {site.organization.socialLinks.map((link) => {
              const Icon = getSocialIcon(link.icon);

              return (
                <Link
                  key={link.href}
                  aria-label={link.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-[#2563EB]/30 hover:text-[#2563EB]"
                  href={link.href}
                  rel={link.external ? 'noreferrer' : undefined}
                  target={link.external ? '_blank' : undefined}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title} className="space-y-4">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">{column.title}</p>
            <ul className="space-y-3 text-sm text-slate-600">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.href}`}>
                  <Link
                    className="transition hover:text-[#2563EB]"
                    href={link.href}
                    rel={link.external ? 'noreferrer' : undefined}
                    target={link.external ? '_blank' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="layout-stack mt-12 flex flex-col border-t border-slate-200/80 pt-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between" style={getLayoutBoxStyle(footerLayout.stack)}>
        <p>{footer.copyright}</p>
        <p>Webpage developed by Andrew Chen</p>
        <p className="max-w-3xl">{footer.nonprofitStatement}</p>
        <div className="layout-panel-size flex items-center justify-start gap-0.5 self-start border border-slate-200/80 bg-white shadow-sm" style={getLayoutBoxStyle(footerLayout.panel)}>
          <div className="layout-size relative shrink-0" style={getLayoutBoxStyle(footerLayout.logoPrimary)}>
            <Image alt="UStart Teaching" className="object-contain" fill sizes="170px" src="/images/ustart-logo.svg" />
          </div>
          <span className="relative -left-1 inline-flex w-4 shrink-0 items-center justify-center font-mono text-sm font-semibold uppercase leading-none text-slate-950">x</span>
          <div className="layout-size relative ml-[13px] shrink-0" style={getLayoutBoxStyle(footerLayout.logoSecondary)}>
            <Image alt="Free Code Juniors" className="object-contain" fill sizes="104px" src="/images/freecode-juniors-logo.png" style={{ transform: 'scale(0.92)' }} />
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
