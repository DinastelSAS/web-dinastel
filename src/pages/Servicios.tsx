import { usePageMeta } from "../ui/usePageMeta";
import { PageHero } from "../ui/PageHero";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CtaBanner } from "../components/CtaBanner";
import { Audiencias } from "../components/Audiencias";
import { Proceso } from "../components/Proceso";
import { lineas, transversales, reglaSeparacion } from "../data/servicios";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d4f73" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function Servicios() {
  usePageMeta({
    title: "Servicios — Ingeniería eléctrica, solar y automatización | DINASTEL",
    description:
      "Ingeniería eléctrica BT/MT, sistemas solares llave en mano con baterías, cargadores para vehículo eléctrico, telecomunicaciones, automatización y obras civiles. Diseño, legalización RETIE/AGPE, instalación y mantenimiento.",
    path: "/servicios",
  });

  return (
    <>
      <PageHero
        kicker="Servicios"
        title="Cinco líneas de negocio, un mismo equipo técnico."
        intro="Ingeniería para firmas integradoras B2B y soluciones llave en mano para el cliente final, con operación y mantenimiento transversal a todas las líneas."
      />

      <Audiencias />

      {/* Regla de negocio */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-5 py-8 sm:px-10 lg:px-20">
        <Container>
          <Reveal className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex-shrink-0 whitespace-nowrap rounded-full bg-primary-600 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white">Regla de negocio</div>
            <p className="text-[15px] leading-relaxed text-neutral-700">
              <span className="font-bold text-neutral-900">{reglaSeparacion.title}.</span> {reglaSeparacion.desc}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Líneas */}
      <section className="bg-white px-5 py-12 sm:px-10 sm:py-16 lg:px-20">
        <Container className="flex flex-col gap-16 sm:gap-24">
          {lineas.map((linea, i) => (
            <Reveal key={linea.slug} as="article" id={linea.slug} className="scroll-mt-28">
              <div className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[20px]">
                  <img src={linea.img} alt={linea.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent-600">{linea.tag}</span>
                    <span className="text-[11px] font-semibold text-neutral-400">· {linea.codigo}</span>
                  </div>
                  <h2 className="text-[1.6rem] font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-[2rem]">{linea.title}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-neutral-600">{linea.descripcion}</p>

                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <div className="mb-2 text-[12px] font-bold uppercase tracking-wide text-neutral-500">Incluye</div>
                      <ul className="flex flex-col gap-2">
                        {linea.incluye.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-[14px] leading-snug text-neutral-700">
                            <Check /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 text-[12px] font-bold uppercase tracking-wide text-neutral-500">Entregables</div>
                      <ul className="flex flex-col gap-2">
                        {linea.entregables.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-[14px] leading-snug text-neutral-700">
                            <Check /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {linea.publico.map((p) => (
                      <span key={p} className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[12px] font-semibold text-primary-700">
                        {p === "B2B" ? "Firmas integradoras" : "Cliente final"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Transversales */}
      <section className="bg-neutral-50 px-5 py-16 sm:px-10 sm:py-20 lg:px-20">
        <Container>
          <Reveal>
            <h2 className="text-[1.6rem] font-extrabold tracking-tight text-neutral-900 sm:text-[2rem]">Servicios transversales</h2>
            <p className="mt-3 max-w-[560px] text-[16px] leading-relaxed text-neutral-600">Complementan cualquier línea para sostener el rendimiento y sacar el máximo del proyecto.</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {transversales.map((t, i) => (
              <Reveal key={t.codigo} delay={i * 0.08} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
                <div className="mb-2 text-[12px] font-bold uppercase tracking-wide text-accent-600">{t.codigo}</div>
                <h3 className="text-[17px] font-extrabold text-neutral-900">{t.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">{t.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Proceso />

      <CtaBanner />
    </>
  );
}
