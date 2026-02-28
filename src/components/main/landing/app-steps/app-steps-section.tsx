"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AppStepCard } from "./app-step-card";
import { appSteps } from "@/data";

export function AppStepsSection() {
  const t = useTranslations("LandingPage.appSteps");
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="bg-white py-14 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {appSteps.map((step, i) => (
            <AppStepCard
              key={step.key}
              number={t(`${step.key}.number`)}
              title={t(`${step.key}.title`)}
              body={t(`${step.key}.body`)}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
