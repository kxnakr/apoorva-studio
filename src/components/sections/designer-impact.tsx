"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function DesignerImpactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      !containerRef.current ||
      !leftContentRef.current ||
      !rightContentRef.current
    )
      return;

    // Set initial states
    gsap.set(leftContentRef.current, {
      x: -80,
      opacity: 0,
    });

    gsap.set(rightContentRef.current, {
      x: 80,
      opacity: 0,
    });

    // Create intersection observer that triggers both animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate left content
          gsap.to(leftContentRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          });

          // Animate right content with slight delay
          gsap.to(rightContentRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.3,
            ease: "power3.out",
          });

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row mt-24 sm:mt-32 md:mt-48 lg:mt-48 lg:items-end justify-between gap-16 lg:gap-0"
    >
      <div
        ref={leftContentRef}
        className="flex flex-col text-gray-600 gap-2 sm:gap-3 "
      >
        <span className="text-lg sm:text-xl md:text-2xl font-normal tracking-tight">
          MULTIDISCIPLINARY DESIGNER
        </span>
        <span className="text-base sm:text-lg md:text-xl leading-relaxed max-w-md lg:max-w-lg">
          Designing for startups, dreamers, disruptors —
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          and anyone allergic to boring.
        </span>
      </div>

      <div
        ref={rightContentRef}
        className="text-4xl sm:text-5xl md:text-[4rem]/snug font-normal text-right lg:text-left"
      >
        LEAVE THE
        <br />
        IMPACT TO ME!
      </div>
    </div>
  );
}
