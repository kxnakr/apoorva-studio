"use client";

import { motion } from "motion/react";

export default function DesignerImpactSection() {
  return (
    <div className="flex mt-48 items-end justify-between">
      <motion.div
        className="flex flex-col text-gray-600 gap-2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <span className="text-2xl">MULTIDISCIPLINARY DESIGNER</span>
        <span className="text-xl">
          Designing for startups, dreamers, disruptors —
          <br />
          and anyone allergic to boring.
        </span>
      </motion.div>

      <motion.div
        className="text-7xl/snug"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}
      >
        LEAVE THE
        <br />
        IMPACT TO ME!
      </motion.div>
    </div>
  );
}
