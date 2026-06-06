"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Apple, ArrowUpRight, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/constants";

export function AppDownloadBanner() {
  const t = useTranslations("LandingPage.appBanner");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-14 md:pt-20">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65 }}
        className="relative mx-auto grid w-full max-w-7xl overflow-hidden rounded-[28px] bg-secondary px-5 py-8 text-white shadow-2xl shadow-secondary/20 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8 md:py-10 lg:px-12"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_30%,rgba(255,214,64,0.38)_0%,rgba(255,214,64,0.18)_24%,rgba(255,214,64,0.06)_46%,transparent_68%),radial-gradient(ellipse_at_100%_90%,rgba(255,174,0,0.18)_0%,rgba(255,174,0,0.07)_34%,transparent_60%),linear-gradient(135deg,#020202_0%,#080808_38%,#11100b_68%,#201804_100%)]"
        />{" "}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(255,214,10,0.22)_0%,rgba(255,214,10,0.10)_24%,transparent_46%),radial-gradient(circle_at_88%_82%,rgba(255,180,0,0.10)_0%,transparent_34%),linear-gradient(115deg,#050505_0%,#080808_42%,#101006_72%,#070707_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -end-24 top-10 h-72 w-72 rounded-full border border-white/10"
        />
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
            {t("description")}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-13 rounded-xl bg-primary px-5 text-base font-bold text-secondary hover:bg-primary/90"
            >
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">
                <Play className="size-5 fill-current" />
                {t("googlePlay")}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-13 rounded-xl border-white/25 bg-white/10 px-5 text-base font-bold text-white hover:bg-white hover:text-secondary"
            >
              <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
                <Apple className="size-5 fill-current" />
                {t("appStore")}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
        <motion.div
          initial={
            reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 18 }
          }
          whileInView={
            reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative z-10 mx-auto mt-10 w-full max-w-[420px] md:mt-0 lg:max-w-[460px]"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
            <Image
              src="/images/ev-share-mockup.png"
              alt={t("mockupAlt")}
              fill
              sizes="(min-width: 1024px) 460px, (min-width: 768px) 40vw, 90vw"
              className="object-cover drop-shadow-[0_28px_48px_rgba(0,0,0,0.36)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
