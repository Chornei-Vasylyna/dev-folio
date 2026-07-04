import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
