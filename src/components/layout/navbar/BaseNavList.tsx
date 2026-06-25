import { SignOutIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { isActive } from "@/utils/isActive";
import { links, navbarHoverClass } from "./constants";

interface NavListProps {
  pathname: string;
}

export const NavList = ({ pathname }: NavListProps) => {
  return (
    <nav className="hidden items-center gap-2 sm:flex">
      {links.map((link) => (
        <Button
          key={link.href}
          asChild
          variant="ghost"
          size="sm"
          className={cn(navbarHoverClass, isActive(pathname, link.href))}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
      <div className="mx-1 h-4 w-px bg-border" />
      <Button
        variant="ghost"
        size="sm"
        className={cn("gap-1.5", navbarHoverClass)}
      >
        <SignOutIcon className="h-4 w-4" /> <span>Exit</span>
      </Button>
    </nav>
  );
};
