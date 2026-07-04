import Link from "next/link";
import type { User } from "@/lib/types/UserType";

type NavItem = {
  href: string;
  label: string;
  show: boolean;
};

type ResumeSidebarNavProps = {
  user: User;
};

export const SideNav = ({ user }: ResumeSidebarNavProps) => {
  const {
    bio,
    experience,
    education,
    skills,
    projects,
    email,
    phone,
    telegramUrl,
  } = user;

  const navItems: NavItem[] = [
    { href: "#about", label: "About", show: Boolean(bio) },
    {
      href: "#experience",
      label: "Experience",
      show: experience.length > 0,
    },
    { href: "#education", label: "Education", show: education.length > 0 },
    {
      href: "#skills",
      label: "Skills",
      show: Boolean(skills && skills.trim().length > 0),
    },
    { href: "#projects", label: "Projects", show: projects.length > 0 },
    {
      href: "#contact",
      label: "Contact",
      show: Boolean(email || phone || telegramUrl),
    },
  ];

  const visibleItems = navItems.filter((item) => item.show);

  if (visibleItems.length === 0) return null;

  return (
    <aside className="hidden lg:block">
      <nav className="sticky top-24 space-y-1">
        {visibleItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
