import { NextRequest, NextResponse } from 'next/server';
import { api, ApiError } from '../../api';
import { cookies } from 'next/headers';
import { parseCookie } from 'cookie';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, headers } = await api.post('/auth/login', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const cookieStore = await cookies();
    const setCookie = headers['set-cookie'];

    if (setCookie !== undefined) {
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

      for (const cookieString of cookieArray) {
        const parsed = parseCookie(cookieString);
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed.maxAge),
        };

        if (parsed.accessToken !== undefined) {
          cookieStore.set('accessToken', parsed.accessToken, options);
        }
        if (parsed.refreshToken !== undefined) {
          cookieStore.set('refreshToken', parsed.refreshToken, options);
        }
      }
    }

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
