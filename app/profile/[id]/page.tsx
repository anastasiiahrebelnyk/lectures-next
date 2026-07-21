import { notFound } from 'next/navigation';

interface UserProfileProps {
  params: Promise<{ id: string }>;
}

export default async function UserProfile({ params }: UserProfileProps) {
  const { id } = await params;
  if (Number.parseInt(id, 10) === 10) {
    notFound();
  }

  return (
    <div>
      <h1>User {id}</h1>
    </div>
  );
}
