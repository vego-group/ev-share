import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

type HeroActionsProps = {
  primaryLabel: string;
  secondaryLabel: string;
};

export function HeroActions({ primaryLabel, secondaryLabel }: HeroActionsProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Button asChild size="sm">
        <Link href="/">{primaryLabel}</Link>
      </Button>

      <Button
        asChild
        size="sm"
        variant="outline"
        className="border-primary/70 bg-transparent text-primary hover:bg-primary hover:text-secondary"
      >
        <Link href="/">{secondaryLabel}</Link>
      </Button>
    </div>
  );
}
