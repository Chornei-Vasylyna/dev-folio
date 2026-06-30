import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>{
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  icon: ComponentType<IconProps>;
}

export const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  ...props
}: InputFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <InputGroup className="px-2">
        <InputGroupAddon>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </InputGroup>
    </Field>
  );
};
