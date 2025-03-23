"use client";

import Button from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import classNames from "classnames";
import { useState } from "react";
import { RiCheckFill } from "react-icons/ri";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("standard");

  return (
    <section className="bg-white mx-4 py-24">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-12 md:pb-16 items-center text-center">
          <Heading style="h6" className="text-indigo-700 font-semibold pb-3">
            Pricing Tiers
          </Heading>
          <Heading className="font-semibold pb-5 text-5xl">
            Fit for all your needs
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            Pick the plan that suits you today and step up as your demands grow
            - our flexible options have your journey mapped out.
          </Paragraph>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div
            className={classNames(
              "flex flex-col flex-1 w-full border rounded-lg",
              {
                "border-indigo-600 shadow-md": selectedPlan === "basic",
                "border-neutral-200": selectedPlan !== "basic",
              }
            )}
            onClick={() => setSelectedPlan("basic")}
          >
            <div className="flex flex-col flex-1 p-8 gap-8">
              <div>
                <Heading style="h4" className="font-semibold pb-2">
                  Basic Plan
                </Heading>
                <Paragraph>
                  Access to a curated selection of abstract images
                </Paragraph>
              </div>
              <div>
                <p
                  className={classNames(``, {
                    "text-indigo-700": selectedPlan === "basic",
                    "text-neutral-900": selectedPlan !== "basic",
                  })}
                >
                  <span className="font-semibold text-5xl">$9.99</span>/month
                </p>
                <Paragraph>Billed monthly</Paragraph>
              </div>
              <div className="flex flex-col gap-5 flex-1">
                {basicPlanBenefits.map((benefit) => (
                  <div className="flex gap-3" key={benefit}>
                    <div className="flex w-6 h-6 bg-indigo-50 rounded-full items-center justify-center">
                      <RiCheckFill color="blue" size={24} />
                    </div>
                    <Paragraph>{benefit}</Paragraph>
                  </div>
                ))}
              </div>
              <Button
                variant={selectedPlan === "basic" ? "primary" : "secondary"}
              >
                Buy now
              </Button>
            </div>
          </div>
          <div
            className={classNames(
              "flex flex-col flex-1 w-full rounded-lg border",
              {
                "border-indigo-600 shadow-md": selectedPlan === "standard",
                "border-neutral-200": selectedPlan !== "standard",
              }
            )}
            onClick={() => setSelectedPlan("standard")}
          >
            <div className="bg-indigo-50 py-4 text-center text-indigo-700 font-bold text-xl rounded-t-lg">
              Most Popular
            </div>
            <div className="flex flex-col gap-8 p-8 flex-1">
              <div>
                <Heading style="h4" className="font-semibold pb-2">
                  Standard Plan
                </Heading>
                <Paragraph>
                  Next-level Integrations, priced economically
                </Paragraph>
              </div>
              <div>
                <p
                  className={classNames(``, {
                    "text-indigo-700": selectedPlan === "standard",
                    "text-neutral-900": selectedPlan !== "standard",
                  })}
                >
                  <span className="font-semibold text-5xl">$19.99</span>
                  /month
                </p>
                <Paragraph>Billed monthly</Paragraph>
              </div>
              <div className="flex flex-col gap-5 flex-1">
                {standardPlanBenefits.map((benefit) => (
                  <div className="flex gap-3" key={benefit}>
                    <div className="flex w-6 h-6 bg-indigo-50 rounded-full items-center justify-center">
                      <RiCheckFill color="blue" size={24} />
                    </div>
                    <Paragraph>{benefit}</Paragraph>
                  </div>
                ))}
              </div>
              <Button
                variant={selectedPlan === "standard" ? "primary" : "secondary"}
              >
                Buy now
              </Button>
            </div>
          </div>
          <div
            className={classNames(
              "flex flex-col flex-1 w-full border rounded-lg",
              {
                "border-indigo-600 shadow-md": selectedPlan === "premium",
                "border-neutral-200": selectedPlan !== "premium",
              }
            )}
            onClick={() => setSelectedPlan("premium")}
          >
            <div className="flex flex-col p-8 gap-8 flex-1">
              <div>
                <Heading style="h4" className="font-semibold pb-2">
                  Premium Plan
                </Heading>
                <Paragraph>
                  Experience limitless living for power users
                </Paragraph>
              </div>
              <div>
                <p
                  className={classNames(``, {
                    "text-indigo-700": selectedPlan === "premium",
                    "text-neutral-900": selectedPlan !== "premium",
                  })}
                >
                  <span className="font-semibold text-5xl">$29.99</span>/month
                </p>
                <Paragraph>Billed monthly</Paragraph>
              </div>
              <div className="flex flex-col gap-5 flex-1">
                {premiumPlanBenefits.map((benefit) => (
                  <div className="flex gap-3" key={benefit}>
                    <div className="flex w-6 h-6 bg-indigo-50 rounded-full items-center justify-center">
                      <RiCheckFill color="blue" size={24} />
                    </div>
                    <Paragraph>{benefit}</Paragraph>
                  </div>
                ))}
              </div>
              <Button
                variant={selectedPlan === "premium" ? "primary" : "secondary"}
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const basicPlanBenefits = [
  "Standard quality images",
  "Limited to personal use",
  "Email support",
];

const standardPlanBenefits = [
  "Expanded library with more diverse abstract images",
  "High-resolution images available",
  "Suitable for commercial use",
  "Priority email support",
  "Advanced analytics",
];

const premiumPlanBenefits = [
  "Full access to the entire image library, including exclusive content",
  "Highest quality images, including premium collections",
  "Commercial and resale rights",
  "Dedicated customer support line",
  "24/7 support response time",
  "Advanced analytics and insights",
];
