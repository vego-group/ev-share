"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { QuickStartFloatingAssets } from "./quick-start-floating-assets";

export function QuickStartSection() {
  const t = useTranslations("LandingPage.quickStart");

  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-white" />

      <div className="relative mx-auto flex min-h-155 w-full max-w-7xl flex-col items-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-2xl font-semibold leading-tight md:text-[40px]">
            {t("subtitleLine1")}
          </p>
          <p className="text-2xl font-semibold leading-tight md:text-[40px]">
            {t("subtitleLine2")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          animate={{ y: [0, -8, 0] }}
          className="relative mt-10"
        >
          <div className="relative h-90 w-52.5 md:h-107.5 md:w-62.5">
            <Image
              src="/images/mobile.jpeg"
              alt={t("mobileAlt")}
              fill
              priority
              className="object-contain"
            />
            <QuickStartFloatingAssets />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
