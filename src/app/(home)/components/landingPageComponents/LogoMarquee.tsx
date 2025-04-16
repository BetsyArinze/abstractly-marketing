import Heading from "@/components/ui/Heading";
import Image from "next/image";

const logos = [
  "/logos/logo.svg",
  "/logos/logo-1.svg",
  "/logos/logo-2.svg",
  "/logos/logo-3.svg",
  "/logos/logo-4.svg",
  "/logos/logo-5.svg",
  "/logos/logo-6.svg",
  "/logos/logo-7.svg",
];

const LogoMarquee = () => {
  return (
    <section className="mx-4 py-12 md:py-14 lg:py-16 overflow-hidden bg-light dark:bg-dark">
      <div className="flex flex-col text-center gap-8">
        <Heading
          level="h1"
          style="h2"
          className="font-semibold pb-5 text-3xl md:text-4xl"
        >
          Used by teams that you love
        </Heading>
        <div className="flex w-max animate-marquee">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex justify-center w-[218px] h-[76px]">
              <Image
                src={logo}
                alt="logo"
                width={170}
                height={48}
                className="bg-white rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
