import { useExperienceForm } from "../hooks/useExperienceForm";
import { usePortfolioTab } from "../hooks/usePortfolioTab";
import { EntryList } from "./EntryList";

export const ExperienceForm = () => {
  const { fields, register, handleSubmit, append, remove, errors } =
    useExperienceForm();
  const { activeTab } = usePortfolioTab();

  return (
    <form id={activeTab} onSubmit={handleSubmit} className="space-y-4">
      <EntryList
        fieldArrayName="experience"
        itemLabel="Position"
        items={fields}
        addLabel="Add position"
        primaryField={{
          id: "position",
          label: "Position",
          placeholder: "Frontend Developer",
        }}
        secondaryField={{
          id: "company",
          label: "Company",
          placeholder: "SoftServe",
        }}
        periodField={{
          id: "period",
          label: "Period",
          placeholder: "e.g. Jan 2023 – Mar 2025",
        }}
        descriptionField={{
          id: "description",
          label: "Description",
          placeholder: "Describe your responsibilities and achievements...",
          rows: 4,
        }}
        register={register}
        errors={errors}
        onAdd={() =>
          append({
            position: "",
            company: "",
            period: "",
            description: "",
          })
        }
        onRemove={remove}
      />
    </form>
  );
};
