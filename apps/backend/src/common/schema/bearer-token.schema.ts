import { custom, pipe, string, transform } from "valibot";

export const validBearerToken = pipe(
  string(),
  custom((val) => typeof val === "string" && /^Bearer [a-zA-Z0-9-_.]+$/g.test(val), "Invalid authorization type (must be Bearer)"),
  transform((val) => val.split(" ")[1])
);