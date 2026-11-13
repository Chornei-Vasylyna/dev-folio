"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/AlertDialog";
import { usePortfolioTab } from "@/features/portfolio/hooks/usePortfolioTab";

export const UnsavedChangesDialog = () => {
  const { isLeaveDialogOpen, cancelLeave, confirmLeave } = usePortfolioTab();

  return (
    <AlertDialog
      open={isLeaveDialogOpen}
      onOpenChange={(open) => {
        if (!open) cancelLeave();
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unsaved changes</AlertDialogTitle>

          <AlertDialogDescription>
            You have unsaved changes. If you leave this tab, your changes will
            be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Stay</AlertDialogCancel>

          <AlertDialogAction onClick={confirmLeave}>Leave</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
