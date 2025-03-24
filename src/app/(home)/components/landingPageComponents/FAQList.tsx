"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

const FAQList = () => {
  const [open, setOpen] = useState(-1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? -1 : value);
  };
  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordion
          open={open === index}
          key={index}
          placeholder={undefined}
          onChange={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <AccordionHeader
            color="blue"
            className="bg-white text-lg font-medium text-neutral-900 flex items-center justify-between text-start cursor-pointer shadow-none border-none"
            onClick={() => handleOpen(index)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {faq.title}
            <span className="ml-auto pl-4">
              {open === index ? (
                <RiIndeterminateCircleLine size={24} color="#A3A3A3" />
              ) : (
                <RiAddCircleLine size={24} color="#A3A3A3" />
              )}
            </span>
          </AccordionHeader>
          <AccordionBody className="pr-10 text-neutral-600 pt-0">
            {faq.description}
          </AccordionBody>
          <div
            className={`${
              index === faqs.length - 1
                ? "border-none"
                : "border-b border-neutral-300"
            }`}
          ></div>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQList;

const faqs = [
  {
    title: "What types of images are available on your platform?",
    description:
      "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
  },
  {
    title: "How can I access and download images from your platform?",
    description:
      "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
  },
  {
    title: "Do you offer free images, or is there a subscription required?",
    description:
      "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
  },
  {
    title: "What payment methods do you accept for subscriptions?",
    description:
      "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
  },
  {
    title: "Can I cancel or modify my subscription at any time?",
    description:
      "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
  },
  {
    title: "How frequently do you update your image collection?",
    description:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];
