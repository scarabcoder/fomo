import { Hono } from "hono";
import { sessionApp } from "@/domain/session/route.ts";
import { hc } from "hono/client";
import { logger } from "hono/logger";

export const app = new Hono()
  .basePath("/api")
  .route("/session", sessionApp);

const client = hc<typeof app>("");
export type Client = typeof client;

export type AppType = typeof app;

app.use(logger());

export default {
  port: 3000,
  fetch: app.fetch
};