import { NextRequest, NextResponse } from 'next/server';
import { api, ApiError } from '../../api';

interface NoteProps {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: NoteProps) {
  try {
    const { id } = await params;
    const { data } = await api.get(`/notes/${id}`);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      {
        status: (error as ApiError).status,
      }
    );
  }
}
