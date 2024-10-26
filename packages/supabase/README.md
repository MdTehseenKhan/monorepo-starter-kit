# Supabase Package

This package provides functionality for interacting with the Supabase database.

## Environment Variables

To use this package, you need to set up the following environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`: The URL of the Supabase database.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: The anon key of the Supabase database.
- `SUPABASE_SERVICE_ROLE_KEY`: The service role key of the Supabase database.

## Usage

To interact with the Supabase database, use:

### Server Component

```ts
import { getSupabaseServerClient } from '@packages/supabase/server';

const supabase = getSupabaseServerClient();
```

### Client Component

```ts
import { useSupabase } from '@packages/supabase/client';

const supabase = useSupabase();
```

### Middleware

```ts
import { getSupabaseMiddlewareClient } from '@packages/supabase/middleware';

const supabase = getSupabaseMiddlewareClient();
```
