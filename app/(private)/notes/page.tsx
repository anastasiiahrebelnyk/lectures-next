import { redirect } from 'next/navigation';

export default function Notes() {
  redirect('/notes/filters/all');

  return null;
}
