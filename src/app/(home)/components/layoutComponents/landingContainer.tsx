import AbstractlyFeatures from "../landingPageComponents/AbstractlyFeatures";
import AbstractlyFeaturesTwo from "../landingPageComponents/AbstractlyFeaturesTwo";
import ContactUs from "../landingPageComponents/ContactSection";
import FAQSection from "../landingPageComponents/FAQSection";
import LandingHeroSection from "../landingPageComponents/LandingHeroSection";
import LogoMarquee from "../landingPageComponents/LogoMarquee";
import Newsletter from "../landingPageComponents/Newsletter";
import PricingSection from "../landingPageComponents/Pricing";
import WhyChooseUs from "../landingPageComponents/WhyChooseUs";

const LandingPageContainer = () => {
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
