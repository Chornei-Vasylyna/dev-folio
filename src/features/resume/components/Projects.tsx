"use client";

import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { Projects } from "@/lib/types/User.types";

export default function ResumeProjects({ items }: { items?: Projects }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h2 className="mb-6 text-xl font-bold text-foreground">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {items.map((p, i) => (
          <Card
            // biome-ignore lint/suspicious/noArrayIndexKey: no other options
            key={i}
            className="group relative overflow-hidden rounded-2xl border-border/60 p-0 shadow-sm max-w-89.5"
          >
            <div className="relative h-40 overflow-hidden bg-linear-to-br from-indigo-50 to-blue-50">
              {p.imageUrl ? (
                <Image
                  src={p.imageUrl}
                  alt={p.name}
                  className="object-cover"
                  fill
                />
              ) : (
                <div className="flex h-full items-center justify-center text-indigo-200">
                  No image
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white/90 p-2.5 hover:bg-white transition-colors"
                  >
                    <GithubLogoIcon
                      className="h-5 w-5 text-gray-900"
                      weight="bold"
                    />
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white/90 p-2.5 hover:bg-white transition-colors"
                  >
                    <ArrowSquareOutIcon
                      className="h-5 w-5 text-gray-900"
                      weight="bold"
                    />
                  </a>
                )}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
