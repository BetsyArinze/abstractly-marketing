import dynamic from "next/dynamic";
import AbstractlyFeatures from "../(home)/components/landingPageComponents/AbstractlyFeatures";
import FAQSection from "../(home)/components/landingPageComponents/FAQSection";
import WhyChooseUs from "../(home)/components/landingPageComponents/WhyChooseUs";
import FeaturesHero from "./components/FeaturesHero";
import { Metadata } from "next";

const PAGE_TITLE = "Features | Abstractly";
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: "Explore the powerful features of Abstractly",
  openGraph: {
    title: PAGE_TITLE,
    description: "Explore the powerful features of Abstractly",
  },
};

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
