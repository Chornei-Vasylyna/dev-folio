import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_URL: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY:
    process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
});
