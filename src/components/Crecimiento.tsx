import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { aliados, stats } from "../data/site";
import { slideUp, transition } from "../foundations/motion";

function Stat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^(\D*)(\d+)(\D*)$/);
    if (!match) { setDisplay(value); return; }
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);
    const start = performance.now();
    const dur = 1400;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
      variants={slideUp} transition={{ ...transition.base, delay }}
      className="flex flex-col gap-1.5"
    >
      <div className="text-[2rem] font-extrabold tracking-tight text-primary-700 sm:text-[2.9rem]">{display}</div>
      <div className="text-sm font-medium text-neutral-500">{label}</div>
    </motion.div>
  );
}

export function Crecimiento() {
  return (
    <section id="crecimiento" className="relative overflow-hidden bg-white px-5 py-28 sm:px-10 lg:px-20">
      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(260px,1fr)_minmax(320px,1.4fr)]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          variants={slideUp} transition={transition.base}
        >
          <div className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-primary-600">CRECIMIENTO CORPORATIVO</div>
          <h2 className="mb-4 text-[1.9rem] font-extrabold tracking-tight text-neutral-900 sm:text-[2.75rem]">
            Escalamos con nuestros clientes.
          </h2>
          <p className="text-[17px] leading-relaxed text-neutral-600">
            Cada proyecto ejecutado fortalece nuestra capacidad técnica y operativa. Así medimos
            un crecimiento sostenido y verificable.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          {stats.map((s, i) => (
            <Stat key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={slideUp} transition={{ ...transition.base, delay: 0.25 }}
          className="col-span-full mx-auto mt-8 w-full max-w-[1180px] border-t border-neutral-200 pt-12"
        >
          <div className="mb-8 text-center text-[13px] font-semibold tracking-[0.1em] text-neutral-500">
            ALIADOS ESTRATÉGICOS
          </div>
          <div
            className="overflow-hidden"
            style={{ maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)" }}
          >
            <div className="animate-marquee flex w-max items-center gap-4">
              {[...aliados, ...aliados].map((name, i) => (
                <div key={name + i} className="flex-shrink-0 whitespace-nowrap rounded-[10px] border border-neutral-200 bg-neutral-50 px-[22px] py-3.5 text-sm font-bold tracking-wide text-neutral-700">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
