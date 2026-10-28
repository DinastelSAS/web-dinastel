import { usePageMeta } from "../ui/usePageMeta";
import { PageHero } from "../ui/PageHero";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ContactoForm } from "../components/ContactoForm";
import { Link } from "react-router-dom";
import { contacto, whatsappUrl } from "../data/site";

function Row({ icon, label, value, href }: { icon: JSX.Element; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-3.5">
      <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">{icon}</span>
      <div>
        <div className="text-[12px] font-bold uppercase tracking-wide text-neutral-400">{label}</div>
        <div className="text-[15px] font-medium text-neutral-800">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="transition-opacity hover:opacity-75">
      {content}
    </a>
  ) : (
    content
  );
}

export function Contacto() {
  usePageMeta({
    title: "Contacto — Solicite su cotización | DINASTEL S.A.S.",
    description:
      "Cuéntenos su proyecto eléctrico o solar y reciba una propuesta técnica y comercial a la medida. Cali y el suroccidente colombiano.",
    path: "/contacto",
  });

  return (
    <>
      <PageHero
        kicker="Contacto"
        title="Hablemos de su próximo proyecto."
        intro="Cuéntenos los requerimientos y le presentamos una propuesta técnica y comercial a la medida. Si es un sistema solar, su factura de energía acelera el estudio."
      />

      <section className="bg-white px-5 py-12 sm:px-10 sm:py-16 lg:px-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal className="flex flex-col gap-7">
            <Row
              label="Email"
              value={contacto.email}
              href={`mailto:${contacto.email}`}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>}
            />
            <Row
              label="WhatsApp"
              value={contacto.telefonoDisplay}
              href={whatsappUrl()}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-4.95A9 9 0 1 1 8.5 19.5Z" /></svg>}
            />
            <Row
              label="Ubicación"
              value={contacto.direccion}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>}
            />
            <Row
              label="Horario"
              value={contacto.horario}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>}
            />
            <div className="mt-1 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-[14px] leading-relaxed text-neutral-600">
                ¿Es una firma integradora? Escríbanos directamente a{" "}
                <a href={`mailto:${contacto.email}`} className="font-semibold text-primary-700">{contacto.email}</a>{" "}
                para acuerdos de ingeniería subcontratada e interventoría.
              </p>
            </div>
            <Link to="/preguntas-frecuentes" className="group inline-flex items-center gap-2 text-[14px] font-semibold text-primary-700">
              ¿Tiene dudas? Vea las preguntas frecuentes
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactoForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
