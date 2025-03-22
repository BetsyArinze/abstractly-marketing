import AbstractlyFeatures from "../landingPageComponents/AbstractlyFeatures";
import AbstractlyFeaturesTwo from "../landingPageComponents/AbstractlyFeaturesTwo";
import LandingHeroSection from "../landingPageComponents/LandingHeroSection";
import LogoMarquee from "../landingPageComponents/LogoMarquee";
import WhyChooseUs from "../landingPageComponents/WhyChooseUs";

const LandingPageContainer = () => {
  return (
    <>
      <LandingHeroSection />
      <LogoMarquee />
      <WhyChooseUs />
      <AbstractlyFeatures />
      <AbstractlyFeaturesTwo />
    </>
  );
};

export default LandingPageContainer;
