import { heroImages } from "../data/site";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-14 pt-24"
      style={{ background: "radial-gradient(ellipse at 30% 15%, #11628d 0%, #0b3c56 55%, #2E3238 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="animate-ken-burns absolute inset-0 bg-cover bg-center opacity-0"
            style={{ backgroundImage: `url(${src})`, animationDelay: `${-i * 9}s` }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.72) 55%, rgba(15,23,42,0.88) 100%)" }}
        />
      </div>

      <div className="relative z-[2] flex max-w-[920px] flex-col items-center gap-5 text-center">
        <div className="text-[13px] font-bold tracking-[0.16em] text-neutral-200">
          INGENIERÍA ELÉCTRICA · ENERGÍA SOLAR · CONSULTORÍA
        </div>
        <h1 className="text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.75rem]">
          La energía detrás del crecimiento corporativo.
        </h1>
        <p className="max-w-[640px] text-[1.05rem] leading-relaxed text-neutral-300 sm:text-xl">
          Dinastel S.A.S. diseña, construye y opera infraestructura eléctrica y solar de alta
          exigencia, con la precisión y el rigor técnico que exigen las operaciones críticas.
        </p>
        <div className="mt-1 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToId("contacto")}
            className="rounded-full bg-primary-600 px-[30px] py-[15px] text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-primary-700"
          >
            Cotizar sin fronteras
          </button>
          <button
            onClick={() => scrollToId("servicios")}
            className="rounded-full border-[1.5px] border-white/40 bg-transparent px-[30px] py-[15px] text-[15px] font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10"
          >
            Ver servicios
          </button>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-1.5 text-neutral-200">
        <div className="text-[11px] font-semibold tracking-[0.14em]">DESPLÁZATE</div>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" className="animate-chevron"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
