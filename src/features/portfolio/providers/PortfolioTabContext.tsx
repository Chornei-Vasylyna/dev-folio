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
}

export const PortfolioTabContext = createContext<
  PortfolioTabContextValue | undefined
>(undefined);

export const PortfolioTabProvider = ({ children }: PropsWithChildren) => {
  const [activeTab, setActiveTab] = useState<Tabs>("profile");

  return (
    <PortfolioTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </PortfolioTabContext.Provider>
  );
};
