import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Lightbox } from "./Lightbox";
import { categoriasObra, fotoSm, obra, type CategoriaObra } from "../data/obra";

// Galería filtrable por categoría, con visor a pantalla completa.
export function GaleriaObra() {
  const [filtro, setFiltro] = useState<CategoriaObra | "Todas">("Todas");
  const [abierta, setAbierta] = useState<number | null>(null);
  const fotos = useMemo(() => (filtro === "Todas" ? obra : obra.filter((f) => f.categoria === filtro)), [filtro]);
  const disponibles = categoriasObra.filter((c) => obra.some((f) => f.categoria === c));

  const chip = (activo: boolean) =>
    `whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
      activo ? "border-primary-600 bg-primary-600 text-white" : "border-neutral-300 bg-white text-neutral-700 hover:border-primary-400 hover:text-primary-700"
    }`;

  return (
    <section id="galeria" className="scroll-mt-24 bg-neutral-50 px-5 py-12 sm:px-10 sm:py-16 lg:px-20">
      <Container>
        <SectionHeading
          kicker="Galería de obra"
          title="Así se ve el trabajo en campo."
          intro="Fotos reales de instalaciones, montajes y mantenimientos recientes. Toque cualquier imagen para verla completa."
        />

        <div className="-mx-5 mt-8 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            <button className={chip(filtro === "Todas")} onClick={() => setFiltro("Todas")}>
              Todas <span className="opacity-60">· {obra.length}</span>
            </button>
            {disponibles.map((c) => (
              <button key={c} className={chip(filtro === c)} onClick={() => setFiltro(c)}>
                {c} <span className="opacity-60">· {obra.filter((f) => f.categoria === c).length}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Al cambiar de filtro, la galería se recompone con un fundido escalonado. */}
        <motion.div
          key={filtro}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4"
        >
          {fotos.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setAbierta(i)}
              className="obra-item group relative mb-3 block w-full overflow-hidden rounded-xl bg-neutral-200 sm:mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              style={{ breakInside: "avoid", animationDelay: `${Math.min(i, 12) * 45}ms` }}
              aria-label={`Ver foto: ${f.titulo}`}
            >
              <img
                src={fotoSm(f.id)}
                alt={f.titulo}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                  f.orientacion === "v" ? "aspect-[3/4]" : f.orientacion === "c" ? "aspect-square" : "aspect-[4/3]"
                }`}
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-8 text-left text-[12px] font-semibold leading-snug text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                {f.titulo}
              </span>
            </button>
          ))}
        </motion.div>
      </Container>

      {abierta !== null && (
        <Lightbox fotos={fotos} index={abierta} onClose={() => setAbierta(null)} onChange={setAbierta} />
      )}
    </section>
  );
}
