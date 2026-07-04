"use client";

import { SignOutIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/constants";
import { signOut } from "@/features/auth/actions/signOut";
import { cn } from "@/lib/utils";

interface SignOutButtonProps {
  className?: string;
  onClick?: () => void;
}

export const SignOutButton = ({ className, onClick }: SignOutButtonProps) => {
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await signOut();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Signed out successfully.");

    onClick?.();
    router.push(LINKS.login);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("w-full justify-start gap-1.5 px-3", className)}
      onClick={handleSignOut}
    >
      <SignOutIcon className="h-4 w-4" />
      <span>Exit</span>
    </Button>
  );
};
