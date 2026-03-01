"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { HeroContent } from "./hero-content";

export function HeroSection() {
  const t = useTranslations("LandingPage.hero");
  const reduceMotion = useReducedMotion();

  return (
    <section className="-mt-0.5 relative min-h-[calc(100svh-76px)] overflow-hidden bg-secondary pt-0.5">
      <motion.div
        initial={reduceMotion ? undefined : { scale: 1.08, opacity: 0.72 }}
        animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
        transition={{
          duration: 1.1,
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.jpg"
          alt={t("backgroundAlt")}
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="absolute inset-0 bg-linear-to-r from-black/20 via-black/10 to-black/5"
      />

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.18,
        }}
        className="relative mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8"
      >
        <HeroContent
          title={t("title")}
          tag={t("tag")}
          description={t("description")}
          benefits={t("benefits")}
          primaryCta={t("primaryCta")}
          secondaryCta={t("secondaryCta")}
        />
      </motion.div>
    </section>
  );
}
