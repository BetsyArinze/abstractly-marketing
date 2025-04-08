import ContactUs from "../contact/components/ContactSection";
import PricingSection from "../(home)/components/landingPageComponents/Pricing";
import WhyChooseUs from "../(home)/components/landingPageComponents/WhyChooseUs";
import PricingFAQ from "./components/PricingFAQ";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const PAGE_TITLE = "Pricing Plans | Abstractly";
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Flexible and affordable pricing plans designed to meet your specific needs",
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Flexible and affordable pricing plans designed to meet your specific needs",
  },
};

const Pricing = () => {
  const Testimonials = dynamic(
    () => import("../features/components/Testimonials"),
    {
      loading: () => <p>Loading testimonials ...</p>,
    }
  );
  return (
    <div className="pt-[100px] lg:pt-19">
      <PricingSection />
      <PricingFAQ />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Pricing;
