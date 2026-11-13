import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

export const proxy = async (request: NextRequest) => {
  return await updateSession(request);
}

export const config = {
  matcher: ["/portfolio/:path*", "/login", "/register", "/"],
};
