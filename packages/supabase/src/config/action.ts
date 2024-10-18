'use server';

import type { CookieMethodsServer } from '@supabase/ssr';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { cache } from 'react';

import { getSupabaseKeys } from '@/config/keys';
import type { Database } from '@/types';

export const getSupabaseServerActionClient = cache(
  (
    params = {
      admin: false,
    }
  ) => {
    const { url, key } = getSupabaseKeys(params);

    if (params.admin) {
      return createServerClient<Database>(url, key, {
        auth: {
          persistSession: false,
        },
        cookies: {
          getAll() {
            return cookies().getAll();
          },
        },
      });
    }

    return createServerClient<Database>(url, key, {
      cookies: getCookiesStrategy(),
    });
  }
);

function getCookiesStrategy() {
  const cookieStore = cookies();
  return {
    getAll() {
      return cookieStore.getAll();
    },
    setAll(cookiesToSet) {
      for (const { name, value, options } of cookiesToSet) {
        cookieStore.set(name, value, options);
      }
    },
  } as CookieMethodsServer;
}
