import React from "react";

interface Props {
  error: any;
}
const FormError: React.FC<Props> = ({ error }) => {
  return <p className="text-red-500 text-sm w-full">{error}</p>;
};

export default FormError;
