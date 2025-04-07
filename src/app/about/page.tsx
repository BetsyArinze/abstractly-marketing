import dynamic from "next/dynamic";
import ContactUs from "../contact/components/ContactSection";
import AboutUsHero from "./components/AboutUsHero";
import Statistics from "./components/Statistics";

const About = () => {
  const Team = dynamic(() => import("./components/Team"), {
    loading: () => <p>Loading team ...</p>,
  });
  return (
    <>
      <AboutUsHero />
      <Statistics />
      <Team />
      <ContactUs />
    </>
  );
};

export default About;
