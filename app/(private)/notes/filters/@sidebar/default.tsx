import NotesSidebarNav from '../../../../../components/NotesSidebarNav/NotesSidebarNav';
import { getCategories } from '../../../../../lib/api';

export default async function NoteSidebar() {
  const categories = await getCategories();

  return <NotesSidebarNav categories={categories} />;
}
