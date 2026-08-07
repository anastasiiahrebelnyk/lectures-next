import { NextResponse } from 'next/server';
import { api, ApiError } from '../../api';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const { data } = await api.get('/auth/me', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
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
