"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { WhyEvShareItem } from "./why-ev-share-item";
import { whyEvShareItems } from "@/data";

export function WhyEvShareSection() {
  const t = useTranslations("LandingPage.whyEvShare");
  const reduceMotion = useReducedMotion();

  const contentContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const contentItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={contentContainer}
      className="relative isolate min-h-135 flex items-center overflow-hidden border-t border-primary bg-[#0b0d12] py-12 md:min-h-162.5 md:py-16"
    >
      <motion.div
        aria-hidden
        className="absolute -inset-s-[18%] top-[12%] h-130 w-230 rounded-[50%] border border-[#d8b43a]/20 bg-[#b79a2a]/10 blur-[2px]"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 22, 0], y: [0, -12, 0], rotate: [0, 1.8, 0] }
        }
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -inset-e-[10%] -top-[24%] h-205 w-215 rounded-[50%] border border-[#d8b43a]/18 bg-[#b79a2a]/8 blur-[1px]"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -28, 0], y: [0, 10, 0], rotate: [0, -2, 0] }
        }
        transition={{ duration: 17, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-s-[12%] bottom-[-48%] h-160 w-245 rounded-[50%] border border-[#d8b43a]/16 bg-[#b79a2a]/10"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 18, 0], y: [0, 12, 0], rotate: [0, 2.2, 0] }
        }
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#0b0d12]/80 via-transparent to-[#0b0d12]/82" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(208,214,224,0.16)_0%,rgba(37,42,52,0.26)_45%,rgba(11,13,18,0.84)_100%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/35" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.h2
          variants={contentItem}
          className="text-center text-[36px] font-medium text-[#f2f2f2] md:text-[52px]"
        >
          {t("title")}
        </motion.h2>

        <div className="mt-14 grid grid-cols-2 justify-items-center gap-y-10 sm:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-y-0">
          {whyEvShareItems.map((item) => (
            <motion.div
              key={item.key}
              variants={contentItem}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.015 }}
              transition={{ duration: 0.25 }}
            >
              <WhyEvShareItem icon={item.icon} text={t(`items.${item.key}`)} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
