import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { contacto } from "../data/site";

// Sección "para quién" (referencia unsection): los dos públicos reales de Dinastel, cada uno
// con lo que recibe y su propio camino de contacto.
const publicos = [
  {
    kicker: "Hogares y empresas",
    title: "Quiero bajar la factura o tener respaldo",
    img: "/assets/obra/solar-residencial-aereo-04-lg.webp",
    items: [
      "Sistema solar on-grid, híbrido o aislado",
      "Baterías de respaldo ante cortes",
      "Cargador para vehículo eléctrico",
      "Legalización ante EMCALI / CELSIA incluida",
    ],
    cta: { label: "Cotizar mi proyecto", to: "/contacto" },
    dark: false,
  },
  {
    kicker: "Firmas integradoras y constructoras",
    title: "Necesito un tercero técnico confiable",
    img: "/assets/obra/solar-comercial-aereo-02-lg.webp",
    items: [
      "Ingeniería de detalle y memorias de cálculo",
      "Legalización RETIE, AGPE y trámite UPME",
      "Interventoría documental, incluso escala utility",
      "Mano de obra de montaje con equipo propio",
    ],
    cta: { label: "Escribir al área técnica", href: `mailto:${contacto.email}?subject=Ingenier%C3%ADa%20subcontratada` },
    dark: true,
  },
];

export function Audiencias() {
  return (
    <section className="bg-neutral-50 px-5 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
      <Container>
        <SectionHeading
          align="center"
          kicker="Dos formas de trabajar con nosotros"
          title="¿Para quién es Dinastel?"
          intro="El mismo equipo técnico atiende al cliente final y a las firmas que subcontratan ingeniería."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {publicos.map((p, i) => (
            <Reveal
              key={p.kicker}
              delay={i * 0.08}
              variant={i === 0 ? "left" : "right"}
              className={`group flex flex-col overflow-hidden rounded-[24px] border transition-shadow duration-300 hover:shadow-[0_24px_50px_-24px_rgba(8,31,45,0.45)] ${
                p.dark ? "border-primary-800 bg-primary-800 text-white" : "border-neutral-200 bg-white text-neutral-900"
              }`}
            >
              <div className="relative h-44 overflow-hidden sm:h-52">
                <img src={p.img} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 ${p.dark ? "bg-gradient-to-t from-primary-800 to-transparent" : "bg-gradient-to-t from-white to-transparent"}`} />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-2 sm:p-8 sm:pt-2">
                <div className={`text-[12px] font-bold uppercase tracking-[0.14em] ${p.dark ? "text-accent-300" : "text-primary-600"}`}>{p.kicker}</div>
                <h3 className="mt-2 text-[1.45rem] font-extrabold leading-tight tracking-tight sm:text-[1.7rem]">{p.title}</h3>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {p.items.map((it) => (
                    <li key={it} className={`flex items-start gap-2.5 text-[15px] leading-snug ${p.dark ? "text-neutral-200" : "text-neutral-700"}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.dark ? "#5fb3da" : "#0d4f73"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  {"to" in p.cta && p.cta.to ? (
                    <Link to={p.cta.to} className="group/btn inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-primary-700">
                      {p.cta.label}
                      <span className="transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <a href={(p.cta as { href: string }).href} className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-primary-800 transition-colors hover:bg-accent-50">
                      {p.cta.label}
                      <span className="transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
