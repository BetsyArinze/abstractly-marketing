"use client";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import classNames from "classnames";
import { useState } from "react";
import { RiCheckFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");
  const [billingPeriod, setBillingPeriod] = useState<string>("monthly");

  const router = useRouter();

  const handleCheckout = async (amount: number) => {
    router.push(`/make-payment?amount=${amount}`);
  };

  return (
    <section className="bg-light dark:bg-dark mx-4 py-12 md:py-14 lg:py-16">
      <div className="flex flex-col items-center px-3 md:px-4 lg:px-24 w-full">
        <div className="flex flex-col pb-10 items-center text-center">
          <Heading
            level="h1"
            style="h6"
            className="text-indigo-700 font-semibold pb-3"
          >
            Pricing Tiers
          </Heading>
          <Heading
            level="h2"
            className="font-semibold pb-5 text-4xl md:text-5xl"
          >
            Fit for all your needs
          </Heading>
          <Paragraph style="xl" className="text-center lg:px-28">
            Pick the plan that suits you today and step up as your demands grow
            - our flexible options have your journey mapped out.
          </Paragraph>
        </div>
        <div className="flex pb-12 md:pb-16 gap-8 items-center">
          <a
            className={classNames(
              `text base py-2 px-[38px] font-medium cursor-pointer dark:text-neutral-300 ${
                billingPeriod === "monthly"
                  ? "border border-neutral-200 rounded text-neutral-900 dark:text-neutral-600 shadow-sm dark:bg-gray-300"
                  : "text-neutral-600 dark:text-neutral-300 "
              }`
            )}
            onClick={() => setBillingPeriod("monthly")}
          >
            Monthly
          </a>
          <a
            className={classNames(
              `text base py-2 px-[38px] font-medium cursor-pointer ${
                billingPeriod === "annually"
                  ? "border border-neutral-200 rounded text-neutral-900 dark:text-neutral-600 shadow-sm dark:bg-gray-300"
                  : "text-neutral-600 dark:text-neutral-300"
              }`
            )}
            onClick={() => setBillingPeriod("annually")}
          >
            Annually
          </a>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {billingPlans.map((billingPlan) => {
            let amountPerMonth = 19.99;
            let benefits: string[] = [];
            const isMonthly = billingPeriod === "monthly";
            let annualTotalAmount = 192;

            if (billingPlan === "Basic") {
              benefits = basicPlanBenefits;
              amountPerMonth = isMonthly
                ? amount.basic.monthly
                : amount.basic.annually;
              annualTotalAmount = Math.ceil(amount.basic.annually) * 12;
            } else if (billingPlan === "Standard") {
              benefits = standardPlanBenefits;
              amountPerMonth = isMonthly
                ? amount.standard.monthly
                : amount.standard.annually;
              annualTotalAmount = Math.ceil(amount.standard.annually) * 12;
            } else {
              benefits = premiumPlanBenefits;
              amountPerMonth = isMonthly
                ? amount.premium.monthly
                : amount.premium.annually;
              annualTotalAmount = Math.ceil(amount.premium.annually) * 12;
            }
            return (
              <div
                className={classNames(
                  "flex flex-col flex-1 w-full border rounded-lg dark:bg-bright",
                  {
                    "border-indigo-600 shadow-md": selectedPlan === billingPlan,
                    "border-neutral-200": selectedPlan !== billingPlan,
                  }
                )}
                key={billingPlan}
                onClick={() => setSelectedPlan(billingPlan)}
              >
                {billingPlan === "Standard" && (
                  <div className="bg-indigo-50 dark:bg-neutral-200 py-4 text-center text-indigo-700 font-bold text-xl rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col flex-1 p-8 gap-8">
                  <div>
                    <Heading
                      level="h3"
                      style="h4"
                      className="font-semibold pb-2 dark:text-gray-900"
                    >
                      {billingPlan} Plan
                    </Heading>
                    <Paragraph className="dark:!text-black">
                      Access to a curated selection of abstract images
                    </Paragraph>
                  </div>
                  <div className="">
                    <p
                      className={classNames(``, {
                        "text-indigo-700": selectedPlan === billingPlan,
                        "text-neutral-900 dark:!text-black":
                          selectedPlan !== billingPlan,
                      })}
                    >
                      <span className="font-semibold text-5xl">
                        ${amountPerMonth}
                      </span>
                      /month
                    </p>
                    <Paragraph className="dark:!text-black">
                      Billed {billingPeriod}{" "}
                      {!isMonthly ? `$(${annualTotalAmount})` : ""}
                    </Paragraph>
                  </div>
                  <div className="flex flex-col gap-5 flex-1">
                    {benefits.map((benefit) => (
                      <div className="flex gap-3" key={benefit}>
                        <div className="flex w-6 h-6 bg-indigo-50 rounded-full items-center justify-center">
                          <RiCheckFill color="blue" size={24} />
                        </div>
                        <Paragraph className="dark:!text-black">
                          {benefit}
                        </Paragraph>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant={
                      selectedPlan === billingPlan ? "primary" : "secondary"
                    }
                    onClick={() => {
                      if (billingPeriod === "monthly") {
                        const amountToPay = amountPerMonth;
                        handleCheckout(amountToPay);
                      } else {
                        const amountToPay = Math.ceil(amountPerMonth * 12);
                        handleCheckout(amountToPay);
                      }
                    }}
                  >
                    Buy now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

const billingPlans = ["Basic", "Standard", "Premium"];

const amount = {
  basic: {
    monthly: 9.99,
    annually: 6.99,
  },
  standard: {
    monthly: 19.99,
    annually: 15.99,
  },
  premium: {
    monthly: 29.99,
    annually: 25.99,
  },
};

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
