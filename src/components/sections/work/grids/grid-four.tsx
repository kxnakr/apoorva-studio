import Image from "next/image";

export const GridFour = () => {
  return (
    <div className="grid grid-cols-11 grid-rows-6 gap-4">
      <div className="bg-violet-500 col-span-3 row-span-4">1</div>
      <div className="bg-pink-500 col-span-5 row-span-6 col-start-4">2</div>
      <div className="bg-orange-500 col-span-3 row-span-4 col-start-9 row-start-3">
        3
      </div>
    </div>
  )
}