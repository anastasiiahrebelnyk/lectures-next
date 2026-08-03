export interface Note {
  id: string;
  title: string;
  content: string;
  category: {
    id: string;
    name: string;
  };
  createdAt: string;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  categoryId: string;
}
