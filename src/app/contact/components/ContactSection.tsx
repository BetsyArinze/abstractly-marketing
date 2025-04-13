"use client";

import { useSendContactForm } from "@/app/utils/hooks";
import { IContact } from "@/app/utils/model";
import FormError from "@/components/formComponents/FormError";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RiBuildingLine, RiMailLine, RiPhoneLine } from "react-icons/ri";

const ContactUs = () => {
  const maxLength = 500;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IContact>();

  const message = watch("message", "");

  const { mutateAsync: contactus } = useSendContactForm();

  const onSubmit = async (data: IContact) => {
    try {
      await contactus(data);
      toast.success("Message sent successfully!");

      setValue("name", "");
      setValue("email", "");
      setValue("message", "");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <section
      className="mx-4 py-12 md:py-14 lg:py-16 bg-light dark:bg-dark"
      aria-labelledby="contact-us"
    >
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
              <div className="flex w-12 h-12 rounded-full shadow-md items-center justify-center dark:bg-light">
                <RiBuildingLine size={24} color="blue" />
              </div>
              <Paragraph className="font-medium">
                123 Maple Street, Springfield, IL, USA
              </Paragraph>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex w-12 h-12 rounded-full shadow-md items-center justify-center dark:bg-light">
                <RiPhoneLine size={24} color="blue" />
              </div>
              <Paragraph className="font-medium">+1 (650) 555-0198</Paragraph>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex w-12 h-12 rounded-full shadow-md items-center justify-center dark:bg-light">
                <RiMailLine size={24} color="blue" />
              </div>
              <Paragraph className="font-medium">
                hello@abstractly.com
              </Paragraph>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[50%]"
          role="form"
          aria-labelledby="contact-form"
        >
          <div className="flex flex-col w-full gap-6 border border-neutral-200 dark:bg-bright dark:text-black p-8 rounded-lg">
            <div className="flex flex-col md:flex-row w-full gap-8">
              <div className="w-full">
                <label htmlFor="name" className="pb-[6px]">
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Your name"
                  aria-labelledby="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-neutral-50 border border-neutral-200 text-neutral-500 dark:text-black text-sm px-[14px] py-[10px] rounded-sm"
                />
                {errors.name?.message && (
                  <FormError error={errors?.name.message as string} />
                )}
              </div>
              <div className="w-full">
                <label htmlFor="name" className="pb-[6px]">
                  Email
                </label>
                <input
                  placeholder="example@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full bg-neutral-50 border border-neutral-200 text-neutral-500 dark:text-black text-sm px-[14px] py-[10px] rounded-sm"
                />
                {errors.email?.message && (
                  <FormError error={errors.email.message as string} />
                )}
              </div>
            </div>
            <div className="w-full flex flex-col pb-4">
              <label htmlFor="name" className="pb-[6px]">
                Message
              </label>

              <textarea
                {...register("message", { required: "Message is required" })}
                // onChange={(e) => setMessage(e.target.value)}
                maxLength={maxLength}
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-neutral-50 border border-neutral-200 text-neutral-500 dark:text-black text-sm px-[14px] py-[10px] rounded-sm"
              />
              <div className="flex w-full">
                {errors.message?.message && (
                  <FormError error={errors.message.message as string} />
                )}
                <span className="w-full text-neutral-500 text-end">
                  {message.length}/{maxLength}
                </span>
              </div>
            </div>
            <Button className="text-base" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
