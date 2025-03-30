import EntryMotion from "@/components/ui/EntryMotion";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import { RiHdLine, RiRainbowLine, RiWaterPercentLine } from "react-icons/ri";

const AbstractlyFeatures = () => {
  return (
    <section className="bg-white mx-4 py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-12 md:pb-16 items-center text-center">
          <Heading style="h6" className="text-indigo-700 font-semibold pb-3">
            High quality images
          </Heading>
          <Heading className="font-semibold pb-5 text-5xl">
            For designers, by designers
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            Unleash boundless creativity with a large repository of images
            optimized for designers
          </Paragraph>
        </div>
        <div className="flex flex-col lg:flex-row justify-center text-center gap-8 w-full">
          <EntryMotion
            from="left"
            className="flex flex-col w-full lg:w-[50%] gap-10"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start justify-start lg:pb-4 gap-5"
              >
                <div className="min-w-12 h-12 flex items-center justify-center rounded-full shadow-md ">
                  <feature.icon size={24} color="blue" />
                </div>
                <div className="flex flex-col items-start text-start">
                  <Heading style="h5" className="font-semibold ">
                    {feature.title}
                  </Heading>
                  <Paragraph>{feature.description}</Paragraph>
                </div>
              </div>
            ))}
          </EntryMotion>
          <EntryMotion
            from="right"
            className="w-full lg:w-[50%] h-[180px] md:h-[394px] overflow-hidden rounded-lg"
          >
            <Image
              src="/features-right-image.jpg"
              width={592}
              height={394}
              alt="features"
              className="h-full w-full object-cover object-center"
            />
          </EntryMotion>
        </div>
      </div>
    </section>
  );
};

export default AbstractlyFeatures;

const features = [
  {
    icon: RiHdLine,
    title: "5K resolution support",
    description:
      "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
  },
  {
    icon: RiWaterPercentLine,
    title: "From water to glass",
    description:
      "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.",
  },
  {
    icon: RiRainbowLine,
    title: "Portrait or landscape",
    description:
      "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
  },
];
