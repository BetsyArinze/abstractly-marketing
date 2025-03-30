import { abstractlyPaths } from "@/app/utils/paths";
import FAQList from "@/components/layoutComponents/FAQList";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

const FAQSection = () => {
  return (
    <section className="bg-white mx-4 py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-12 md:pb-16 items-center text-center">
          <Heading className="font-semibold pb-5 text-5xl">
            Frequently asked questions
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            Choose any questions you need
          </Paragraph>
        </div>
        <FAQList faqs={faqs} />
        <div className="flex flex-col md:flex-row w-full p-4 md:p-6 justify-between items-center rounded-lg border border-neutral-200 shadow-md">
          <div className="flex flex-col pb-4">
            <Paragraph style="xl" className="font-semibold text-neutral-900">
              Can’t find the answer you’re looking for?
            </Paragraph>
            <Paragraph>
              Reach out to our{" "}
              <span className="text-indigo-700">customer support</span> team.
            </Paragraph>
          </div>
          <Link href={abstractlyPaths.contact.path}>
            <Button
              variant="primary"
              className="h-12 w-full md:w-fit min-w-[138px]"
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

const faqs = [
  {
    title: "What types of images are available on your platform?",
    description:
      "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
  },
  {
    title: "How can I access and download images from your platform?",
    description:
      "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
  },
  {
    title: "Do you offer free images, or is there a subscription required?",
    description:
      "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
  },
  {
    title: "What payment methods do you accept for subscriptions?",
    description:
      "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
  },
  {
    title: "Can I cancel or modify my subscription at any time?",
    description:
      "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
  },
  {
    title: "How frequently do you update your image collection?",
    description:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];
