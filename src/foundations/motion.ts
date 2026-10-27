// Tokens de animacion — duraciones y easings consistentes para todo el sitio.
// Uso: <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={transition.base} />

export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
};

const easing = {
  standard: [0.4, 0, 0.2, 1] as const,
  entrance: [0, 0, 0.2, 1] as const,
  exit: [0.4, 0, 1, 1] as const,
};

export const transition = {
  fast: { duration: duration.fast, ease: easing.standard },
  base: { duration: duration.base, ease: easing.standard },
  slow: { duration: duration.slow, ease: easing.standard },
};

export const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

