import { getTranslations } from "next-intl/server";

type TermsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function TermsOfServicePage({ params }: TermsPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsPage" });

  return (
    <main>
      <section className="mx-auto w-full max-w-[980px] px-4 py-12 md:py-16">
        <h1 className="text-3xl font-bold text-secondary md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-secondary/70 md:text-base">
          {t("updatedAt")}
        </p>

        <div className="mt-8 space-y-6 text-secondary">
          <section>
            <h2 className="text-xl font-bold md:text-2xl">{t("scopeTitle")}</h2>
            <p className="mt-2 leading-8">{t("scopeBody")}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold md:text-2xl">
              {t("accountTitle")}
            </h2>
            <p className="mt-2 leading-8 whitespace-pre-line">
              {t("accountBody")}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold md:text-2xl">
              {t("investmentTitle")}
            </h2>
            <p className="mt-2 leading-8 whitespace-pre-line">
              {t("investmentBody")}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold md:text-2xl">
              {t("liabilityTitle")}
            </h2>
            <p className="mt-2 leading-8 whitespace-pre-line">
              {t("liabilityBody")}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold md:text-2xl">
              {t("changesTitle")}
            </h2>
            <p className="mt-2 leading-8">{t("changesBody")}</p>
          </section>
        </div>
      </section>
    </main>
  );
}
