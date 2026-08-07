import { NextResponse } from 'next/server';
import { api, ApiError } from '../../api';
import { cookies, headers } from 'next/headers';

export async function POST() {
  try {
    const cookieStore = await cookies();
    await api.post('/auth/logout', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    cookieStore.delete('accessToken');
    cookieStore.delete('refreshToken');
    return NextResponse.json({ message: 'Logout successfully' });
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
