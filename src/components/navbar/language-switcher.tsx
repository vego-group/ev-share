"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "ar" ? "en" : "ar";

  const handleSwitch = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button
      type="button"
      onClick={handleSwitch}
      variant="secondary"
      className="h-11 rounded-full border border-primary/40 bg-secondary px-4 text-primary hover:border-primary hover:bg-secondary"
      aria-label={`Switch language to ${nextLocale.toUpperCase()}`}
    >
      <span>{locale.toUpperCase()}</span>
      <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary text-secondary">
        <Globe size={12} />
      </span>
    </Button>
  );
}
