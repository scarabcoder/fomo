import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { useSession, useUser } from "@descope/react-sdk";

interface AppRouteContext {
  user: ReturnType<typeof useUser>;
  session: ReturnType<typeof useSession>;
}

export const Route = createRootRouteWithContext<AppRouteContext>()({
  component: Outlet,
});
