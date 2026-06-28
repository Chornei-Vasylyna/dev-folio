import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar/Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
