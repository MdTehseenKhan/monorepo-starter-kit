import invariant from 'tiny-invariant';

export function getSupabaseKeys(params = { admin: false }) {
  let key: string | undefined;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  invariant(url, 'Supabase URL not provided');

  if (params.admin) {
    key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    invariant(key, 'Supabase Service Role Key not provided');
  } else {
    key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    invariant(key, 'Supabase Anon Key not provided');
  }

  return {
    url,
    key,
  };
}
