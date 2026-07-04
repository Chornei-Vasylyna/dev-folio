import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "DevFolio | Digital Resumes & Portfolios for Developers",
  description:
    "Discover and connect with talented developers. Browse the catalog of professional digital resumes, skills, and developers projects ready for hire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
