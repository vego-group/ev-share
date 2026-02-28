import { useTranslations } from "next-intl";
import { ChooseAssetContent } from "./choose-asset-content";

export function ChooseAssetSection() {
  const t = useTranslations("LandingPage.chooseAsset");

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-8">
        <ChooseAssetContent
          title={t("title")}
          descriptionStart={t("descriptionStart")}
          brand={t("brand")}
          descriptionEnd={t("descriptionEnd")}
          descriptionLine2={t("descriptionLine2")}
        />
      </div>
    </section>
  );
}
