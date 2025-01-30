import { createMiddleware } from "hono/factory";
import { validBearerToken } from "@/common/schema/bearer-token.schema.ts";
import { safeParse } from "valibot";
import { HTTPException } from "hono/http-exception";
import DescopeClient from "@descope/node-sdk";

const descopeClient = DescopeClient({
  projectId: process.env.DESCOPE_PROJECT_ID!,
  managementKey: process.env.DESCOPE_MANAGEMENT_KEY,
});

export type User = {
  id: string;
}

export const descopeMiddleware = createMiddleware<{
  Variables: {
    user: User;
  }
}>(async (c, next) => {
  const authHeader = c.req.header();
  if (!("Authorization" in authHeader)) {
    throw new HTTPException(403, { message: "Missing authorization bearer header" });
  }

  const tokenResult = safeParse(validBearerToken, authHeader.Authorization);
  if (!tokenResult.success) {
    throw new HTTPException(403, { message: tokenResult.issues[0].message });
  }

  try {
    const authInfo = await descopeClient.validateSession(tokenResult.output);
    c.set("user", {
      id: "123"
    });
  } catch(error: any) {
    console.log(error.name);
    throw new HTTPException(403, { message: "Invalid access token" });
  }

  await next();
});