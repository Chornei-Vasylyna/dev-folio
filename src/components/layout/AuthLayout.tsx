import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType, PropsWithChildren, ReactNode } from "react";

interface AuthLayoutProps {
  icon: ComponentType<IconProps>;
  title: string;
  subtitle: string;
  footer?: ReactNode;
}

export const AuthLayout = ({
  icon: Icon,
  title,
  subtitle,
  footer,
  children,
}: PropsWithChildren<AuthLayoutProps>) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-4">
            <Icon
              className="w-7 h-7 text-primary-foreground"
              aria-hidden="true"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
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
