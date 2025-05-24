import Navbar from "@/components/navbar";
import AnimatedTextWithTV from "@/components/animated-text-with-tv";
import DesignerImpactSection from "@/components/designer-impact-section";

export default function Home() {
  return (
    <div className="2xl:max-w-[90rem] mx-auto">
      <Navbar />
      <div className="px-24">
        <AnimatedTextWithTV />
        <DesignerImpactSection />
      </div>
    </div>
  );
}
