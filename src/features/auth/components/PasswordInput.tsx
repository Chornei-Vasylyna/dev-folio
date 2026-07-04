import { EyeIcon, EyeSlashIcon, LockSimpleIcon } from "@phosphor-icons/react";
import { type InputHTMLAttributes, useState } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

export const PasswordInput = ({
  id,
  label,
  error,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Event handlers
  const handleShowPassword = () => setShowPassword((current) => !current);

  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <InputGroup className="px-2">
        <InputGroupAddon>
          <LockSimpleIcon className="h-4 w-4 text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          id={id}
          name={id}
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          {...props}
        />
        <InputGroupButton
          size="icon-xs"
          className="cursor-pointer hover:bg-transparent"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={handleShowPassword}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-4 w-4 text-muted-foreground" />
          ) : (
            <EyeIcon className="h-4 w-4 text-muted-foreground" />
          )}
        </InputGroupButton>
      </InputGroup>
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
};
