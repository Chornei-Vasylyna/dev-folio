import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto px-4 text-center xl:max-w-8xl">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-blue-500">
            <Logo />
          </div>
          <span className="font-bold gradient-text">DevFolio</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Digital portfolio platform
        </p>
      </div>
    </footer>
  );
};
