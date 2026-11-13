"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/Sheet";
import { LINKS } from "@/constants";
import { useAuth } from "@/hooks/useAuth";
import { Logo } from "../Logo";
import { Navigation } from "./Navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  // Event handlers
  const handleToggleMenu = () => setIsMenuOpen((open) => !open);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <div className="container relative flex h-16 items-center justify-between px-4">
          <Link href={LINKS.home} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-blue-500">
              <Logo />
            </div>
            <span className="text-lg font-bold tracking-tight gradient-text">
              DevFolio
            </span>
          </Link>
          {isLoggedIn && (
            <>
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
            </>
          )}
          {isMenuOpen ? (
            <Navigation mobile onNavigate={handleCloseMenu} />
          ) : null}
        </div>
      </Sheet>
    </header>
  );
};
