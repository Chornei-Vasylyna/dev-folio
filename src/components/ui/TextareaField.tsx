import type { TextareaHTMLAttributes } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";

interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  placeholder?: string;
  error?: string;
  rows?: number;
}

export const TextareaField = ({
  id,
  label,
  placeholder,
  error,
  rows = 4,
  ...props
}: TextareaFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          {...props}
        />
      </InputGroup>
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
};
