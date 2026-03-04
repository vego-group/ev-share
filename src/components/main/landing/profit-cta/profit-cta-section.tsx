"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function ProfitCtaSection() {
  const t = useTranslations("LandingPage.profitCta");
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.6 }}
      className="relative isolate overflow-hidden bg-primary py-12 md:py-14"
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center">
        <motion.h2
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl font-bold leading-tight text-secondary md:text-[45px]"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-2 text-lg font-semibold leading-tight text-secondary md:text-[44px]"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={
            reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }
          }
          whileInView={
            reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
          }
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, delay: 0.22 }}
        >
          <Button
            asChild
            size="lg"
            className="mt-6 bg-white text-secondary hover:bg-white/90"
          >
            <Link href="/partner">{t("button")}</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
