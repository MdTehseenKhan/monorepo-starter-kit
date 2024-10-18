import { pino } from 'pino';

export const logger = pino({
  browser: {
    asObject: true,
  },
  level: 'debug',
  base: {
    env: process.env.NODE_ENV,
  },
});
