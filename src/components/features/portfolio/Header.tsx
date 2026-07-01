"use client";

import { ArrowSquareOutIcon, FloppyDiskIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const recordId = 1;
  return (
    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <h1 className="text-2xl font-bold">My portfolio</h1>
      <div className="flex items-center gap-3">
        {recordId && (
          <Button variant="outline" size="sm" asChild>
            <Link href={`/resume/${recordId}`}>
              <ArrowSquareOutIcon className="h-4 w-4 mr-1" /> Public portfolio
            </Link>
          </Button>
        )}
        <Button className="bg-linear-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white">
          <FloppyDiskIcon className="h-4 w-4 mr-1" /> Save
        </Button>
      </div>
    </div>
  );
};
