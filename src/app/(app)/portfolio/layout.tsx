import type { PropsWithChildren } from "react";
import { Header } from "@/components/features/portfolio/Header";
import { Sidebar } from "@/components/features/portfolio/sidebar";
import { PortfolioTabProvider } from "../../../components/features/portfolio/providers/PortfolioTabContext";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <div className="container px-4 py-8">
      <Header />
      <PortfolioTabProvider>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
          <Sidebar />
          {children}
        </div>
      </PortfolioTabProvider>
    </div>
  );
}
