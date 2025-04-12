import { abstractlyPaths } from "@/app/utils/paths";
import Button from "@/components/ui/Button";
import EntryMotion from "@/components/ui/EntryMotion";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { RiCheckFill } from "react-icons/ri";

const FeaturesHero = () => {
  return (
    <section
      className="px-4 pt-[100px] lg:pt-19"
      aria-labelledby="features-hero"
    >
      <div className="flex flex-col lg:flex-row bg-light dark:bg-dark gap-8 items-center px-3 md:px-4 lg:px-24 py-12 md:py-14 lg:py-16 rounded-t-md">
        <EntryMotion
          from="top"
          className="flex flex-col gap-8 md:gap-16 w-full lg:w-[45%] text-start"
        >
          <Heading className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            Premium abstract images
          </Heading>
          <div className="flex flex-col gap-5">
            {features.map((feature) => (
              <div className="flex gap-3" key={feature}>
                <div className="flex w-6 h-6 bg-indigo-50 rounded-full items-center justify-center">
                  <RiCheckFill color="blue" size={24} />
                </div>
                <Paragraph>{feature}</Paragraph>
              </div>
            ))}
          </div>
          <div className="flex gap-8 w-full md:w-[60%] lg:w-[80%]">
            <Link href={abstractlyPaths.about.path} className="flex-1">
              <Button variant="secondary" className="w-full">
                Learn more
              </Button>
            </Link>
            <Link href={abstractlyPaths.pricing.path} className="flex-1">
              <Button className="w-full ">See pricing</Button>
            </Link>
          </div>
        </EntryMotion>
        <EntryMotion
          from="bottom"
          className="w-full lg:w-[54%] h-[264px] md:h-[520px] "
        >
          <Image
            src="/prism.png"
            height={526}
            width={696}
            alt="hero"
            className="h-full w-full"
          />
        </EntryMotion>
      </div>
    </section>
  );
};

export default FeaturesHero;

const features = [
  "Minimum 5K image resolution",
  "Various format variants available",
  "Retina display support",
];
