'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getNote } from '../../../lib/api';
import { useParams } from 'next/navigation';

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const noteQ = useQuery({
    queryKey: ['note', id],
    queryFn: () => getNote(id),
    refetchOnMount: false,
  });
  const toggleEdit = () => {
    setIsEdit(prevIsEdit => !prevIsEdit);
  };
  return (
    <>
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
