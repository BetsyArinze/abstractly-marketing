import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bg-light dark:bg-dark mx-4 py-12 md:py-14 lg:py-16">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-12 md:pb-16 items-center text-center">
          <Heading style="h6" className="text-indigo-700 font-semibold pb-3">
            Testimonials
          </Heading>
          <Heading className="font-semibold pb-5 text-4xl md:text-5xl">
            Countless users, countless smiles
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            Explore our community&apos;s journey and discover why satisfaction
            defines us.
          </Paragraph>
        </div>
        <div className="flex justify-center text-center w-full">
          <div
            className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full auto-rows-fr"
            role="list"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.handle}
                className="flex flex-col items-start justify-start p-6 w-full gap-4 text-start border border-neutral-200 shadow-md rounded-lg"
                role="listitem"
              >
                <div className="flex gap-[10px] items-center">
                  <div className="flex w-12 h-12 rounded-full">
                    <Image
                      src={`/profile/${testimonial.image}.jpg`}
                      width={48}
                      height={48}
                      alt="profile"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start text-start">
                    <Heading style="h5" className="font-semibold">
                      {testimonial.name}
                    </Heading>
                    <Paragraph style="sm">{testimonial.handle}</Paragraph>
                  </div>
                </div>
                <div>
                  <Paragraph>{testimonial.feedback}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const testimonials = [
  {
    image: "profile-thumbnail",
    name: "Sarah Dole",
    handle: "@sarahdole",
    feedback:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
  {
    image: "profile-thumbnail_1",
    name: "John Appleseed",
    handle: "@johnaseed",
    feedback:
      "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
  },
  {
    image: "profile-thumbnail_2",
    name: "Jean Gray",
    handle: "@jeniic",
    feedback:
      "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
  },
  {
    image: "profile-thumbnail_3",
    name: "Jake Johnson",
    handle: "@jakejohnshon",
    feedback:
      "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
  },
  {
    image: "profile-thumbnail_4",
    name: "Igor Stravinsky",
    handle: "@igorstrav",
    feedback:
      "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
  },
  {
    image: "profile-thumbnail_5",
    name: "Declan Rice",
    handle: "@drice",
    feedback:
      "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
  },
  {
    image: "profile-thumbnail_6",
    name: "Marcus Thompson",
    handle: "@mthompson",
    feedback:
      "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
  },
  {
    image: "profile-thumbnail_7",
    name: "Oliver Neverloved",
    handle: "@olivernever",
    feedback:
      "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
  },
  {
    image: "profile-thumbnail_8",
    name: "Mark Dennis",
    handle: "@marked",
    feedback:
      "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
  },
];
