import { motion } from "framer-motion";
import { nosotrosImg } from "../data/site";
import { slideUp, transition } from "../foundations/motion";

export function Nosotros() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-neutral-50 px-5 py-28 sm:px-10 lg:px-20">
      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          variants={slideUp} transition={transition.base}
        >
          <div className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-primary-600">SOBRE NOSOTROS</div>
          <h2 className="mb-4 text-[1.9rem] font-extrabold tracking-tight text-neutral-900 sm:text-[2.75rem]">
            Ingenieria con vision de negocio.
          </h2>
          <p className="text-[17px] leading-[1.65] text-neutral-600">
            Nacimos para resolver un problema concreto: las empresas necesitan energia confiable
            para crecer, no mas proveedores que coordinar. Integramos ingenieria electrica, solar
            y consultoria en un solo equipo tecnico, comprometido con el crecimiento sostenido de
            su operacion y no solo con el proyecto de hoy.
          </p>
        </motion.div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={slideUp} transition={{ ...transition.base, delay: 0.15 }}
          className="aspect-[4/3] w-full overflow-hidden rounded-[20px]"
        >
          <img src={nosotrosImg} alt="Equipo tecnico DINASTEL en obra" className="h-full w-full object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
}
