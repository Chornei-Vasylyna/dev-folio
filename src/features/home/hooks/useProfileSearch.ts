import { useState } from "react";
import type { PublicProfiles } from "../actions/getPublicProfiles";

export const useProfileSearch = (profiles: PublicProfiles) => {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filteredProfiles = query
    ? profiles.filter((profile) => {
        return (
          profile.full_name.toLowerCase().includes(query) ||
          profile.specialty.toLowerCase().includes(query) ||
          profile.skills.some((skill) =>
            skill.toLowerCase().includes(query),
          )
        );
      })
    : profiles;

  return {
    search,
    setSearch,
    filteredProfiles,
  };
};