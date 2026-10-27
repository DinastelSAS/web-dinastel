import { Container } from "../ui/Container";
import { Button, ArrowRight } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { whatsappUrl } from "../data/site";

// CTA v2 (referencia cta.gallery): foto real de fondo, titular grande, promesas concretas
// y dos caminos claros (formulario o WhatsApp).
const promesas = ["Respuesta en 24 h hábiles", "Visita técnica en sitio", "Ingeniería y mano de obra por separado"];

export function CtaBanner({
  title = "Hablemos de su próximo proyecto",
  desc = "Cuéntenos qué necesita y le presentamos una propuesta técnica y comercial a la medida.",
  img = "/assets/obra/solar-industrial-aereo-02-lg.webp",
}: {
  title?: string;
  desc?: string;
  img?: string;
}) {
  return (
    <section className="px-4 py-14 sm:px-10 sm:py-16 lg:px-20">
      <Container>
        <Reveal className="group relative isolate overflow-hidden rounded-[28px] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <img src={img} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105" />
          <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(105deg, rgba(5,32,47,0.96) 0%, rgba(8,47,69,0.88) 45%, rgba(13,79,115,0.55) 100%)" }} aria-hidden="true" />

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="max-w-[14ch] text-[2.1rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[3rem] lg:text-[3.6rem]">{title}</h2>
              <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-neutral-200 sm:text-[17px]">{desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {promesas.map((p) => (
                  <li key={p} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12.5px] font-semibold text-white backdrop-blur-sm">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5fb3da" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Button to="/contacto" size="lg" className="w-full !bg-white !text-primary-800 !shadow-none hover:!bg-accent-50 sm:w-auto lg:w-full">
                Cotizar proyecto <ArrowRight />
              </Button>
              <Button href={whatsappUrl()} size="lg" variant="light" className="w-full sm:w-auto lg:w-full">
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
