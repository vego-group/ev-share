"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "next-intl";
import { ContactForm } from "./contact-form";
import { ContactHeaderCard } from "./contact-header-card";
import { ContactReachCard } from "./contact-reach-card";

function Contact() {
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const isArabic = locale.startsWith("ar");

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative mx-auto w-full max-w-245 overflow-hidden px-4 py-12 md:py-16"
    >
      <ContactReachCard />

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="rounded-4xl border border-secondary/12 bg-white/92 p-5 shadow-md md:p-8"
      >
        <ContactHeaderCard />

        <div className="mt-8">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
