import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

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
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
