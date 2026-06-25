export const isActive = (pathname: string, href: string) => {
  return pathname === href ? "font-semibold underline underline-offset-6" : "";
};
