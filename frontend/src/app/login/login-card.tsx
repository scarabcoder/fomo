import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils.ts";
import { ComponentPropsWithoutRef } from "react";
import { Descope } from "@descope/react-sdk";
import { useTheme } from "@/components/theme-provider.tsx";

export const LoginCard = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const { theme } = useTheme();
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Descope
            flowId="sign-up-or-in"
            theme={theme === "dark" ? "dark" : "light"}
            onSuccess={(e) => {
              console.log(e.detail.user.name);
              console.log(e.detail.user.email);
            }}
            onError={(err) => {
              console.log("Error!", err);
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};
