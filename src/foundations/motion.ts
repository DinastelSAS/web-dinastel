// Tokens de animacion — duraciones y easings consistentes para todo el sitio.
// Uso: <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={transition.base} />

export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
};

export const easing = {
  standard: [0.4, 0, 0.2, 1] as const,
  entrance: [0, 0, 0.2, 1] as const,
  exit: [0.4, 0, 1, 1] as const,
};

export const transition = {
  fast: { duration: duration.fast, ease: easing.standard },
  base: { duration: duration.base, ease: easing.standard },
  slow: { duration: duration.slow, ease: easing.standard },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = (staggerChildren = 0.12) => ({
  hidden: {},
  visible: { transition: { staggerChildren } },
});
