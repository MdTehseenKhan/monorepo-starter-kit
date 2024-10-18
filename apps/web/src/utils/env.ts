import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  // Server Environment Variables Schema
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    NUMBER_EXAMPLE: z.coerce.number(),
    BOOLEAN_EXAMPLE: z.boolean(),
  },
  // Client Environment Variables Schema
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().min(1),
  },
  // Default Environment Variables
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    BOOLEAN_EXAMPLE: process.env.BOOLEAN_EXAMPLE,
    NUMBER_EXAMPLE: process.env.NUMBER_EXAMPLE,
  },
});
