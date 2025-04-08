import ContactUs from "./components/ContactSection";
import FAQSection from "../(home)/components/landingPageComponents/FAQSection";
import { Metadata } from "next";

const PAGE_TITLE = "Contact us | Abstractly";
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Contact us whenever as we strive to give you the best at Abstractly",
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Contact us whenever as we strive to give you the best at Abstractly",
  },
};

const Contact = () => {
  return (
    <div className="pt-[100px] lg:pt-19">
      <ContactUs />
      <FAQSection />
    </div>
  );
};

export default Contact;
