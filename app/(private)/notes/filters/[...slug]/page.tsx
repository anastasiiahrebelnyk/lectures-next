import NoteList from '../../../../../components/NoteList/NoteList';
import { getNotes } from '../../../../../lib/api';

interface NoteFilterCategoriesProps {
  params: Promise<{ slug: string[] }>;
}

export default async function NoteFilterCategories({
  params,
}: NoteFilterCategoriesProps) {
  const { slug } = await params;
  const categoryKey = slug[0] ?? 'all';
  const category = categoryKey === 'all' ? undefined : categoryKey;
  const response = await getNotes(category);

  const title =
    categoryKey === 'all' ? 'All notes' : `Notes · ${slug.join(' / ')}`;

  // 88c24267-74c7-4c7f-9be4-22eb4aa31de1
  return (
    <div className="animate-fade-up">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted">
        Browse and manage your notes in one place.
      </p>
      <div className="mt-8">
        <NoteList notes={response.notes} />
      </div>
    </div>
  );
}
