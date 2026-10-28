import { usePageMeta } from "../ui/usePageMeta";
import { PageHero } from "../ui/PageHero";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CtaBanner } from "../components/CtaBanner";
import { normas, promesaCumplimiento } from "../data/cumplimiento";

export function Cumplimiento() {
  usePageMeta({
    title: "Cumplimiento normativo — RETIE, AGPE, Ley 1715 | DINASTEL",
    description:
      "El proyecto que no le rechaza el operador de red. Diseño y legalización conforme a RETIE, NTC 2050, CREG 174, AGPE, Ley 1715 y la normativa vigente 2026.",
    path: "/cumplimiento",
  });

  return (
    <>
      <PageHero
        kicker="Cumplimiento normativo"
        title={promesaCumplimiento.title}
        intro={promesaCumplimiento.desc}
      />

      <section className="bg-white px-5 py-12 sm:px-10 sm:py-16 lg:px-20">
        <Container>
          <Reveal className="max-w-[680px]">
            <h2 className="text-[1.5rem] font-extrabold tracking-tight text-neutral-900 sm:text-[1.9rem]">
              Dónde falla la competencia informal — y dónde nosotros no.
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-neutral-600">
              La mayoría de instalaciones informales no fallan en el montaje físico, sino en la
              parte documental: sin el soporte normativo correcto, el operador de red no energiza
              la instalación y el cliente pierde tiempo y dinero. Cada marco que aplicamos existe
              para evitar exactamente eso.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {normas.map((n, i) => (
              <Reveal key={n.codigo} delay={(i % 2) * 0.08} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card sm:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="text-[17px] font-extrabold text-primary-700">{n.codigo}</span>
                  <span className="text-[13px] font-semibold text-neutral-500">{n.nombre}</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">{n.que}</p>
                <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-primary-50 p-3.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d4f73" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-[13.5px] font-medium leading-snug text-primary-800">{n.hacemos}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Hagamos que su proyecto pase la revisión"
        desc="Le acompañamos en el diseño, la legalización y la conexión ante el operador de red, de principio a fin."
      />
    </>
  );
}
