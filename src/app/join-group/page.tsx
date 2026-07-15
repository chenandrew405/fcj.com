import Link from 'next/link';

import { getSocialIcon } from '@/components/content-icons';
import { Container } from '@/components/shared/container';
import { PageIntro } from '@/components/shared/page-intro';
import { Reveal } from '@/components/shared/reveal';
import { Button } from '@/components/ui/button';

const groupOptions = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Group',
    description: 'Get updates, reminders, and program messages through the Free Code Juniors WhatsApp group.',
    href: 'https://chat.whatsapp.com/CZe6xqoi8tILsWInLdKlrg?s=cl&p=i&ilr=1',
    ctaLabel: 'Join WhatsApp',
    status: 'Live invite link available now.',
  },
  {
    id: 'wechat',
    title: 'WeChat Group',
    description: 'Stay connected with Free Code Juniors through the WeChat group for announcements and community updates.',
    href: '/join-group/wechat',
    ctaLabel: 'Join with WeChat',
    status: 'Open the WeChat QR page to scan and join.',
  },
] as const;

export default function JoinGroupPage() {
  return (
    <main>
      <PageIntro
        description="Choose the community group that works best for you. WhatsApp is ready now, and WeChat has a dedicated QR page for joining."
        eyebrow="Join Group"
        title="Connect through WhatsApp or WeChat."
      />

      <section className="layout-shell py-4 pb-20 sm:pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {groupOptions.map((group, index) => {
              const Icon = getSocialIcon(group.id);

              return (
                <Reveal key={group.id} delay={index * 0.08}>
                  <article id={group.id} className="layout-radius premium-card flex h-full flex-col items-center gap-6 px-8 py-10 text-center scroll-mt-24">
                    <div className="inline-flex size-20 items-center justify-center rounded-full bg-slate-100 text-slate-800 shadow-inner">
                      <Icon className="size-10" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="font-mono text-2xl font-semibold text-slate-950">{group.title}</h2>
                      <p className="mx-auto max-w-md text-sm leading-7 text-slate-600">{group.description}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-5 text-sm text-slate-500">
                      {group.status}
                    </div>
                    {group.id === 'whatsapp' ? (
                      <Button asChild>
                        <Link href={group.href} rel="noreferrer" target="_blank">
                          {group.ctaLabel}
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild>
                        <Link href={group.href}>{group.ctaLabel}</Link>
                      </Button>
                    )}
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
