"use client";

import {
  GridOne,
  GridTwo,
  GridThree,
  // GridFour,
  // GridFive
} from "./grids";

const Works = () => {
  return (
    <div
      id="works"
      className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 text-gray-600 flex flex-col gap-16 lg:gap-32"
    >
      <div className="flex flex-col lg:flex-row gap-4. lg:gap-0">
        <h2 className="flex-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-black">
          works
        </h2>
        <p className="flex-4 text-base sm:text-lg md:text-xl leading-relaxed lg:max-w-sm">
          A showcase of multidisciplinary design — clear thinking, clean
          execution, and bold visual presence.
        </p>
      </div>

      <GridOne />
      <GridTwo />
      <GridThree />
      {/* <GridFour />
      <GridFive /> */}
    </div>
  );
};

export default Works;
