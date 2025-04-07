import dynamic from "next/dynamic";
import AbstractlyFeatures from "../(home)/components/landingPageComponents/AbstractlyFeatures";
import FAQSection from "../(home)/components/landingPageComponents/FAQSection";
import WhyChooseUs from "../(home)/components/landingPageComponents/WhyChooseUs";
import FeaturesHero from "./components/FeaturesHero";

const Features = () => {
  const AbstractlyFeaturesTwo = dynamic(
    () =>
      import(
        "../(home)/components/landingPageComponents/AbstractlyFeaturesTwo"
      ),
    {
      loading: () => <p>Loading features ...</p>,
    }
  );

  const Testimonials = dynamic(() => import("./components/Testimonials"), {
    loading: () => <p>Loading testimonials ...</p>,
  });

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
