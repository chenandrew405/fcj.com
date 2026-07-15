import { Container } from '@/components/shared/container';

export default function Loading() {
  return (
    <div className="pb-20 pt-32">
      <Container>
        <div className="space-y-8">
          <div className="h-6 w-32 animate-pulse rounded-full bg-slate-200" />
          <div className="h-16 max-w-3xl animate-pulse rounded-[2rem] bg-slate-200" />
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-72 animate-pulse rounded-[1.75rem] bg-white shadow-sm" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
