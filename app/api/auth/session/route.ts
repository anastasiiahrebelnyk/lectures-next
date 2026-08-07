import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { parseCookie } from 'cookie';

import { api, type ApiError } from '../../api';

export async function GET() {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get('accessToken');
    const refreshToken = cookieStore.get('refreshToken');

    if (accessToken !== undefined) {
      return NextResponse.json({ success: true });
    }

    if (refreshToken !== undefined) {
      const { headers } = await api.get('/auth/session', {
        headers: {
          Cookie: cookieStore.toString(),
        },
      });

      const setCookie = headers['set-cookie'];

      if (setCookie !== undefined) {
        const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

        for (const cookieString of cookieArray) {
          const parsed = parseCookie(cookieString);

          const options = {
            expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
            path: parsed.Path,
            maxAge: Number(parsed['Max-Age']),
          };

          if (parsed.accessToken !== undefined) {
            cookieStore.set('accessToken', parsed.accessToken, options);
          }

          if (parsed.refreshToken !== undefined) {
            cookieStore.set('refreshToken', parsed.refreshToken, options);
          }
        }
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false });
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
