import { z } from "zod";

export const experienceItemSchema = z.object({
  position: z
    .string("Position is required")
    .trim()
    .min(2, "Position must be at least 2 characters")
    .max(100, "Position is too long (max 100 characters)"),

  company: z
    .string("Company is required")
    .trim()
    .min(2, "Company must be at least 2 characters")
    .max(100, "Company is too long (max 100 characters)"),

  period: z
    .string("Period is required")
    .trim()
    .min(4, "Period must be at least 4 characters")
    .max(50, "Period is too long (max 50 characters)"),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description is too long (max 1000 characters)")
    .optional()
    .or(z.literal("")),
});

export const experienceSchema = z.object({
  experience: z.array(experienceItemSchema).default([]),
});

export type ExperienceFormData = z.infer<typeof experienceSchema>;
