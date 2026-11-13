import { LINKS } from "@/constants";
import { env } from "@/lib/validation/envSchema";

export const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
export const supabaseKey = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const protectedPaths = [LINKS.portfolio];
export const authPaths = [LINKS.login, LINKS.register];
