"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const PingMeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const email = "hey@apoorva.studio";

  return (
    <Link href={`mailto:${email}`}>
      <motion.button
        className="relative overflow-hidden border border-gray-800 px-6 py-4 font-medium text-gray-800 select-none cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.98 }}
        animate={{
          width: isHovered ? "auto" : "initial",
          minWidth: isHovered ? email.length * 12 + "px" : "120px",
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="relative block z-10"
          animate={{
            y: isHovered ? -30 : 0,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.48, 0, 0.12, 1] }}
        >
          ping me!
        </motion.span>

        <motion.span
          className="absolute left-1/2 top-1/2 text-white z-20 whitespace-nowrap"
          initial={{ y: 30, x: "-50%", opacity: 0 }}
          animate={{
            y: isHovered ? "-50%" : 30,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.9, ease: [0.48, 0, 0.12, 1] }}
        >
          {email}
        </motion.span>

        <motion.div
          className="absolute bottom-[-50%] left-0 w-full h-full bg-black origin-bottom z-0"
          initial={{ scaleY: 0, skewY: 9.3 }}
          animate={{
            scaleY: isHovered ? 2 : 0,
            skewY: isHovered ? 0 : 9.3,
          }}
          transition={{ duration: 0.6, ease: [0.48, 0, 0.12, 1] }}
          style={{
            transformOrigin: "bottom center",
          }}
        />
      </motion.button>
    </Link>
  );
};

export default PingMeButton;
