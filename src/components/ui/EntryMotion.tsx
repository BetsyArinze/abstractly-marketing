"use client";

import { motion, MotionProps } from "framer-motion";
import { ElementType, ComponentPropsWithoutRef } from "react";

type EntryProps<T extends ElementType> = {
  as?: T;
  from?: "left" | "right" | "bottom" | "top";
  duration?: number;
  displacement?: number;
  amount?: "some" | "all" | number;
} & MotionProps &
  ComponentPropsWithoutRef<T>;

const EntryMotion = <T extends ElementType = "div">({
  from,
  duration = 0.2,
  displacement = from === "top" || from === "right" ? 200 : -200,
  ...rest
}: EntryProps<T>) => {
  const MotionComponent = motion.div;

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const directed =
    from === "top" || from === "bottom"
      ? { y: [displacement, 0], opacity: [0, 1] }
      : { x: [displacement, 0], opacity: [0, 1] };

  return (
    <MotionComponent
      {...rest}
      initial={false}
      whileInView={from ? from : "visible"}
      viewport={{ once: true, amount: "some" }}
      transition={{ ...spring, duration }}
      variants={{
        directed,
        left: { x: [displacement, 0], opacity: [0, 1] },
        right: { x: [displacement, 0], opacity: [0, 1] },
        top: { y: [displacement, 0], opacity: [0, 1] },
        bottom: { y: [displacement, 0], opacity: [0, 1] },
        visible: { opacity: [0, 1], scale: [0, 1] },
        hidden: { opacity: 0 },
      }}
    />
  );
};

export default EntryMotion;
