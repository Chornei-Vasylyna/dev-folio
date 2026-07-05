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
  setActiveTab: Dispatch<SetStateAction<Tabs>>;
  isSubmitting: boolean;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
}

export const PortfolioTabContext = createContext<
  PortfolioTabContextValue | undefined
>(undefined);

export const PortfolioTabProvider = ({ children }: PropsWithChildren) => {
  const [activeTab, setActiveTab] = useState<Tabs>("profile");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <PortfolioTabContext.Provider
      value={{ activeTab, setActiveTab, isSubmitting, setIsSubmitting }}
    >
      {children}
    </PortfolioTabContext.Provider>
  );
};
