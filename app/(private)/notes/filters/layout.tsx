interface NotesLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function NotesLayout({ children, sidebar }: NotesLayoutProps) {
  return (
    <section className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[13rem_1fr] lg:gap-12">
      <aside className="animate-fade-in border-b border-border/80 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
        {sidebar}
      </aside>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
