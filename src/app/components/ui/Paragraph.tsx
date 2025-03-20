import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Paragraph: React.FC<HeadingProps> = ({
  children,
  size = "md",
  className = "",
}) => {
  const baseStyle = "text-neutral-600";
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <p className={`${baseStyle} ${sizeStyles[size]} ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
