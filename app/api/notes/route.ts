import { NextResponse, NextRequest } from 'next/server';
import { api, ApiError } from '../api';

export async function GET(request: NextRequest) {
  try {
    const categoryId = request.nextUrl.searchParams.get('categoryId');
    const { data } = await api.get('/notes', {
      params: {
        categoryId,
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data } = await api.post('/notes', body, {
      headers: {
        'Content-Type': 'application/json',
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
