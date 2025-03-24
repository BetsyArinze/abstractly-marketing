import Button from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import FAQList from "./FAQList";

const FAQSection = () => {
  return (
    <section className="bg-white mx-4 py-24">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-12 md:pb-16 items-center text-center">
          <Heading className="font-semibold pb-5 text-5xl">
            Frequently asked questions
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            Choose any questions you need
          </Paragraph>
        </div>
        <FAQList />
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
          <Button
            variant="primary"
            className="h-12 w-full md:w-fit min-w-[138px]"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
