import { getTranslations } from "next-intl/server";

type PrivacyPolicyPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicyPage" });

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
            <h2 className="text-xl font-bold md:text-2xl">{t("introTitle")}</h2>
            <p className="mt-2 leading-8">{t("introBody")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold md:text-2xl">
              {t("collectionTitle")}
            </h2>
            <p className="mt-2 leading-8 whitespace-pre-line">
              {t("collectionBody")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold md:text-2xl">{t("useTitle")}</h2>
            <p className="mt-2 leading-8 whitespace-pre-line">{t("useBody")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold md:text-2xl">
              {t("sharingTitle")}
            </h2>
            <p className="mt-2 leading-8 whitespace-pre-line">
              {t("sharingBody")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold md:text-2xl">
              {t("securityTitle")}
            </h2>
            <p className="mt-2 leading-8 whitespace-pre-line">
              {t("securityBody")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold md:text-2xl">
              {t("rightsTitle")}
            </h2>
            <p className="mt-2 leading-8 whitespace-pre-line">
              {t("rightsBody")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold md:text-2xl">
              {t("contactTitle")}
            </h2>
            <p className="mt-2 leading-8">{t("contactBody")}</p>
          </section>
        </div>
      </section>
    </main>
  );
}
