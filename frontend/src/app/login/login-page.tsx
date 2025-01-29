import { LoginCard } from "@/app/login/login-card.tsx";

export const LoginPage = () => {
  return (
    <div className="flex min-h-svh w-full md:items-center justify-center p-6 md:p-10 bg-muted">
      <div className="w-full max-w-sm">
        <LoginCard />
      </div>
    </div>
  );
};
