import { motion } from "framer-motion";
import { marqueeImages } from "../data/site";
import { slideUp, transition } from "../foundations/motion";

export function Movimientos() {
  const loop = [...marqueeImages, ...marqueeImages];

  return (
    <section id="movimientos" className="relative overflow-hidden bg-[#3e4454] px-5 py-28 sm:px-10 lg:px-20">
      <div className="relative z-[1] mx-auto max-w-[900px]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          variants={slideUp} transition={transition.base} className="max-w-[640px]"
        >
          <div className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-primary-300">MOVIMIENTOS</div>
          <h2 className="mb-4 text-[1.9rem] font-extrabold tracking-tight text-white sm:text-[2.75rem]">
            Nuestro trabajo en movimiento.
          </h2>
          <p className="text-[17px] leading-relaxed text-neutral-300">
            Proyectos reales, en campo: instalaciones electricas y solares ejecutadas por nuestro
            equipo.
          </p>
        </motion.div>

        <div
          className="mt-14 overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)" }}
        >
          <div className="animate-marquee flex w-max gap-5">
            {loop.map((src, i) => (
              <div key={i} className="h-[180px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                <img src={src} alt="Proyecto Dinastel" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
