import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function CarPage() {
  const t = useTranslations("CarPage");

  return (
    <main>
      <section className="relative h-[220px] w-full md:h-[100svh]">
        <Image
          src="/images/car.jpg"
          alt={t("imageAlt")}
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      <section className="mx-auto w-full max-w-[980px] px-4 py-8 md:py-10">
        <h1 className="text-xl font-bold text-secondary md:text-3xl">
          {t("title")}
        </h1>

        <p className="mt-3 text-sm leading-7 text-secondary/90 md:text-base md:leading-8">
          {t("intro")}
        </p>

        <p className="mt-3 text-sm leading-7 text-secondary/90 md:text-base md:leading-8">
          {t("body1")}
        </p>

        <p className="mt-3 text-sm leading-7 text-secondary/90 md:text-base md:leading-8">
          {t("body2")}
        </p>

        <h2 className="mt-6 text-base font-bold text-secondary md:text-xl">
          {t("highlightsTitle")}
        </h2>
        <ul className="mt-2 list-disc space-y-1 ps-5 text-sm leading-7 text-secondary/90 md:text-base">
          <li>{t("point1")}</li>
          <li>{t("point2")}</li>
          <li>{t("point3")}</li>
          <li>{t("point4")}</li>
        </ul>

        <Button
          asChild
          size="sm"
          className="mt-7 bg-primary text-secondary hover:bg-primary/90"
        >
          <Link href="/">{t("button")}</Link>
        </Button>
      </section>
    </main>
  );
}
