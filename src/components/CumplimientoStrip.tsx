import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { Button, ArrowRight } from "../ui/Button";
import { normas, promesaCumplimiento } from "../data/cumplimiento";

export function CumplimientoStrip() {
  return (
    <section className="relative overflow-hidden px-5 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #082f45 0%, #0d4f73 55%, #0a3e5b 100%)" }} aria-hidden="true" />
      <Container className="relative z-[1] grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-accent-300">El diferenciador</div>
          <h2 className="text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[2.5rem]">
            {promesaCumplimiento.title}
          </h2>
          <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-neutral-200">
            {promesaCumplimiento.desc}
          </p>
          <div className="mt-7">
            <Button to="/cumplimiento" variant="light" size="lg">
              Ver cómo garantizamos el cumplimiento <ArrowRight />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {normas.slice(0, 6).map((n, i) => (
              <motion.div
                key={n.codigo}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={`${i >= 4 ? "hidden sm:block " : ""}rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-accent-300/50 hover:bg-white/10`}
              >
                <div className="text-[15px] font-extrabold text-white">{n.codigo}</div>
                <div className="mt-1 text-[12px] leading-snug text-neutral-300">{n.nombre}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
