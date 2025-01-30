import { createFileRoute, redirect } from "@tanstack/react-router";
import Page from "@/app/dashboard/page.tsx";
import { queryClient } from "@/api/api.ts";
import { getSessionQuery } from "@/app/session/api.ts";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    if (!context.user.user) {
      console.log("No user!");
      throw redirect({ to: "/login", replace: true });
    }
  },
  loader: () => queryClient.ensureQueryData(getSessionQuery)
});

function RouteComponent() {
  return <Page />;
}
