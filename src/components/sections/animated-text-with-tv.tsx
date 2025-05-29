"use client";

import { MultiLineTextAnimate } from "@/components/basic/multi-line-text-animate";
import TV from "@/components/basic/tv";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

interface AnimatedTextWithTVProps {
  className?: string;
}

export default function AnimatedTextWithTV({
  className,
}: AnimatedTextWithTVProps) {
  const [showTV, setShowTV] = useState(false);

  const handleTextAnimationComplete = () => {
    setTimeout(() => setShowTV(true), 100);
  };

  return (
    <div
      className={cn(
        "font-light text-6xl/tight pt-16 xs:text-7xl/tight sm:pt-24 sm:text-8xl/tight lg:pt-0 2xl:text-9xl/tight inline-flex flex-col relative transition-all duration-400 ease-in-out",
        className
      )}
    >
      <MultiLineTextAnimate onComplete={handleTextAnimationComplete}>
        <span>
          <i>YOU&apos;VE</i> GOT
        </span>
        <span>THE IDEA,</span>
        <span>PERFECT</span>
      </MultiLineTextAnimate>

      {showTV && (
        <motion.div
          className="absolute -bottom-28 -right-20 xs:-bottom-26  xs:-right-14 sm:-bottom-28 sm:-right-14 scale-50 sm:scale-80 2xl:scale-100"
          initial={{ opacity: 0, scale: 0.4, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <TV />
        </motion.div>
      )}
    </div>
  );
}
