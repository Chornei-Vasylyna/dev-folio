import type { ReactNode, SubmitEvent } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { OAuthButtons } from "./OAuthButtons";

interface AuthCardProps {
  children: ReactNode;
  onSubmit?: (e: SubmitEvent<HTMLFormElement>) => void;
}

export function AuthCard({
  children,
  onSubmit,
}: AuthCardProps) {
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

        <form className="space-y-4" onSubmit={onSubmit}>
          {children}
        </form>
      </CardContent>
    </Card>
  );
}
