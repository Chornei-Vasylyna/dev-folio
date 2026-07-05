import { useContext } from "react";
import { PortfolioTabContext } from "@/features/portfolio/providers/PortfolioTabProvider";

export const usePortfolioTab = () => {
  const context = useContext(PortfolioTabContext);

  if (!context) {
    throw new Error("usePortfolioTab must be used inside PortfolioTabProvider");
  }

  return context;
};
