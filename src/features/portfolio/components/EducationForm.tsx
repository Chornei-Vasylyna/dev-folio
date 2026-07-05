import type { EducationData } from "@/lib/supabase/types";
import { useEducationForm } from "../hooks/useEducationForm";
import { usePortfolioTab } from "../hooks/usePortfolioTab";
import { EntryList } from "./EntryList";

interface EducationFormProps {
  educationData: EducationData | null;
}

export const EducationForm = ({educationData}: EducationFormProps) => {
  const { fields, register, handleSubmit, append, remove, errors } =
    useEducationForm(educationData);
  const { activeTab } = usePortfolioTab();

  return (
    <form id={activeTab} onSubmit={handleSubmit} className="space-y-4">
      <EntryList
        fieldArrayName="education"
        itemLabel="Education"
        items={fields}
        addLabel="Add education"
        primaryField={{
          id: "specialty",
          label: "Specialty",
          placeholder: "Computer Science",
        }}
        secondaryField={{
          id: "institution",
          label: "Educational institution",
          placeholder: "State University",
        }}
        periodField={{
          id: "period",
          label: "Period",
          placeholder: "e.g. Jan 2023 – Mar 2025",
        }}
        descriptionField={{
          id: "description",
          label: "Description",
          placeholder: "Add notes about your coursework, focus, or honors...",
          rows: 4,
        }}
        register={register}
        errors={errors}
        onAdd={() =>
          append({
            specialty: "",
            institution: "",
            period: "",
            description: "",
          })
        }
        onRemove={remove}
      />
    </form>
  );
};
