import { IContact } from "../model";

const useAbstractlyService = () => {
  const sendContactForm = async (data: IContact) => {
    const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    if (!formspreeUrl) {
      throw new Error("Formspree URL is not set in environment variables.");
    }

    const response = await fetch(formspreeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response;
  };

  return {
    sendContactForm,
  };
};

export default useAbstractlyService;
