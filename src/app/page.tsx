import Navbar from "@/components/basic/navbar";
import AnimatedTextWithTV from "@/components/sections/animated-text-with-tv";
import DesignerImpact from "@/components/sections/designer-impact";
import About from "@/components/sections/about";
import GetInTouch from "@/components/sections/get-in-touch";
import Footer from "@/components/basic/footer";
import Works from "@/components/sections/work";

export default function Home() {
  return (
    <div className="2xl:max-w-[90rem] mx-auto">
      <Navbar />
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 ">
        <AnimatedTextWithTV />
        <DesignerImpact />
        <Works />
        <About />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}
