"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type AppStepCardProps = {
  imageSrc: string;
  number: string;
  title: string;
  body: string;
  delay?: number;
};

export function AppStepCard({
  imageSrc,
  number,
  title,
  body,
  delay = 0,
}: AppStepCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        className=""
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <Image
          src={imageSrc}
          alt={title}
          height={100}
          width={500}
          className="object-contain rounded-md"
        />
      </motion.div>

      <p className="mt-4 text-[32px] font-bold leading-none text-primary md:text-[42px]">
        {number}
      </p>
      <h3 className="mt-2 text-lg font-bold text-secondary md:text-[24px] md:leading-tight">
        {title}
      </h3>
      <p className="mt-2 max-w-65 font-medium leading-6 text-secondary/90 md:text-[14px] md:leading-7">
        {body}
      </p>
    </motion.article>
  );
}
