import { redirect } from 'next/navigation';

export default function NoteFilters() {
  redirect('/notes/filters/all');

  return null;
}
