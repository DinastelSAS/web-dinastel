import { Link } from "react-router-dom";
import { heroImages } from "../data/site";
import { Button, ArrowRight } from "../ui/Button";

const proof = [
  { k: "+150", v: "proyectos del equipo" },
  { k: "5.5 MWp", v: "solar instalada" },
  { k: "RETIE · AGPE", v: "legalización incluida" },
];

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28"
      style={{ background: "radial-gradient(ellipse at 28% 12%, #0d4f73 0%, #082f45 52%, #1c1e21 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="animate-ken-burns absolute inset-0 bg-cover bg-center opacity-0"
            style={{ backgroundImage: `url(${src})`, animationDelay: `${-i * 6.75}s` }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(8,31,45,0.62) 0%, rgba(8,31,45,0.74) 55%, rgba(15,23,42,0.9) 100%)" }}
        />
      </div>

      <div className="hero-sweep pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <div className="relative z-[2] flex max-w-[940px] flex-col items-center gap-6 text-center">
        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent-300 sm:text-[13px]">
          Ingeniería eléctrica · Energía solar · Cumplimiento normativo
        </div>
        <h1 className="text-[2.35rem] font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
          La ingeniería que hace<br className="hidden sm:block" /> que su proyecto pase la revisión.
        </h1>
        <p className="max-w-[660px] text-[1.05rem] leading-relaxed text-neutral-200 sm:text-xl">
          Diseñamos, legalizamos y construimos infraestructura eléctrica y solar en Cali y el
          suroccidente — con el rigor documental (RETIE, AGPE, Ley 1715) que exigen las firmas
          integradoras y que protege al cliente final.
        </p>
        <div className="mt-1 flex flex-wrap justify-center gap-4">
          <Button to="/contacto" size="lg">
            Cotizar proyecto <ArrowRight />
          </Button>
          <Button to="/servicios" size="lg" variant="light">
            Ver servicios
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/15 pt-6">
          {proof.map((p) => (
            <div key={p.k} className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-white">{p.k}</span>
              <span className="text-[13px] text-neutral-300">{p.v}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/proyectos"
        className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-1.5 text-neutral-300 transition-colors hover:text-white"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">Ver proyectos</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-chevron" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Link>
    </section>
  );
}
