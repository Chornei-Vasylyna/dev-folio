import type { PropsWithChildren } from "react";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { createClient } from "@/lib/supabase/server";
import { AuthProvider } from "@/providers/AuthProvider";

export default async function AppLayout({ children }: PropsWithChildren) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <AuthProvider initialUser={user}>
      <Navbar />
      <main>{children}</main>
    </AuthProvider>
  );
}
