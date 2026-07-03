export const getNestedErrorMessage = (errors: unknown, path: string) => {
  const value = path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }

    return undefined;
  }, errors);

  if (!value || typeof value !== "object") {
    return undefined;
  }

  const message = (value as { message?: unknown }).message;
  return typeof message === "string" ? message : undefined;
};