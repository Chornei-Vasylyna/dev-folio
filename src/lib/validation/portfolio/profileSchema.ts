import { z } from "zod";

export const profileSchema = z.object({
  fullName: z
    .string("Full name is required")
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long (max 100 characters)"),

  specialty: z
    .string("Specialty is required")
    .trim()
    .min(2, "Specialty must be at least 2 characters")
    .max(100, "Specialty is too long (max 100 characters)"),

  email: z.email("Invalid email address").trim(),

  phone: z.e164({ error: "Phone number must be in the format +380XXXXXXXXX" }),

  githubUrl: z
    .url("Invalid URL")
    .refine(
      (url) => /^https?:\/\/(www\.)?github\.com\/.+/i.test(url),
      "URL must be a link to github.com",
    )
    .optional()
    .or(z.literal("")),

  linkedinUrl: z
    .url("Invalid URL")
    .refine(
      (url) => /^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(url),
      "URL must be a link to linkedin.com",
    )
    .optional()
    .or(z.literal("")),

  telegramUrl: z
    .url("Invalid URL")
    .refine(
      (url) => /^https?:\/\/(www\.)?(t|telegram)\.me\/.+/i.test(url),
      "URL must be a link to t.me or telegram.me",
    )
    .optional()
    .or(z.literal("")),

  bio: z
    .string()
    .trim()
    .max(1000, "Biography is too long (max 1000 characters)")
    .optional()
    .or(z.literal("")),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
