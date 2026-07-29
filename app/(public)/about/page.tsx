import { Metadata } from 'next';
import PageContainer from '../../../components/PageContainer/PageContainer';

export const metadata: Metadata = {
  title: 'About | NoteHub',
  description: 'About NoteHub',
};

export default function About() {
  return (
    <PageContainer
      title="About"
      description="Learn more about NoteHub and what it can do for you."
    />
  );
}
