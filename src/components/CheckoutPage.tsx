"use client";

import convertToSubcurrency from "@/app/utils/convertToSubcurrency";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/server/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe?.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://abstractly-nine.vercel.app/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}
      <Button disabled={!stripe || loading} className="w-full mt-3">
        {!loading ? `Pay $${amount}` : "Processing..."}
      </Button>
    </form>
  );
};

export default CheckoutPage;
