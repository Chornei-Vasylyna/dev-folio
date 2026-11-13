"use client";

import { SpinnerIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.ComponentProps<"svg"> {
  size?: "sm" | "md" | "lg";
}

function Spinner({ size = "md", className, ...props }: SpinnerProps) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: shadcn default value
    <SpinnerIcon
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin",
        {
          "size-4": size === "sm",
          "size-6": size === "md",
          "size-10": size === "lg",
        },
        className,
      )}
      {...props}
    />
  );
}

export { Spinner };
