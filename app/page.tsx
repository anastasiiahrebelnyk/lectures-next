import Image from 'next/image';
import PageContainer from '../components/PageContainer/PageContainer';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] flex-col justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(31,107,92,0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(180,140,80,0.12), transparent 50%)',
        }}
      />

      <div className="mx-auto w-full max-w-3xl">
        <p className="animate-fade-up font-display text-5xl font-semibold tracking-tight text-foreground sm:text-7xl md:text-8xl">
          NoteHub
        </p>

        <h1 className="animate-fade-up delay-1 mt-6 max-w-xl font-display text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
          A quiet place for thoughts that matter.
        </h1>

        <p className="animate-fade-up delay-2 mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
          Capture ideas, sort by category, and return when you need them —
          without the noise.
        </p>

        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href="/notes/filters/all"
            className="inline-flex items-center bg-accent px-5 py-2.5 text-sm font-semibold text-surface transition-opacity duration-200 hover:opacity-90"
          >
            Open notes
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
          >
            About NoteHub
          </Link>
        </div>

        <Image
          src="https://cataas.com/cat/says/Hello"
          width={200}
          height={100}
          alt="Note"
        />
      </div>
    </section>
  );
}
