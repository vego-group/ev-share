"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AssetShowcaseCard } from "./asset-showcase-card";
import { showcaseCards } from "@/data";
import { container, item } from "@/lib/motion";

export function AssetShowcaseSection() {
  const t = useTranslations("LandingPage.assetShowcase");
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={container}
      className="border-t-2 border-primary bg-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {showcaseCards.map((card) => (
          <motion.div key={card.key} variants={item(reduceMotion)}>
            <AssetShowcaseCard
              title={t(`cards.${card.key}.title`)}
              description={t(`cards.${card.key}.description`)}
              cta={t(`cards.${card.key}.cta`)}
              imageSrc={card.imageSrc}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
