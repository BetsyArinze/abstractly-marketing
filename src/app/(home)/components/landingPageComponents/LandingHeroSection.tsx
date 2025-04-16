import { abstractlyPaths } from "@/app/utils/paths";
import Button from "@/components/ui/Button";
import EntryMotion from "@/components/ui/EntryMotion";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import Link from "next/link";

const LandingHeroSection = () => {
  return (
    <section
      className="px-4 pt-[100px] lg:pt-19"
      aria-labelledby="landing-page"
    >
      <div className="flex flex-col w-full lg:flex-row bg-light dark:bg-dark gap-8 items-center px-3 md:px-4 lg:px-24 py-12 md:py-14 rounded-t-md h-[100%]">
        <EntryMotion
          from="top"
          className="flex flex-col gap-8 md:gap-16 lg:gap-16 w-full lg:w-[45%]"
        >
          <div className="flex flex-col gap-6 lg:gap-7 text-center md:text-start ">
            <Heading className="text-4xl md:text-5xl font-semibold">
              Well crafted abstract images
            </Heading>
            <Paragraph style="xl">
              High quality abstract images for your projects, wallpaper and
              presentations.
            </Paragraph>
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
        <EntryMotion className="flex w-full lg:w-[51%] h-[264px] md:h-[520px]">
          <Image
            src="/landingPage/hero-image.jpg"
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

export default LandingHeroSection;
