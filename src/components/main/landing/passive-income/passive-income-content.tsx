"use client";

import { container, item } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

type PassiveIncomeContentProps = {
  title: string;
  description: string;
};

export function PassiveIncomeContent({
  title,
  description,
}: PassiveIncomeContentProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div variants={item(reduceMotion)}>
        <div className="w-full max-w-lg border-s-4 border-primary ps-4">
          <h2 className="text-start text-2xl font-bold leading-tight text-secondary md:text-[40px] md:leading-[1.08]">
            {title}
          </h2>
        </div>
      </motion.div>

      <motion.div
        variants={item(reduceMotion)}
        className="mt-8 xl:mt-14 w-full font-medium flex justify-end max-w-6xl text-base leading-8 text-secondary md:text-[29px] md:leading-[1.6]"
      >
        <p className="max-w-2xl"> {description}</p>
      </motion.div>
    </motion.div>
  );
}
