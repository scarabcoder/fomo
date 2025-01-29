import { createFileRoute, redirect } from "@tanstack/react-router";
import Page from "@/app/dashboard/page.tsx";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    if (!context.user.user) {
      throw redirect({ to: "/login", replace: true });
    }
  },
});

function RouteComponent() {
  return <Page />;
}
