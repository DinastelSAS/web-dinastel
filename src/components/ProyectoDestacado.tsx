import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { proyectos } from "../data/proyectos";
import { trayectoria } from "../data/site";

// Un solo caso destacado con foto (INTI I y II). Sin lista de proyectos.
const p = proyectos.find((x) => x.slug === "inti-i-ii") ?? proyectos[0];

export function ProyectoDestacado() {
  return (
    <section id="proyecto" className="scroll-mt-24 bg-neutral-50 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <Container>
        <SectionHeading
          kicker="Proyecto de referencia"
          title="Obra real, ejecutada por nuestro equipo."
          intro="Trayectoria verificable del equipo técnico fundador — de la interventoría de escala utility a la ingeniería de detalle."
        />

        <Reveal className="mt-10 grid grid-cols-1 overflow-hidden rounded-[22px] border border-neutral-200 bg-white shadow-card lg:grid-cols-[1.05fr_1fr]">
          <div
            className="min-h-[280px] bg-cover bg-center lg:min-h-[420px]"
            style={{ backgroundImage: `url(${p.img})` }}
            role="img"
            aria-label={p.nombre}
          />
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent-600">Caso destacado · {p.categoria}</div>
            <div className="mt-3 text-[clamp(2.6rem,6vw,3.6rem)] font-extrabold leading-none tracking-tight text-primary-600">
              {p.potencia}
            </div>
            <h3 className="mt-3 text-[22px] font-extrabold text-neutral-900">{p.nombre}</h3>
            <p className="mt-1.5 text-[14px] font-semibold text-neutral-500">{p.alcance} · {p.cliente}</p>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-neutral-600">{p.descripcion}</p>
          </div>
        </Reveal>

        <p className="mt-8 max-w-[720px] text-[13px] leading-relaxed text-neutral-400">{trayectoria.disclaimer}</p>
      </Container>
    </section>
  );
}
