import React, { JSX } from "react";

interface HeadingProps {
  children: React.ReactNode;
  style?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  style = "h1",
  className = "",
}) => {
  const Tag = style as keyof JSX.IntrinsicElements;
  const baseStyles = "font-bold text-gray-900";

  const sizeStyles = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
  };

  return (
    <Tag className={`${baseStyles} ${sizeStyles[style]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
