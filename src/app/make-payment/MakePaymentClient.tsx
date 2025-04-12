"use client";

import convertToSubcurrency from "@/app/utils/convertToSubcurrency";
import CheckoutPage from "@/components/CheckoutPage";
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
    <div className="flex flex-col items-center px-4 pt-[100px] lg:pt-22">
      <div className="flex flex-col w-[60%] h-screen">
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
  );
};

export default MakePaymentClient;
