import { getTranslations } from "next-intl/server";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return (
    <main className="">
      <section className="mx-auto w-full max-w-[980px] px-4 py-12 md:py-16">
        <h1 className="text-3xl font-bold text-secondary md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-3 leading-8 text-secondary">{t("description")}</p>

        <div className="mt-8 space-y-3 text-secondary">
          <p>
            <strong>{t("emailLabel")}:</strong> support@evshare.sa
          </p>
          <p>
            <strong>{t("phoneLabel")}:</strong>
            <span dir="ltr">+966 50 000 0000</span>
          </p>
          <p>
            <strong>{t("hoursLabel")}:</strong> {t("hoursValue")}
          </p>
        </div>
      </section>
    </main>
  );
}
