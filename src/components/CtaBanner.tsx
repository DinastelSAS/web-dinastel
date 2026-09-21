import { Container } from "../ui/Container";
import { Button, ArrowRight } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { contacto } from "../data/site";

export function CtaBanner({
  title = "Hablemos de su próximo proyecto",
  desc = "Cuéntenos los requerimientos y le presentamos una propuesta técnica y comercial a la medida — con la ingeniería y la mano de obra siempre separadas.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="px-5 py-16 sm:px-10 lg:px-20">
      <Container>
        <Reveal
          className="relative overflow-hidden rounded-[24px] px-7 py-12 sm:px-14 sm:py-16"
        >
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 20% 0%, #0d4f73 0%, #082f45 60%, #05202f 100%)" }}
            aria-hidden="true"
          />
          <div className="relative z-[1] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[560px]">
              <h2 className="text-[1.7rem] font-extrabold leading-tight tracking-tight text-white sm:text-[2.3rem]">{title}</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-neutral-300">{desc}</p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <Button to="/contacto" size="lg">
                Cotizar proyecto <ArrowRight />
              </Button>
              <Button href={`https://wa.me/57${contacto.telefono}`} size="lg" variant="light">
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
