import dynamic from "next/dynamic";
import ContactUs from "../contact/components/ContactSection";
import AboutUsHero from "./components/AboutUsHero";
import Statistics from "./components/Statistics";
import { Metadata } from "next";

const PAGE_TITLE = "About us | Abstractly";
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: "Know more about us at Abstractly",
  openGraph: {
    title: PAGE_TITLE,
    description: "Know more about us at Abstractly",
  },
};

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
