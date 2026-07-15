import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { BackToTopButton } from '@/components/shared/back-to-top-button';
import { PageTransition } from '@/components/shared/page-transition';
import { ScrollProgress } from '@/components/shared/scroll-progress';
import { SiteFooter } from '@/components/shared/site-footer';
import { SiteHeader } from '@/components/shared/site-header';
import { footerContent, navigationContent, siteContent } from '@/lib/content';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.url),
  title: siteContent.title,
  description: siteContent.description,
  applicationName: siteContent.name,
  openGraph: {
    title: siteContent.title,
    description: siteContent.description,
    siteName: siteContent.name,
    type: 'website',
    url: siteContent.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.title,
    description: siteContent.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${inter.variable} ${jetbrainsMono.variable}`} lang="en">
      <body>
        <ScrollProgress />
        <SiteHeader navigation={navigationContent} site={siteContent} />
        <PageTransition>{children}</PageTransition>
        <SiteFooter footer={footerContent} site={siteContent} />
        <BackToTopButton />
      </body>
    </html>
  );
}
