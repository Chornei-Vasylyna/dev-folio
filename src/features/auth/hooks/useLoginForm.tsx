import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LINKS } from "@/constants";
import { signIn } from "@/features/auth/actions/signIn";
import {
  type LoginFormData,
  loginSchema,
} from "@/features/auth/validation/loginSchema";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    // biome-ignore lint/suspicious/noExplicitAny: Zod type mismatch
    resolver: zodResolver(loginSchema as any),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    const { email, password } = data;

    const { error } = await signIn(email, password);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Welcome back!");

    router.push(LINKS.home);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
