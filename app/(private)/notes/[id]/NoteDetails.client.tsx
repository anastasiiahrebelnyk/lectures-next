'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useParams, useRouter } from 'next/navigation';
import { getNote } from '../../../../lib/api';

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const noteQ = useQuery({
    queryKey: ['note', id],
    queryFn: () => getNote(id),
    refetchOnMount: false,
  });
  const handleBack = () => {
    if (confirm('are you shure?')) {
      router.push('/notes');
    }
    // router.back();
  };
  const toggleEdit = () => {
    setIsEdit(prevIsEdit => !prevIsEdit);
  };
  return (
    <>
      <button onClick={handleBack}>Back</button>
      <button onClick={() => toggleEdit()}>Click</button>
      {isEdit ? (
        <form>
          <div>
            <input placeholder="title" defaultValue={noteQ.data?.title} />
          </div>
          <div>
            <textarea
              placeholder="Content"
              defaultValue={noteQ.data?.content}
            />
          </div>
        </form>
      ) : (
        <>
          <h1>{noteQ.data?.title}</h1>
          <p>{noteQ.data?.content}</p>
          <strong>{noteQ.data?.category.name}</strong>
        </>
      )}
    </>
  );
}
