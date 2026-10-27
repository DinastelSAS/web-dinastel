import { usePageMeta } from "../ui/usePageMeta";
import { Button, ArrowRight } from "../ui/Button";

// Antes no había ruta comodín: una URL inexistente mostraba header + footer y una página vacía.
export function NotFound() {
  usePageMeta({
    title: "Página no encontrada | DINASTEL",
    description: "La página que busca no existe o cambió de dirección.",
    path: "/404",
  });
  return (
    <section
      className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-6 pb-16 pt-32"
      style={{ background: "radial-gradient(ellipse at 25% 10%, #0d4f73 0%, #082f45 60%, #05202f 100%)" }}
    >
      <div className="relative z-[1] max-w-[560px] text-center">
        <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-accent-300">Error 404</div>
        <h1 className="mt-4 text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
          Este circuito quedó abierto.
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-neutral-300">
          La página que busca no existe o cambió de dirección. Volvamos a cerrar el circuito.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">Ir al inicio <ArrowRight /></Button>
          <Button to="/servicios" size="lg" variant="light">Ver servicios</Button>
        </div>
      </div>
    </section>
  );
}
