"use client";

import { ProfileForm } from "@/components/features/portfolio/ProfileForm";
import { usePortfolioTab } from "../../../components/features/portfolio/providers/PortfolioTabContext";

export default function Portfolio() {
  const { activeTab } = usePortfolioTab();

  return (
    <form className="grid grid-cols-2 gap-x-4 gap-y-5 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      {activeTab === "profile" && <ProfileForm />}
    </form>
  );
}
