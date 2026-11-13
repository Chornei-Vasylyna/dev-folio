"use client";

import { usePathname } from "next/navigation";
import { NavList } from "./BaseNavList";
import { MobileNavList } from "./MobileNavList";

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export const Navigation = ({ mobile = false, onNavigate }: NavigationProps) => {
  const pathname = usePathname();

  if (mobile) {
    return <MobileNavList onNavigate={onNavigate} pathname={pathname} />;
  }

  return <NavList pathname={pathname} />;
};
