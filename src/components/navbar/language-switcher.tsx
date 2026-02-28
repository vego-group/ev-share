"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "ar" ? "en" : "ar";

  const handleSwitch = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-primary/40 bg-secondary px-4 text-sm font-medium text-primary transition hover:border-primary"
      aria-label={`Switch language to ${nextLocale.toUpperCase()}`}
    >
      <span>{locale.toUpperCase()}</span>
      <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary text-secondary">
        <Globe size={12} />
      </span>
    </button>
  );
}
