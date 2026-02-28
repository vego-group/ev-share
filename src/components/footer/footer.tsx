import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/data";

export function Footer() {
  const t = useTranslations("LandingPage.footer");

  return (
    <footer className="relative isolate overflow-hidden bg-secondary py-8">
      <div className="relative mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center px-4 sm:gap-5">
        {footerLinks.map((link, idx) => (
          <div key={link.href} className="inline-flex items-center">
            {idx > 0 ? <span className="mx-2 h-4 w-px bg-white/30" /> : null}
            <Button
              asChild
              variant="link"
              size="sm"
              className="h-auto p-0 text-sm font-normal text-white/70 hover:text-white"
            >
              <Link href={link.href}>{t(link.label)}</Link>
            </Button>
          </div>
        ))}
      </div>
    </footer>
  );
}
