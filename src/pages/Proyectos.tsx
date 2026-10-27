import { usePageMeta } from "../ui/usePageMeta";
import { PageHero } from "../ui/PageHero";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CtaBanner } from "../components/CtaBanner";
import { proyectos } from "../data/proyectos";
import { trayectoria } from "../data/site";
import { GaleriaObra } from "../components/GaleriaObra";

export function Proyectos() {
  usePageMeta({
    title: "Proyectos — Interventoría, diseño e instalación solar | DINASTEL",
    description:
      "Proyectos de referencia ejecutados por el equipo técnico: interventoría de parques solares (INTI I y II, 9.9 MWp c/u), ingeniería de detalle, mantenimiento y galería de obra con fotos reales de campo.",
    path: "/proyectos",
  });

  return (
    <>
      <PageHero
        kicker="Proyectos de referencia"
        title="Obra real, ejecutada por nuestro equipo."
        intro="Una muestra del trabajo del equipo técnico fundador — desde interventoría de escala utility hasta ingeniería de detalle y mantenimiento recurrente."
      />

      <section className="bg-white px-5 py-12 sm:px-10 sm:py-16 lg:px-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proyectos.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08} as="article" className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card">
                <div className="relative h-[190px] w-full overflow-hidden">
                  <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} aria-hidden="true" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-700">
                    {p.categoria}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[18px] font-extrabold leading-tight text-neutral-900">{p.nombre}</h3>
                    {p.potencia && <span className="flex-shrink-0 text-[14px] font-bold text-primary-600">{p.potencia}</span>}
                  </div>
                  <p className="text-[13px] font-medium text-neutral-500">{p.alcance} · {p.cliente} · {p.ubicacion}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-neutral-600">{p.descripcion}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-[720px] text-[13px] leading-relaxed text-neutral-400">
            {trayectoria.disclaimer} No se presentan como historial corporativo de la sociedad.
          </p>
        </Container>
      </section>

      <GaleriaObra />

      <CtaBanner title="¿Tiene un proyecto similar?" desc="Cuéntenos el alcance y le presentamos una propuesta técnica y comercial a la medida." />
    </>
  );
}
