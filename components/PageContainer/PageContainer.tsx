type PageContainerProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

function PageContainer({ title, description, children }: PageContainerProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}

export default PageContainer;
