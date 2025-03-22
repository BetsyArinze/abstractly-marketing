import Button from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import Image from "next/image";

const LandingHeroSection = () => {
  return (
    <section className="px-4 pt-[100px] lg:pt-19">
      <div className="flex flex-col lg:flex-row bg-white gap-8 items-center px-3 md:px-4 lg:px-24 py-12 md:py-16 lg:py-24 rounded-t-md">
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-8 w-full lg:w-[45%]">
          <div className="flex flex-col gap-6 text-center md:text-start ">
            <Heading className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              Well crafted abstract images
            </Heading>
            <Paragraph style="xl">
              High quality abstract images for your projects, wallpaper and
              presentations.
            </Paragraph>
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
            src="/landingPage/hero-image.jpg"
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

export default LandingHeroSection;
