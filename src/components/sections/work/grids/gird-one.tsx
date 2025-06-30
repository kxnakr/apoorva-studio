import { useDrawer } from "@/hooks/useDrawer";
import { generateImageArray } from "@/lib/utils";
import Image from "next/image";

export const GridOne = () => {
  const { openDrawer } = useDrawer();

  return (
    <div className="flex flex-col lg:grid grid-cols-10 grid-rows-9 gap-16 lg:gap-4">
      <div
        className="col-span-6 row-span-5 relative space-y-4"
        onClick={() =>
          openDrawer({
            id: "under-the-spell",
            title: "Under the spell | VR game",
            content: [
              {
                type: "mux-video",
                source: "ABA5A86o00S6u5joOjqBj6gTP49knMEXALf7w01D01k5mc",
              },
              {
                type: "image",
                source: "details.webp",
                alt: "Under the spell - Details",
                className: "col-span-2",
              },
              ...generateImageArray("Under the spell", {
                endIndex: 38,
              }),
            ],
          })
        }
      >
        <Image
          src="https://image.mux.com/uuXvrZaQlP02G8yYVCVUX02qoxDxdlhuvH003ZYgi2KgCk/animated.gif?width=640"
          alt="Under the spell"
          width={748}
          height={421}
          quality={100}
          className="w-full h-full object-cover"
        />

        <div className="lg:absolute -bottom-10 text-lg">
          Under the spell | VR game
        </div>
      </div>

      <div
        className="col-span-4 row-span-9 col-start-7 relative space-y-4"
        onClick={() =>
          openDrawer({
            id: "she",
            title:
              "SHE (Self Development Healing Empowerment) | VR Game Research",
            content: [
              ...generateImageArray("SHE", {
                className: "col-span-2",
                endIndex: 32,
              }),
            ],
          })
        }
      >
        <div className="overflow-hidden h-full">
          <Image
            src="/projects/she/thumbnail.webp"
            alt="SHE"
            width={481}
            height={775}
            quality={100}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="lg:absolute -bottom-18 text-lg lg:max-w-sm">
          SHE (Self Development Healing Empowerment) I VR Game Research
        </div>
      </div>

      <div
        className="col-span-3 row-span-4 col-start-4 row-start-6t relative space-y-4"
        onClick={() =>
          openDrawer({
            id: "kantha",
            title: "Kantha in Nanoor I Craft Research & Documentation",
            content: [
              ...generateImageArray("Kantha", {
                className: "col-span-2",
                endIndex: 66,
              }),
            ],
          })
        }
      >
        <div className="overflow-hidden h-full">
          <Image
            src="/projects/kantha/thumbnail.webp"
            alt="Kantha"
            width={330}
            height={330}
            quality={100}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="lg:absolute -bottom-18 text-lg lg:max-w-[16rem]">
          Kantha in Nanoor I Craft Research & Documentation
        </div>
      </div>
    </div>
  );
};
