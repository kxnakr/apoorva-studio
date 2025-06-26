"use client";

import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CLIENTS = [
  "burrow",
  "elgi",
  "hello100",
  "isaca",
  "luxe",
  "supra-pens",
  "t-life",
  "tanga-studios",
  "vivarent",
  "zania",
];

export default function Clients() {
  const titleRef = useScrollAnimation({
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  return (
    <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
      <div className="mb-8 sm:mb-12 md:mb-14">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-600"
        >
          clients
        </h2>
      </div>

      {/* Super Simple Marquee */}
      <div>
        <Marquee
          speed={50}
          pauseOnHover={true}
          gradient={true}
          gradientColor="#f2f2f2"
        >
          {CLIENTS.map((client, index) => (
            <div key={index} className="mx-4 sm:mx-6 md:mx-8">
              <Image
                src={`/clients/${client}.webp`}
                alt={client}
                width={120}
                height={60}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
