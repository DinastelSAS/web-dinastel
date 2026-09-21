import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { lineas, transversales } from "../data/servicios";

export function ServiciosResumen() {
  return (
    <section id="lineas" className="scroll-mt-24 bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <Container>
        <SectionHeading
          kicker="Líneas de negocio"
          title="Cuatro líneas, un mismo equipo técnico."
          intro="Ingeniería eléctrica y de redes para proyectos B2B, y sistemas solares llave en mano para hogares y empresas — con operación y mantenimiento transversal a ambas."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {lineas.map((linea, i) => (
            <Reveal
              key={linea.slug}
              delay={i * 0.08}
              as="article"
              className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-[20px] sm:min-h-[440px]"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]" style={{ backgroundImage: `url(${linea.img})` }} aria-hidden="true" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,31,45,0.95) 0%, rgba(8,31,45,0.6) 45%, rgba(8,31,45,0.08) 78%)" }} aria-hidden="true" />
              <div className="relative z-[1] flex flex-col gap-3 p-7">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-accent-300">{linea.tag}</div>
                <h3 className="text-[22px] font-extrabold leading-tight text-white">{linea.title}</h3>
                <p className="text-[14px] leading-snug text-neutral-200">{linea.summary}</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {linea.publico.map((pub) => (
                    <span key={pub} className="rounded-full border border-white/25 px-2.5 py-1 text-[11px] font-semibold text-white/80">
                      {pub === "B2B" ? "Firmas integradoras" : "Cliente final"}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {transversales.map((t, i) => (
            <Reveal key={t.codigo} delay={i * 0.06} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="mb-2 text-[12px] font-bold uppercase tracking-wide text-accent-600">{t.codigo}</div>
              <h3 className="text-[16px] font-extrabold text-neutral-900">{t.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">{t.desc}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
