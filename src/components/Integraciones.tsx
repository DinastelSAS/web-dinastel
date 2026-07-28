import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { flujo } from "../data/site";
import { slideUp, transition } from "../foundations/motion";

const icons = [
  // Diagnóstico
  <svg key="a" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  // Diseño integrado
  <svg key="b" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
  // Ejecución
  <svg key="c" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2-2z" /></svg>,
  // Operación y soporte
  <svg key="d" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
];

export function Integraciones() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [active, setActive] = useState(-1);
  const [green, setGreen] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let timer: number;
    const total = flujo.length;
    const step = (i: number) => {
      setActive(i);
      timer = window.setTimeout(() => {
        setGreen(i + 1);
        setActive(-1);
        timer = window.setTimeout(() => {
          if (i + 1 < total) step(i + 1);
          else timer = window.setTimeout(() => { setGreen(0); step(0); }, 3200);
        }, 500);
      }, 1800);
    };
    step(0);
    return () => window.clearTimeout(timer);
  }, [inView]);

  const currentStep = active >= 0 ? active : Math.max(0, Math.min(green - 1, flujo.length - 1));
  const isGreenState = active === -1 && green > 0;

  return (
    <section id="integraciones" ref={ref} className="relative overflow-hidden bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(300px,1fr)_minmax(200px,260px)]">
        <div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={slideUp} transition={transition.base} className="max-w-[640px]"
          >
            <div className="mb-3.5 text-[13px] font-bold tracking-[0.14em] text-accent-600">INTEGRACIONES</div>
            <h2 className="mb-4 text-[1.9rem] font-extrabold tracking-tight text-neutral-900 sm:text-[2.75rem]">
              Todo integrado, cero fricción.
            </h2>
            <p className="text-[17px] leading-relaxed text-neutral-600">
              Nuestros equipos de eléctrica, solar y consultoría operan como uno solo, desde el
              diagnóstico hasta la puesta en operación. Trabajamos con fabricantes y proveedores
              certificados para respaldar cada proyecto bajo estándares internacionales.
            </p>
          </motion.div>

          {/* Mobile: timeline vertical */}
          <div className="mt-8 flex flex-col sm:hidden">
            {flujo.map((label, i) => {
              const isGreen = i < green;
              const isActive = i === active;
              const isLast = i === flujo.length - 1;
              const dotColor = isGreen ? "#16a34a" : isActive ? "#2563eb" : "#93c5fd";
              const dotGlow = isActive
                ? "0 0 16px 4px rgba(37,99,235,0.55), 0 0 0 7px rgba(37,99,235,0.22)"
                : isGreen
                ? "0 0 16px 4px rgba(22,163,74,0.5), 0 0 0 7px rgba(22,163,74,0.22)"
                : "none";
              return (
                <div key={label} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="h-3.5 w-3.5 flex-shrink-0 rounded-full transition-all duration-700 ease-out"
                      style={{ background: dotColor, boxShadow: dotGlow }}
                    />
                    {!isLast && (
                      <div
                        className="min-h-[28px] w-[1.5px] flex-1 transition-colors duration-700 ease-out"
                        style={{ background: i < green ? "#16a34a" : "#bfdbfe" }}
                      />
                    )}
                  </div>
                  <div
                    className="pb-7 text-[15px] transition-colors duration-700 ease-out"
                    style={{ fontWeight: isGreen || isActive ? 700 : 600, color: isGreen ? "#16a34a" : "#0f172a" }}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop / tablet: flujo horizontal */}
          <div className="mt-10 hidden items-center gap-0 sm:flex sm:flex-wrap">
            {flujo.map((label, i) => {
              const isGreen = i < green;
              const isActive = i === active;
              const dotColor = isGreen ? "#16a34a" : isActive ? "#2563eb" : "#93c5fd";
              const dotGlow = isActive
                ? "0 0 16px 4px rgba(37,99,235,0.55), 0 0 0 7px rgba(37,99,235,0.22)"
                : isGreen
                ? "0 0 16px 4px rgba(22,163,74,0.5), 0 0 0 7px rgba(22,163,74,0.22)"
                : "none";
              return (
                <div key={label} className="flex items-center">
                  <div className="flex min-w-[140px] flex-col items-center gap-3.5">
                    <div
                      className="h-3.5 w-3.5 rounded-full transition-all duration-700 ease-out"
                      style={{ background: dotColor, boxShadow: dotGlow }}
                    />
                    <div
                      className="text-center text-[15px] transition-colors duration-700 ease-out"
                      style={{ fontWeight: isGreen || isActive ? 700 : 600, color: isGreen ? "#16a34a" : "#0f172a" }}
                    >
                      {label}
                    </div>
                  </div>
                  {i < flujo.length - 1 && (
                    <div
                      className="mx-2 h-[1.5px] w-6 transition-colors duration-700 ease-out sm:w-16"
                      style={{ background: i < green ? "#16a34a" : "#bfdbfe" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="sticky top-[120px] flex min-h-[220px] flex-col items-center justify-center rounded-[20px] border border-neutral-200 bg-white p-10 shadow-card transition-colors duration-700 ease-out"
          style={{ color: isGreenState ? "#16a34a" : "#2563eb" }}
        >
          {icons[currentStep]}
          <div className="mt-4 text-center text-[13px] font-bold tracking-wide text-neutral-500">
            {flujo[currentStep]}
          </div>
        </div>
      </div>
    </section>
  );
}
