import NoteList from '../../../../components/NoteList/NoteList';
import PageContainer from '../../../../components/PageContainer/PageContainer';
import { getNotes } from '../../../../lib/api';

interface NoteFilterProps {
  params: Promise<{ slug: string[] }>;
}

export default async function NoteFilter({ params }: NoteFilterProps) {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];
  const response = await getNotes(category);

  // 88c24267-74c7-4c7f-9be4-22eb4aa31de1
  return (
    <PageContainer
      title={`Notes by categories: ${slug.join(',')}`}
      description="Browse and manage your notes in one place."
    >
      <NoteList notes={response.notes} />
    </PageContainer>
  );
}
