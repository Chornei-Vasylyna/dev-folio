"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { tabs } from "./Sidebar.constants";
import type { Tabs } from "./Sidebar.types";

export const Sidebar = () => {
  const [tab, setTab] = useState<Tabs>("profile");

  return (
    <aside className="lg:sticky lg:top-24 h-fit">
      <nav className="flex justify-center lg:flex-col gap-2 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <Button
            variant="ghost"
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "flex items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap lg:w-full",
              tab === t.id
                ? "bg-indigo-50 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
                : "text-muted-foreground hover:bg-muted",
            )}
          >
            <t.icon className="h-4 w-4" /> {t.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
};
