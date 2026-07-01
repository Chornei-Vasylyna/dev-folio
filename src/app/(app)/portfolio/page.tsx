import { ProfileForm } from "@/components/features/portfolio/ProfileForm";

export default function Portfolio() {
  return (
    <form className="grid grid-cols-2 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      <ProfileForm />
    </form>
  );
}
