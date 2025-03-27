import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const baseStyle =
    "px-[16px] py-[10px] rounded-sm transition-all font-medium text-lg cursor-pointer shadow-md";

  const variantStyles = {
    primary: "bg-indigo-700 hover:bg-indigo-800 text-white",
    secondary: "bg-white text-neutral-900 border border-neutral-200",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
