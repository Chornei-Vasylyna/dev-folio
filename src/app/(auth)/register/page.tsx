"use client";

import { UserPlusIcon } from "@phosphor-icons/react";
import { AuthCard } from "@/components/features/auth/AuthCard";
import { EmailInput } from "@/components/features/auth/EmailInput";
import { PasswordInput } from "@/components/features/auth/PasswordInput";
import { RegisterFooter } from "@/components/features/auth/RegisterFooter";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";

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
