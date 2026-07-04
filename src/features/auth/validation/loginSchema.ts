import { z } from "zod";
import { emailSchema } from "@/lib/validation/emailSchema";

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
