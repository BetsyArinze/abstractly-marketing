import AbstractlyFeatures from "../(home)/components/landingPageComponents/AbstractlyFeatures";
import AbstractlyFeaturesTwo from "../(home)/components/landingPageComponents/AbstractlyFeaturesTwo";
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
    </>
  );
};

export default Features;
