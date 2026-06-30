import { EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { InputField } from "@/components/ui/InputField";

export const EmailInput = () => {
  return (
    <InputField
      id="email"
      label="Email"
      type="email"
      autoComplete = "email"
      autoFocus
      placeholder="you@example.com"
      icon={EnvelopeSimpleIcon}
      required
    />
  );
};
