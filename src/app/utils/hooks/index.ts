import { useMutation } from "@tanstack/react-query";
import useAbstractlyService from "../services";
import { IContact } from "../model";

export const useSendContactForm = () => {
  const { sendContactForm } = useAbstractlyService();

  return useMutation({
    mutationFn: (data: IContact) => sendContactForm(data),
  });
};
