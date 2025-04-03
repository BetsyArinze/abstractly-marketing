import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";

const Team = () => {
  return (
    <section className="bg-white mx-4 py-12 md:py-14 lg:py-16">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-12 md:pb-16 items-center text-center">
          <Heading style="h6" className="text-indigo-700 font-semibold pb-3">
            Team
          </Heading>
          <Heading className="font-semibold pb-5 text-5xl">
            Meet our team{" "}
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            From skilled designers to tech-savvy developers, each member brings
            a unique perspective and expertise to the table.
          </Paragraph>
        </div>
        <div className="grid w-full gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">
          {teamMembers.map((member) => {
            return (
              <div
                key={member.name}
                className="flex flex-col flex-1 items-start mx-auto lg:mx-0"
              >
                <div className="w-full max-h-[296px] pb-6">
                  <Image
                    src={`/profile/${member.image}.jpg`}
                    alt={member.name}
                    height={296}
                    width={311}
                    className="h-full w-full max-w-[350px]"
                  />
                </div>
                <div className="w-full max-w-[350px]">
                  <Heading style="h4">{member.name}</Heading>
                  <Paragraph
                    style="lg"
                    $medium
                    className="!text-indigo-700 pt-1 pb-4"
                  >
                    {member.position}
                  </Paragraph>
                  <Paragraph>{member.description}</Paragraph>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

const teamMembers = [
  {
    image: "profile-thumbnail_12",
    name: "Joe Jackson",
    position: "Founder & CEO",
    description:
      "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
  },
  {
    image: "profile-thumbnail_9",
    name: "Ash Karter",
    position: "Founder & CFO",
    description:
      "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
  },
  {
    image: "profile-thumbnail_10",
    name: "Farias Amed",
    position: "Front End AI Engineer",
    description:
      "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
  },
  {
    image: "profile-thumbnail_11",
    name: "Sarah Haust",
    position: "Dev Ops",
    description:
      "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
  },
];
