import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LINKS } from "@/constants";
import { signUp } from "@/features/auth/actions/signUp";
import {
  type RegisterFormData,
  registerSchema,
} from "@/features/auth/validation/registerSchema";

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(registerSchema as any),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: RegisterFormData) => {
    const { email, password } = data;

    const { error } = await signUp(email, password);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully.");
    router.replace(LINKS.home);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
