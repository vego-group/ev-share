import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function Footer() {
  const t = useTranslations("LandingPage.footer");

  const links = [
    { href: "/privacy-policy", label: t("privacyPolicy") },
    { href: "/terms-of-service", label: t("termsOfService") },
    { href: "/contact", label: t("contactUs") },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-secondary py-8">
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center px-4 sm:gap-5">
        {links.map((link, idx) => (
          <div key={link.href} className="inline-flex items-center">
            {idx > 0 ? <span className="mx-2 h-4 w-px bg-white/30" /> : null}
            <Button
              asChild
              variant="link"
              size="sm"
              className="h-auto p-0 text-sm font-normal text-white/70 hover:text-white"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          </div>
        ))}
      </div>
    </footer>
  );
}
