'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { headerLayout } from '@/lib/layout';
import { getLayoutBoxStyle } from '@/lib/layout-utils';
import { cn } from '@/lib/utils';
import type { NavigationContent, SiteConfig } from '@/types/content';

interface SiteHeaderProps {
  navigation: NavigationContent;
  site: SiteConfig;
}

export const SiteHeader = ({ navigation, site }: SiteHeaderProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="layout-container mx-auto flex items-center justify-between py-4" style={getLayoutBoxStyle(headerLayout.container)}>
        <div
          className={cn(
            'layout-panel-size relative flex w-full items-center justify-between border transition-all duration-300 lg:mx-auto lg:w-auto lg:justify-center lg:gap-3',
            scrolled
              ? 'border-white/80 bg-white/72 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.45)] backdrop-blur-2xl'
              : 'border-transparent bg-transparent',
          )}
          style={getLayoutBoxStyle(headerLayout.panel)}
        >
          <Link aria-label={site.name} className="relative -left-[10px] ml-2 flex items-center justify-center self-center sm:ml-3 lg:ml-4" href="/">
            <div className="layout-size relative shrink-0 self-center overflow-visible" style={getLayoutBoxStyle(headerLayout.logoPrimary)}>
              <Image alt="Free Code Juniors" className="object-contain object-center" fill sizes="72px" src="/images/freecode-juniors-logo.png" style={{ transform: 'scale(1.12)' }} />
            </div>
          </Link>

          <div className="hidden items-center gap-1.5 lg:flex">
            <nav className="flex items-center gap-0.5">
              {navigation.items.map((item) => {
                const active = item.href === pathname;

                return (
                  <Link
                    key={item.href}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      active ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Button asChild size="sm">
              <Link href={navigation.primaryCta.href}>{navigation.primaryCta.label}</Link>
            </Button>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="px-5 pb-4 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/80 bg-white/90 p-4 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
            <nav className="flex flex-col gap-2">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full">
                <Link href={navigation.primaryCta.href}>{navigation.primaryCta.label}</Link>
              </Button>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
};
