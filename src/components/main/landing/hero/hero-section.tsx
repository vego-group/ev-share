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
        initial={reduceMotion ? undefined : { scale: 1.06, opacity: 0.72 }}
        animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
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
        className="absolute inset-0 bg-linear-to-br from-black/75 via-black/55 to-black/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.08),transparent_34%)]"
      />

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.18,
        }}
        className="relative mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-7xl items-start px-4 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20"
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
