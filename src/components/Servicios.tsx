import { motion } from "framer-motion";
import { lineas, omChips } from "../data/site";
import { slideUp, transition } from "../foundations/motion";

export function Servicios() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-neutral-50 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="relative z-[1] mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUp}
          transition={transition.base}
          className="max-w-[640px]"
        >
          <div className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-primary-600">SERVICIOS</div>
          <h2 className="mb-4 text-[1.9rem] font-extrabold tracking-tight text-neutral-900 sm:text-[2.75rem]">
            Cuatro líneas de negocio, un mismo equipo técnico.
          </h2>
          <p className="text-[17px] leading-relaxed text-neutral-600">
            Ingeniería eléctrica y de redes para proyectos B2B, y sistemas solares llave en mano
            para hogares y empresas — con operación y mantenimiento transversal a ambas líneas.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2">
          {lineas.map((linea, i) => (
            <motion.div
              key={linea.tag}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              transition={{ ...transition.base, delay: i * 0.12 }}
              className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center sm:min-h-[560px]"
              style={{ backgroundImage: `url(${linea.img})` }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.62) 42%, rgba(15,23,42,0.12) 75%)" }}
              />
              <div className="relative z-[1] flex flex-col gap-3.5 p-8">
                <div className="text-xs font-bold tracking-[0.12em] text-accent-400">{linea.tag}</div>
                <h3 className="text-[23px] font-extrabold leading-tight text-white">{linea.title}</h3>
                <p className="text-sm leading-snug text-neutral-200">{linea.summary}</p>
                <div className="mt-1.5 flex flex-col gap-2">
                  {linea.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2.5 text-sm leading-snug text-neutral-200">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e96c7" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={slideUp}
          transition={{ ...transition.base, delay: 0.3 }}
          className="relative z-[1] mx-auto mt-6 max-w-[1180px] rounded-2xl border border-neutral-200 bg-white p-7 shadow-card sm:px-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <h3 className="mb-1.5 text-xl font-extrabold text-neutral-900">Una solución para alinear su operación</h3>
              <p className="max-w-[420px] text-sm leading-snug text-neutral-500">
                Operación y Mantenimiento — preventivo, correctivo y monitoreo remoto, para todas
                nuestras líneas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {omChips.map((chip) => (
                <div key={chip} className="rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-[13px] font-semibold text-primary-700">
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
