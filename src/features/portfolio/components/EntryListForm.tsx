import { PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/InputField";
import { TextareaField } from "@/components/ui/TextareaField";

type FieldConfig = {
  id: string;
  label: string;
  placeholder?: string;
};

interface EntryListFormProps {
  formId: "experience" | "education";
  itemLabel: string;
  addLabel: string;
  items: readonly unknown[];
  primaryField: FieldConfig;
  secondaryField: FieldConfig;
  periodField: FieldConfig;
  descriptionField: FieldConfig & { rows?: number };
}

export const EntryListForm = ({
  formId,
  itemLabel,
  addLabel,
  items,
  primaryField,
  secondaryField,
  periodField,
  descriptionField,
}: EntryListFormProps) => {
  return (
    <form>
      {items.map((_, index) => (
        <div
          key={`${itemLabel}-${
            // biome-ignore lint/suspicious/noArrayIndexKey: there is no other option
            index
          }`}
          className="rounded-xl border border-border/60 p-4 space-y-4 bg-muted/20"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              {itemLabel} {index + 1}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-destructive hover:bg-transparent"
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              id={primaryField.id}
              label={primaryField.label}
              placeholder={primaryField.placeholder}
            />
            <InputField
              id={secondaryField.id}
              label={secondaryField.label}
              placeholder={secondaryField.placeholder}
            />
            <div className="md:col-span-2">
              <InputField
                id={periodField.id}
                label={periodField.label}
                placeholder={periodField.placeholder}
              />
            </div>
            <div className="md:col-span-2">
              <TextareaField
                id={descriptionField.id}
                label={descriptionField.label}
                placeholder={descriptionField.placeholder}
                rows={descriptionField.rows ?? 4}
              />
            </div>
          </div>
        </div>
      ))}

      <Button variant="outline" className="w-full border-dashed">
        <PlusIcon className="h-4 w-4 mr-2" /> {addLabel}
      </Button>
    </form>
  );
};
