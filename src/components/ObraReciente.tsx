import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight } from "../ui/Button";
import { Lightbox } from "./Lightbox";
import { fotoLg, fotoSm, obraDestacada } from "../data/obra";

// Bento de obra reciente en la Home: 1 foto grande + 4 medianas.
const layout = [
  "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1 lg:hidden", // en escritorio el bento se llena con 4 fotos
];

export function ObraReciente() {
  const [abierta, setAbierta] = useState<number | null>(null);
  return (
    <section className="bg-white px-5 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            kicker="Obra reciente"
            title="Fotos de campo, no de catálogo."
            intro="Sistemas solares residenciales e industriales, cargadores para vehículo eléctrico, baterías y mantenimiento — ejecutados por nuestro equipo."
          />
          <Reveal>
            <Link to="/proyectos#galeria" className="group inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-primary-700 hover:text-primary-800">
              Ver galería completa <ArrowRight />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 lg:auto-rows-[210px] lg:grid-cols-4">
          {obraDestacada.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.08} variant="clip" className={`${layout[i]} overflow-hidden rounded-2xl`}>
              <button
                onClick={() => setAbierta(i)}
                className="group relative h-full w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label={`Ver foto: ${f.titulo}`}
              >
                <img
                  src={i === 0 ? fotoLg(f.id) : fotoSm(f.id)}
                  alt={f.titulo}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="pointer-events-none absolute bottom-0 left-0 p-3 text-left sm:p-4">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-accent-300 sm:text-[11px]">{f.categoria}</span>
                  <span className="mt-0.5 hidden text-[13px] font-semibold leading-snug text-white sm:block">{f.titulo}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>
      {abierta !== null && (
        <Lightbox fotos={obraDestacada} index={abierta} onClose={() => setAbierta(null)} onChange={setAbierta} />
      )}
    </section>
  );
}
