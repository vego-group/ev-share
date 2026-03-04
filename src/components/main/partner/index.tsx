"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PartnerForm } from "./partner-form";
import { PartnerHeader } from "./partner-header";

function Partner() {
  const t = useTranslations("PartnerPage");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(150deg, rgba(0,0,0,0.78), rgba(0,0,0,0.7)), url('/images/scooter.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_50%)]" />

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto w-full max-w-245 px-4"
      >
        <div className="rounded-4xl border border-secondary/20 bg-white/93 p-5 shadow-xl backdrop-blur-sm md:p-8">
          <PartnerHeader
            title={t("title")}
            description={t("description")}
            reduceMotion={Boolean(reduceMotion)}
          />
          <PartnerForm reduceMotion={Boolean(reduceMotion)} />
        </div>
      </motion.div>
    </section>
  );
}

export default Partner;
