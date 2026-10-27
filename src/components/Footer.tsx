import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { contacto, empresa, whatsappUrl } from "../data/site";
import { lineas } from "../data/servicios";

// Pie de página v2 (referencia footer.design): columnas claras, datos de contacto como
// tarjetas tocables en celular y el nombre de la marca a todo el ancho como cierre visual.

const year = new Date().getFullYear();

const empresaLinks = [
  { label: "Proyectos y galería", to: "/proyectos" },
  { label: "Cumplimiento normativo", to: "/cumplimiento" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Blog", to: "/blog" },
  { label: "Preguntas frecuentes", to: "/preguntas-frecuentes" },
  { label: "Contacto", to: "/contacto" },
];

function Icon({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const linkCls = "text-[13.5px] leading-snug text-neutral-300 sm:text-[14px] transition-colors hover:text-white";
const titleCls = "mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-300";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-neutral-300" style={{ background: "linear-gradient(180deg, #082f45 0%, #05202f 100%)" }}>
      <div className="px-5 pt-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-10">
          <div className="col-span-2 max-w-[340px] lg:col-span-1">
            <Link to="/" aria-label="Inicio">
              <img src="/assets/brand/logo-white.png" alt="DINASTEL S.A.S." className="h-9 w-auto" />
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-neutral-400">{empresa.frase}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[12px] font-semibold text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              {contacto.horario}
            </div>
          </div>

          <div>
            <div className={titleCls}>Servicios</div>
            <ul className="flex flex-col gap-2.5">
              {lineas.map((l) => (
                <li key={l.slug}>
                  <Link to={`/servicios#${l.slug}`} className={linkCls}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={titleCls}>Empresa</div>
            <ul className="flex flex-col gap-2.5">
              {empresaLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>{l.label}</Link>
                </li>
              ))}
              <li><a href={contacto.app} className={linkCls}>Iniciar sesión</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <div className={titleCls}>Contacto</div>
            <div className="flex flex-col gap-2.5">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/[0.07]">
                <Icon d="M3 21l1.65-4.95A9 9 0 1 1 8.5 19.5Z" />
                <span>
                  <span className="block text-[11px] uppercase tracking-wide text-neutral-500">WhatsApp</span>
                  <span className="text-[14px] font-semibold text-white">{contacto.telefonoDisplay}</span>
                </span>
              </a>
              <a href={`mailto:${contacto.email}`} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/[0.07]">
                <Icon d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 3-10 6L2 7" />
                <span>
                  <span className="block text-[11px] uppercase tracking-wide text-neutral-500">Correo</span>
                  <span className="text-[14px] font-semibold text-white">{contacto.email}</span>
                </span>
              </a>
              <div className="flex items-start gap-3 px-4 py-2 text-[13px] leading-snug text-neutral-400">
                <span className="mt-0.5"><Icon d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></span>
                <span>{contacto.direccion}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 py-6 text-[13px] text-neutral-500 sm:flex-row sm:items-center">
          <span>© {year} {empresa.nombreLegal} · NIT {empresa.nit}</span>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">Ética, calidad y seguridad en cada proyecto.</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 font-semibold text-neutral-300 hover:text-white"
            >
              Volver arriba
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Marca a todo el ancho — cierre visual */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <motion.div
          initial={{ y: "60%", opacity: 0 }}
          whileInView={{ y: "18%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-black leading-[0.8] tracking-[-0.04em] text-transparent"
          style={{ fontSize: "clamp(4rem, 19vw, 17rem)", WebkitTextStroke: "1px rgba(94,179,218,0.28)", backgroundImage: "linear-gradient(180deg, rgba(94,179,218,0.12), transparent 75%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}
        >
          DINASTEL
        </motion.div>
      </div>
    </footer>
  );
}
