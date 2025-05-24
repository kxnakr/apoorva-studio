import Navbar from "@/components/navbar";
import TV from "@/components/tv";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="px-10">
        <div className="font-light text-9xl/tight flex flex-col">
          <span>
            <i>YOU&apos;VE</i> GOT
          </span>
          <span>THE IDEA,</span>
          <span className="relative w-min">
            PERFECT
            <div className="absolute -bottom-24 -right-56">
              <TV />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
