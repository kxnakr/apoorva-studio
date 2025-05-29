"use client";

import Image from "next/image";
import PingMeButton from "../basic/ping-me-button";

export default function GetInTouch() {
  return (
    <section
      className="mt-24 flex flex-col sm:flex-row justify-around"
      id="get-in-touch"
    >
      <div className="flex flex-col xl:flex-row flex-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl/snug font-normal">
          HAVE AN IDEA?
        </h1>
        <Image
          src="/get-in-touch.gif"
          alt="Get in Touch"
          width={408}
          height={322}
          unoptimized
          className="object-cover -rotate-6 mt-4 xl:mt-22 ml-auto xl:ml-0 xl:-ml-32 2xl:-ml-24 max-w-[200px] sm:max-w-[300px] xl:max-w-none"
        />
      </div>
      <div className="flex items-end sm:items-center justify-center xl:justify-start min-w-32 sm:min-w-68 xl:min-w-96 mt-12 mb-12 sm:mb-0 xl:mt-28 sm:ml-4 xl:ml-4">
        <PingMeButton />
      </div>
    </section>
  );
}
