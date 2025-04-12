"use client";

import Button from "@/components/ui/Button";
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
        <div className="flex flex-col bg-white h-fit mt-4 rounded-md w-[80%] md:w-[50%] p-4 text-center">
          <div className="flex flex-col bg-indigo-700 px-4 py-6 text-center">
            <Heading style="h3" className="text-white">
              Abstractly
            </Heading>
          </div>
          <div className="flex flex-col py-4">
            <Heading style="h2">Thank you!</Heading>
            <Paragraph $medium>
              You have successfully subscribed for Abstractly
            </Paragraph>
            <Heading style="h2" className="w-full text-center mt-2">
              ${amount}
            </Heading>
            <Link href="/" className="w-full">
              <Button className="mt-4"> Go to home</Button>
            </Link>
          </div>
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
