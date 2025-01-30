import { app, type Client } from "@/server.ts";
import { hc } from "hono/client";

export const hcWithType = (...args: Parameters<typeof hc>): Client =>
  hc<typeof app>(...args)