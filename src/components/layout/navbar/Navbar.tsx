"use client";

import { GraduationCapIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/Sheet";
import { LINKS } from "@/constants";
import { Navigation } from "./Navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Event handlers
  const handleToggleMenu = () => setIsMenuOpen((open) => !open);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <div className="container relative flex h-16 items-center justify-between px-4">
          <Link href={LINKS.home} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-blue-500">
              <GraduationCapIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight gradient-text">
              DevFolio
            </span>
          </Link>
          <Navigation />
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? (
              <XIcon className="size-5" />
            ) : (
              <ListIcon className="size-5" />
            )}
          </Button>
          {isMenuOpen ? (
            <Navigation mobile onNavigate={handleCloseMenu} />
          ) : null}
        </div>
      </Sheet>
    </header>
  );
};
