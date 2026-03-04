import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

function About() {
  const t = useTranslations("AboutPage");
  return (
    <section className="mx-auto w-full max-w-270 px-4 py-10 md:py-16">
      <div className="relative mx-auto h-32.5 w-75 md:h-45 md:w-115">
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
        <Link href="/partner">{t("button")}</Link>
      </Button>
    </section>
  );
}

export default About;
