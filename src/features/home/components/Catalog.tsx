"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import type { ChangeEvent } from "react";
import { Input } from "@/components/ui/Input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import type { PublicProfiles } from "../actions/getPublicProfiles";
import { useProfileSearch } from "../hooks/useProfileSearch";
import { DeveloperCard } from "./DeveloperCard";

type CatalogProps = {
  profiles: PublicProfiles;
};

export const Catalog = ({ profiles }: CatalogProps) => {
  const { search, setSearch, filteredProfiles } = useProfileSearch(profiles);

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
            placeholder="Search by name, specialty or skill..."
            value={search}
            onChange={handleInputChange}
          />
        </InputGroup>
      </div>
      {filteredProfiles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfiles.map((p) => (
            <DeveloperCard key={p.user_id} profile={p} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed text-center">
          <MagnifyingGlassIcon className="mb-4 h-10 w-10 text-muted-foreground/40" />

          <h3 className="text-lg font-semibold">No resumes found</h3>

          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Try adjusting your search or check back later for new public
            portfolios.
          </p>
        </div>
      )}
    </section>
  );
};

<div>
  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input />
</div>;
