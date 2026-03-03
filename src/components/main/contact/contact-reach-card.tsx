import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function ContactReachCard() {
  const t = useTranslations("ContactPage");
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.12 }}
      className="mb-6 h-fit rounded-3xl bg-secondary p-6 text-primary"
    >
      <div className="mb-5 inline-flex size-10 items-center justify-center rounded-xl bg-primary text-secondary">
        <Sparkles className="size-5" />
      </div>
      <h2 className="text-xl font-bold md:text-2xl">{t("reachTitle")}</h2>
      <div className="mt-5 flex flex-col gap-3 text-sm leading-7 md:text-base">
        <Link
          href="mailto:info@evshare.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>{t("emailLabel")}:</strong> info@evshare.app
        </Link>
        <Link
          href="https://wa.me/966115001468"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>{t("phoneLabel")}:</strong>{" "}
          <span dir="ltr">+966 11 500 1468</span>
        </Link>
        <p>
          <strong>{t("hoursLabel")}:</strong> {t("hoursValue")}
        </p>
      </div>
    </motion.aside>
  );
}
