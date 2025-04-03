import { IContact } from "../model";

const useAbstractlyService = () => {
  const sendContactForm = async (data: IContact) => {
    // try {
    const response = await fetch("https://formspree.io/f/xrbpavae", {
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
