"use client";

import { useScrollAnimation } from "@/lib/useScrollAnimation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Clients from "./clients";

gsap.registerPlugin(useGSAP);

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
    <section className="mt-32 lg:mt-96" id="about-me">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Title */}
        <div className="lg:col-span-5">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-[4rem] font-normal"
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

          <Clients />
        </div>
      </div>
    </section>
  );
}
