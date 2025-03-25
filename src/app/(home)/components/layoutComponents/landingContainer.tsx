import AbstractlyFeatures from "../landingPageComponents/AbstractlyFeatures";
import AbstractlyFeaturesTwo from "../landingPageComponents/AbstractlyFeaturesTwo";
import FAQSection from "../landingPageComponents/FAQSection";
import LandingHeroSection from "../landingPageComponents/LandingHeroSection";
import LogoMarquee from "../landingPageComponents/LogoMarquee";
import Newsletter from "../landingPageComponents/Newsletter";
import Pricing from "../landingPageComponents/Pricing";
import WhyChooseUs from "../landingPageComponents/WhyChooseUs";

const LandingPageContainer = () => {
  return (
    <>
      <LandingHeroSection />
      <LogoMarquee />
      <WhyChooseUs />
      <AbstractlyFeatures />
      <AbstractlyFeaturesTwo />
      <Pricing />
      <FAQSection />
      <Newsletter />
    </>
  );
};

export default LandingPageContainer;
