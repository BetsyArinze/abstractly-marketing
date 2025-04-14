import { abstractlyPaths } from "@/app/utils/paths";
import FAQList from "@/components/layoutComponents/FAQList";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

const PricingFAQ = () => {
  return (
    <section className="bg-light dark:bg-dark mx-4 py-12 md:py-14 lg:py-16">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-12 md:pb-16 items-center text-center">
          <Heading className="font-semibold pb-5 text-4xl md:text-5xl">
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

export default PricingFAQ;

const faqs = [
  {
    title: "Are there any discounts available for long-term subscriptions?",
    description:
      "Yes! We offer a discount on annual subscriptions. If you choose an annual payment plan, you will receive a discount compared to monthly payments. This is a great way to enjoy all the features of our platform at a reduced cost.",
  },
  {
    title: "Can I change my subscription plan at any time?",
    description:
      "Absolutely! You can upgrade or downgrade your subscription at any time. Changes to your plan will take effect at the start of your next billing cycle.",
  },
  {
    title: "What forms of payment do you accept?",
    description:
      "We accept all major credit cards, including Visa, MasterCard, and American Express. We also accept payments through PayPal for added convenience.",
  },
  {
    title:
      "Do you offer any special pricing for educational institutions or non-profits?",
    description:
      "Yes, we support educational institutions and non-profit organizations by offering special discounted pricing. Please contact us for more details and to see if you qualify.",
  },
  {
    title: "What is your refund policy?",
    description:
      "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days of your subscription, you can cancel your plan and receive a full refund.",
  },
  {
    title: "Are there any additional fees apart from the subscription cost?",
    description:
      "No, there are no hidden fees. The subscription price is all-inclusive, covering full access to our library and all features listed in your chosen plan.",
  },
];
