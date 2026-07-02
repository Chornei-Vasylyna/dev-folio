import { FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/Textarea";

export const SkillsForm = () => {
  return (
    <div className="space-y-3">
      <FieldLabel htmlFor="skills">Skills (comma-separated)</FieldLabel>
      <Textarea
        id="skills"
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
