import { authMiddleware } from '@/middleware/descope-auth';
import { Hono } from 'hono';

const sessionApp = new Hono()
  .use(authMiddleware)
  .get('/', c => {
    c.var.user
    return c.json({
      test: true,
    });
  });

export type AppType = typeof sessionApp;