// import Image from "next/image";

export const GridFive = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-9 gap-4">
      <div className="bg-violet-500 col-span-4 row-span-4">1</div>
      <div className="bg-pink-500 col-span-4 row-span-4 col-start-1 row-start-6">
        2
      </div>
      <div className="bg-orange-500 col-span-4 row-span-7 col-start-5 row-start-1">
        3
      </div>
      <div className="bg-rose-500 col-span-4 row-span-9 col-start-9 row-start-1">
        4
      </div>
    </div>
  );
};
