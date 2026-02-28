"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { floatingAssets } from "@/data";

export function QuickStartFloatingAssets() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {floatingAssets.map((asset, i) => (
        <motion.div
          key={asset.src}
          className={`absolute h-20 w-20 overflow-hidden rounded-full border border-primary/35 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ${asset.className}`}
          animate={{
            y: [0, i % 2 === 0 ? -10 : 10, 0],
            rotate: [0, i % 2 === 0 ? 2 : -2, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
          }}
        >
          <Image src={asset.src} alt="" fill className="object-cover" />
        </motion.div>
      ))}
    </div>
  );
}
