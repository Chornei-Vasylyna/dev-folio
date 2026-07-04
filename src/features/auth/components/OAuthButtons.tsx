import { Button } from "@/components/ui/button";
import { loginWithGoogle } from "@/features/auth/actions/loginWithGoogle";
import { GitHubIcon } from "./GitHubIcon";
import { GoogleIcon } from "./GoogleIcon";

export const OAuthButtons = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        type="button"
        className="w-full"
        onClick={loginWithGoogle}
      >
        <GoogleIcon className="mr-2 h-4 w-4" />
        Continue with Google
      </Button>
      <Button variant="outline" type="button" className="w-full">
        <GitHubIcon className="mr-2 h-4 w-4" />
        Continue with GitHub
      </Button>
    </div>
  );
};
