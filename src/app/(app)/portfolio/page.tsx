"use client";

import { ProfileForm } from "@/features/portfolio/components/ProfileForm";
import { usePortfolioTab } from "@/features/portfolio/hooks/usePortfolioTab";

export default function Portfolio() {
  const { activeTab } = usePortfolioTab();

  return (
    <form className="grid grid-cols-2 gap-x-4 gap-y-5 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      {activeTab === "profile" && <ProfileForm />}
    </form>
  );
}
