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

  if (noteQ.isLoading) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <p className="animate-pulse-soft text-muted">Loading note…</p>
      </div>
    );
  }
  //   return (
  //     <>
  //       <button onClick={handleBack}>Back</button>
  //       <button onClick={() => toggleEdit()}>Click</button>
  //       {isEdit ? (
  //         <form>
  //           <div>
  //             <input placeholder="title" defaultValue={noteQ.data?.title} />
  //           </div>
  //           <div>
  //             <textarea
  //               placeholder="Content"
  //               defaultValue={noteQ.data?.content}
  //             />
  //           </div>
  //         </form>
  //       ) : (
  //         <>
  //           <h1>{noteQ.data?.title}</h1>
  //           <p>{noteQ.data?.content}</p>
  //           <strong>{noteQ.data?.category.name}</strong>
  //         </>
  //       )}
  //     </>
  //   );
  // }

  return (
    <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="animate-fade-up flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={handleBack}
          className="text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={() => toggleEdit()}
          className="text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
        >
          {isEdit ? 'Cancel edit' : 'Edit'}
        </button>
      </div>

      {isEdit ? (
        <form className="animate-fade-up mt-10 space-y-6">
          <div>
            <label
              htmlFor="note-title"
              className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
            >
              Title
            </label>
            <input
              id="note-title"
              placeholder="Title"
              defaultValue={noteQ.data?.title}
              className="mt-2 w-full border-b border-border bg-transparent py-2 font-display text-2xl font-medium tracking-tight text-foreground placeholder:text-ink-faint focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="note-content"
              className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
            >
              Content
            </label>
            <textarea
              id="note-content"
              placeholder="Content"
              defaultValue={noteQ.data?.content}
              rows={10}
              className="mt-2 w-full resize-y border border-border bg-surface/60 px-3 py-3 text-base leading-relaxed text-foreground placeholder:text-ink-faint focus:border-accent focus:outline-none"
            />
          </div>
        </form>
      ) : (
        <div className="animate-fade-up mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            {noteQ.data?.category.name}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {noteQ.data?.title}
          </h1>
          <p className="mt-6 whitespace-pre-wrap text-base leading-relaxed text-muted sm:text-lg">
            {noteQ.data?.content}
          </p>
        </div>
      )}
    </article>
  );
}
