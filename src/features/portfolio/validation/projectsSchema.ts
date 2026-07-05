import { z } from "zod";

export const projectItemSchema = z.object({
  name: z
    .string("Project name is required")
    .trim()
    .min(2, "Project name must be at least 2 characters")
    .max(100, "Project name is too long (max 100 characters)"),
  description: z
    .string("Description is required")
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description is too long (max 1000 characters)"),
  githubUrl: z
    .url("GitHub URL must be valid")
    .trim()
    .optional()
    .or(z.literal("")),
  imageUrl: z.url("Image URL must be valid").optional().or(z.literal("")),
  liveUrl: z
    .url("Live Demo URL must be valid")
    .trim()
    .optional()
    .or(z.literal("")),
});

export const projectsSchema = z.object({
  projects: z.array(projectItemSchema).default([]),
});

export type ProjectsFormData = z.infer<typeof projectsSchema>;
