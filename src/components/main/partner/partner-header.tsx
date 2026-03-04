import { motion } from "framer-motion";

type PartnerHeaderProps = {
  description: string;
  reduceMotion: boolean;
  title: string;
};

export function PartnerHeader({
  description,
  reduceMotion,
  title,
}: PartnerHeaderProps) {
  return (
    <>
      <motion.h2
        initial={reduceMotion ? undefined : { opacity: 0, y: -10 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="text-center text-2xl font-semibold text-primary md:text-3xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={reduceMotion ? undefined : { opacity: 0, y: -8 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.14 }}
        className="mt-2 text-center text-base text-secondary/80"
      >
        {description}
      </motion.p>
    </>
  );
}
