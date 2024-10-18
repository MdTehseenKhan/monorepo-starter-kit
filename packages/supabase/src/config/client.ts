import type { Database } from '@/types';

import { getSupabaseKeys } from '@/config/keys';
import { createBrowserClient } from '@supabase/ssr';

let client: ReturnType<typeof createBrowserClient<Database>>;

export function getSupabaseBrowserClient() {
  if (!client) {
    const { url, key } = getSupabaseKeys();
    client = createBrowserClient<Database>(url, key);
  }
  return client;
}
