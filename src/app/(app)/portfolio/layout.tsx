import type { PropsWithChildren } from "react";
import { Header } from "@/features/portfolio/components/layout/Header";
import { Sidebar } from "@/features/portfolio/components/sidebar";
import { PortfolioTabProvider } from "@/features/portfolio/providers/PortfolioTabProvider";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <div className="container px-4 py-8">
      <PortfolioTabProvider>
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
          <Sidebar />
          {children}
        </div>
      </PortfolioTabProvider>
    </div>
  );
}
