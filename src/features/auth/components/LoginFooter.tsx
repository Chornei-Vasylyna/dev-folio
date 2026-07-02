import Link from "next/link";
import { LINKS } from "@/constants";

export const LoginFooter = (
  <>
    Don't have an account?{" "}
    <Link
      href={LINKS.register}
      className="text-primary font-medium hover:underline"
    >
      Create one
    </Link>
  </>
);
