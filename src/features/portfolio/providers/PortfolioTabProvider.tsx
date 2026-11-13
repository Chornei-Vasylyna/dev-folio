"use client";

import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useState,
} from "react";
import type { Tabs } from "@/features/portfolio/components/sidebar/Sidebar.types";

interface PortfolioTabContextValue {
  activeTab: Tabs;
  changeTab: (tab: Tabs) => void;

  isSubmitting: boolean;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;

  hasUnsavedChanges: boolean;
  setHasUnsavedChanges: Dispatch<SetStateAction<boolean>>;

  isLeaveDialogOpen: boolean;
  confirmLeave: () => void;
  cancelLeave: () => void;
}

export const PortfolioTabContext = createContext<
  PortfolioTabContextValue | undefined
>(undefined);

export const PortfolioTabProvider = ({ children }: PropsWithChildren) => {
  const [activeTab, setActiveTab] = useState<Tabs>("profile");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const [pendingTab, setPendingTab] = useState<Tabs | null>(null);
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState(false);

  const changeTab = (tab: Tabs) => {
    if (tab === activeTab) return;

    if (hasUnsavedChanges) {
      setPendingTab(tab);
      setIsLeaveDialogOpen(true);
      return;
    }

    setActiveTab(tab);
  };

  const confirmLeave = () => {
    if (pendingTab) {
      setActiveTab(pendingTab);
    }

    setPendingTab(null);
    setHasUnsavedChanges(false);
    setIsLeaveDialogOpen(false);
  };

  const cancelLeave = () => {
    setPendingTab(null);
    setIsLeaveDialogOpen(false);
  };

  return (
    <PortfolioTabContext.Provider
      value={{
        activeTab,
        changeTab,

        isSubmitting,
        setIsSubmitting,

        hasUnsavedChanges,
        setHasUnsavedChanges,

        isLeaveDialogOpen,
        confirmLeave,
        cancelLeave,
      }}
    >
      {children}
    </PortfolioTabContext.Provider>
  );
};
