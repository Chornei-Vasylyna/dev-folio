import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { SignOutButton } from "@/features/auth/components/SignOutButton";
import { cn } from "@/lib/utils";
import { isActive } from "@/utils/isActive";
import { navbarHoverClass } from "./constants";

interface NavListProps {
  pathname: string;
}

export const NavList = ({ pathname }: NavListProps) => {
  return (
    <nav className="hidden items-center gap-2 sm:flex">
      {NAV_LINKS.map((link) => (
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
      <SignOutButton className={navbarHoverClass} />
    </nav>
  );
};
