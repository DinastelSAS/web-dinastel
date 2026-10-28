import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { heroImages, heroVideo } from "../data/site";
import { Button, ArrowRight } from "../ui/Button";

const proof = [
  { k: "+150", v: "proyectos del equipo" },
  { k: "5.5 MWp", v: "solar instalada" },
  { k: "RETIE", v: "legalización incluida" },
];

// Cifra que cuenta desde 0 al aparecer (respeta "reducir movimiento").
function Contador({ valor }: { valor: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visto = useInView(ref, { once: true });
  const reducir = useReducedMotion();
  const m = valor.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  useEffect(() => {
    if (!m || !visto || reducir || !ref.current) return;
    const [, pre, num, suf] = m;
    const dec = num.includes(".") ? 1 : 0;
    ref.current.textContent = `${pre}${(0).toFixed(dec)}${suf}`; // aún invisible: la franja entra a los ~0,5 s
    const ctrl = animate(0, parseFloat(num), {
      duration: 1.6,
      delay: 0.45,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${pre}${v.toFixed(dec)}${suf}`;
      },
    });
    return () => ctrl.stop();
  }, [visto, reducir]); // eslint-disable-line react-hooks/exhaustive-deps
  return <span ref={ref}>{valor}</span>;
}

// ¿Conviene reproducir video? No si el usuario pidió menos movimiento o ahorro de datos.
function puedeReproducirVideo() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (conn?.saveData) return false;
  if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return false;
  return true;
}

function FondoVideo({ onFallo }: { onFallo: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const src = window.innerWidth < 768 ? heroVideo.srcMovil : heroVideo.src;
  useEffect(() => {
    // Algunos navegadores móviles bloquean autoplay aunque esté en mute: si falla, dejamos el poster.
    ref.current?.play().catch(() => undefined);
  }, []);
  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={heroVideo.poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onError={onFallo}
    />
  );
}

// Entrada escalonada del contenido (referencia 60fps.design / motionsites): solo opacity + transform.
const entrada = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.12 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FondoFotos() {
  return (
    <>
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="animate-ken-burns absolute inset-0 bg-cover bg-center opacity-0"
          style={{ backgroundImage: `url(${src})`, animationDelay: `${-i * 6.75}s` }}
        />
      ))}
    </>
  );
}

export function Hero() {
  const [usarVideo, setUsarVideo] = useState(false);
  useEffect(() => {
    setUsarVideo(heroVideo.enabled && puedeReproducirVideo());
  }, []);

  // Parallax: el fondo baja más lento que el scroll y el contenido se desvanece al salir.
  const seccion = useRef<HTMLElement>(null);
  const reducir = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: seccion, offset: ["start start", "end start"] });
  const fondoY = useTransform(scrollYProgress, [0, 1], ["0%", reducir ? "0%" : "22%"]);
  const fondoEscala = useTransform(scrollYProgress, [0, 1], [1, reducir ? 1 : 1.08]);
  const contenidoY = useTransform(scrollYProgress, [0, 1], [0, reducir ? 0 : -90]);
  const contenidoOpacidad = useTransform(scrollYProgress, [0, 0.75], [1, reducir ? 1 : 0]);

  return (
    <section
      ref={seccion}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28"
      style={{ background: "radial-gradient(ellipse at 28% 12%, #0d4f73 0%, #082f45 52%, #1c1e21 100%)" }}
    >
      <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ y: fondoY, scale: fondoEscala }}>
        {usarVideo ? <FondoVideo onFallo={() => setUsarVideo(false)} /> : <FondoFotos />}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(8,31,45,0.66) 0%, rgba(8,31,45,0.72) 55%, rgba(15,23,42,0.92) 100%)" }}
        />
      </motion.div>

      {!usarVideo && <div className="hero-sweep pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />}

      {/* Retícula tipo plano técnico, con desplazamiento lento */}
      <div className="hero-grid pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <motion.div style={{ y: contenidoY, opacity: contenidoOpacidad }} className="relative z-[2] flex w-full max-w-[980px] flex-col items-center gap-5 text-center sm:gap-6">
        <motion.div custom={0} variants={entrada} initial="hidden" animate="visible" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-accent-200 backdrop-blur-sm sm:text-[12px] sm:tracking-[0.16em]">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-300 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-300" />
          </span>
          Eléctrica · Solar · Movilidad eléctrica
        </motion.div>
        <motion.h1 custom={1} variants={entrada} initial="hidden" animate="visible" className="text-[2.3rem] font-extrabold leading-[1.04] tracking-tight text-white sm:text-[3.6rem] md:text-[4rem] lg:text-[4.6rem]">
          La ingeniería que hace<br className="hidden md:block" /> que su proyecto{" "}
          <span className="bg-gradient-to-r from-accent-200 via-white to-accent-300 bg-clip-text text-transparent">pase la revisión.</span>
        </motion.h1>
        <motion.p custom={2} variants={entrada} initial="hidden" animate="visible" className="max-w-[660px] text-[1.02rem] leading-relaxed text-neutral-200 sm:text-xl">
          Diseñamos, legalizamos y construimos infraestructura eléctrica y solar en Cali y el
          suroccidente — con el rigor documental (RETIE, AGPE, Ley 1715) que exigen las firmas
          integradoras y que protege al cliente final.
        </motion.p>
        <motion.div custom={3} variants={entrada} initial="hidden" animate="visible" className="mt-1 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button to="/contacto" size="lg">
            Cotizar proyecto <ArrowRight />
          </Button>
          <Button to="/proyectos" size="lg" variant="light">
            Ver obra realizada
          </Button>
        </motion.div>

        <motion.div custom={4} variants={entrada} initial="hidden" animate="visible" className="mt-4 grid w-full max-w-[640px] grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/[0.06] py-3.5 backdrop-blur-md sm:mt-6 sm:py-4">
          {proof.map((p) => (
            <div key={p.k} className="flex flex-col items-center gap-0.5 px-2">
              <span className="text-[15px] font-extrabold text-white sm:text-lg"><Contador valor={p.k} /></span>
              <span className="text-[11px] leading-tight text-neutral-300 sm:text-[13px]">{p.v}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <Link
        to="/#lineas"
        className="absolute bottom-6 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-1.5 text-neutral-300 transition-colors hover:text-white lg:flex"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">Desplazar</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-chevron" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Link>
    </section>
  );
}
