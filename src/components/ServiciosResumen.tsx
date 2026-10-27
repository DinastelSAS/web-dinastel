import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { lineas } from "../data/servicios";
import { ArrowRight } from "../ui/Button";

export function ServiciosResumen() {
  return (
    <section id="lineas" className="scroll-mt-24 bg-white px-5 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
      <Container>
        <SectionHeading
          kicker="Líneas de negocio"
          title="Cinco líneas, un mismo equipo técnico."
          intro="Del diseño a la legalización y el mantenimiento, para hogares, empresas y firmas integradoras."
        />

        {/* Celular: carrusel deslizable (acorta la página). Tablet: 2 columnas. PC: bento 2 + 3. */}
        <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6 [&::-webkit-scrollbar]:hidden">
          {lineas.map((linea, i) => (
            <Reveal
              key={linea.slug}
              delay={i * 0.08}
              variant="scale"
              as="article"
              className={`group relative flex min-h-[300px] w-[82%] flex-shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[20px] sm:w-auto ${
                i < 2 ? "sm:min-h-[340px] lg:col-span-3" : "sm:min-h-[300px] lg:col-span-2"
              } ${i === lineas.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <Link to={`/servicios#${linea.slug}`} className="absolute inset-0 z-[2]" aria-label={`Ver detalle: ${linea.title}`} />
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]" style={{ backgroundImage: `url(${linea.img})` }} aria-hidden="true" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,31,45,0.95) 0%, rgba(8,31,45,0.6) 45%, rgba(8,31,45,0.08) 78%)" }} aria-hidden="true" />
              <div className="relative z-[1] flex flex-col gap-3 p-7">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-accent-300">{linea.tag}</div>
                <h3 className="text-[22px] font-extrabold leading-tight text-white">{linea.title}</h3>
                <p className="text-[14px] leading-snug text-neutral-200">{linea.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <Link to="/servicios" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-primary-700 hover:text-primary-800">
            Ver alcance, entregables y cómo trabajamos <ArrowRight />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
