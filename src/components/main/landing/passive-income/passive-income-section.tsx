import { useTranslations } from "next-intl";
import { PassiveIncomeContent } from "./passive-income-content";

export function PassiveIncomeSection() {
  const t = useTranslations("LandingPage.passiveIncome");

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full  max-w-7xl px-4 sm:px-6 lg:px-8">
        <PassiveIncomeContent
          title={t("title")}
          description={t("description")}
        />
      </div>
    </section>
  );
}
