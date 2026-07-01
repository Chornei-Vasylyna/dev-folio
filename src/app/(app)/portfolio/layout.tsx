import type { PropsWithChildren } from "react";
import { Header } from "@/components/features/portfolio/Header";
import { Sidebar } from "@/components/features/portfolio/sidebar";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <div className="container px-4 py-8">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
