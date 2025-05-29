"use client";

import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const clients = [
  "clients",
  "clients",
  "clients",
  "clients",
  "clients",
  "clients",
  "clients",
  "clients",
  "clients",
  "clients",
];

export default function ClientsSection() {
  const titleRef = useScrollAnimation({
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current.querySelector(".marquee-content");
    if (!marqueeContent) return;

    // Create infinite scroll animation
    const animation = gsap.to(marqueeContent, {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // Pause animation on hover
    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    marqueeRef.current.addEventListener("mouseenter", handleMouseEnter);
    marqueeRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (marqueeRef.current) {
        marqueeRef.current.removeEventListener("mouseenter", handleMouseEnter);
        marqueeRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
      <div className="mb-8 sm:mb-12 md:mb-16">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-600"
        >
          clients
        </h2>
      </div>

      {/* Scrolling Marquee */}
      <div
        ref={marqueeRef}
        className="overflow-hidden whitespace-nowrap opacity-30"
      >
        <div className="marquee-content inline-flex space-x-8 sm:space-x-12 md:space-x-16">
          {/* First set */}
          {clients.map((client, index) => (
            <span
              key={`first-${index}`}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 inline-block"
            >
              {client}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <span
              key={`second-${index}`}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 inline-block"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
