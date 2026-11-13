import Link from "next/link";
import { LINKS } from "@/constants";

export const RegisterFooter = (
  <>
    Already have an account?{" "}
    <Link
      href={LINKS.login}
      className="text-primary font-medium hover:underline"
    >
      Log in
    </Link>
  </>
);
