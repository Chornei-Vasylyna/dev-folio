import { PlusIcon, TrashIcon } from "@phosphor-icons/react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/InputField";
import { TextareaField } from "@/components/ui/TextareaField";
import { getNestedErrorMessage } from "../lib/utils";

type FieldConfig = {
  id: string;
  label: string;
  placeholder?: string;
};

interface EntryListFormProps<TFieldValues extends FieldValues> {
  fieldArrayName: Path<TFieldValues>;
  itemLabel: string;
  addLabel: string;
  items: readonly { id: string }[];
  primaryField: FieldConfig;
  secondaryField: FieldConfig;
  periodField: FieldConfig;
  descriptionField: FieldConfig & { rows?: number };
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  onAdd: () => void;
  onRemove: (index: number) => void;
}

export const EntryList = <TFieldValues extends FieldValues>({
  fieldArrayName,
  itemLabel,
  addLabel,
  items,
  primaryField,
  secondaryField,
  periodField,
  descriptionField,
  register,
  errors,
  onAdd,
  onRemove,
}: EntryListFormProps<TFieldValues>) => {
  return (
    <>
      {items.map((_, index) => (
        <div
          key={items[index]?.id ?? `${itemLabel}-${index}`}
          className="rounded-xl border border-border/60 p-4 space-y-4 bg-muted/20"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              {itemLabel} {index + 1}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="hover:text-destructive hover:bg-transparent"
              onClick={() => onRemove(index)}
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              id={primaryField.id}
              label={primaryField.label}
              placeholder={primaryField.placeholder}
              error={getNestedErrorMessage(
                errors,
                `${fieldArrayName}.${index}.${primaryField.id}`,
              )}
              {...register(
                `${fieldArrayName}.${index}.${primaryField.id}` as Path<TFieldValues>,
              )}
            />
            <InputField
              id={secondaryField.id}
              label={secondaryField.label}
              placeholder={secondaryField.placeholder}
              error={getNestedErrorMessage(
                errors,
                `${fieldArrayName}.${index}.${secondaryField.id}`,
              )}
              {...register(
                `${fieldArrayName}.${index}.${secondaryField.id}` as Path<TFieldValues>,
              )}
            />
            <div className="md:col-span-2">
              <InputField
                id={periodField.id}
                label={periodField.label}
                placeholder={periodField.placeholder}
                error={getNestedErrorMessage(
                  errors,
                  `${fieldArrayName}.${index}.${periodField.id}`,
                )}
                {...register(
                  `${fieldArrayName}.${index}.${periodField.id}` as Path<TFieldValues>,
                )}
              />
            </div>
            <div className="md:col-span-2">
              <TextareaField
                id={descriptionField.id}
                label={descriptionField.label}
                placeholder={descriptionField.placeholder}
                rows={descriptionField.rows ?? 4}
                error={getNestedErrorMessage(
                  errors,
                  `${fieldArrayName}.${index}.${descriptionField.id}`,
                )}
                {...register(
                  `${fieldArrayName}.${index}.${descriptionField.id}` as Path<TFieldValues>,
                )}
              />
            </div>
          </div>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        className="w-full border-dashed"
        onClick={onAdd}
      >
        <PlusIcon className="h-4 w-4 mr-2" /> {addLabel}
      </Button>
    </>
  );
};
