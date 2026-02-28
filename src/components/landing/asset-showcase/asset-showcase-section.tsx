import { useTranslations } from "next-intl";
import { AssetShowcaseCard } from "./asset-showcase-card";
import { showcaseCards } from "@/data";

export function AssetShowcaseSection() {
  const t = useTranslations("LandingPage.assetShowcase");
  return (
    <section className="border-t-2 border-primary bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {showcaseCards.map((card) => (
          <AssetShowcaseCard
            key={card.key}
            title={t(`cards.${card.key}.title`)}
            description={t(`cards.${card.key}.description`)}
            cta={t(`cards.${card.key}.cta`)}
            imageSrc={card.imageSrc}
            href={card.href}
          />
        ))}
      </div>
    </section>
  );
}
