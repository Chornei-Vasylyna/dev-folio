"use client";

import { ArrowSquareOutIcon, FloppyDiskIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePortfolioTab } from "@/features/portfolio/hooks/usePortfolioTab";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const { activeTab, isSubmitting } = usePortfolioTab();
  const { user } = useAuth();

  return (
    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <h1 className="text-2xl font-bold">My portfolio</h1>
      <div className="flex items-center gap-3">
        {user?.id && (
          <Button variant="outline" size="sm" asChild>
            <Link href={`/resume/${user?.id}`}>
              <ArrowSquareOutIcon className="h-4 w-4 mr-1" /> Public portfolio
            </Link>
          </Button>
        )}
        <Button
          type="submit"
          form={activeTab}
          disabled={isSubmitting}
          className="bg-linear-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white transition-[--tw-gradient-from,--tw-gradient-to] duration-250"
        >
          <FloppyDiskIcon className="h-4 w-4 mr-1" />
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
      </div>
    </div>
  );
};
