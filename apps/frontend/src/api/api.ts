import { QueryClient } from "@tanstack/react-query";
import { hc } from "hono/client";

export const fomoClient = hc<AppType>(window.location.origin + "/api");
export const queryClient = new QueryClient();
