import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  type ProfileFormData,
  profileSchema,
} from "@/features/portfolio/validation/profileSchema";

export const useProfileForm = (initialData?: Partial<ProfileFormData>) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(profileSchema as any),
    defaultValues: {
      avatar: initialData?.avatar ?? undefined,
      fullName: initialData?.fullName || "",
      specialty: initialData?.specialty || "",
      email: initialData?.email || "",
      phone: initialData?.phone || "",
      githubUrl: initialData?.githubUrl || "",
      linkedinUrl: initialData?.linkedinUrl || "",
      telegramUrl: initialData?.telegramUrl || "",
      bio: initialData?.bio || "",
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      console.log("Валідація пройшла успішно! Дані готові до БД:", data);

      // ТУТ буде виклик Server Action (запис у базу)
      // await updateProfile(data);
    } catch (error) {
      console.error("Помилка при збереженні профілю:", error);
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
