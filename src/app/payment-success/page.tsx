"use client";

import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const PaymentSuccessContent = () => {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");

  return (
    <main>
      <div className="flex flex-col items-center px-4 h-screen pt-[100px] lg:pt-22">
        <div className="flex flex-col w-[60%] items-center justify-center px-10 py-4 bg-white rounded-md">
          <Heading style="h2">Thank you!</Heading>
          <Paragraph $medium>
            You have successfully subscribed for Abstractly
          </Paragraph>
          <Heading style="h2" className="w-full text-center mt-2">
            ${amount}
          </Heading>
          <Link href="/" className="w-full">
            <Paragraph
              $medium
              className="w-full bg-indigo-700 py-3 text-white text-center mt-9"
            >
              Go to home
            </Paragraph>
          </Link>
        </div>
      </div>
    </main>
  );
};

const PaymentSuccess = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PaymentSuccessContent />
    </Suspense>
  );
};

export default PaymentSuccess;
