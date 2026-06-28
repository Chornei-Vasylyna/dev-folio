import { SignOutIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetContent } from "@/components/ui/Sheet";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { isActive } from "@/utils/isActive";
import { navbarHoverClass } from "./constants";

interface MobileNavListProps {
  pathname: string;
  onNavigate?: () => void;
}

export const MobileNavList = ({ onNavigate, pathname }: MobileNavListProps) => {
  return (
    <SheetContent
      side="right"
      showCloseButton={true}
      className="top-16 rounded-2xl border border-border/60 bg-background/95 p-3 shadow-lg shadow-black/5 backdrop-blur-lg sm:hidden"
    >
      <nav
        className="flex flex-col justify-center gap-2"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <Button
            key={link.href}
            asChild
            variant="ghost"
            size="sm"
            className={cn(
              "w-full justify-start px-3",
              navbarHoverClass,
              isActive(pathname, link.href),
            )}
            onClick={onNavigate}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
        <div className="my-1 h-px w-full bg-border" />
        <Button
          variant="ghost"
          size="sm"
          className={cn("w-full justify-start gap-1.5 px-3", navbarHoverClass)}
          onClick={onNavigate}
        >
          <SignOutIcon className="h-4 w-4" /> Exit
        </Button>
      </nav>
    </SheetContent>
  );
};
