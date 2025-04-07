import ContactUs from "../contact/components/ContactSection";
import PricingSection from "../(home)/components/landingPageComponents/Pricing";
import WhyChooseUs from "../(home)/components/landingPageComponents/WhyChooseUs";
import PricingFAQ from "./components/PricingFAQ";
import dynamic from "next/dynamic";

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
