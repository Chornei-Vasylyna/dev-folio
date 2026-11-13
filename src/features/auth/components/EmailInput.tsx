import { EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { InputField } from "@/components/ui/InputField";

interface EmailInputProps {
  error?: string;
}

export const EmailInput = ({ error, ...props }: EmailInputProps) => {
  return (
    <InputField
      id="email"
      label="Email"
      type="email"
      autoComplete="email"
      autoFocus
      placeholder="you@example.com"
      error={error}
      icon={EnvelopeSimpleIcon}
      required
      {...props}
    />
  );
};
