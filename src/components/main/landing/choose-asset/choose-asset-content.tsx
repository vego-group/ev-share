"use client";

import { container, item } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

type ChooseAssetContentProps = {
  title: string;
  descriptionStart: string;
  brand: string;
  descriptionEnd: string;
  descriptionLine2: string;
};

export function ChooseAssetContent({
  title,
  descriptionStart,
  brand,
  descriptionEnd,
  descriptionLine2,
}: ChooseAssetContentProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      className="mx-auto w-full max-w-240 text-center text-secondary"
    >
      <motion.h2
        variants={item(reduceMotion)}
        className="text-3xl font-bold leading-tight md:text-[48px]"
      >
        {title}
      </motion.h2>

      <motion.p
        variants={item(reduceMotion)}
        className="mt-8 text-base font-medium leading-8 md:text-[28px] md:leading-[1.55]"
      >
        {descriptionStart}{" "}
        <span className="rounded-sm bg-white px-2 py-0.5 align-middle">
          {brand}
        </span>{" "}
        {descriptionEnd}
        {descriptionLine2 ? (
          <>
            <br />
            {descriptionLine2}
          </>
        ) : null}
      </motion.p>
    </motion.div>
  );
}
