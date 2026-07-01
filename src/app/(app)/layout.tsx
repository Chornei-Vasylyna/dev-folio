import type { PropsWithChildren } from "react";
import { Navbar } from "@/components/layout/navbar/Navbar";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
