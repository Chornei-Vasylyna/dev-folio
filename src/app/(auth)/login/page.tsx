"use client";

import { Button } from "@/components/ui/button";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { EmailInput } from "@/features/auth/components/EmailInput";
import { LoginFooter } from "@/features/auth/components/LoginFooter";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { useLoginForm } from "@/features/auth/hooks/useLoginForm";
import { AuthLayout } from "@/features/auth/layout/AuthLayout";

export default function Login() {
  const { register, handleSubmit, errors, isSubmitting } = useLoginForm();

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to your account"
      footer={LoginFooter}
    >
      <AuthCard formId="login" onSubmit={handleSubmit}>
        <EmailInput error={errors.email?.message} {...register("email")} />
        <PasswordInput
          id="password"
          label="Password"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button
          type="submit"
          form="login"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </AuthCard>
    </AuthLayout>
  );
}
