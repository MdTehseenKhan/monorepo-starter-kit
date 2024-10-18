import 'server-only';

import { Ratelimit } from '@upstash/ratelimit';
import { redisClient } from './redis';

export function getRateLimiter(maxRequests = 10) {
  return new Ratelimit({
    redis: redisClient,
    limiter: Ratelimit.slidingWindow(maxRequests, '60s'),
    analytics: true,
    timeout: 10000,
  });
}
