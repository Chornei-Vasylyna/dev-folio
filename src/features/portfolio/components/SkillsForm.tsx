import { useEffect } from "react";
import { TextareaField } from "@/components/ui/TextareaField";
import { usePortfolioTab } from "../hooks/usePortfolioTab";
import { useSkillsForm } from "../hooks/useSkillsForm";

export const SkillsForm = () => {
  const { register, handleSubmit, errors, isSubmitting } = useSkillsForm();
  const { setIsSubmitting } = usePortfolioTab();

  useEffect(() => {
    setIsSubmitting(isSubmitting);
  }, [isSubmitting, setIsSubmitting]);

  return (
    <form id="skills" onSubmit={handleSubmit} className="space-y-3">
      <TextareaField
        id="skills"
        label="Skills (comma-separated)"
        placeholder="React, TypeScript, Node.js, Figma, SQL..."
        rows={4}
        error={errors.skills?.message}
        {...register("skills")}
      />
      <p className="text-xs text-muted-foreground">
        Skills will be automatically displayed as individual badges on your
        public profile.
      </p>
    </form>
  );
};
