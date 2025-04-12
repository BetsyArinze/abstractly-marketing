"use client";

import convertToSubcurrency from "@/app/utils/convertToSubcurrency";
import CheckoutPage from "@/components/CheckoutPage";
import Heading from "@/components/ui/Heading";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
const MakePaymentClient = () => {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount"));

  return (
    <div className="flex flex-col items-center px-4 py-4 pt-[100px] lg:pt-22 min-h-screen">
      <div className="flex flex-col bg-white h-fit mt-4 rounded-md w-[80%] md:w-[70%] p-4">
        <div className="flex flex-col bg-indigo-700 px-4 py-6 text-center">
          <Heading style="h3" className="text-white">
            Abstractly
          </Heading>
        </div>
        <div className="flex flex-col h-full">
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(amount),
              currency: "usd",
            }}
          >
            <CheckoutPage amount={amount} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default MakePaymentClient;
