import { z } from "zod";

export const skillsSchema = z.object({
  skills: z
    .string("Skills are required")
    .trim()
    .min(2, "Add at least one skill")
    .max(1000, "Skills list is too long"),
});

export type SkillsFormData = z.infer<typeof skillsSchema>;
