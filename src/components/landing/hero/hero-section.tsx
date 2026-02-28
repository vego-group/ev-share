import Image from "next/image";
import { useTranslations } from "next-intl";
import { HeroContent } from "./hero-content";

export function HeroSection() {
  const t = useTranslations("LandingPage.hero");

  return (
    <section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-secondary">
      <Image
        src="/images/hero.jpg"
        alt={t("backgroundAlt")}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/10 to-black/5" />

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-300 items-center px-4 sm:px-6 lg:px-8">
        <HeroContent
          title={t("title")}
          tag={t("tag")}
          description={t("description")}
          benefits={t("benefits")}
          primaryCta={t("primaryCta")}
          secondaryCta={t("secondaryCta")}
        />
      </div>
    </section>
  );
}
