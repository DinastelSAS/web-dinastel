import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

// Encabezado de sección. El kicker es opcional a propósito: se usa como acento puntual,
// no como etiqueta sobre cada bloque.
export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light"; // dark = texto oscuro sobre claro; light = texto claro sobre oscuro
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <Reveal className={`${align === "center" ? "mx-auto max-w-[680px] text-center" : "max-w-[680px]"} ${className}`}>
      {kicker && (
        <div className={`mb-3 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] ${align === "center" ? "justify-center" : ""} ${isLight ? "text-accent-300" : "text-primary-600"}`}>
          <motion.span
            aria-hidden="true"
            className="h-[2px] rounded-full bg-current"
            initial={{ width: 0 }}
            whileInView={{ width: 28 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
          {kicker}
        </div>
      )}
      <h2 className={`text-[1.9rem] font-extrabold leading-[1.1] tracking-tight sm:text-[2.6rem] ${isLight ? "text-white" : "text-neutral-900"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[17px] leading-relaxed ${isLight ? "text-neutral-300" : "text-neutral-600"}`}>{intro}</p>
      )}
    </Reveal>
  );
}
