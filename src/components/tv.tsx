import Image from "next/image";

const TV = () => {
  return (
    <div className="relative">
      <Image src="/tv.png" alt="logo" width={240} height={240} unoptimized />
      <div className="absolute top-16.5 left-5.5 w-[160px] h-[120px]">
        <Image
          src="/celebrating-minions.gif"
          alt="logo"
          fill
          className="object-cover shadow-lg rounded-lg"
          unoptimized
        />
      </div>
    </div>
  );
};

export default TV;
