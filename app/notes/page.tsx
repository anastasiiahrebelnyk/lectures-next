import NoteList from '../../components/NoteList/NoteList';
import PageContainer from '../../components/PageContainer/PageContainer';
import { getNotes } from '../../lib/api';

export default async function Notes() {
  const response = await getNotes();
  return (
    <PageContainer
      title="Notes"
      description="Browse and manage your notes in one place."
    >
      <NoteList notes={response.notes} />
    </PageContainer>
  );
}
