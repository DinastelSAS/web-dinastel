import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { contacto } from "../data/site";
import { slideUp, transition } from "../foundations/motion";

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3.5 py-3 font-sans text-[15px] text-neutral-900 outline-none transition-colors focus:border-primary-500";

export function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-[#3e4454] px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={slideUp} transition={transition.base}
        className="relative z-[1] mx-auto max-w-[900px]"
      >
        <div className="mx-auto mb-7 max-w-[640px] text-center">
          <div className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-primary-300">CONTACTO</div>
          <h2 className="mb-4 text-[1.9rem] font-extrabold tracking-tight text-white sm:text-[2.75rem]">
            Hablemos de su próximo proyecto.
          </h2>
          <p className="text-[17px] leading-relaxed text-neutral-300">
            Cuéntenos los requerimientos de su proyecto y le presentaremos una propuesta técnica
            y comercial a la medida.
          </p>
        </div>

        <div className="mb-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] font-medium text-neutral-200">
          <a href={`mailto:${contacto.email}`} className="flex items-center gap-2 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16v16H4z" opacity="0" /><path d="M22 6 12 13 2 6" /><path d="M2 6h20v12H2z" />
            </svg>
            {contacto.email}
          </a>
          <a href={`https://wa.me/57${contacto.telefono}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.65-4.95A9 9 0 1 1 8.5 19.5Z" />
            </svg>
            {contacto.telefonoDisplay}
          </a>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center shadow-card">
            <div className="mb-2.5 text-xl font-bold text-neutral-900">¡Gracias!</div>
            <p className="text-[15px] text-neutral-500">Recibimos su solicitud. Le contactaremos en menos de 24 horas.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-card sm:p-12">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-neutral-700">Nombre</label>
                <input type="text" required placeholder="Su nombre" className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-neutral-700">Empresa</label>
                <input type="text" placeholder="Nombre de su empresa" className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-neutral-700">Email</label>
                <input type="email" required placeholder="tu@empresa.com" className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-neutral-700">Teléfono</label>
                <input type="tel" placeholder="+57 300 000 0000" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-[13px] font-semibold text-neutral-700">Tipo de proyecto</label>
              <select className={inputClass}>
                <option value="electrico">Eléctrico</option>
                <option value="solar">Solar</option>
                <option value="consultoria">Consultoría</option>
                <option value="integral">Proyecto integral</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-[13px] font-semibold text-neutral-700">Mensaje</label>
              <textarea rows={4} placeholder="Describa brevemente su proyecto" className={`${inputClass} resize-y`} />
            </div>
            <button
              type="submit"
              className="mt-2 self-start rounded-full bg-primary-600 px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-primary-700"
            >
              Enviar solicitud
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
