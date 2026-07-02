"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { DeveloperCard } from "./DeveloperCard";

export const Catalog = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <section className="container px-4 py-12 flex-1">
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Resume catalog</h2>
        <InputGroup className="relative w-full sm:w-72 px-2">
          <InputGroupAddon>
            <MagnifyingGlassIcon className="h-4 w-4 text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search by name or specialty..."
            value={search}
            onChange={handleInputChange}
            className=""
          />
        </InputGroup>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <DeveloperCard />
      </div>
    </section>
  );
};

<div>
  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input />
</div>;
