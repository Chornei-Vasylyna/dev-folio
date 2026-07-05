import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  type ProfileFormData,
  profileSchema,
} from "@/features/portfolio/validation/profileSchema";
import type { ProfileData } from "@/lib/supabase/types";
import { upsertProfile } from "../actions/UPSERT/upsertProfile";
import { mapProfileToForm } from "../mappers/profile.mapper";

export const useProfileForm = (initialData: ProfileData | null) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(profileSchema as any),
    defaultValues: mapProfileToForm(initialData),
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await upsertProfile(data);
      router.refresh();
      toast.success("Profile saved");
    } catch {
      toast.error("Failed to save profile");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    control,
    errors,
    isSubmitting,
  };
};
