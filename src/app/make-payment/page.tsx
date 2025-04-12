"use client";

import dynamic from "next/dynamic";

const MakePaymentClient = dynamic(() => import("./MakePaymentClient"), {
  ssr: false,
});

export default function MakePayment() {
  return <MakePaymentClient />;
}
