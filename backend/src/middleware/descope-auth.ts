import { createMiddleware } from 'hono/factory';

export type User = {
  id: string;
}

export const authMiddleware = createMiddleware<{
  Variables: {
    user: User;
  }
}>(async (c, next) => {
  c.set('user', {
    id: '123',
  });
  await next();
});