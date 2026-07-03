import { z } from "zod";

export const educationItemSchema = z.object({
  specialty: z
    .string("Specialty is required")
    .trim()
    .min(2, "Specialty must be at least 2 characters")
    .max(100, "Specialty is too long (max 100 characters)"),

  institution: z
    .string("Institution is required")
    .trim()
    .min(2, "Institution must be at least 2 characters")
    .max(100, "Institution is too long (max 100 characters)"),

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

export const educationSchema = z.object({
  education: z.array(educationItemSchema).default([]),
});

export type EducationFormData = z.infer<typeof educationSchema>;
