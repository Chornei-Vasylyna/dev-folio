"use client";

import { UserPlusIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { EmailInput } from "@/features/auth/components/EmailInput";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { RegisterFooter } from "@/features/auth/components/RegisterFooter";
import { AuthLayout } from "@/features/auth/layout/AuthLayout";

export default function Login() {
  return (
    <AuthLayout
      icon={UserPlusIcon}
      title="Create your account"
      subtitle="Sign up to get started"
      footer={RegisterFooter}
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
          autoComplete="new-password"
        />
        <PasswordInput
          id="confirm"
          label="Confirm Password"
          autoComplete="new-password"
        />

        <Button type="submit" className="w-full">
          Create account
        </Button>
      </AuthCard>
    </AuthLayout>
  );
}
