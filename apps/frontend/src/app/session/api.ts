import { queryOptions } from "@tanstack/react-query";
import { fomoClient } from "@/api/api.ts";

export const getSessionQuery = queryOptions({
  queryKey: ["session"],
  queryFn: () => fomoClient.api.session
});
