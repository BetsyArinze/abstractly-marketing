"use client";

import CookieConsent from "react-cookie-consent";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { Modal, Switch } from "antd";

const CookieConsentBanner = () => {
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getCookie = (name: string) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? match[2] : null;
  };

  const setCookiesConsent = (marketing: boolean, analytics: boolean) => {
    const expirationTime = 365 * 24 * 60 * 60;

    document.cookie = `essential=${true}; max-age=${expirationTime}; path=/`;
    document.cookie = `marketing=${marketing}; max-age=${expirationTime}; path=/`;
    document.cookie = `analytics=${analytics}; max-age=${expirationTime}; path=/`;

    loadScripts();
    setShowManageModal(false);
    setShowBanner(false);
  };

  const loadScripts = () => {
    if (getCookie("essential") === "true") {
      console.log("Load essential scripts");
    }
    if (getCookie("marketing") === "true") {
      console.log("Load marketing scripts");
    }
    if (getCookie("analytics") === "true") {
      console.log("Load analytics scripts");
    }
  };

  useEffect(() => {
    const previousEssentialConsent = getCookie("essential");
    const previousMarketingConsent = getCookie("marketing");
    const previousAnalyticsConsent = getCookie("analytics");

    if (
      previousEssentialConsent &&
      previousMarketingConsent &&
      previousAnalyticsConsent
    ) {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    // Check for dark mode
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    if (darkModeMediaQuery.matches) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    console.log("tyrye", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      {showBanner && (
        <CookieConsent
          location="bottom"
          buttonClasses="hidden"
          cookieName="yourAppCookieConsent"
          style={{
            background: isDarkMode ? " #d4d4d4 " : "white",
            padding: "20px 0px 0px 0px",
            alignItems: "center",
            border: isDarkMode ? "" : "1px solid #e5e7eb",
          }}
          expires={365}
          onAccept={() => {
            setCookiesConsent(true, true);
          }}
          onDecline={() => {
            setCookiesConsent(false, false);
          }}
        >
          <div className="text-neutral-900 dark:!text-dull h-fit mb-6 md:mb-6">
            <Paragraph
              $medium
              className="mb-2 text-neutral-900 dark:!text-dull font-semibold"
            >
              We use cookies
            </Paragraph>
            <Paragraph className="dark:!text-dull">
              We use cookies to enhance your browsing experience and improve our
              website&apos;s performance. By continuing to use this site, you
              consent to the use of cookies. To learn more about how we use
              cookies and your options, please read our cookie policy.
            </Paragraph>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-2">
            <Button
              variant="danger"
              onClick={() => setCookiesConsent(false, false)}
            >
              Decline all
            </Button>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <Button
                variant="primary"
                onClick={() => setCookiesConsent(true, true)}
              >
                Allow cookies
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setShowManageModal(true);
                  console.log("manage clicked");
                }}
              >
                Manage cookies
              </Button>
            </div>
          </div>
        </CookieConsent>
      )}

      {showManageModal && (
        <Modal
          open={showManageModal}
          centered
          width={500}
          closeIcon={false}
          footer={null}
          style={{ padding: "2rem 0 2rem" }}
          className="[&_.ant-modal-content]:p-0"
        >
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between">
                <Paragraph className="font-semibold text-neutral-900">
                  Essentials
                </Paragraph>
                <Switch checked disabled />
              </div>
              <Paragraph style="sm">
                These cookies are essential for the proper functioning of our
                services and cannot be disabled.
              </Paragraph>
            </div>
            <div>
              <div className="flex justify-between">
                <Paragraph className="font-semibold text-neutral-900">
                  Analytics
                </Paragraph>
                <Switch
                  checked={analyticsChecked}
                  onChange={(checked) => setAnalyticsChecked(checked)}
                />
              </div>
              <Paragraph style="sm">
                These cookies collect information about how you use our services
                or potential errors you encounter. Based on this information we
                are able to improve your experience and react to any issues.
              </Paragraph>
            </div>
            <div>
              <div className="flex justify-between">
                <Paragraph className="font-semibold text-neutral-900">
                  Marketing
                </Paragraph>
                <Switch
                  checked={marketingChecked}
                  onChange={(checked) => setMarketingChecked(checked)}
                />
              </div>
              <Paragraph style="sm">
                These cookies allow us to show you advertisements relevant to
                you through our advertising partners.
              </Paragraph>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row w-full gap-2">
                <Button
                  variant="primary"
                  onClick={() => setCookiesConsent(true, true)}
                  className="w-full"
                >
                  Accept all
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setCookiesConsent(marketingChecked, analyticsChecked);
                  }}
                  className="w-full"
                >
                  Save
                </Button>
              </div>
              <Button
                variant="danger"
                onClick={() => setCookiesConsent(false, false)}
              >
                Decline all
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CookieConsentBanner;
