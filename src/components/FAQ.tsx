import { useEffect } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Accordion } from "../ui/Accordion";
import { Button } from "../ui/Button";
import { faqGrupos } from "../data/faq";
import { contacto } from "../data/site";

// Marcado FAQPage (schema.org) para SEO — se inyecta y se limpia con el componente.
function useFaqJsonLd() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqGrupos.flatMap((g) =>
        g.items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      ),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.getElementById("faq-jsonld")?.remove();
    };
  }, []);
}

export function FAQ() {
  useFaqJsonLd();
  return (
    <section id="faq" className="bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(280px,1fr)_minmax(420px,1.6fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-primary-600">Preguntas frecuentes</div>
            <h2 className="text-[1.9rem] font-extrabold leading-[1.1] tracking-tight text-neutral-900 sm:text-[2.4rem]">
              Lo que más nos preguntan sobre cada línea.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-neutral-600">
              Reunimos las dudas que la gente hace habitualmente sobre solar, ingeniería eléctrica
              y legalización. ¿Su caso es más específico? Cuéntenoslo y le respondemos con datos.
            </p>
            <div className="mt-6">
              <Button href={`https://wa.me/57${contacto.telefono}`} variant="outline">
                Preguntar por WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10">
          {faqGrupos.map((grupo, i) => (
            <Reveal key={grupo.categoria} delay={i * 0.05}>
              <div className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-accent-600">{grupo.categoria}</div>
              <Accordion items={grupo.items} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
