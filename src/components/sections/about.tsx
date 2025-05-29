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

function ClientsMarquee() {
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
    <div className="mt-12 sm:mt-16 md:mt-20">
      <div className="mb-8 sm:mb-12">
        <h3
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-700"
        >
          clients
        </h3>
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
    </div>
  );
}

export default function About() {
  const titleRef = useScrollAnimation({
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  const contentRef = useScrollAnimation({
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  return (
    <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-32" id="about-me">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Title */}
        <div className="lg:col-span-5">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-black"
          >
            about me
          </h2>
        </div>

        {/* Content */}
        <div ref={contentRef} className="lg:col-span-7">
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              Hi, I&apos;m{" "}
              <span className="text-black font-medium">Apoorva Kumari</span> — a
              multidisciplinary designer who turns ideas into experiences and
              visuals into conversations.
            </p>

            <p>
              I hold a Bachelor of Design in Fashion Communication from NIFT
              Kolkata, where I first learned to breathe design in everything I
              do. I believe design is more than aesthetics. It&apos;s a language
              — one that bridges function and feeling, purpose and emotion.
              Whether it&apos;s 2D, 3D, or UI / UX, I use the right medium to
              make meaning. To me, design is messy, beautiful, and always
              evolving. And I love that.
            </p>

            <p>
              My work lives at the intersection of people, tech, and business —
              where real problems exist and better experiences are waiting to be
              built.
            </p>

            <p>
              From startups to cultural brands, I&apos;ve helped teams bring
              clarity to complexity and spark connection through intentional
              design. If it needs to resonate, scale, or simply make sense —
              I&apos;m all in.
            </p>
          </div>

          <ClientsMarquee />
        </div>
      </div>
    </section>
  );
}
