import EntryMotion from "@/components/ui/EntryMotion";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import {
  RiBrushLine,
  RiCopyrightLine,
  RiDownload2Line,
  RiRefreshLine,
  RiRefund2Fill,
  RiTeamLine,
} from "react-icons/ri";

const WhyChooseUs = () => {
  return (
    <section className="bg-light dark:bg-dark mx-4 py-12 md:py-14 lg:py-16">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24">
        <EntryMotion
          from="top"
          className="flex flex-col pb-12 md:pb-16 items-center text-center"
        >
          <Heading
            level="h1"
            style="h6"
            className="text-indigo-700 font-semibold pb-3"
          >
            Premium abstract images
          </Heading>
          <Heading
            level="h2"
            style="h1"
            className="font-semibold pb-5 text-4xl md:text-5xl"
          >
            Easy access to top quality images
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            In a world where storytelling constantly evolves, we lead with
            groundbreaking images designed for your presentation excellence.
          </Paragraph>
        </EntryMotion>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center text-center gap-8"
          role="list"
        >
          {reasons.map((reason) => (
            <EntryMotion
              from="bottom"
              key={reason.title}
              role="listitem"
              className="flex flex-col items-center lg:pb-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md dark:bg-light">
                <reason.icon size={24} color="blue" />
              </div>
              <Heading
                level="h3"
                style="h5"
                className="font-semibold pb-2 pt-5 "
              >
                {reason.title}
              </Heading>
              <Paragraph>{reason.description}</Paragraph>
            </EntryMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

const reasons = [
  {
    icon: RiDownload2Line,
    title: "Infinite Download",
    description:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    icon: RiBrushLine,
    title: "Purely Handcrafted",
    description:
      " No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
  },
  {
    icon: RiCopyrightLine,
    title: "All Are Under licensed",
    description:
      "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
  },
  {
    icon: RiRefund2Fill,
    title: "Cancel Anytime",
    description:
      "Subscribe at your own pace, and cancel when you feel it's enough.",
  },
  {
    icon: RiTeamLine,
    title: "Empowering For Team",
    description:
      "We support multiple seats at once, requiring only a single payment.",
  },
  {
    icon: RiRefreshLine,
    title: "No Limitations",
    description:
      "Use as many as you want, from Dribbble presentations to PowerPoint presentations.",
  },
];
