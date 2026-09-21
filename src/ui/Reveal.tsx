import { ReactNode } from "react";
import { motion } from "framer-motion";
import { slideUp, transition } from "../foundations/motion";

// Un único momento de entrada, reutilizable. Aparece desde su estado visible, sin exagerar.
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  id,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
  id?: string;
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={slideUp}
      transition={{ ...transition.base, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
