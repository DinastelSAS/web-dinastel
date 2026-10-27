import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

// Entrada al hacer scroll, con varias "coreografías" (v2.3):
// up (subir), left/right (deslizar), scale (crecer), clip (la imagen se descubre como una cortina).
// Solo anima opacity/transform/clip-path. Con "reducir movimiento" activo, MotionConfig la apaga.
export type RevealVariant = "up" | "left" | "right" | "scale" | "clip";

const ease = [0.22, 1, 0.36, 1] as const;

const variantes: Record<RevealVariant, Variants> = {
  up: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92, y: 16 }, visible: { opacity: 1, scale: 1, y: 0 } },
  clip: {
    hidden: { opacity: 0.4, clipPath: "inset(14% 14% 14% 14% round 24px)" },
    visible: { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 0px)" },
  },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  id,
  variant = "up",
  duration,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
  id?: string;
  variant?: RevealVariant;
  duration?: number;
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variantes[variant]}
      transition={{ duration: duration ?? (variant === "clip" ? 1 : 0.6), ease, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
