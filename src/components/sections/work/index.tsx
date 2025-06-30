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
      className="mt-20 md:mt-24 lg:mt-40 text-gray-600 flex flex-col gap-16 lg:gap-28"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 lg:ml-34">
        <h2 className="flex-6 text-4xl sm:text-5xl md:text-[4rem] font-normal text-black">
          works
        </h2>
        <p className="flex-4 text-base sm:text-lg md:text-xl leading-relaxed lg:max-w-sm">
          A showcase of multidisciplinary design — clear thinking, clean
          execution, and bold visual presence.
        </p>
      </div>

      <div className="flex flex-col gap-16 lg:gap-52">
        <GridOne />
        <GridTwo />
        <GridThree />
        {/* <GridFour />
      <GridFive /> */}
      </div>
    </div>
  );
};

export default Works;
