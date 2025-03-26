import Button from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import Image from "next/image";
import { RiCheckFill } from "react-icons/ri";

const FeaturesHero = () => {
  return (
    <section className="px-4 pt-[100px] lg:pt-19">
      <div className="flex flex-col lg:flex-row bg-white gap-8 items-center px-3 md:px-4 lg:px-24 py-12 md:py-16 lg:py-24 rounded-t-md">
        <div className="flex flex-col gap-8 md:gap-16 w-full lg:w-[45%] text-start">
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
            <Button variant="secondary" className="flex-1">
              Learn more
            </Button>
            <Button className="flex-1 ">See pricing</Button>
          </div>
        </div>
        <div className="w-full lg:w-[54%] h-[264px] md:h-[520px] ">
          <Image
            src="/prism.png"
            height={526}
            width={696}
            alt="hero"
            className="h-full w-full"
          />
        </div>
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
