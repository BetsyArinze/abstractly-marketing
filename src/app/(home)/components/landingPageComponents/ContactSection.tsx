"use client";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { useState } from "react";
import { RiBuildingLine, RiMailLine, RiPhoneLine } from "react-icons/ri";

const Contact = () => {
  const [message, setMessage] = useState("");
  const maxLength = 500;
  return (
    <section className="mx-4 py-12 md:py-16 lg:py-24 bg-white">
      <div className="flex flex-col lg:flex-row  px-3 md:px-4 lg:px-24 justify-center items-center gap-16 lg:gap-8 w-full">
        <div className="flex flex-col w-full lg:w-[50%] gap-12">
          <div className="flex flex-col">
            <Heading className="font-semibold text-5xl pb-4">
              Talk to our team
            </Heading>
            <Paragraph style="lg">
              We&apos;re committed to delivering the support you require to make
              your experience as smooth as possible.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex w-12 h-12 rounded-full shadow-md items-center justify-center">
                <RiBuildingLine size={24} color="blue" />
              </div>
              <Paragraph className="font-medium">
                123 Maple Street, Springfield, IL, USA
              </Paragraph>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex w-12 h-12 rounded-full shadow-md items-center justify-center">
                <RiPhoneLine size={24} color="blue" />
              </div>
              <Paragraph className="font-medium">+1 (650) 555-0198</Paragraph>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex w-12 h-12 rounded-full shadow-md items-center justify-center">
                <RiMailLine size={24} color="blue" />
              </div>
              <Paragraph className="font-medium">
                hello@abstractly.com
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-6 lg:w-[50%] border border-neutral-200 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row w-full gap-8">
            <div className="w-full">
              <label htmlFor="name" className="pb-[6px]">
                Name
              </label>
              <input
                placeholder="Your name"
                className="w-full bg-neutral-50 border border-neutral-200 text-neutral-500 text-sm px-[14px] py-[10px] rounded-sm"
              ></input>
            </div>
            <div className="w-full">
              <label htmlFor="name" className="pb-[6px]">
                Email
              </label>
              <input
                placeholder="example@example.com"
                className="w-full bg-neutral-50 border border-neutral-200 text-neutral-500 text-sm px-[14px] py-[10px] rounded-sm"
              ></input>
            </div>
          </div>
          <div className="w-full flex flex-col pb-4">
            <label htmlFor="name" className="pb-[6px]">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={maxLength}
              rows={4}
              placeholder="Write your message..."
              className="w-full bg-neutral-50 border border-neutral-200 text-neutral-500 text-sm px-[14px] py-[10px] rounded-sm"
            ></textarea>
            <span className="w-full text-neutral-500 text-end">
              {message.length}/{maxLength}
            </span>
          </div>
          <Button className="text-base">Submit</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
