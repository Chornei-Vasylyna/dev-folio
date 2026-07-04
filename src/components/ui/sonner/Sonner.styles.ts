import type { CSSProperties } from "react";

export const classNames = {
  toast: "cn-toast",
  success:
    "!bg-green-50 !border-green-500 !text-green-900 dark:!bg-green-950 dark:!border-green-700 dark:!text-green-100",
  error:
    "!bg-red-50 !border-red-500 !text-red-900 dark:!bg-red-950 dark:!border-red-700 dark:!text-red-100",
  warning:
    "!bg-yellow-50 !border-yellow-500 !text-yellow-900 dark:!bg-yellow-950 dark:!border-yellow-700 dark:!text-yellow-100",
  info: "!bg-blue-50 !border-primary !text-primary dark:!bg-primary/10 dark:!border-primary dark:!text-primary-foreground",
  icon: "[&>svg]:text-inherit",
};

export const styles = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
  "--border-radius": "var(--radius)",
} as CSSProperties;
