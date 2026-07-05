"use client";

import {
  ArrowRightIcon,
  FileTextIcon,
  SparkleIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/constants";
import { useAuth } from "@/hooks/useAuth";

export const Hero = () => {
  const { isLoggedIn } = useAuth();

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-blue-50" />
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/60 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-6 backdrop-blur-sm">
          <SparkleIcon className="h-4 w-4" /> Create your digital resume
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="gradient-text">DevFolio</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          A platform where developers create professional portfolios and
          resumes. Complete your profile in minutes and get a beautiful page
          with the ability to download as a PDF.
        </p>
        {!isLoggedIn && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-linear-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white w-44 transition-[--tw-gradient-from,--tw-gradient-to] duration-250 ease-in-out"
            >
              <Link href={LINKS.register}>
                Register <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-28 sm:w-24"
            >
              <Link href={LINKS.login}>Login</Link>
            </Button>
          </div>
        )}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <UsersIcon className="h-4 w-4 text-indigo-500" /> {5} user(-s)
          </div>
          <div className="flex items-center gap-2">
            <FileTextIcon className="h-4 w-4 text-indigo-500" /> PDF export
          </div>
        </div>
      </div>
    </section>
  );
};
