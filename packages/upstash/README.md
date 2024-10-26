# Upstash Package

This package provides functionality for interacting with the Upstash Redis database.

## Environment Variables

To use this package, you need to set up the following environment variables:

- `UPSTASH_REDIS_REST_URL`: The URL of the Upstash Redis database.
- `UPSTASH_REDIS_REST_TOKEN`: The token for the Upstash Redis database.

## Usage

To interact with the Upstash Redis database, use the `redisClient` object:

```typescript
import { redisClient } from '@packages/upstash';
```
