import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";

const Statistics = () => {
  return (
    <section className="bg-white mx-4 py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-12 md:pb-16 items-center text-center">
          <Heading style="h6" className="text-indigo-700 font-semibold pb-3">
            Statistics
          </Heading>
          <Heading className="font-semibold pb-5 text-5xl">
            More than premium abstract imagery
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            Our platform is more than just as a service to us - it is a catalyst
            for enriching lives through premium abstract imagery.
          </Paragraph>
        </div>
        <div className="flex flex-col lg:flex-row justify-center text-center gap-8 w-full min-h-[500px]">
          <div className="w-full lg:w-[50%] flex-1 flex overflow-hidden rounded-lg max-h-[310px] md:max-h-[600px] lg:max-h-full">
            <Image
              src="/statistics.png"
              width={592}
              height={544}
              alt="features"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col w-full lg:w-[50%] flex-1 gap-8">
            <Paragraph className="text-start">
              Our mission, in numbers
            </Paragraph>

            <div className="flex flex-col flex-1 justify-center py-6 gap-4 rounded-lg border border-neutral-200 shadow-sm">
              <Heading className="text-4xl md:text-5xl text-indigo-700">
                25,664,890
              </Heading>
              <Paragraph style="xl">Downloads</Paragraph>
            </div>
            <div className="flex flex-col flex-1 justify-center py-6 gap-4 rounded-lg border border-neutral-200 shadow-sm">
              <Heading className="text-4xl md:text-5xl text-indigo-700">
                17,219
              </Heading>
              <Paragraph style="xl">Paid Users</Paragraph>
            </div>
            <div className="flex flex-col flex-1 justify-center py-6 gap-4 rounded-lg border border-neutral-200 shadow-sm">
              <Heading className="text-4xl md:text-5xl text-indigo-700">
                190,654,321
              </Heading>
              <Paragraph style="xl">Images in library</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
