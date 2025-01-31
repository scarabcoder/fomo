import { Hono } from "hono";
import { sessionApp } from "@/domain/session/route";
import { hc } from "hono/client";
import { logger } from "hono/logger";

export const app = new Hono()
  .basePath("/api")
  .route("/session", sessionApp);

export type AppType = typeof app;

export const testClient = hc<AppType>('');

app.use(logger());

export default {
  port: 3000,
  fetch: app.fetch
};
