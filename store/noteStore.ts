import { create } from 'zustand';
import { CreateNotePayload } from '../types/note';
import { persist } from 'zustand/middleware';

interface NoteDraftStore {
  draft: CreateNotePayload;
  setDraft: (note: CreateNotePayload) => void;
  clearDraft: () => void;
}

const INITIAL_DRAFT: CreateNotePayload = {
  title: '',
  content: '',
  categoryId: '',
};
export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    set => ({
      draft: INITIAL_DRAFT,
      setDraft: note => set({ draft: note }),
      clearDraft: () => set({ draft: INITIAL_DRAFT }),
    }),
    {
      name: 'note-draft',
    }
  )
);
