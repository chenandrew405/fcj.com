'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, HeartHandshake, Home, Images, Info, Mail, Menu, X } from 'lucide-react';
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
  const navIcons: Record<string, typeof Home> = {
    Home,
    About: Info,
    Programs: BookOpen,
    Schedule: Calendar,
    Gallery: Images,
    Volunteer: HeartHandshake,
    Contact: Mail,
  };
  const currentItem = navigation.items.find((item) => item.href === pathname) ?? navigation.items.find((item) => item.href === '/') ?? navigation.items[0];
  const CurrentIcon = navIcons[currentItem?.label ?? 'Home'] ?? Home;
  const mobileBottomLabels = new Set(['About', 'Programs', 'Schedule', 'Gallery']);
  const mobileBottomItems = navigation.items.filter((item) => mobileBottomLabels.has(item.label));
  const mobileTopItems = navigation.items.filter((item) => !mobileBottomLabels.has(item.label));

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

          <div className="flex flex-1 items-center justify-center px-2 lg:flex-none lg:px-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
              <CurrentIcon className="size-4 text-[#2563EB]" aria-hidden="true" />
              <span className="truncate">{currentItem?.label ?? 'Home'}</span>
            </div>
          </div>

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
            aria-label="Open menu"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
            {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="px-5 pb-4 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/80 bg-white/90 p-4 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
            <nav className="flex flex-col gap-4">
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600">
                This is the Menu
              </div>
              <div className="grid grid-cols-2 gap-2">
                {mobileTopItems.map((item) => (
                  (() => {
                    const Icon = navIcons[item.label] ?? Menu;

                    return (
                      <Link
                        key={item.href}
                        className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                        href={item.href}
                      >
                        <Icon className="size-4" aria-hidden="true" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })()
                ))}
                <Button asChild className="h-auto min-h-12 w-full">
                  <Link href={navigation.primaryCta.href}>{navigation.primaryCta.label}</Link>
                </Button>
              </div>
              <div className="border-t border-slate-200/80 pt-4">
                <div className="grid grid-cols-2 gap-2">
                  {mobileBottomItems.map((item) => (
                    (() => {
                      const Icon = navIcons[item.label] ?? Menu;

                      return (
                        <Link
                          key={item.href}
                          className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                          href={item.href}
                        >
                          <Icon className="size-4" aria-hidden="true" />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })()
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
};
