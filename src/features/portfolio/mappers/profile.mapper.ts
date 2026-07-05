import type { ProfileData } from "@/lib/supabase/types";
import type { ProfileFormData } from "../validation/profileSchema";

export const mapProfileToForm = (
  data: ProfileData | null,
): ProfileFormData => ({
  avatar: data?.avatar ?? "",
  fullName: data?.full_name ?? "",
  specialty: data?.specialty ?? "",
  email: data?.email ?? "",
  phone: data?.phone ?? "",
  githubUrl: data?.github_url ?? "",
  linkedinUrl: data?.linkedin_url ?? "",
  telegramUrl: data?.telegram_url ?? "",
  bio: data?.bio ?? "",
});
