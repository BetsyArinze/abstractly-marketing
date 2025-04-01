import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import { RiCopyrightLine, RiP2pLine, RiRocket2Line } from "react-icons/ri";

const AbstractlyFeaturesTwo = () => {
  return (
    <section className="bg-white mx-4 py-12 md:py-14 lg:py-16">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-12 md:pb-16 items-center text-center">
          <Heading style="h6" className="text-indigo-700 font-semibold pb-3">
            Best-in-class support
          </Heading>
          <Heading className="font-semibold pb-5 text-5xl">
            Convenience and licensing that empowers
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            In a world where storytelling constantly evolves, don&apos;t let
            licensing and poor support hold you down.
          </Paragraph>
        </div>
        <div className="flex flex-col lg:flex-row justify-center text-center gap-8 w-full">
          <div className="w-full lg:w-[50%] h-[180px] md:h-[394px] overflow-hidden rounded-lg">
            <Image
              src="/features-left-image.jpg"
              width={592}
              height={394}
              alt="features"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[50%] gap-10">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbstractlyFeaturesTwo;

const features = [
  {
    icon: RiRocket2Line,
    title: "Faster downloads",
    description:
      "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.",
  },
  {
    icon: RiP2pLine,
    title: "Convenience for teams",
    description:
      "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.",
  },
  {
    icon: RiCopyrightLine,
    title: "Royalty-free licensing",
    description:
      "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.",
  },
];
