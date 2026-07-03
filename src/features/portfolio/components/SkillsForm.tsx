import { TextareaField } from "@/components/ui/TextareaField";

export const SkillsForm = () => {
  return (
    <div className="space-y-3">
      <TextareaField
        id="skills"
        label="Skills (comma-separated)"
        placeholder="React, TypeScript, Node.js, Figma, SQL..."
        rows={4}
      />
      <p className="text-xs text-muted-foreground">
        Skills will be automatically displayed as individual badges on your
        public profile.
      </p>
    </div>
  );
};
