import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import { RiCheckFill } from "react-icons/ri";

const Newsletter = () => {
  return (
    <section className="bg-white mx-4 py-12 md:py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row  px-3 md:px-4 lg:px-24 justify-center items-center gap-8 w-full">
        <div className="flex flex-col w-full lg:w-[50%] gap-12">
          <Heading className="font-semibold text-5xl pb-4">
            Get the finest curated abstracts delivered weekly to your inbox
          </Heading>
          <div className="flex flex-col gap-5">
            {benefits.map((benefit) => (
              <div className="flex gap-3" key={benefit}>
                <div className="flex w-6 h-6 bg-indigo-50 rounded-full items-center justify-center">
                  <RiCheckFill color="blue" size={24} />
                </div>
                <Paragraph>{benefit}</Paragraph>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 w-full md:w-[75%]">
              <input
                placeholder="Enter your email"
                className="w-full bg-neutral-50 border border-neutral-200 text-neutral-500 text-sm px-[14px] py-[10px] rounded-sm"
              ></input>
              <Paragraph className="flex md:hidden pb-1">
                We only send you the best! No spam.
              </Paragraph>

              <Button className="text-sm ">Subscribe</Button>
            </div>
            <Paragraph className="hidden md:block">
              We only send you the best! No spam.
            </Paragraph>
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-[288px] md:h-[608px] rounded-lg">
          <Image
            src="/newsletter.jpg"
            width={592}
            height={394}
            alt="features"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

const benefits = [
  "Exclusive access to new abstract images and collections",
  "Unlock special promotions only for subscribers",
  "Regular doses of artistic inspiration",
];
