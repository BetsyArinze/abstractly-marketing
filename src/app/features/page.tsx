import AbstractlyFeatures from "../(home)/components/landingPageComponents/AbstractlyFeatures";
import AbstractlyFeaturesTwo from "../(home)/components/landingPageComponents/AbstractlyFeaturesTwo";
import FAQSection from "../(home)/components/landingPageComponents/FAQSection";
import WhyChooseUs from "../(home)/components/landingPageComponents/WhyChooseUs";
import FeaturesHero from "./components/FeaturesHero";
import Testimonials from "./components/Testimonials";

const Features = () => {
  return (
    <>
      <FeaturesHero />
      <WhyChooseUs />
      <AbstractlyFeatures />
      <AbstractlyFeaturesTwo />
      <Testimonials />
      <FAQSection />
    </>
  );
};

export default Features;
