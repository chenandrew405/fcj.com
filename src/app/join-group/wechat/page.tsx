import Image from 'next/image';
import Link from 'next/link';

import { getSocialIcon } from '@/components/content-icons';
import { Container } from '@/components/shared/container';
import { PageIntro } from '@/components/shared/page-intro';
import { Reveal } from '@/components/shared/reveal';
import { Button } from '@/components/ui/button';

export default function WeChatJoinPage() {
  const WeChatIcon = getSocialIcon('wechat');

  return (
    <main>
      <PageIntro
        description="Open WeChat, scan the QR code below, and join the Free Code Juniors group."
        eyebrow="WeChat"
        title="Join with WeChat"
      />

      <section className="layout-shell py-4 pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <article className="layout-radius premium-card mx-auto flex max-w-3xl flex-col items-center gap-6 px-8 py-10 text-center">
              <div className="inline-flex size-20 items-center justify-center rounded-full bg-slate-100 text-slate-800 shadow-inner">
                <WeChatIcon className="size-10" aria-hidden="true" />
              </div>
              <div className="space-y-3">
                <h2 className="font-mono text-2xl font-semibold text-slate-950">Scan the WeChat QR Code</h2>
                <p className="mx-auto max-w-xl text-sm leading-7 text-slate-600">
                  Use the WeChat app on your phone to scan this code and join the group for updates and announcements.
                </p>
              </div>
              <div className="w-full max-w-[24rem] rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-slate-50">
                  <Image alt="WeChat group QR code" className="object-contain" fill sizes="384px" src="/images/wechat-qr.jpg" />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="secondary">
                  <Link href="/join-group">Back to Join Group</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/#contact">Need Help?</Link>
                </Button>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
