"use client";

import { SignInIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { EmailInput } from "@/features/auth/components/EmailInput";
import { LoginFooter } from "@/features/auth/components/LoginFooter";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { AuthLayout } from "@/features/auth/layout/AuthLayout";

export default function Login() {
  return (
    <AuthLayout
      icon={SignInIcon}
      title="Welcome back"
      subtitle="Log in to your account"
      footer={LoginFooter}
    >
      <AuthCard
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <EmailInput />
        <PasswordInput
          id="password"
          label="Password"
          autoComplete="current-password"
        />

        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </AuthCard>
    </AuthLayout>
  );
}
