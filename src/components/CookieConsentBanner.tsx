"use client";

import CookieConsent from "react-cookie-consent";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonClasses="hidden"
      cookieName="yourAppCookieConsent"
      style={{
        background: "white",
        padding: "20px 0px 0px 0px",
        alignItems: "center",
        border: "1px solid #e5e7eb",
      }}
      expires={365}
      onAccept={() => {
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        console.log("Cookies declined");
      }}
    >
      <div className="text-neutral-900 h-fit mb-6 md:mb-6">
        <Paragraph $medium className="mb-2 text-neutral-900 font-semibold">
          We use cookies
        </Paragraph>
        <Paragraph className="">
          We use cookies to enhance your browsing experience and improve our
          website&apos;s performance. By continuing to use this site, you
          consent to the use of cookies. To learn more about how we use cookies
          and your options, please read our cookie policy.
        </Paragraph>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-2">
        <Button variant="danger">Decline all</Button>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <Button variant="primary">Allow cookies</Button>
          <Button variant="secondary">Manage cookies</Button>
        </div>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
