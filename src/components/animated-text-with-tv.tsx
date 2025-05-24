"use client";

import { MultiLineTextAnimate } from "@/components/multi-line-text-animate";
import TV from "@/components/tv";
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
    setTimeout(() => setShowTV(true), 200);
  };

  return (
    <div
      className={cn(
        "font-light text-9xl/tight inline-flex flex-col relative",
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
          className="absolute -bottom-24 -right-4 "
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
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
