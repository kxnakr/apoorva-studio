import { useDrawer } from "@/hooks/useDrawer";
import { generateImageArray } from "@/lib/utils";
import Image from "next/image";

const logoDesignTitle = "Logo Design & Branding";

export const GridTwo = () => {
  const { openDrawer } = useDrawer();

  return (
    <div className="flex flex-col lg:grid grid-cols-9 grid-rows-9 gap-16 lg:gap-4 lg:mt-10">
      <div
        className="col-span-3 row-span-9 relative space-y-4"
        onClick={() =>
          openDrawer({
            id: "logo-design",
            title: logoDesignTitle,
            content: [
              ...generateImageArray(logoDesignTitle, {
                className: "col-span-2",
                startIndex: 1,
                endIndex: 7,
              }),
              {
                type: "image",
                source: "8.gif",
                alt: `${logoDesignTitle}  - Image 8`,
                className: "col-span-2",
              },
              ...generateImageArray(logoDesignTitle, {
                className: "col-span-2",
                startIndex: 9,
                endIndex: 12,
              }),
              {
                type: "image",
                source: "13.gif",
                alt: `${logoDesignTitle}  - Image 13`,
                className: "col-span-2",
              },
              {
                type: "image",
                source: "14.gif",
                alt: `${logoDesignTitle}  - Image 14`,
                className: "col-span-2",
              },
              ...generateImageArray(logoDesignTitle, {
                className: "col-span-2",
                startIndex: 15,
                endIndex: 19,
              }),
            ],
          })
        }
      >
        <div className="overflow-hidden h-full">
          <Image
            src="/projects/logo-design/thumbnail.webp"
            alt={logoDesignTitle}
            width={481}
            height={775}
            quality={100}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="lg:absolute -bottom-10 text-lg lg:max-w-[21rem]">
          {logoDesignTitle} | Graphic Design
        </div>
      </div>

      <div
        className="col-span-3 row-span-7 col-start-4 relative space-y-4"
        onClick={() =>
          openDrawer({
            id: "research-paper",
            title:
              "Cultural Appropriation in the Fashion Industry | Research Paper",
            content: [
              {
                type: "image",
                source: "details-1.webp",
                alt: "Research Paper - Details 1",
                className: "col-span-2",
              },
              {
                type: "image",
                source: "details-2.webp",
                alt: "Research Paper - Details 2",
                className: "col-span-2",
              },
              ...generateImageArray("Research Paper", {
                className: "col-span-2",
                endIndex: 16,
              }),
            ],
          })
        }
      >
        <div className="overflow-hidden h-full">
          <Image
            src="/projects/research-paper/thumbnail.webp"
            alt="Research Paper"
            width={403}
            height={541}
            quality={100}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="lg:absolute -bottom-18 text-lg lg:max-w-[21rem]">
          Cultural Appropriation in the Fashion Industry | Research Paper
        </div>
      </div>

      <div
        className="col-span-3 row-span-5 col-start-7 relative space-y-4"
        onClick={() =>
          openDrawer({
            id: "bequest",
            title: "Bequest | Catalogue Design",
            content: [
              {
                type: "image",
                source: "details-1.webp",
                alt: "Catalogue Design - Details 1",
                className: "col-span-2",
              },
              {
                type: "image",
                source: "details-2.webp",
                alt: "Catalogue Design - Details 2",
                className: "col-span-2",
              },
              {
                type: "image",
                source: "details-3.webp",
                alt: "Catalogue Design - Details 2",
                className: "col-span-2",
              },
              ...generateImageArray("Catalogue Design", {
                className: "col-span-2",
                endIndex: 104,
              }),
            ],
          })
        }
      >
        <div className="overflow-hidden h-full">
          <Image
            src="/projects/bequest/thumbnail.webp"
            alt="Bequest | Catalogue Design"
            width={403}
            height={541}
            quality={100}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="lg:absolute -bottom-10 text-lg lg:max-w-sm">
          Bequest | Catalogue Design
        </div>
      </div>
    </div>
  );
};
