import { abstractlyPaths } from "@/app/utils/paths";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import Link from "next/link";

const AboutUsHero = () => {
  return (
    <section
      className="px-4 pt-[100px] lg:pt-19"
      aria-labelledby="about-us-hero"
    >
      <div className="flex flex-col lg:flex-row bg-light dark:bg-dark gap-8 items-center px-3 md:px-4 lg:px-24 py-12 md:py-14 lg:py-16 rounded-t-md">
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-8 w-full lg:w-[45%]">
          <div className="flex flex-col gap-6 text-center md:text-start ">
            <Heading className="text-4xl md:text-5xl font-semibold">
              From a tiny desk to the entire world
            </Heading>
            <Paragraph style="xl">
              As a lean, passionate team, we&apos;ve made something that most
              would think is impossible - premium abstract images for free and
              for all.
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

export default AboutUsHero;
