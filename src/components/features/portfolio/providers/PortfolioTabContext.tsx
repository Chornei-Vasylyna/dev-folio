"use client";

import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from "react";
import type { Tabs } from "@/components/features/portfolio/sidebar/Sidebar.types";

interface PortfolioTabContextValue {
  activeTab: Tabs;
  setActiveTab: Dispatch<SetStateAction<Tabs>>;
}

const PortfolioTabContext = createContext<PortfolioTabContextValue | undefined>(
  undefined,
);

export const PortfolioTabProvider = ({ children }: PropsWithChildren) => {
  const [activeTab, setActiveTab] = useState<Tabs>("profile");

  return (
    <PortfolioTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </PortfolioTabContext.Provider>
  );
};

export const usePortfolioTab = () => {
  const context = useContext(PortfolioTabContext);

  if (!context) {
    throw new Error("usePortfolioTab must be used inside PortfolioTabProvider");
  }

  return context;
};
