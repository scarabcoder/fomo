import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { AuthProvider, useSession, useUser } from "@descope/react-sdk";
import { Bounce, ToastContainer } from "react-toastify";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/api.ts";

const router = createRouter({
  routeTree,
  context: {
    user: undefined!,
    session: undefined!,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const AuthRouterInjector = () => {
  const user = useUser();
  const session = useSession();

  if (user.isUserLoading || session.isSessionLoading) {
    return null;
  }

  return <RouterProvider router={router} context={{ user, session }} />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider projectId={import.meta.env.VITE_DESCOPE_PROJECT_ID}>
      <ThemeProvider storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <AuthRouterInjector />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
