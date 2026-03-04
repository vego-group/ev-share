import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

type HeroActionsProps = {
  primaryLabel: string;
};

export function HeroActions({ primaryLabel }: HeroActionsProps) {
  return (
    <div className="mt-8">
      <Button
        asChild
        className="h-12 rounded-xl bg-primary px-7 text-base font-semibold text-secondary transition duration-200 hover:translate-y-[-1px] hover:bg-primary/90"
      >
        <Link href="/about">{primaryLabel}</Link>
      </Button>
    </div>
  );
}
