import type { PropsWithChildren, SubmitEvent } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { OAuthButtons } from "./OAuthButtons";

interface AuthCardProps {
  formId: "login" | "register";
  onSubmit?: (e: SubmitEvent<HTMLFormElement>) => void;
}

export const AuthCard = ({
  formId,
  onSubmit: handleSubmit,
  children,
}: PropsWithChildren<AuthCardProps>) => {
  return (
    <Card className="w-full max-w-sm ">
      <CardContent className="space-y-4">
        <OAuthButtons />

        <div className="relative flex items-center">
          <Separator className="flex-1" />
          <span className="px-2 text-xs uppercase text-muted-foreground">
            Or
          </span>
          <Separator className="flex-1" />
        </div>

        <form id={formId} onSubmit={handleSubmit} className="space-y-4">
          {children}
        </form>
      </CardContent>
    </Card>
  );
};
