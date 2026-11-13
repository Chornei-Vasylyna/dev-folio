import type { PropsWithChildren, ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  footer?: ReactNode;
}

export const AuthLayout = ({
  title,
  subtitle,
  footer,
  children,
}: PropsWithChildren<AuthLayoutProps>) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="text-muted-foreground mt-2">{subtitle}</p>
        </div>
        {children}
        {footer && (
          <p className="text-center text-sm text-muted-foreground mt-6">
            {footer}
          </p>
        )}
      </div>
    </div>
  );
};
