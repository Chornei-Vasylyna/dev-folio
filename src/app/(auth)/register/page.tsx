"use client";

import { Button } from "@/components/ui/button";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { EmailInput } from "@/features/auth/components/EmailInput";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { RegisterFooter } from "@/features/auth/components/RegisterFooter";
import { useRegisterForm } from "@/features/auth/hooks/useRegisterForm";
import { AuthLayout } from "@/features/auth/layout/AuthLayout";

export default function Login() {
  const { register, handleSubmit, errors, isSubmitting } = useRegisterForm();

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Sign up to get started"
      footer={RegisterFooter}
    >
      <AuthCard formId="register" onSubmit={handleSubmit}>
        <EmailInput error={errors.email?.message} {...register("email")} />
        <PasswordInput
          id="password"
          label="Password"
          autoComplete="new-password"
          error={errors.password?.message}
          {...register("password")}
        />
        <PasswordInput
          id="confirm"
          label="Confirm Password"
          autoComplete="new-password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <Button
          type="submit"
          form="register"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account" : "Create account"}
        </Button>
      </AuthCard>
    </AuthLayout>
  );
}
