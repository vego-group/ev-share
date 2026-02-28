import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function ProfitCtaSection() {
  const t = useTranslations("LandingPage.profitCta");

  return (
    <section className="relative isolate overflow-hidden bg-primary py-12 md:py-14">
      <Image
        src="/images/earth-2.jpg"
        alt=""
        fill
        className="object-cover object-center opacity-10 mix-blend-multiply"
      />
      <Image
        src="/images/earth-1.png"
        alt=""
        fill
        className="object-cover object-center opacity-12 mix-blend-multiply"
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 text-center">
        <h2 className="text-3xl font-bold leading-tight text-secondary md:text-[45px]">
          {t("title")}
        </h2>
        <p className="mt-2 text-lg font-semibold leading-tight text-secondary md:text-[44px]">
          {t("subtitle")}
        </p>

        <Button
          asChild
          size="lg"
          className="mt-6 bg-white text-secondary hover:bg-white/90"
        >
          <Link href="/">{t("button")}</Link>
        </Button>
      </div>
    </section>
  );
}
