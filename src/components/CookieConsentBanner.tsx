"use client";

import CookieConsent from "react-cookie-consent";
import Paragraph from "./ui/Paragraph";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Allow cookies"
      declineButtonText="Decline all"
      enableDeclineButton
      cookieName="yourAppCookieConsent"
      style={{
        background: "white",
        padding: "20px",
        alignItems: "center",
      }}
      buttonStyle={{
        backgroundColor: "#4CAF50",
        color: "#FFF",
        fontSize: "14px",
        padding: "10px 20px",
        margin: "0 8px",
      }}
      declineButtonStyle={{
        backgroundColor: "#f44336",
        color: "#FFF",
        fontSize: "14px",
        padding: "10px 20px",
        margin: "0 8px",
      }}
      expires={365}
      onAccept={() => {
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        console.log("Cookies declined");
      }}
    >
      <div className="text-neutral-900 h-fit mb-0">
        <Paragraph $medium className="mb-2 text-neutral-900">
          We use cookies
        </Paragraph>
        <Paragraph className="">
          We use cookies to enhance your browsing experience and improve our
          website&apos;s performance. By continuing to use this site, you
          consent to the use of cookies. To learn more about how we use cookies
          and your options, please read our cookie policy.
        </Paragraph>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;

{
  /* <div className="w-full bg-white">Hi</div> */
}
{
  /* <div className="flex gap-4">
  <button
    style={{
      backgroundColor: "#4CAF50",
      color: "#FFF",
      fontSize: "14px",
      padding: "10px 20px",
      borderRadius: "4px",
    }}
    onClick={() => console.log("Cookies accepted")}
  >
    Accept All
  </button>
  <button
    style={{
      backgroundColor: "#f44336",
      color: "#FFF",
      fontSize: "14px",
      padding: "10px 20px",
      borderRadius: "4px",
    }}
    onClick={() => console.log("Cookies declined")}
  >
    Decline
  </button>
</div> */
}
