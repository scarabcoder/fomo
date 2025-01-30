import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginPage } from "@/app/login/login-page.tsx";
import { toast } from "react-toastify";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  beforeLoad: ({ context }) => {
    if (context.user.user && context.session.isAuthenticated) {
      toast("You are already logged in");
      throw redirect({
        to: "/dashboard",
        replace: true,
      });
    }
  },
});
