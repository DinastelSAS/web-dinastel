import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { trayectoria } from "../data/site";

function Stat({ value, label, delay, dark = false }: { value: string; label: string; delay: number; dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const decimals = numStr.includes(".") ? 1 : 0;
    const target = parseFloat(numStr);
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col gap-1.5" style={{ transitionDelay: `${delay}s` }}>
      <div className={`whitespace-nowrap text-[1.75rem] font-extrabold tracking-tight sm:text-[2.3rem] lg:text-[1.9rem] xl:text-[2.5rem] ${dark ? "text-white" : "text-primary-700"}`}>{display}</div>
      <div className={`text-[13px] font-medium leading-snug sm:text-sm ${dark ? "text-neutral-200" : "text-neutral-500"}`}>{label}</div>
    </div>
  );
}

// Bento (referencia bentogrids): foto del equipo en obra + 4 cifras en mosaico.
export function Trayectoria() {
  return (
    <section className="bg-white px-5 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(190px,auto))]">
          <Reveal variant="clip" className="relative col-span-2 flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[24px] p-7 sm:p-9 lg:row-span-2">
            <img src="/assets/obra/montaje-cubierta-01-lg.webp" alt="Equipo técnico de DINASTEL montando módulos en cubierta" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,32,47,0.95) 0%, rgba(5,32,47,0.55) 50%, rgba(5,32,47,0.1) 100%)" }} aria-hidden="true" />
            <div className="relative">
              <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-300">Trayectoria del equipo</div>
              <h2 className="text-[1.8rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[2.4rem]">
                Experiencia acreditada, no prometida.
              </h2>
              <p className="mt-3 max-w-[460px] text-[15px] leading-relaxed text-neutral-200 sm:text-[16px]">
                DINASTEL S.A.S. es una empresa joven, pero su equipo técnico no. Estas son las cifras
                reales del trabajo ejecutado antes de constituir la sociedad.
              </p>
            </div>
          </Reveal>

          {trayectoria.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={0.08 * (i + 1)}
              variant="scale"
              className={`flex flex-col justify-between gap-6 rounded-[20px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7 lg:p-6 xl:p-7 ${
                i === 0 ? "bg-primary-600 text-white" : i === 3 ? "bg-primary-800 text-white" : "border border-neutral-200 bg-neutral-50"
              }`}
            >
              <span className={`text-[11px] font-bold uppercase tracking-[0.14em] ${i === 0 || i === 3 ? "text-accent-200" : "text-neutral-400"}`}>0{i + 1}</span>
              <Stat value={s.value} label={s.label} delay={0} dark={i === 0 || i === 3} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 max-w-[720px] text-[13px] leading-relaxed text-neutral-400">{trayectoria.disclaimer}</p>
      </Container>
    </section>
  );
}
