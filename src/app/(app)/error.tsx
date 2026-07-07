"use client";

import { WarningCircleIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface ErrorHandlerProps {
  reset: () => void;
}

export default function ErrorHandler({ reset }: ErrorHandlerProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <WarningCircleIcon
        className="mb-3 size-10 text-destructive sm:size-12"
        weight="fill"
      />

      <h1 className="text-xl font-semibold sm:text-2xl">
        Something went wrong
      </h1>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>

      <Button onClick={reset} className="mt-6">
        Try again
      </Button>
    </main>
  );
}
