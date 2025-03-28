import ContactUs from "../(home)/components/landingPageComponents/ContactSection";
import PricingSection from "../(home)/components/landingPageComponents/Pricing";
import WhyChooseUs from "../(home)/components/landingPageComponents/WhyChooseUs";
import Testimonials from "../features/components/Testimonials";
import PricingFAQ from "./components/PricingFAQ";

const Pricing = () => {
  return (
    <>
      <PricingSection />
      <PricingFAQ />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Pricing;
