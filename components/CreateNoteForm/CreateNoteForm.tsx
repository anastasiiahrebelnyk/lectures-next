'use client';

import { useMutation } from '@tanstack/react-query';
import { Category } from '../../types/category';
import { createNote } from '../../lib/api';
import { useRouter } from 'next/navigation';
import { useNoteDraftStore } from '../../store/noteStore';

interface CreateNoteFormProps {
  categories: Category[];
}

export default function CreateNoteForm({ categories }: CreateNoteFormProps) {
  const router = useRouter();

  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: note => {
      router.push(`/notes/${note.id}`);
    },
    onError: error => {
      console.error(error);
    },
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setDraft({ ...draft, [name]: value });
  };

  const handleSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const categoryId = formData.get('categoryId') as string;

    mutate({ title, content, categoryId });
  };

  console.log(draft);
  return (
    <form action={handleSubmit}>
      <div>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={draft.title}
        />
      </div>
      <div>
        <textarea
          name="content"
          id=""
          placeholder="Content"
          onChange={handleChange}
          value={draft.content}
        ></textarea>
      </div>
      <div>
        <select
          name="categoryId"
          id=""
          onChange={handleChange}
          value={draft.categoryId}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
          <option value="">Work</option>
        </select>
      </div>
      <div>
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </div>
    </form>
  );
}
