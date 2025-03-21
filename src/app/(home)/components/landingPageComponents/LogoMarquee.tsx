import Heading from "@/app/components/ui/Heading";
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
    <section className="mx-4 py-24 overflow-hidden bg-white">
      <div className="flex flex-col text-center gap-8">
        <Heading style="h4">Used by teams that you love</Heading>
        <div className="flex w-max animate-marquee">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex justify-center w-[218px] h-[96px]">
              <Image src={logo} alt="logo" width={170} height={48} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
