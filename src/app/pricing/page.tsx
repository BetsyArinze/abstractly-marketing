import ContactUs from "../(home)/components/landingPageComponents/ContactSection";
import PricingSection from "../(home)/components/landingPageComponents/Pricing";
import WhyChooseUs from "../(home)/components/landingPageComponents/WhyChooseUs";
import Testimonials from "../features/components/Testimonials";
import PricingFAQ from "./components/PricingFAQ";

const Pricing = () => {
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
