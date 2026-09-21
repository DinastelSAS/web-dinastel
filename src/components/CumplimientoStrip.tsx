import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button, ArrowRight } from "../ui/Button";
import { normas, promesaCumplimiento } from "../data/cumplimiento";

export function CumplimientoStrip() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #082f45 0%, #0d4f73 55%, #0a3e5b 100%)" }} aria-hidden="true" />
      <Container className="relative z-[1] grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-accent-300">El diferenciador</div>
          <h2 className="text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[2.5rem]">
            {promesaCumplimiento.title}
          </h2>
          <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-neutral-200">
            {promesaCumplimiento.desc}
          </p>
          <div className="mt-7">
            <Button to="/cumplimiento" variant="light" size="lg">
              Ver cómo garantizamos el cumplimiento <ArrowRight />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {normas.slice(0, 6).map((n) => (
              <div key={n.codigo} className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-[15px] font-extrabold text-white">{n.codigo}</div>
                <div className="mt-1 text-[12px] leading-snug text-neutral-300">{n.nombre}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
