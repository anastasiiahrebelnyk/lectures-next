import CreateNoteForm from '../../../../../components/CreateNoteForm/CreateNoteForm';
import { getCategories } from '../../../../../lib/api';

export default async function CreateNote() {
  const categories = await getCategories();
  return (
    <>
      <CreateNoteForm categories={categories} />
    </>
  );
}
