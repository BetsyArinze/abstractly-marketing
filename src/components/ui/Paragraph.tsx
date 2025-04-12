import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  style?: "sm" | "md" | "lg" | "xl";
  className?: string;
  $bold?: boolean;
  $medium?: boolean;
}

const Paragraph: React.FC<HeadingProps> = ({
  children,
  style = "md",
  $bold,
  $medium,
  className = "",
}) => {
  const baseStyle = "text-neutral-600 dark:text-neutral-300";
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const fontWeight = $bold
    ? "font-bold"
    : $medium
    ? "font-medium"
    : "font-normal";

  return (
    <p
      className={`${baseStyle} ${sizeStyles[style]} ${fontWeight} ${className} `}
    >
      {children}
    </p>
  );
};

export default Paragraph;
