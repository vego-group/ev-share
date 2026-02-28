import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <main>
      <section className="mx-auto w-full max-w-[1080px] px-4 py-10 md:py-16">
        <div className="relative mx-auto h-[130px] w-[300px] md:h-[180px] md:w-[460px]">
          <Image
            src="/images/logo.svg"
            alt={t("logoAlt")}
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="mt-8 text-secondary md:mt-10">
          <h1 className="text-2xl font-bold md:text-4xl">{t("title")}</h1>
          <p className="mt-4 text-sm leading-8 md:text-lg md:leading-9">
            {t("paragraph1")}
          </p>
          <p className="mt-4 text-sm leading-8 md:text-lg md:leading-9">
            {t("paragraph2")}
          </p>
        </div>

        <Button
          asChild
          size="sm"
          className="mt-8 bg-primary text-secondary hover:bg-primary/90"
        >
          <Link href="/">{t("button")}</Link>
        </Button>
      </section>
    </main>
  );
}
