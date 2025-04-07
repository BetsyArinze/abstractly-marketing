import AbstractlyFeatures from "../landingPageComponents/AbstractlyFeatures";
import ContactUs from "../../../contact/components/ContactSection";
import FAQSection from "../landingPageComponents/FAQSection";
import LandingHeroSection from "../landingPageComponents/LandingHeroSection";
import LogoMarquee from "../landingPageComponents/LogoMarquee";
import Newsletter from "../landingPageComponents/Newsletter";
import PricingSection from "../landingPageComponents/Pricing";
import WhyChooseUs from "../landingPageComponents/WhyChooseUs";
import dynamic from "next/dynamic";

const LandingPageContainer = () => {
  const AbstractlyFeaturesTwo = dynamic(
    () => import("../landingPageComponents/AbstractlyFeaturesTwo"),
    {
      loading: () => <p>Loading features ...</p>,
    }
  );
  return (
    <>
      <LandingHeroSection />
      <LogoMarquee />
      <WhyChooseUs />
      <AbstractlyFeatures />
      <AbstractlyFeaturesTwo />
      <PricingSection />
      <FAQSection />
      <Newsletter />
      <ContactUs />
    </>
  );
};

export default LandingPageContainer;
