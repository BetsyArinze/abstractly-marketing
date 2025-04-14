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
    "px-[16px] h-full rounded-sm transition-all font-medium text-lg cursor-pointer shadow-md min-h-[48px]";

  const variantStyles = {
    primary:
      "bg-indigo-700 hover:bg-indigo-800 text-white dark:bg-indigo-900 dark:hover:bg-indigo-950",
    secondary:
      "bg-white text-neutral-900 border border-neutral-200 dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:bg-gray-600",
    danger:
      "bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600",
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
