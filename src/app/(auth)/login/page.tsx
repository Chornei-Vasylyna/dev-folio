"use client";

import { SignInIcon } from "@phosphor-icons/react";
import { AuthCard } from "@/components/features/auth/AuthCard";
import { EmailInput } from "@/components/features/auth/EmailInput";
import { LoginFooter } from "@/components/features/auth/LoginFooter";
import { PasswordInput } from "@/components/features/auth/PasswordInput";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";

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
