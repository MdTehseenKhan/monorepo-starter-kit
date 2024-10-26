import type { Database } from '@/types';
import type { CookieMethodsServer } from '@supabase/ssr';

import { getSupabaseKeys } from '@/config/keys';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const getSupabaseServerClient = cache((params = { admin: false }) => {
  const { url, key } = getSupabaseKeys(params);

  return createServerClient<Database>(url, key, {
    auth: {
      persistSession: false,
    },
    cookies: getCookiesStrategy(),
  });
});

function getCookiesStrategy() {
  const cookieStore = cookies();

  return {
    getAll: () => {
      return cookieStore.getAll();
    },
    setAll(cookiesToSet) {
      for (const { name, value, options } of cookiesToSet) {
        cookieStore.set(name, value, options);
      }
    },
  } as CookieMethodsServer;
}
