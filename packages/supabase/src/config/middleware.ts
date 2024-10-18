import type { Database } from '@/types';
import type { CookieMethodsServer } from '@supabase/ssr';
import type { NextRequest } from 'next/server';

import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

import { getSupabaseKeys } from '@/config/keys';

export function createMiddlewareClient(request: NextRequest, response: NextResponse) {
  const { url, key } = getSupabaseKeys();

  return createServerClient<Database>(url, key, {
    cookies: getCookieStrategy(request, response),
  });
}

function getCookieStrategy(request: NextRequest, response: NextResponse) {
  return {
    getAll() {
      return request.cookies.getAll();
    },
    setAll(cookiesToSet) {
      for (const { name, value } of cookiesToSet) {
        request.cookies.set(name, value);
      }
      response = NextResponse.next({
        request,
      });
      for (const { name, value, options } of cookiesToSet) {
        response.cookies.set(name, value, options);
      }
    },
  } as CookieMethodsServer;
}
