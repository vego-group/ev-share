import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

type HeroActionsProps = {
  primaryLabel: string;
};

export function HeroActions({ primaryLabel }: HeroActionsProps) {
  return (
    <div className="mt-8">
      <Button asChild>
        <Link href="/about">{primaryLabel}</Link>
      </Button>
    </div>
  );
}
