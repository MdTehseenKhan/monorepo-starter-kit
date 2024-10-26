import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './db';

export type Supabase = SupabaseClient<Database>;

export * from './db';
