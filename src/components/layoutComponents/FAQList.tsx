"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { FC, useState } from "react";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

interface FAQItem {
  title: string;
  description: string;
}

interface FAQ {
  faqs: FAQItem[];
}

const FAQList: FC<FAQ> = ({ faqs }) => {
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
            role="button"
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
