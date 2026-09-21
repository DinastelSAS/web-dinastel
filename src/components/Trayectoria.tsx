import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { trayectoria } from "../data/site";

function Stat({ value, label, delay }: { value: string; label: string; delay: number }) {
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
      <div className="text-[2rem] font-extrabold tracking-tight text-primary-700 sm:text-[2.7rem]">{display}</div>
      <div className="text-sm font-medium leading-snug text-neutral-500">{label}</div>
    </div>
  );
}

export function Trayectoria() {
  return (
    <section className="bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(260px,1fr)_minmax(340px,1.5fr)] lg:gap-16">
        <Reveal>
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-primary-600">Trayectoria del equipo</div>
          <h2 className="text-[1.9rem] font-extrabold leading-[1.1] tracking-tight text-neutral-900 sm:text-[2.6rem]">
            Experiencia acreditada, no prometida.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-neutral-600">
            DINASTEL S.A.S. es una empresa joven, pero su equipo técnico no. Estas son las cifras
            reales del trabajo ejecutado antes de constituir la sociedad.
          </p>
        </Reveal>

        <div>
          <div className="grid grid-cols-2 gap-8">
            {trayectoria.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <Stat value={s.value} label={s.label} delay={i * 0.08} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 border-t border-neutral-200 pt-5 text-[13px] leading-relaxed text-neutral-400">
            {trayectoria.disclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}
