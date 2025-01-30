import { Hono } from 'hono';

export const sessionApp = new Hono()
  .get('/', c => {
    return c.json({
      test: true,
    });
  });
